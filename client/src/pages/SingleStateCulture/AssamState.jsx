import React from "react";
import SingleStateCulture from ".";
import tajImg from "../../assets/culture/stateCultureBg.png";
import wbImg from "../../assets/states/west-bengal.png";
import assasImg from "./../../assets/states/assam.png";
import greetingImg from "./../../assets/culture/greeting.avif";
import assamTeaImg from "./../../assets/states/assamtea.jpg";
import kharImg from "./../../assets/states/khar.jpeg";
import pithaImg from "./../../assets/states/pitha.webp";
import tengaImg from "./../../assets/states/tenga.jpg";
import bihuImg from  "./../../assets/states/bihu.avif";
import xImg from  "./../../assets/states/sattriya.jpeg";
import yImg from  "./../../assets/states/gamosa.jpeg";
import zImg from  "./../../assets/states/japi.jpg";

const AssamCuisines = [
  {
    cuisineImage: assamTeaImg, // Replace with actual image of Assam Tea
    cuisineName: "Assam Tea",
  },
  {
    cuisineImage: pithaImg, // Replace with actual image of Pitha
    cuisineName: "Pitha",
  },
  {
    cuisineImage: tengaImg, // Replace with actual image of Masor Tenga
    cuisineName: "Masor Tenga (Tangy Fish Curry)",
  },
  {
    cuisineImage: kharImg, // Replace with actual image of Khar
    cuisineName: "Khar",
  },
];

const AssamArts = [
  {
    cuisineImage: bihuImg, // Replace with actual image of Bihu Dance
    cuisineName: "Bihu Dance",
  },
  {
    cuisineImage: xImg, // Replace with actual image of Sattriya Dance
    cuisineName: "Sattriya Dance",
  },
  {
    cuisineImage: yImg, // Replace with actual image of Gamosa
    cuisineName: "Gamosa Weaving",
  },
  {
    cuisineImage: zImg, // Replace with actual image of Japi
    cuisineName: "Japi Craft",
  },
];


const AssamState = () => {
  return (
    <div>
      <SingleStateCulture
        stateName={["Assam"]}
        greetingImg={greetingImg}
        greetingName={"Nomoskar"}
        stateImg={assasImg}
        stateHistory={`Assam, located in the lush northeastern region of India, is a state rich in history and culture. It is best known for its vast tea gardens, which produce some of the world’s finest teas, and its fertile land enriched by the mighty Brahmaputra River. Historically, Assam was ruled by the Ahom Dynasty for over 600 years, contributing to the state's strong cultural identity. The state's vibrant festivals, such as Bihu, highlight the importance of agriculture and the cycles of nature. Assam is also known for its contributions to literature, arts, and traditional crafts. Assam, located in the lush northeastern region of India, is a state rich in history and culture. It is best known for its vast tea gardens, which produce some of the world’s finest teas, and its fertile land enriched by the mighty Brahmaputra River. Historically, Assam was ruled by the Ahom Dynasty for over 600 years, contributing to the state's strong cultural identity. The state's vibrant festivals, such as Bihu, highlight the importance of agriculture and the cycles of nature. Assam is also known for its contributions to literature, arts, and traditional crafts. Assam, located in the lush northeastern region of India, is a state rich in history and culture. It is best known for its vast tea gardens, which produce some of the world’s finest teas, and its fertile land enriched by the mighty Brahmaputra River. Historically, Assam was ruled by the Ahom Dynasty for over 600 years, contributing to the state's strong cultural identity. `}
        stateHistoryVideo={"https://youtu.be/CkZyrYfofHc"}
        cuisineDetails={AssamCuisines}
        cuisineCourse={"/learn-Indian-culture/assam-cuisine-course"}
        clothingImg={wbImg}
        clothingDetails={`The traditional attire of Assam reflects its rich heritage. Women often wear the Mekhela Chador, a two-piece garment known for its elegance and typically woven from indigenous silks like Muga, Pat, and Eri. The Mekhela Chador is adorned with intricate handwoven designs that depict folklore, flora, and fauna. Men usually don traditional dhotis paired with Gamosas, a versatile piece of cloth that signifies respect and is used in various ceremonies. The textiles of Assam are deeply woven into its cultural fabric, representing the artistry and skills passed down through generations.`}
        languageImg={wbImg}
        languageDetails={`The official language of Assam is Assamese, which is an Indo-Aryan language with a history dating back to the 7th century. The language has a rich literary tradition, with medieval works such as the *Kirtan-ghosa* by the revered saint-poet Sankardev and various works by Madhavdev. Assamese script is derived from the Brahmi script and shares similarities with the Bengali and Odia scripts. The language is known for its melodious tone and significant vocabulary influenced by its diverse ethnic communities.`}
        languageCourse={"/learn-Indian-culture/assamese-course"}
        artsDetails={AssamArts}
        artsCourse={"/learn-Indian-culture/assam-art-course"}
      />
    </div>
  );
};

export default AssamState;
