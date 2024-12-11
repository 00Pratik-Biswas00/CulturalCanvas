import React from "react";
import SingleStateCulture from ".";
import tajImg from "../../assets/culture/stateCultureBg.png";
import wbImg from "../../assets/states/west-bengal.png";

const AssamCuisines = [
  {
    cuisineImage:
      "https://mycookingcanvas.com/wp-content/uploads/2017/10/DSC_1719-600x400.jpg",
    cuisineName: "Luchi + Cholar Daal",
  },
  {
    cuisineImage:
      "https://www.nehascookbook.com/wp-content/uploads/2020/11/Lasuni-dal-bhaat-WS.jpg",
    cuisineName: "Bhaat + Daal",
  },
  {
    cuisineImage:
      "https://img-global.cpcdn.com/recipes/14cef79885ad1075/680x482cq70/luchi-and-kosha-mangsho-chicken-recipe-main-photo.jpg",
    cuisineName: "Luchi + Mangso",
  },
  {
    cuisineImage:
      "https://assets.epicurious.com/photos/640aab48882e5bf74cea370a/16:9/w_3207,h_1804,c_limit/Bhuna%20khichuri-RECIPE.jpg",
    cuisineName: "Khichuri",
  },
];

const AssamArts = [
  {
    cuisineImage:
      "https://upload.wikimedia.org/wikipedia/commons/4/48/Bihu-Dance-assam.jpg",
    cuisineName: "Bihu Dance",
  },
  {
    cuisineImage:
      "https://i0.wp.com/rotarynewsonline.org/wp-content/uploads/2019/07/545px-Satriya_dance_performance_at_Guwahati_Rabindra_Bhawan.jpg?ssl=1",
    cuisineName: "Sattriya Dance",
  },
  {
    cuisineImage: "https://i.ytimg.com/vi/qIhDxJP6p9A/maxresdefault.jpg",
    cuisineName: "Japi Craft",
  },
  {
    cuisineImage:
      "https://11gt01koavy9v.cdn.shift8web.com/wp-content/uploads/2023/06/assam-pottery.jpg",
    cuisineName: "Assamese Pottery",
  },
];

const ArunachalPradeshState = () => {
  return (
    <div>
      <SingleStateCulture
        stateName={["Arunachal", "Pradesh"]}
        greetingImg="https://www.discovereast.in/wp-content/uploads/2020/08/IMG_20200807_194541.jpg"
        greetingName={"Nomoskar"}
        stateImg="https://www.adotrip.com/public/images/state/contentImg/5f44fa4ac5a57.jpg"
        stateHistory="Assam, nestled in the northeastern region of India, is celebrated for its lush tea gardens, producing some of the world's finest teas, and its fertile plains enriched by the mighty Brahmaputra River. With a history shaped by over 600 years of Ahom rule, the state has a strong cultural identity reflected in its literature, arts, and traditional crafts. Assam's vibrant festivals, especially Bihu, highlight its deep ties to agriculture and the rhythms of nature, while its rich biodiversity and unique cultural heritage make it a significant part of India's historical and cultural tapestry."
        stateHistoryVideo={"https://www.youtube.com/watch?v=P-ztEY8r6n0"}
        cuisineDetails={AssamCuisines}
        cuisineCourse={"/learn-Indian-culture/assam-cuisine-course"}
        clothingImg="https://arunachallivingheritage.com/uploads/images/1663841414Aka_Lifestyle-of-Akas_blog-cover.jpg"
        clothingDetails={`The traditional attire of Assam reflects its rich heritage. Women often wear the Mekhela Chador, a two-piece garment known for its elegance and typically woven from indigenous silks like Muga, Pat, and Eri. The Mekhela Chador is adorned with intricate handwoven designs that depict folklore, flora, and fauna. Men usually don traditional dhotis paired with Gamosas, a versatile piece of cloth that signifies respect and is used in various ceremonies. The textiles of Assam are deeply woven into its cultural fabric, representing the artistry and skills passed down through generations.`}
        languageImg="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202009/20200913_112901_1200x768.jpeg?size=690:388"
        languageDetails={`The official language of Assam is Assamese, which is an Indo-Aryan language with a history dating back to the 7th century. The language has a rich literary tradition, with medieval works such as the *Kirtan-ghosa* by the revered saint-poet Sankardev and various works by Madhavdev. Assamese script is derived from the Brahmi script and shares similarities with the Bengali and Odia scripts. The language is known for its melodious tone and significant vocabulary influenced by its diverse ethnic communities.`}
        languageCourse={"/learn-Indian-culture/assamese-course"}
        artsDetails={AssamArts}
        artsCourse={"/learn-Indian-culture/assam-art-course"}
      />
    </div>
  );
};

export default ArunachalPradeshState;
