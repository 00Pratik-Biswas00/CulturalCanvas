import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { CiSearch, CiFilter } from "react-icons/ci";

import img1 from "../../assets/blogs/pic1.jpg";
import pratikImg from "../../assets/courses/pratik.jpg";

import MyButton2 from "../../components/Buttons/MyButton2";
import FilterBlogsVlogs from "../../components/Filters/FilterBlogsVlogs";

const blogsVlogs = [
  {
    blogImage: img1,
    blogName: "Unraveling Hawa Mahal's Historical Treasures",
    type: "Blog",
    author: "Debopriya Lahiri",
    authorImg: pratikImg,
  },

  {
    blogImage: img1,
    blogName: "Unraveling Rupal er Barir 14 puruser Treasures",
    type: "Vlog",
    author: "Pratik Biswas",
    authorImg: pratikImg,
  },
  {
    blogImage: img1,
    blogName: "Unraveling Taj Mahal's Historical Treasures",
    type: "Vlog",
    author: "Pratik Biswas",
    authorImg: pratikImg,
  },
  {
    blogImage: img1,
    blogName: "Unraveling Taj Mahal's Historical Treasures",
    type: "Vlog",
    author: "Rupal Paul",
    authorImg: pratikImg,
  },
  {
    blogImage: img1,
    blogName: "Unraveling Victoria Memorial's Historical Treasures",
    type: "Blog",
    author: "Sattwikee Ghosh",
    authorImg: pratikImg,
  },
  {
    blogImage: img1,
    blogName: "Unraveling Taj Mahal's Historical Treasures",
    type: "Vlog",
    author: "Ayaan Ahmed",
    authorImg: pratikImg,
  },
  {
    blogImage: img1,
    blogName: "Unraveling Victoria Memorial's Historical Treasures",
    type: "Blog",
    author: "Chandrima Kar",
    authorImg: pratikImg,
  },
];

const AdminContents = () => {
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

  const filteredBlogsVlogs = blogsVlogs.filter(
    (content) =>
      content.blogName.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (selectedContentType ? content.type === selectedContentType : true)
  );

  return (
    <section className="bg-background1 dark:bg-dark_background1 text-primary_text dark:text-dark_primary_text py-6 px-4 duration-300 min-h-screen">
      <div className="flex flex-col sm:flex-row justify-between w-full items-center sm:items-center">
        <h1 className="text-4xl font-semibold text-center tracking-tighter font-playfair">
          Manage Others' Contents
        </h1>
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

      <div className="gallery mt-5 gap-7">
        {/* display the verified contents here */}
        {filteredBlogsVlogs.map((content, i) => (
          <div
            key={i}
            className="relative w-full mb-7 h-auto rounded-2xl overflow-hidden shadow-lg blogCards"
          >
            <img
              src={content.blogImage}
              className="w-full h-full rounded-2xl object-cover"
            />
            <div className="text-dark_primary_text flex flex-col items-center justify-end gap-3 overflow-hidden left-0 bottom-0 absolute h-full w-full rounded-2xl p-7 blogCardsContents">
              <h3 className="text-center font-bold text-3xl">
                {content.blogName}
              </h3>
              <button
                onClick={() => {
                  navigate(`/blogs-vlogs/slugLagabiEkhane`);
                }}
                className="bg-background2 hover:bg-lime-200 duration-500 text-primary_text px-5 py-2 text-base rounded-3xl mb-5 font-open_sans"
              >
                Read More
              </button>
              <div className="absolute bottom-5 right-5 italic text-sm tracking-wider font-playfair">
                {content.type} {content.type === "Blog" ? "📝" : "🎬"}
              </div>
              <div className="absolute flex gap-2 items-center justify-center bottom-2 left-5 italic text-sm tracking-wider font-playfair">
                <img
                  src={content.authorImg}
                  className="w-9 h-9 rounded-full object-cover"
                />
                {content.author}
              </div>
            </div>
          </div>
        ))}
      </div>

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

export default AdminContents;
