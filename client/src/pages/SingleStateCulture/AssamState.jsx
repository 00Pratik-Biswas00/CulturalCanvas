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
      "https://www.gujaratirecipes.in/wp-content/uploads/2013/07/dal-bhat-1.jpeg",
    cuisineName: "Bhaat + Daal",
  },
  {
    cuisineImage:
      "https://beextravegant.com/wp-content/uploads/2022/07/IMG_9072-500x375.jpg",
    cuisineName: "Teel Peetha",
  },
  {
    cuisineImage:
      "https://assets.epicurious.com/photos/640aab48882e5bf74cea370a/16:9/w_3207,h_1804,c_limit/Bhuna%20khichuri-RECIPE.jpg",
    cuisineName: "Khichuri",
  },
];

const AssamArts = [
  {
    artImage:
      "https://static.theprint.in/wp-content/uploads/2023/02/Bihu-1024x683.jpg",
    artName: "Bihu Dance",
  },
  {
    artImage:
      "https://static.theprint.in/wp-content/uploads/2023/02/Bihu-1024x683.jpg",
    artName: "Sattriya Dance",
  },
  {
    artImage:
      "https://www.globalinch.org/wp-content/uploads/2001/06/Japi-Assam.jpg",
    artName: "Japi Craft",
  },
  {
    artImage:
      "https://11gt01koavy9v.cdn.shift8web.com/wp-content/uploads/2023/06/assam-pottery.jpg",
    artName: "Assamese Pottery",
  },
];

const AssamState = () => {
  return (
    <div>
      <SingleStateCulture
        stateName={["Assam"]}
        greetingImg="https://assam.gov.in/web/sites/default/files/inline-images/Barpeta%27s%20Bhortal%20Nritya.jpg"
        greetingName={"Nomoskar"}
        stateImg="https://lp-cms-production.imgix.net/2022-03/shutterstockRF_199560017.jpg?sharp=10&vib=20&w=1200&w=600&h=400"
        stateHistory="
Assam, located in northeastern India, is known for its rich history, culture, and tea gardens that produce some of the world’s finest teas. The state’s fertile land, nourished by the Brahmaputra River, has supported its agricultural heritage. Historically, Assam was ruled by the Ahom Dynasty for over 600 years, shaping its strong cultural identity. Festivals like Bihu celebrate agriculture and the natural cycles, while Assam is also recognized for its contributions to literature, arts, and traditional crafts."
        stateHistoryVideo={"https://youtu.be/CkZyrYfofHc"}
        cuisineDetails={AssamCuisines}
        cuisineCourse={"/learn-Indian-culture/assam-cuisine-course"}
        clothingImg="https://1.bp.blogspot.com/-egmtkQrJqKI/Xjf6_xTdSeI/AAAAAAAAKN8/NWHHx6G2LVQpHpHJf_Dk56ubHE9sPzBdQCLcBGAsYHQ/s1600/assamese_women_mekhela_chador.jpg"
        clothingDetails={`The traditional attire of Assam reflects its rich heritage. Women often wear the Mekhela Chador, a two-piece garment known for its elegance and typically woven from indigenous silks like Muga, Pat, and Eri. The Mekhela Chador is adorned with intricate handwoven designs that depict folklore, flora, and fauna. Men usually don traditional dhotis paired with Gamosas, a versatile piece of cloth that signifies respect and is used in various ceremonies. The textiles of Assam are deeply woven into its cultural fabric, representing the artistry and skills passed down through generations.`}
        languageImg="https://www.getanylanguage.com/wp-content/uploads/2022/06/assamese-language-translation.png"
        languageDetails={`The official language of Assam is Assamese, which is an Indo-Aryan language with a history dating back to the 7th century. The language has a rich literary tradition, with medieval works such as the *Kirtan-ghosa* by the revered saint-poet Sankardev and various works by Madhavdev. Assamese script is derived from the Brahmi script and shares similarities with the Bengali and Odia scripts. The language is known for its melodious tone and significant vocabulary influenced by its diverse ethnic communities.`}
        languageCourse={"/learn-Indian-culture/assamese-course"}
        artsDetails={AssamArts}
        artsCourse={"/learn-Indian-culture/assam-art-course"}
      />
    </div>
  );
};

export default AssamState;
