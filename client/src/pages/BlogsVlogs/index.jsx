import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import VanillaTilt from "vanilla-tilt";

import { CiSearch, CiFilter } from "react-icons/ci";

import img1 from "../../assets/blogs/pic1.jpg";
import img2 from "../../assets/blogs/pic2.jpeg";
import img3 from "../../assets/blogs/pic3.png";
import img4 from "../../assets/Heritage/taj.jpeg";
import img5 from "../../assets/explorePlaces/travel.jpg";
import img6 from "../../assets/explorePlaces/createTrip.jpg";
import pratikImg from "../../assets/courses/pratik.jpg";

import MyButton4 from "../../components/Buttons/MyButton4";
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
    blogImage: img4,
    blogName: "Unraveling Rupal er Barir 14 puruser Treasures",
    type: "Vlog",
    author: "Pratik Biswas",
    authorImg: pratikImg,
  },
  {
    blogImage: img3,
    blogName: "Unraveling Taj Mahal's Historical Treasures",
    type: "Vlog",
    author: "Pratik Biswas",
    authorImg: pratikImg,
  },
  {
    blogImage: img4,
    blogName: "Unraveling Taj Mahal's Historical Treasures",
    type: "Vlog",
    author: "Rupal Paul",
    authorImg: pratikImg,
  },
  {
    blogImage: img2,
    blogName: "Unraveling Victoria Memorial's Historical Treasures",
    type: "Blog",
    author: "Sattwikee Ghosh",
    authorImg: pratikImg,
  },
  {
    blogImage: img4,
    blogName: "Unraveling Taj Mahal's Historical Treasures",
    type: "Vlog",
    author: "Ayaan Ahmed",
    authorImg: pratikImg,
  },
  {
    blogImage: img2,
    blogName: "Unraveling Victoria Memorial's Historical Treasures",
    type: "Blog",
    author: "Chandrima Kar",
    authorImg: pratikImg,
  },
  {
    blogImage: img5,
    blogName: "Unraveling Rupal er Barir 14 puruser Treasures",
    type: "Vlog",
    author: "Pratik Biswas",
    authorImg: pratikImg,
  },
  {
    blogImage: img3,
    blogName: "Unraveling Taj Mahal's Historical Treasures",
    type: "Vlog",
    author: "Pratik Biswas",
    authorImg: pratikImg,
  },
  {
    blogImage: img6,
    blogName: "Unraveling Victoria Memorial's Historical Treasures",
    type: "Blog",
    author: "Pratik Biswas",
    authorImg: pratikImg,
  },
];

// vanilla-tilt
function Tilt(props) {
  const { options, ...rest } = props;
  const tilt = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tilt.current, options);
  }, [options]);

  return <div ref={tilt} {...rest} />;
}

const BlogsVlogs = () => {
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
    <section className="bg-background1 dark:bg-dark_background1 text-primary_text dark:text-dark_primary_text py-4 px-16 duration-300 min-h-screen">
      <div className="flex items-center tracking-wide justify-center pb-4 text-[4rem] font-extrabold font-gallient">
        (◔◡◔) India: Through the Eyes of Creators 📸
      </div>

      <div className="flex flex-col sm:flex-row justify-between w-full items-center sm:items-center">
        <MyButton4
          buttonLink={() => {
            navigate(`/blogs-vlogs/upload-blog-vlog`);
          }}
          classDesign="bg-highlight_dark before:bg-highlight text-dark_primary_text transition-transform hover:scale-105 duration-1000 transform-cpu"
          buttonName="Upload Your Blog📝 / Vlog🎬"
        />

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
        {filteredBlogsVlogs.map((content, i) => (
          <Tilt
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
          </Tilt>
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

export default BlogsVlogs;
