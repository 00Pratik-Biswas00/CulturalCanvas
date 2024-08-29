import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";

import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Heritage from "./pages/Heritage";
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
          {/* <Route path="explore/shows" element={<AllShows />} />
          <Route path="explore/movies/:slug" element={<SingleMovie />} />
          <Route path="explore/movies/:slug/watch" element={<WatchMovie />} />
          <Route path="explore/shows/:slug" element={<SingleShow />} />
          <Route path="/subscribe" element={<SubscriptionPage />} />
          {user && <Route path="/myfavourites" element={<MyFavourites />} />}
          {user && <Route path="/mybookings" element={<MyBookings />} />}
          {user && <Route path="/myprofile" element={<MyProfile />} />}
          <Route path="/oauth" element={<OAuthHandler />} />
          <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </UserLayout>
    </BrowserRouter>
  );
}

export default App;
