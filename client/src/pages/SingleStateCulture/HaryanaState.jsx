import React from "react";
import SingleStateCulture from ".";

const HaryanaCuisines = [
  {
    cuisineImage:
      "https://www.vegrecipesofindia.com/wp-content/uploads/2012/01/punjabi-kadhi-pakora-recipe-easy.jpg",
    cuisineName: "Kadhi Pakora",
  },
  {
    cuisineImage:
      "https://reincarnatingraipur.com/wp-content/uploads/2023/07/fara.jpg",
    cuisineName: "Bathua Raita",
  },
  {
    cuisineImage:
      "https://themagicsaucepan.com/wp-content/uploads/2018/04/20180405-Besan-masala-ki-roti-0953.jpg",
    cuisineName: "Besan Masala Roti",
  },
  {
    cuisineImage:
      "https://www.jiwa.in/cdn/shop/articles/YUc_JIWA_smm_188_900x.jpg?v=1673092222",
    cuisineName: "Raabri",
  },
];

const HaryanaArts = [
  {
    artImage: "https://miro.medium.com/max/1000/1*fQtB756C-SfRU57LiA1l7g.jpeg",
    artName: "Phulkari Embroidery",
  },
  {
    artImage: "https://www.camelcraft.com/haryana-crafts.jpg",
    artName: "Pottery",
  },
  {
    artImage:
      "https://cld.accentuate.io/94345363643/1669311312474/Untitled.002.png?v=1669311312475&options=w_550",
    artName: "Weaving",
  },
  {
    artImage:
      "https://kalankit.com/wp-content/uploads/haryana-medieval-art-heritage-showcase-1-1.jpg.webp",
    artName: "Murals and Sculptures",
  },
];

const HaryanaState = () => {
  return (
    <div>
      <SingleStateCulture
        stateName={["Haryana"]}
        greetingImg="https://www.responsibletravel.com/imagesClient/S_177290.jpg"
        greetingName={"Sat Shri Akal "}
        stateImg="https://t3.ftcdn.net/jpg/02/13/91/24/360_F_213912437_0UH7CTZWyyyytON45X8CBP6sxtA8mlWd.jpg"
        stateHistory="
Haryana, a state in northern India, has a rich and ancient history. It was once part of the Indus Valley Civilization and later mentioned in the epic Mahabharata as the 'Bahudanayak Region.' Throughout history, it has been ruled by various dynasties, including the Mauryas, Guptas, and Mughals. Significant battles like the Battle of Tarain and the Battle of Panipat were fought on its soil. After India's independence, Haryana was carved out of Punjab in 1966, recognizing the distinct linguistic and cultural identity of its Hindi-speaking population. Today, it is known for its rapid development in agriculture, industry, and education."
        stateHistoryVideo={"https://youtu.be/CkZyrYfofHc"}
        cuisineDetails={HaryanaCuisines}
        cuisineCourse={"/learn-Indian-culture/assam-cuisine-course"}
        clothingImg="https://www.bookmycostume.com/cdn/shop/files/3134202_2_ab3503f8-7f83-4768-8fc4-d191384ba77a_2000x.jpg"
        clothingDetails={`Haryana's traditional attire reflects its rural roots and the simplicity of its people. Men typically wear dhotis, a long piece of cloth wrapped around the waist and legs, paired with a kurta, a long shirt. White is a popular color for men's attire, symbolizing purity and simplicity. Women often wear colorful lehengas, a long, flowing skirt, paired with a choli, a fitted blouse. They also wear dupattas, long scarves, which can be draped in various ways. Traditional jewelry, such as bangles, necklaces, and earrings, completes the look. While modern clothing has become more prevalent, traditional attire is still cherished and worn on special occasions.`}
        languageImg="https://www.omniglot.com/images/writing/haryanvi1.gif"
        languageDetails={`Haryanvi, a vibrant and colorful language, is primarily spoken in the Indian state of Haryana and parts of Delhi. It belongs to the Indo-Aryan language family and is closely related to Hindi. Haryanvi is characterized by its unique accent, vocabulary, and rhythmic speech patterns. While Hindi is the official language of Haryana, Haryanvi remains deeply ingrained in the cultural identity of the people. It is widely used in everyday conversations, folk songs, and traditional storytelling.`}
        languageCourse={"/learn-Indian-culture/assamese-course"}
        artsDetails={HaryanaArts}
        artsCourse={"/learn-Indian-culture/assam-art-course"}
      />
    </div>
  );
};

export default HaryanaState;
