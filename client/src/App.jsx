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
import ExploreDiversity from "./pages/ExploreDiversity";
import VirtualStore from "./pages/VirtualStore";
import SingleHeritage from "./pages/SingleHeritage";
import SingleCourse from "./pages/SingleCourse";
import ScrollToTop from "./components/ScrollToTop";
import GoToTop from "./components/GoToTopButton";
import Chatbot from "./components/ChatBot";
import TripCreation from "./pages/ExploreDiversity/TripCreation";
import ViewTrip from "./pages/ExploreDiversity/ViewTrip/[tripId]/index";
import ReligionCulture from "./pages/MultiplePagesCulture";
import Hinduism from "./pages/MultiplePagesCulture/Hinduism";
import MyProfile from "./pages/MyProfile";
import SingleStateCulture from "./pages/SingleStateCulture";
import SavedTrips from "./pages/ExploreDiversity/SavedTrips";
import LearnIndianCultureCourses from "./pages/LearnIndianCulture/LearnIndianCultureCourses";
import BengaliCourse from "./pages/IndividualCoursesPage/BengaliCourse";
import EnglishCourse from "./pages/IndividualCoursesPage/EnglishCourse";
import HindiCourse from "./pages/IndividualCoursesPage/HindiCourse";
import GujaratiCourse from "./pages/IndividualCoursesPage/GujaratiCourse";
import UrduCourse from "./pages/IndividualCoursesPage/UrduCourse";
import UserBlogsVLogs from "./pages/UserBlogsVLogs";
import AssamState from "./pages/SingleStateCulture/AssamState";
import WestBengalState from "./pages/SingleStateCulture/WestBengalState";
import ChhattisgarhState from "./pages/SingleStateCulture/ChhattisgarhState";
import BiharState from "./pages/SingleStateCulture/BiharState";
import ArunachalPradeshState from "./pages/SingleStateCulture/ArunachalPradeshState";
import AndhraPradeshState from "./pages/SingleStateCulture/AndhraPradeshState";
import SingleBlogVlog from "./pages/SingleBlogVlog";
import UploadBlogVlog from "./pages/UploadBlogVlog/UploadBlogVlog";
import NearestAttractions from "./pages/ExploreDiversity/NearestAttractions";
import PredictBudget from "./pages/ExploreDiversity/PredictAmount";
import ClothingCulture from "./pages/SinglePageCulture/ClothingCulture";
import Career from "./pages/Career/Career";
import LiveContest from "./pages/Contest/LiveContest";
import CareerAdminForm from "./pages/Career/CareerAdminForm";
import CareerTeacherForm from "./pages/Career/CareerTeacherForm";
import BengaliCuisine from "./pages/IndividualCoursesPage/BengaliCuisine";
import QuizContest from "./pages/Contest/QuizContest";
import StoryTelling from "./pages/ExploreDiversity/StoryTelling";
import AncientScriptTranscription from "./pages/ExploreDiversity/AncientScriptTranscription";
import RAGSummary from "./pages/ExploreDiversity/RAGSummary";

// Admin pages
import AdminNavSidebar from "./admin-components/AdminNavbar";
import AdminDashboard from "./admin-pages/AdminDashboard";
import AdminUsers from "./admin-pages/AdminUsers";
import AdminAdmins from "./admin-pages/AdminAdmins";
import AdminSellers from "./admin-pages/AdminSellers";
import AdminCourses from "./admin-pages/AdminCourses";
import AdminHeritage from "./admin-pages/AdminHeritage";
import AdminMarket from "./admin-pages/AdminMarket";
import AdminContents from "./admin-pages/AdminContents";
import AdminSingleBlogVerification from "./admin-pages/AdminContents/AdminSingleBlogVerification";
import AdminApplications from "./admin-pages/AdminAdmins/AdminApplications";
import SingleAdminApplication from "./admin-pages/AdminAdmins/SingleAdminApplication";
import TeacherApplications from "./admin-pages/Applications/Teacher/TeacherApplications";
import SingleTeacherApplication from "./admin-pages/Applications/Teacher/SingleTeacherApplication";
import ManageDifferentContests from "./admin-pages/AdminContests";
import AdminHeritageContents from "./admin-pages/AdminHeritageContent";
import AdminSingleBlogHeritage from "./admin-pages/AdminHeritageContent/AdminSingleBlogHeritage";
import BlogContest from "./pages/Contest/BlogContest";
import Settings from "./components/Settings/Settings";
import { SpeakerProvider } from "./components/SpeakerContext/SpeakerContext";

