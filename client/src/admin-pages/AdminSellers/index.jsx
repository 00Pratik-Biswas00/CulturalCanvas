import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoStorefront } from "react-icons/io5";

import MalePng from "./../../assets/logo/male.png";
import FemalePng from "./../../assets/logo/female.png";
import { GET_SELLERS } from "../../graphql/roleQuery";
import { useQuery } from "@apollo/client";
import DeleteUserButton from "../../components/UserDeleteButton";

const AdminSellers = () => {
  const { data, loading, error, refetch } = useQuery(GET_SELLERS, {
    fetchPolicy: "network-only",
  });
  const [sellers, setSellers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const loadSellers = async () => {
    await refetch();
  };

  useEffect(() => {
    if (data) {
      setSellers(data.getSellers);
      loadSellers();
    }
  }, [data]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredSeller = sellers.filter((seller) =>
    seller.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <section className="bg-background1 dark:bg-dark_background1 text-primary_text dark:text-dark_primary_text py-3 sm:py-6 px-4 duration-300 min-h-screen">
      <div className="flex flex-col  gap-5 sm:gap-10">
        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-center gap-y-3 ">
          <h1 className="text-4xl font-semibold text-center   tracking-tighter font-playfair">
            Manage Your Sellers
          </h1>

          <div className="relative w-full sm:w-1/3 flex items-center">
            <input
              type="text"
              placeholder="Search for Sellers..."
              className=" w-full  bg-background2 dark:bg-shadow rounded-lg focus:outline-none focus:border focus:border-highlight 
          
                text-base sm:text-base 
                pl-10 sm:pl-10  
                py-2
                sm:px-4"
              value={searchQuery}
              onChange={handleSearch}
            />

            <FaSearch className="absolute left-3  w-4 h-4" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {filteredSeller.length > 0 &&
            filteredSeller.map((seller, ind) => (
              <div className=" relative flex items-start justify-start gap-5 p-3  border rounded-xl shadow-md shadow-primary_text dark:shadow-dark_primary_text  ">
                <div className="w-1/3 ">
                  <img
                    src={
                      seller.photo?.url ||
                      (seller.gender === "Male" ? MalePng : FemalePng)
                    }
                    alt={seller.name}
                    className="w-full h-full rounded-xl object-cover"
                  />
                </div>
                <div className="flex flex-col items-start text-xs lg:text-base justify-evenly h-full w-2/3">
                  <p>
                    <b>Name:</b> {seller.name}
                  </p>
                  <p>
                    <b>Email:</b> {seller.email}
                  </p>
                  <p>
                    <b>Gender:</b> {seller.gender}
                  </p>
                  <p>
                    <b>Ph No.:</b> {seller.phone}
                  </p>
                </div>
                <div className=" cursor-pointer">
                  {/*conditional  */}
                  <IoStorefront className="w-5 h-5 absolute bottom-2 right-8 text-highlight_hover hover:text-highlight_hover_dark" />

                  <DeleteUserButton userId={seller.id} reload={loadSellers} />
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default AdminSellers;
