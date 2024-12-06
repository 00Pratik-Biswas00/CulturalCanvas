import React, { useEffect, useRef, useState } from "react";
import VanillaTilt from "vanilla-tilt";
import { CiSearch, CiFilter } from "react-icons/ci";
import { use } from "i18next";
import MyButton4 from "../../components/Buttons/MyButton4";
import MyButton2 from "../../components/Buttons/MyButton2";
import FilterBlogsVlogs from "../../components/Filters/FilterBlogsVlogs";

import { getInitials } from "../../utils/util";
import { useNavigate } from "react-router-dom";

// vanilla-tilt
function Tilt(props) {
  const { options, ...rest } = props;
  const tilt = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tilt.current, options);
  }, [options]);

  return <div ref={tilt} {...rest} />;
}

const BlogsVlogs = ({ blogsVlogs, loading, user, handleDelete }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [BlogsVlogsModalOpen, setBlogsVlogsModalOpen] = useState(false);
  const [selectedContentType, setSelectedContentType] = useState("");
  const navigate = useNavigate();
  const handleApplyFilters = () => {
    setBlogsVlogsModalOpen(false);
  };

  const handleReverseFilters = () => {
    setSelectedContentType("");
    setBlogsVlogsModalOpen(false);
  };

  const handleResetFilters = () => {
    setSelectedContentType("");
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };
  return (
    <section
      className={`bg-background1 dark:bg-dark_background1 text-primary_text dark:text-dark_primary_text py-4  ${
        user?.role === "admin" ? "px-4" : "px-16"
      } duration-300 min-h-screen`}
    >
      {user?.role === "user" ? (
        <div className="flex items-center tracking-wide justify-center pb-4 text-[4rem] font-extrabold font-gallient">
          (◔◡◔) India: Through the Eyes of Creators 📸
        </div>
      ) : (
        ""
      )}

      <div className="flex flex-col sm:flex-row justify-between w-full items-center sm:items-center">
        {user?.role === "user" ? (
          <MyButton4
            onClick={() => {
              navigate(`/blogs-vlogs/upload-blog-vlog`);
            }}
            classDesign="bg-highlight_dark before:bg-highlight text-dark_primary_text transition-transform hover:scale-105 duration-1000 transform-cpu"
            buttonName="Upload Your Blog📝 / Vlog🎬"
          />
        ) : (
          ""
        )}

        {user?.role === "admin" ? (
          <h1 className="text-4xl font-semibold text-center tracking-tighter font-playfair">
            Manage Others' Contents
          </h1>
        ) : (
          ""
        )}

        <div className="flex items-center justify-center gap-x-5">
          <MyButton2
            classDesign="text-highlight_dark hover:text-dark_primary_text dark:text-dark_primary_text"
            buttonName1={<CiFilter className="cursor-pointer sm:w-8 sm:h-8" />}
            buttonName2="Filter"
            buttonLink={() => setBlogsVlogsModalOpen(true)}
          />

          <div className="relative flex items-center cursor-pointer pl-2 py-2 border border-highlight_dark text-highlight_dark dark:text-dark_primary_text font-searchBars text-xl tracking-wider hover:text-dark_primary_text duration-1000 rounded-3xl group hollowBorder">
            <CiSearch className="w-8 h-8" />
            <input
              type="text"
              placeholder="Search for Blogs and Vlogs..."
              className="bg-transparent outline-none border-none w-0 pl-2 transition-all duration-700 group-hover:w-[400px] placeholder:text-dark_primary_text placeholder:font-searchBars"
              value={searchQuery}
              onChange={handleSearch}
            />
          </div>
        </div>
      </div>
      {loading ? (
        <div className="flex justify-center items-center h-full w-full">
          <div className="loader"></div>
        </div>
      ) : (
        <div className="gallery mt-5 gap-7">
          {blogsVlogs.map((content, i) => (
            <Tilt
              key={i}
              className="relative w-full mb-7 h-auto rounded-2xl overflow-hidden shadow-lg blogCards"
            >
              <img
                src={content.image?.url || "/default-image.jpg"}
                alt={content.title || "Blog Image"}
                className="w-full h-full rounded-2xl object-cover"
              />
              <div className="text-dark_primary_text flex flex-col items-center justify-end gap-3 overflow-hidden left-0 bottom-0 absolute h-full w-full rounded-2xl p-7 blogCardsContents">
                <h3 className="text-center font-bold text-3xl">
                  {content.title}
                </h3>
                <button
                  onClick={() => {
                    const path =
                      user?.role === "admin"
                        ? content.verified
                          ? `/blogs-vlogs/heritage/${content.id}`
                          : `/blogs-vlogs/verify/${content.id}`
                        : `/blogs-vlogs/${content.id}`;
                    navigate(path);
                  }}
                  className="bg-background2 hover:bg-lime-200 duration-500 text-primary_text px-5 py-2 text-base rounded-3xl mb-5 font-open_sans"
                >
                  {user?.role === "admin"
                    ? content.verified
                      ? "Check"
                      : "Verify"
                    : "Read More"}
                </button>

                <div className="absolute bottom-5 right-5 italic text-sm tracking-wider font-playfair">
                  {content.contentType}{" "}
                  {content.contentType === "Blog" ? "📝" : "🎬"}
                </div>
                <div className="absolute flex gap-2 items-center justify-center bottom-2 left-5 italic text-sm tracking-wider font-playfair">
                  {content.author?.photo?.url ? (
                    <img
                      src={content.author.photo.url}
                      alt={content.author?.name || "Author"}
                      className="w-9 h-9 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-9 h-9 flex items-center justify-center border-y border-dark_secondary_text dark:border-dark_primary_text rounded-full text-sm font-semibold">
                      {getInitials(content.author?.name || "Unknown")}
                    </div>
                  )}
                  <span>{content.author?.name || "Unknown Author"}</span>
                </div>

                {/* Delete Icon: Only visible if user._id matches content.author.id */}
                {handleDelete && user._id === content.author?.id && (
                  <button
                    onClick={() => handleDelete(content.id)}
                    className="absolute top-3 right-3 bg-red-600 text-white p-2 rounded-full hover:bg-red-700"
                    title="Delete"
                  >
                    🗑️
                  </button>
                )}
              </div>
            </Tilt>
          ))}
        </div>
      )}

      {BlogsVlogsModalOpen && (
        <FilterBlogsVlogs
          BlogsVlogsModalOpen={BlogsVlogsModalOpen}
          setBlogsVlogsModalOpen={setBlogsVlogsModalOpen}
          handleApplyFilters={handleApplyFilters}
          handleResetFilters={handleResetFilters} // Pass reset function
          setSelectedContentType={setSelectedContentType} // For content type selection
          handleReverseFilters={handleReverseFilters}
          selectedContentType={selectedContentType}
        />
      )}
    </section>
  );
};

export default BlogsVlogs;
