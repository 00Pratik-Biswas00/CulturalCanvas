import React from "react";
import SingleStateCulture from ".";
import tajImg from "../../assets/culture/stateCultureBg.png";
import wbImg from "../../assets/states/west-bengal.png";

const ChhattisgarhCuisines = [
  {
    cuisineImage:
      "https://masalaandchai.com/wp-content/uploads/2021/10/Samosa-Chaat-with-Chai.jpg",
    cuisineName: "Chana Samosa",
  },
  {
    cuisineImage:
      "https://reincarnatingraipur.com/wp-content/uploads/2023/07/fara.jpg",
    cuisineName: "Fara",
  },
  {
    cuisineImage:
      "https://mdfoods.net/wp-content/uploads/2022/12/Aamat-june.jpg.webp",
    cuisineName: "Aamat",
  },
  {
    cuisineImage:
      "https://www.pugdundeesafaris.com/blog/wp-content/uploads/2020/03/IMG-20200328-WA0013.jpg",
    cuisineName: "Bafauri",
  },
];

const ChhattisgarhArts = [
  {
    artImage:
      "https://th-i.thgim.com/public/entertainment/music/m8lw1/article25201514.ece/alternates/LANDSCAPE_1200/14SM1TEEJAN2",
    artName: "Pandavani",
  },
  {
    artImage:
      "https://www.gosahin.com/go/p/i/1560193683_raut-nacha-dance.jpg",
    artName: "Raut Nacha",
  },
  {
    artImage:
      "https://housenama.com/cdn/shop/articles/the-art-of-dhokra-handmadeinindia-housenama.jpg?v=1720862777",
    artName: "Dhokra Art",
  },
  {
    artImage:
      "https://s3.ap-south-1.amazonaws.com/abcd-website/images/20231124151815_original_13.webp",
    artName: "Tumba Craft",
  },
];

const ChhattisgarhState = () => {
  return (
    <div>
      <SingleStateCulture
        stateName={["Chhattisgarh"]}
        greetingImg="https://www.responsibletravel.com/imagesClient/S_177290.jpg"
        greetingName={"Nomoskar"}
        stateImg="https://www.techniajz.com/uploads/blog_images/55b642f919ca610716ed2bb3f63a449a-1200x630.jpg"
        stateHistory="
Chhattisgarh, located in central India, was historically part of the ancient Dakshina Kosala region mentioned in epics like the Ramayana. Over centuries, it was ruled by dynasties like the Mauryas, Satavahanas, and Kalachuris, followed by the Haihayas and Marathas.

On November 1, 2000, it became a separate state, carved out of Madhya Pradesh to address its unique cultural and tribal identity. Known as the Rice Bowl of India, Chhattisgarh is celebrated for its tribal traditions, folk arts such as Pandavani and Raut Nacha, and exceptional crafts like Dhokra and Tumba art. The state blends ancient heritage with modern growth."
        stateHistoryVideo={"https://youtu.be/CkZyrYfofHc"}
        cuisineDetails={ChhattisgarhCuisines}
        cuisineCourse={"/learn-Indian-culture/assam-cuisine-course"}
        clothingImg="https://www.utsavpedia.com/wp-content/uploads/2013/07/chhattisgarh-traditional-dress3.jpg"
        clothingDetails={`The traditional attire of Assam reflects its rich heritage. Women often wear the Mekhela Chador, a two-piece garment known for its elegance and typically woven from indigenous silks like Muga, Pat, and Eri. The Mekhela Chador is adorned with intricate handwoven designs that depict folklore, flora, and fauna. Men usually don traditional dhotis paired with Gamosas, a versatile piece of cloth that signifies respect and is used in various ceremonies. The textiles of Assam are deeply woven into its cultural fabric, representing the artistry and skills passed down through generations.`}
        languageImg="https://images.indianexpress.com/2020/02/Chhattisgarh-Education-reforms.jpg"
        languageDetails={`The official language of Assam is Assamese, which is an Indo-Aryan language with a history dating back to the 7th century. The language has a rich literary tradition, with medieval works such as the *Kirtan-ghosa* by the revered saint-poet Sankardev and various works by Madhavdev. Assamese script is derived from the Brahmi script and shares similarities with the Bengali and Odia scripts. The language is known for its melodious tone and significant vocabulary influenced by its diverse ethnic communities.`}
        languageCourse={"/learn-Indian-culture/assamese-course"}
        artsDetails={ChhattisgarhArts}
        artsCourse={"/learn-Indian-culture/assam-art-course"}
      />
    </div>
  );
};

export default ChhattisgarhState;
