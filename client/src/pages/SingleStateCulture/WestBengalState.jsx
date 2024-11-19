import React from "react";
import SingleStateCulture from ".";
import tajImg from "../../assets/culture/stateCultureBg.png";
import wbImg from "../../assets/states/west-bengal.png";

const WestBengalCuisines = [
  {
    cuisineImage: tajImg,
    cuisineName: "Roshogolla",
  },
  {
    cuisineImage: tajImg,
    cuisineName: "Shorshe Ilish",
  },
  {
    cuisineImage: tajImg,
    cuisineName: "Macher Jhol",
  },
  {
    cuisineImage: tajImg,
    cuisineName: "Sandesh",
  },
];

const WestBengalArts = [
  {
    cuisineImage: tajImg,
    cuisineName: "Rabindra Sangeet",
  },
  {
    cuisineImage: tajImg,
    cuisineName: "Bengal Pattachitra",
  },
  {
    cuisineImage: tajImg,
    cuisineName: "Terracotta Art",
  },
  {
    cuisineImage: tajImg,
    cuisineName: "Classical Dance Forms",
  },
];

const WestBengalState = () => {
  return (
    <div>
      <SingleStateCulture
        stateName={["West", "Bengal"]}
        greetingImg={tajImg}
        greetingName={"Nomoshkar"}
        stateImg={wbImg}
        stateHistory={`West Bengal, located in eastern India, has a rich cultural history intertwined with art, literature, and the freedom struggle. The state is renowned for its contribution to Indian literature, especially through the works of Nobel laureate Rabindranath Tagore, who shaped Bengali identity with his poetry, music, and plays. The state capital, Kolkata, was the center of the British Raj and is known as the "Cultural Capital of India" for its intellectual and artistic heritage. Iconic landmarks include the Victoria Memorial, Howrah Bridge, and the Indian Museum.`}
        stateHistoryVideo={"https://youtu.be/example-westbengal-history"}
        cuisineDetails={WestBengalCuisines}
        cuisineCourse={"/learn-Indian-culture/westbengal-cuisine-course"}
        clothingImg={wbImg}
        clothingDetails={`Traditional clothing in West Bengal reflects its rich heritage and artistic craftsmanship. Women traditionally wear sarees such as the elegant *Tant* and the opulent *Baluchari*, known for their intricate motifs depicting stories and myths. The men often wear *dhoti* and *kurta*, with *Panjabi* being popular for festivals. The use of muslin fabric, historically famous as 'woven air,' also adds to the textile legacy.`}
        languageImg={wbImg}
        languageDetails={`Bengali, the official language of West Bengal, is one of the most spoken languages in the world and has a deep literary history. It is written in the Bengali script and boasts an impressive body of work from poets, authors, and playwrights. The language is known for its melodious tone and expressive capacity, exemplified in the works of poets like Kazi Nazrul Islam and novelists like Sarat Chandra Chattopadhyay.`}
        languageCourse={"/learn-Indian-culture/bengali-course"}
        artsDetails={WestBengalArts}
        artsCourse={"/learn-Indian-culture/westbengal-art-course"}
      />
    </div>
  );
};

export default WestBengalState;
