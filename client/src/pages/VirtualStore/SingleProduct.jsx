import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import img1 from "../../assets/store/aaa.png";
import ReactPlayer from "react-player";
import car1 from "../../assets/store/a.mp4";
import MyButton2 from "../../components/Buttons/MyButton2";
import MyButton4 from "../../components/Buttons/MyButton4";
import { useQuery } from "@apollo/client";
import { GET_PRODUCT } from "../../graphql/product";
import { use } from "react";
const SingleProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { loading, error, data } = useQuery(GET_PRODUCT, {
    variables: { id },
  });
  useEffect(() => {
    if (data) {
      setProduct(data.getProduct);
    }
  }, [data]);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  console.log(product);
  return (
    <div>
      {sampleProducts.map((product, ind) => (
        <div
          key={ind}
          className="bg-background1 dark:bg-dark_background1 text-primary_text dark:text-dark_primary_text  py-4 px-16 duration-300 min-h-screen"
        >
          {/* Product Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between border-b pb-4 mb-6">
            <h1 className="text-3xl font-bold mb-2 md:mb-0">{product.name}</h1>
            <p className=" font-pangaia">✨Category: {product.category}</p>
          </div>

          {/* Product Image and Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              {product.image ? (
                <img
                  src={product.image}
                  alt={product.name}
                  className="rounded-lg shadow-lg"
                />
              ) : (
                <div className="bg-gray-200 rounded-lg shadow-lg h-64 flex items-center justify-center">
                  <p className="">No Image Available</p>
                </div>
              )}
            </div>

            <div className="flex flex-col ">
              <p className="text-lg  mb-4">{product.description}</p>
              <p className="text-md font-semibold  mb-2">
                Unique Feature: {product.uniqueFeature}
              </p>
              {product.materialDetails?.length > 0 && (
                <div className="">
                  <h2 className="text-xl font-bold mb-4 font-playfair">
                    Material Details
                  </h2>
                  <ul className="space-y-2">
                    {product.materialDetails.map((material, index) => (
                      <li key={index} className=" flex items-center gap-1 p-1">
                        <h3 className="text-lg font-semibold">
                          {material.name}:{" "}
                        </h3>
                        <p className=""> {material.description}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          <div className="bg-background1 dark:bg-dark_background1 py-7 px-16 flex flex-col items-center justify-center w-full h-full ">
            <h1 className="font-bold font-gallient text-5xl tracking-wider pt-2 pb-6">
              Behind the story of Khadi Kurti
            </h1>
            <div className="flex flex-col items-center justify-center w-full h-full m-auto">
              <ReactPlayer
                url={car1}
                width="85%"
                height="85%"
                playing={false}
                controls
                // config={{
                //   file: {
                //     attributes: { controlsList: "nodownload" },
                //   },
                // }}
              />
            </div>
          </div>

          {/* Material Details */}

          <div>
            <p className="text-md  mb-2">Quantity: {product.quantity}</p>
            <p className="text-md  mb-4">City: {product.city || "N/A"}</p>
            <p className="text-xl font-bold text-highlight mb-4">
              Price: ${product.price.toFixed(2)}
            </p>
            <div className="flex items-center gap-5 justify-start">
              <MyButton4
                classDesign={
                  "bg-highlight before:bg-highlight_dark  text-dark_primary_text py-1 "
                }
                buttonName={"Buy Now"}
              />

              <sapn className="text-lg font-semibold">or</sapn>

              <MyButton4
                classDesign={
                  "bg-highlight before:bg-highlight_dark  text-dark_primary_text py-1 "
                }
                buttonName={"Buy Physically (Contact Seller)"}
              />
            </div>
          </div>

          {/* Reviews */}
          {product.reviews?.length > 0 && (
            <div className="mt-8">
              <h2 className="text-xl font-bold mb-4 font-playfair">Reviews</h2>
              <ul className="space-y-6">
                {product.reviews.map((review, index) => (
                  <div className="p-4 border rounded-lg shadow hover:shadow-xl transition flex items-center gap-5  ">
                    <img
                      src={img1}
                      className=" rounded-full w-20 h-20 border shadow-xl "
                    />
                    <li key={index} className="">
                      <p className="">{review.review}</p>
                      <div className="mt-2 flex items-center justify-between">
                        <span className="text-sm ">
                          Rating: {review.rating}/5
                        </span>
                        <span className="text-sm text-gray-400">
                          {new Date(review.createdAt).toLocaleDateString()}
                        </span>
                      </div>
                    </li>
                  </div>
                ))}
              </ul>
            </div>
          )}

          {/* Seller Details */}
          {product.seller && (
            <div className="mt-8 border-t pt-4">
              <h2 className="text-lg font-bold mb-2 font-playfair">
                Seller Information
              </h2>
              <div className="p-4 border rounded-lg shadow hover:shadow-xl transition flex items-start gap-5  ">
                <img
                  src={img1}
                  className=" rounded-full w-20 h-20 border shadow-xl "
                />
                <div className="flex flex-col gap-2">
                  <p className="">Seller Name</p>
                  <div className=" flex w-full gap-5">
                    <p className=" w-1/2">
                      Seller Description Seller Description Seller Description
                      Seller Description Lorem ipsum dolor sit amet consectetur
                      adipisicing elit. Ipsum quis blanditiis aliquid deserunt
                      facilis quaerat excepturi, cum earum necessitatibus,
                      explicabo dolores labore placeat quidem animi asperiores
                      itaque alias mollitia harum.
                    </p>
                    <ReactPlayer
                      url={car1}
                      width="100%"
                      height="100%"
                      playing={false}
                      controls
                      // config={{
                      //   file: {
                      //     attributes: { controlsList: "nodownload" },
                      //   },
                      // }}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default SingleProduct;

// Sample product data for testing
const sampleProducts = [
  {
    name: "Khadi Kurti",
    description: "A beautifully handcrafted vase with intricate designs.",
    uniqueFeature: "Made from eco-friendly materials.",
    materialDetails: [
      { name: "Clay", description: "High-quality natural clay." },
      { name: "Paint", description: "Non-toxic and durable paint." },
    ],
    image: img1,
    price: 49.99,
    category: "Handicrafts",
    quantity: 10,
    city: "Kolkata",
    seller: "601c5f2b8e621e23d8d12345",
    reviews: [
      {
        reviewer: "601c5f2b8e621e23d8d54321",
        review: "Amazing craftsmanship!",
        rating: 5,
        createdAt: "2023-12-01T12:00:00Z",
      },
      {
        reviewer: "601c5f2b8e621e23d8d67890",
        review: "Good value for money.",
        rating: 4,
        createdAt: "2023-12-02T14:00:00Z",
      },
    ],
  },
];

// Usage example in a parent component
// <SingleProduct products={sampleProducts} />