// new additions

const UserLayout = ({ children }) => {
  const [open, setOpen] = useState(true);

  return (
    <SpeakerProvider>
      <>
        <Header open={open} setOpen={setOpen} />
        {children}
        <Settings />
        <GoToTop />
        <Chatbot />
        <Footer />
      </>
    </SpeakerProvider>
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
              {/*  ----------------  DASHBOARD ---------------- */}

              <Route exact path="/" element={<AdminDashboard />} />

              {/*  ----------------  USERS ---------------- */}

              <Route
                exact
                path="/users-acdprsIndia24"
                element={<AdminUsers />}
              />

              {/*  ----------------  ADMINS ---------------- */}

              <Route
                exact
                path="/admins-acdprsIndia24"
                element={<AdminAdmins />}
              />
              <Route
                exact
                path="/admins-acdprsIndia24/admin-application"
                element={<AdminApplications />}
              />
              <Route
                exact
                path="/admins-acdprsIndia24/full-admin-application/:id"
                element={<SingleAdminApplication />}
              />

              {/*  ----------------  SELLERS ---------------- */}
              <Route
                exact
                path="/sellers-acdprsIndia24"
                element={<AdminSellers />}
              />

              {/*  ----------------  COURSES ---------------- */}
              <Route
                exact
                path="/courses-acdprsIndia24"
                element={<AdminCourses />}
              />

              {/*  ----------------  HERITAGE ---------------- */}
              <Route
                exact
                path="/heritage-acdprsIndia24"
                element={<AdminHeritage />}
              />

              {/*  ----------------  MARKET ---------------- */}

              <Route
                exact
                path="/market-place-acdprsIndia24"
                element={<AdminMarket />}
              />

              {/*  ----------------  CONTENT ---------------- */}
              <Route
                exact
                path="/contents-acdprsIndia24"
                element={<AdminContents />}
              />
              <Route
                exact
                path="/threshold-contents-acdprsIndia24"
                element={<AdminHeritageContents />}
              />
              <Route
                exact
                path="/blogs-vlogs/verify/:id"
                element={<AdminSingleBlogVerification />}
              />
              <Route
                exact
                path="/blogs-vlogs/heritage/:id"
                element={<AdminSingleBlogHeritage />}
              />

              {/*  ----------------  CONTESTS ---------------- */}

              <Route
                exact
                path="/contests-acdprsIndia24"
                element={<ManageDifferentContests />}
              />

              {/*  ----------------   APPLICATIONS ---------------- */}
              <Route
                exact
                path="/teacher-applications"
                element={<TeacherApplications />}
              />

              <Route
                exact
                path="/teacher-applications/full-teacher-application/:id"
                element={<SingleTeacherApplication />}
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
              {/*  ---------------- Home  ---------------- */}
              <Route exact path="/" element={<Home />} />

              {/*  ---------------- Heritage  ---------------- */}
              <Route path="/heritage" element={<Heritage />} />
              <Route path="/heritage/:slug" element={<SingleHeritage />} />

              {/*  ---------------- Culture and Tradition  ---------------- */}
              <Route path="/culture-tradition" element={<CultureTradition />} />

              <Route
                path="/culture-tradition/clothing-culture"
                element={<ClothingCulture />}
              />

              <Route
                path="/culture-tradition/religion"
                element={<ReligionCulture />}
              />
              <Route
                path="/culture-tradition/religion/hinduism"
                element={<Hinduism />}
              />
              <Route
                path="/culture-tradition/single-state"
                element={<SingleStateCulture />}
              />
              {/* states */}
              <Route path="/culture-tradition/assam" element={<AssamState />} />
              <Route
                path="/culture-tradition/andhra-pradesh"
                element={<AndhraPradeshState />}
              />
              <Route
                path="/culture-tradition/arunachal-pradesh"
                element={<ArunachalPradeshState />}
              />
              <Route path="/culture-tradition/bihar" element={<BiharState />} />
              <Route
                path="/culture-tradition/chhattisgarh"
                element={<ChhattisgarhState />}
              />
              <Route
                path="/culture-tradition/west-bengal"
                element={<WestBengalState />}
              />

              {/*  ---------------- Learning Courses  ---------------- */}
              <Route
                path="/learn-Indian-culture"
                element={<LearnIndianCultureCourses />}
              />

              {/** ----- languages ------- */}
              <Route
                path="/learn-Indian-culture/language/bengali"
                element={<BengaliCourse />}
              />
              <Route
                path="/learn-Indian-culture/language/english"
                element={<EnglishCourse />}
              />
              <Route
                path="/learn-Indian-culture/language/hindi"
                element={<HindiCourse />}
              />
              <Route
                path="/learn-Indian-culture/language/gujarati"
                element={<GujaratiCourse />}
              />
              <Route
                path="/learn-Indian-culture/language/urdu"
                element={<UrduCourse />}
              />

              {/** ----- cuisines------- */}
              <Route
                path="/learn-Indian-culture/cuisine/bengali"
                element={<BengaliCuisine />}
              />

              {/*  ---------------- Learning Courses  Single Course---------------- */}
              <Route
                path="/learn-Indian-culture/:maincategory/:category/:slug"
                element={<SingleCourse />}
              />

              {/*  ---------------- Explore Diversity  ---------------- */}
              <Route path="/explore-diversity" element={<ExploreDiversity />} />
              <Route
                path="/explore-diversity/predict-budget"
                element={<PredictBudget />}
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
                path="/explore-diversity/nearest-attractions"
                element={<NearestAttractions />}
              />

              <Route
                path="/explore-diversity/story-telling"
                element={<StoryTelling />}
              />

              <Route
                path="/explore-diversity/ancient-script-transcription"
                element={<AncientScriptTranscription />}
              />

              <Route
                path="/explore-diversity/rag-manual-summary"
                element={<RAGSummary />}
              />
              <Route
                path="/explore-diversity/saved-trips"
                element={<SavedTrips />}
              />

              {/*  ----------------  Blogs and Vlogs ---------------- */}
              <Route path="/blogs-vlogs" element={<UserBlogsVLogs />} />
              <Route path="/blogs-vlogs/:id" element={<SingleBlogVlog />} />
              <Route
                path="/blogs-vlogs/upload-blog-vlog"
                element={<UploadBlogVlog />}
              />
              <Route
                path="/blogs-vlogs/edit-blog-vlog/:id"
                element={<UploadBlogVlog />}
              />

              {/*  ---------------- Live Contest  ---------------- */}
              <Route path="/live-contest" element={<LiveContest />} />
              <Route path="/live-contest/quiz" element={<QuizContest />} />
              <Route path="/live-contest/blog/:id" element={<BlogContest />} />

              {/*  ---------------- Career  ---------------- */}
              <Route path="/career" element={<Career />} />
              <Route path="/career/admin-form" element={<CareerAdminForm />} />
              <Route
                path="/career/teacher-form"
                element={<CareerTeacherForm />}
              />

              {/*  ---------------- Virtual Store  ---------------- */}
              <Route path="/virtual-store" element={<VirtualStore />} />

              {/*  ---------------- My Profile  ---------------- */}
              <Route path="/my-profile" element={<MyProfile />} />

              {/*  ---------------- Not Found  ---------------- */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </UserLayout>
        </>
      )}
    </BrowserRouter>
  );
}

export default App;
