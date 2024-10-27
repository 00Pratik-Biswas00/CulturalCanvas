import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import { useSelector } from "react-redux";

import "./App.css";

// icons
import { RiMenuFold2Line, RiMenuUnfold2Line } from "react-icons/ri";

// components
import Header from "./components/Header";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";

// pages
import Home from "./pages/Home";
import Heritage from "./pages/Heritage";
import CultureTradition from "./pages/CultureTradition";
import LearnIndianCulture from "./pages/LearnIndianCulture";
import ExploreDiversity from "./pages/ExploreDiversity";
import BlogsVlogs from "./pages/BlogsVlogs";
import VirtualStore from "./pages/VirtualStore";
import SingleHeritage from "./pages/SingleHeritage";
import SingleCourse from "./pages/SingleCourse";
import ScrollToTop from "./components/ScrollToTop";
import GoToTop from "./components/GoToTopButton";
import Chatbot from "./components/ChatBot";
import PredictAmount from "./pages/ExploreDiversity/PredictAmount";
import TripCreation from "./pages/ExploreDiversity/TripCreation";
import ViewTrip from "./pages/ExploreDiversity/ViewTrip/[tripId]/index";
import SinglePageCulture from "./pages/SinglePageCulture";
import MultiplePagesCulture from "./pages/MultiplePagesCulture";
import MultipleSingleCulture from "./pages/MultiplePagesCulture/MultipleSingleCulture";
import MyProfile from "./pages/MyProfile";
import BudgetPredictor from "./pages/BudgetPrediction";
import SingleStateCulture from "./pages/SingleStateCulture";
import SavedTrips from "./pages/ExploreDiversity/SavedTrips";

// Admin pages
import AdminNavSidebar from "./admin-components/AdminNavbar";
import AdminDashboard from "./admin-pages/AdminDashboard";
import AdminUsers from "./admin-pages/AdminUsers";
import AdminAdmins from "./admin-pages/AdminAdmins";
import AdminSellers from "./admin-pages/AdminSellers";
import AdminStates from "./admin-pages/AdminStates";
import AdminCourses from "./admin-pages/AdminCourses";
import AdminHeritage from "./admin-pages/AdminHeritage";
import AdminCulture from "./admin-pages/AdminCulture";
import AdminMarket from "./admin-pages/AdminMarket";
import SingleBlogVlog from "./pages/SingleBlogVlog";
import UploadBlogVlog from "./pages/UploadBlogVlog/UploadBlogVlog";

const UserLayout = ({ children }) => {
  const [open, setOpen] = useState(true);

  return (
    <>
      <Header open={open} setOpen={setOpen} />
      {children}
      <GoToTop />
      <Chatbot />
      <Footer />
    </>
  );
};

const AdminLayout = ({ children }) => {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.matchMedia("(min-width: 768px)").matches) {
        setOpen(true);
      } else {
        setOpen(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex">
      <AdminNavSidebar open={open} setOpen={setOpen} />
      <div
        className={`flex-1 overflow-y-auto transition-all duration-700 ${
          open ? "lg:ml-[200px]" : "ml-0"
        }`}
      >
        <div
          className={`lg:hidden fixed z-50 bottom-0 transition-all duration-700 ${
            open ? "left-[12.5rem] px-2 py-1" : "left-0 p-1"
          }`}
        >
          {" "}
          <h1
            className="text-2xl bg-gray-50 p-2 rounded-xl font-semibold cursor-pointer transition-transform duration-700"
            onClick={() => {
              setOpen(!open);
            }}
          >
            {open ? <RiMenuUnfold2Line /> : <RiMenuFold2Line />}
          </h1>
        </div>
        {children}
        <GoToTop />
      </div>
    </div>
  );
};

function App() {
  const user = useSelector((state) => state?.user?.userInfo);

  return (
    <BrowserRouter>
      {user?.role === "admin" || user?.role === "owner" ? (
        <>
          <Toaster richColors position="top-right" closeButton="true" />
          <AdminLayout>
            <ScrollToTop />
            <Routes>
              <Route exact path="/" element={<AdminDashboard />} />
              <Route
                exact
                path="/users-acdprsIndia24"
                element={<AdminUsers />}
              />
              <Route
                exact
                path="/admins-acdprsIndia24"
                element={<AdminAdmins />}
              />
              <Route
                exact
                path="/sellers-acdprsIndia24"
                element={<AdminSellers />}
              />
              <Route
                exact
                path="/states-acdprsIndia24"
                element={<AdminStates />}
              />
              <Route
                exact
                path="/courses-acdprsIndia24"
                element={<AdminCourses />}
              />
              <Route
                exact
                path="/heritage-acdprsIndia24"
                element={<AdminHeritage />}
              />
              <Route
                exact
                path="/culture-acdprsIndia24"
                element={<AdminCulture />}
              />
              <Route
                exact
                path="/market-place-acdprsIndia24"
                element={<AdminMarket />}
              />

              <Route path="*" element={<NotFound />} />
            </Routes>
          </AdminLayout>
        </>
      ) : (
        <>
          <Toaster
            richColors
            position="top-right"
            className="mt-10"
            closeButton="true"
          />
          <UserLayout>
            <ScrollToTop />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/heritage" element={<Heritage />} />
              <Route path="/culture-tradition" element={<CultureTradition />} />
              <Route
                path="/learn-Indian-culture"
                element={<LearnIndianCulture />}
              />
              <Route path="/explore-diversity" element={<ExploreDiversity />} />
              <Route path="/blogs-vlogs" element={<BlogsVlogs />} />
              <Route path="/virtual-store" element={<VirtualStore />} />
              <Route path="/my-profile" element={<MyProfile />} />
              <Route
                path="/explore-diversity/predict-amount"
                element={<PredictAmount />}
              />
              <Route
                path="/explore-diversity/create-trip"
                element={<TripCreation />}
              />
              <Route
                path="/explore-diversity/create-trip/view-trip/:tripId"
                element={<ViewTrip />}
              />
              <Route
                path="/explore-diversity/predict-budget"
                element={<BudgetPredictor />}
              />
              <Route path="*" element={<NotFound />} />

              {/* Single pages */}
              <Route path="/heritage/:slug" element={<SingleHeritage />} />
              <Route
                path="/learn-Indian-culture/:slug"
                element={<SingleCourse />}
              />
              <Route
                path="/culture-tradition/single-page"
                element={<SinglePageCulture />}
              />
              <Route
                path="/culture-tradition/multiple-pages"
                element={<MultiplePagesCulture />}
              />
              <Route
                path="/culture-tradition/single-state"
                element={<SingleStateCulture />}
              />
              <Route
                path="/culture-tradition/multiple-pages/:slug"
                element={<MultipleSingleCulture />}
              />
              <Route
                path="/explore-diversity/saved-trips"
                element={<SavedTrips />}
              />

              <Route
                path="/blogs-vlogs/slugLagabiEkhane"
                element={<SingleBlogVlog />}
              />
              <Route
                path="/blogs-vlogs/upload-blog-vlog"
                element={<UploadBlogVlog />}
              />
            </Routes>
          </UserLayout>
        </>
      )}
    </BrowserRouter>
  );
}

export default App;
