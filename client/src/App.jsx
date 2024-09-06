import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";

import "./App.css";

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
import CreateTrip from "./pages/ExploreDiversity/CreateTrip";
import PredictAmount from "./pages/ExploreDiversity/PredictAmount";
import TripCreation from "./pages/ExploreDiversity/TripCreation";
import ViewTrip from "./pages/ExploreDiversity/ViewTrip/[tripId]/index";
import { GoogleOAuthProvider } from "@react-oauth/google";
import SinglePageCulture from "./pages/SinglePageCulture";
import MultiplePagesCulture from "./pages/MultiplePagesCulture";
import MultipleSingleCulture from "./pages/MultiplePagesCulture/MultipleSingleCulture";
import MyProfile from "./pages/MyProfile";

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

function App() {
  return (
    // <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_AUTH_CLIENT_ID}>
    <BrowserRouter>
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
            element={<CreateTrip />}
          />
          <Route
            path="/explore-diversity/create-trip/own-trip"
            element={<TripCreation />}
          />
          <Route
            path="/explore-diversity/create-trip/own-trip/view-trip/:tripId"
            element={<ViewTrip />}
          />

          <Route path="*" element={<NotFound />} />

          {/*  single pages */}

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
            path="/culture-tradition/multiple-pages/:slug"
            element={<MultipleSingleCulture />}
          />
        </Routes>
      </UserLayout>
    </BrowserRouter>
    // {/* </GoogleOAuthProvider> */}
  );
}

export default App;
