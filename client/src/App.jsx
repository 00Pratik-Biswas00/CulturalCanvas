import React, { useEffect, useState } from "react";
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

const UserLayout = ({ children }) => {
  const [open, setOpen] = useState(true);

  return (
    <>
      <Header open={open} setOpen={setOpen} />
      {children}
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
        </Routes>
      </UserLayout>
    </BrowserRouter>
  );
}

export default App;
