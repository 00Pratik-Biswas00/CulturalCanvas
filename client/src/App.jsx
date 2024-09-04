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
import TripRecommendation from "./pages/TripRecommendation";
import BlogsVlogs from "./pages/BlogsVlogs";
import VirtualStore from "./pages/VirtualStore";
import SingleHeritage from "./pages/SingleHeritage";
import SingleCourse from "./pages/SingleCourse";
import ScrollToTop from "./components/ScrollToTop";
import GoToTop from "./components/GoToTopButton";
import Chatbot from "./components/ChatBot";
import CreateTrip from "./pages/TripRecommendation/CreateTrip";
import PredictAmount from "./pages/TripRecommendation/PredictAmount";

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
          <Route path="/culture_tradition" element={<CultureTradition />} />
          <Route
            path="/learn_Indian_culture"
            element={<LearnIndianCulture />}
          />
          <Route path="/trip_recommendation" element={<TripRecommendation />} />
          <Route path="/blogs_vlogs" element={<BlogsVlogs />} />
          <Route path="/virtual_store" element={<VirtualStore />} />
          <Route path="*" element={<NotFound />} />

          {/*  single pages */}

          <Route
            path="/heritage/single_heritage"
            element={<SingleHeritage />}
          />
          <Route
            path="/learn_Indian_culture/single_course"
            element={<SingleCourse />}
          />

          <Route
            path="/trip_recommendation/predict_amount"
            element={<PredictAmount />}
          />
          <Route
            path="/trip_recommendation/create_trip"
            element={<CreateTrip />}
          />
        </Routes>
      </UserLayout>
    </BrowserRouter>
  );
}

export default App;
