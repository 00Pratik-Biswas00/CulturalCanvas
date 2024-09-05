import React from "react";
import taj from "../../assets/Heritage/unescologo.png";

const MyProfile = () => {
  return (
    <section className="bg-background1 dark:bg-dark_background1 text-primary_text dark:text-dark_primary_text py-4 px-16 duration-300 flex flex-col items-center justify-center">
      <form className="flex flex-col items-center w-full justify-center gap-5 px-36 py-10">
        <div className="flex flex-col gap-5">
          <img
            src={taj}
            alt="my image"
            className=" rounded-full w-[22rem] h-[22rem]"
          />
          <div className="flex items-center justify-center gap-10">
            <button
              type="submit"
              className="bg-highlight hover:bg-highlight_hover text-primary_text hover:text-dark_primary_text px-4 py-1 rounded-xl font-semibold text-lg  transition-all duration-300"
            >
              Update Image
            </button>

            <button
              type="submit"
              className="bg-red-600 hover:bg-red-900 text-dark_primary_text px-4 py-1 rounded-xl text-lg  transition-all font-semibold duration-300"
            >
              Delete Image
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center gap-10">
          <div className="text-xl font-semibold font-montserrat">
            Total Vlogs: 0
          </div>

          <div className="text-xl font-semibold font-montserrat">
            Total Blogs: 0
          </div>
          <div className="text-xl font-semibold font-montserrat">
            Total Rewards: 0
          </div>
        </div>
        <div className=" flex flex-col w-full gap-y-2">
          <h1 className=" text-2xl font-semibold font-montserrat">Full Name</h1>
          <input
            type="text"
            name="fullName"
            placeholder="user er name"
            className="flex-grow  h-10 pl-2 bg-background1 dark:bg-dark_background1  w-full text-[13px] sm:text-[1rem] border rounded-lg border-highlight focus:outline-none focus:ring-1 focus:ring-highlight outline-none  transition-all resize-none"
          />
        </div>
        <div className=" flex flex-col w-full gap-y-2">
          <h1 className=" text-2xl font-semibold font-montserrat">
            Email Address
          </h1>
          <input
            type="email"
            name="email"
            placeholder="user er mail dis"
            className="flex-grow  h-10 pl-2 bg-background1 dark:bg-dark_background1  w-full text-[13px] sm:text-[1rem] border rounded-lg border-highlight focus:outline-none focus:ring-1 focus:ring-highlight outline-none  transition-all resize-none"
          />
        </div>
        <div className=" flex flex-col w-full gap-y-2">
          <h1 className=" text-2xl font-semibold font-montserrat">Gender</h1>
          <div className="flex items-center justify-start gap-5">
            <div className="flex items-center">
              <input
                type="radio"
                name="gender"
                value="Male"
                className="h-4 w-4 bg-background1"
              />
              <span className="ml-2 text-xl">Male</span>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                name="gender"
                value="Female"
                className="h-4 w-4 bg-background1"
              />
              <span className="ml-2 text-xl">Female</span>
            </div>

            <div className="flex items-center">
              <input
                type="radio"
                name="gender"
                value="Others"
                className="h-4 w-4 bg-background1"
              />
              <span className="ml-2 text-xl">Others</span>
            </div>
          </div>
        </div>
        <div className=" flex flex-col w-full gap-y-2">
          <h1 className=" text-2xl font-semibold font-montserrat">
            Phone Number
          </h1>
          <input
            name="phone"
            type="tel"
            placeholder="user er name"
            className="flex-grow  h-10 pl-2 bg-background1 dark:bg-dark_background1  w-full text-[13px] sm:text-[1rem] border rounded-lg border-highlight focus:outline-none focus:ring-1 focus:ring-highlight outline-none  transition-all resize-none"
          />
        </div>
        <div className=" flex flex-col w-full gap-y-2">
          <h1 className=" text-2xl font-semibold font-montserrat">
            Old Password
          </h1>
          <input
            type="password"
            name="oldpassword"
            placeholder="*********"
            className="flex-grow  h-10 pl-2 bg-background1 dark:bg-dark_background1  w-full text-[13px] sm:text-[1rem] border rounded-lg border-highlight focus:outline-none focus:ring-1 focus:ring-highlight outline-none  transition-all resize-none"
          />
        </div>
        <div className=" flex flex-col w-full gap-y-2">
          <h1 className=" text-2xl font-semibold font-montserrat">
            New Password
          </h1>
          <input
            type="password"
            name="newpassword"
            placeholder="*********"
            className="flex-grow  h-10 pl-2 bg-background1 dark:bg-dark_background1  w-full text-[13px] sm:text-[1rem] border rounded-lg border-highlight focus:outline-none focus:ring-1 focus:ring-highlight outline-none  transition-all resize-none"
          />
        </div>
        <div className="flex items-center justify-between w-full gap-10">
          <button
            type="submit"
            className="bg-highlight hover:bg-highlight_hover text-primary_text hover:text-dark_primary_text px-4 py-1 rounded-xl font-semibold text-lg  transition-all duration-300"
          >
            Update Profile
          </button>

          <button
            type="submit"
            className="bg-red-600 hover:bg-red-900 text-dark_primary_text px-4 py-1 rounded-xl text-lg  transition-all font-semibold duration-300"
          >
            Log Out
          </button>
        </div>
      </form>
    </section>
  );
};

export default MyProfile;
