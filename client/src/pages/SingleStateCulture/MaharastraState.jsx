import React from "react";
import SingleStateCulture from ".";

const MaharashtraCuisines = [
  {
    cuisineImage:
      "https://www.msrmarket.in/cdn/shop/products/images_6_3.jpg?v=1649492061",
    cuisineName: "Masala Poha",
  },
  {
    cuisineImage:
      "https://www.spicingyourlife.com/wp-content/uploads/2014/04/Maharashtra-Thalipeeth.jpg",
    cuisineName: "Thalipeeth",
  },
  {
    cuisineImage:
      "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/11/pav-bhaji-500x500.jpg",
    cuisineName: "Pav Bhaji",
  },
  {
    cuisineImage:
      "https://www.spiceindiaonline.com/wp-content/uploads/2008/05/Kathirikkai-Sadam-3.jpg",
    cuisineName: "Vangi Bhath",
  },
];

const MaharashtraArts = [
  {
    artImage:
      "https://yourart.co.in/wp-content/uploads/2021/08/warli_art_banner.jpg",
    artName: "Warli Art",
  },
  {
    artImage:
      "https://t4.ftcdn.net/jpg/07/42/91/05/360_F_742910521_wBHWvWauDGqAFxf3sNe5mx69FhYOVIZs.jpg",
    artName: "Lavani Dance",
  },
  {
    artImage:
      "https://mysilklove.com/cdn/shop/files/1_08f8c757-8b57-4241-ac46-3a7075b8d1ee.jpg?v=1725435387&width=2048",
    artName: "Paithani Saree",
  },
  {
    artImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5fNkAC5j2hEYSw_CF9xJ5eawlGZJcWff7UjhjeODFYhTVM_oEENVHECbxoP8PGkaP5r4&usqp=CAU",
    artName: "Pune Forts",
  },
];

const MaharashtraState = () => {
  return (
    <div>
      <SingleStateCulture
        stateName={["Maharashtra"]}
        greetingImg="https://www.holidify.com/images/cmsuploads/articles/458.jpg"
        greetingName={"Namaskar"}
        stateImg="https://as2.ftcdn.net/v2/jpg/03/16/76/07/1000_F_316760792_N8EioEZe6cOOTe0IrqRXe14sjT3rprY2.jpg"
        stateHistory="
Maharashtra, located in western India, is known for its rich history, cultural diversity, and vibrant traditions. The state has been home to many dynasties, including the Marathas, who shaped its history. Maharashtra is famous for its bustling metropolis, Mumbai, the entertainment capital of India. The state’s landscape ranges from the Sahyadri mountain ranges to the Konkan coast. Its festivals like Ganesh Chaturthi and Gudi Padwa reflect the state's strong cultural and religious roots. Maharashtra is also recognized for its contributions to Marathi literature, theater, and arts."
        stateHistoryVideo={"https://youtu.be/GR18bCpvjeY"}
        cuisineDetails={MaharashtraCuisines}
        cuisineCourse={"/learn-Indian-culture/maharashtra-cuisine-course"}
        clothingImg="https://mysilklove.com/cdn/shop/files/1_08f8c757-8b57-4241-ac46-3a7075b8d1ee.jpg?v=1725435387&width=2048"
        clothingDetails={`Maharashtra's traditional attire is elegant and varied across regions. Women wear the Nauvari saree, a nine-yard saree traditionally draped in a unique style. This is often paired with a traditional blouse and jewelry. Men typically wear dhotis or kurta-pajamas with a headgear called "Pheta" for formal occasions. The attire represents the state's rich heritage and is often seen during festivals like Ganesh Chaturthi and Gudi Padwa. The vibrant colors and intricate designs reflect Maharashtra’s cultural significance.`}
        languageImg="https://media.assettype.com/esakal%2F2022-02%2F6c44f4a8-8bd3-463b-93e1-9b2d0998b132%2FMarathi_Calligraphy.png"
        languageDetails={`The official language of Maharashtra is Marathi, an Indo-Aryan language with a rich literary history. It has a significant body of literature, including works by saints like Sant Tukaram and modern poets like Vijay Tendulkar. Marathi is written in the Devanagari script and is spoken by millions of people across the state. Known for its melodious intonations, Marathi has a strong presence in the performing arts and cinema, especially in theater and Marathi films.`}
        languageCourse={"/learn-Indian-culture/marathi-course"}
        artsDetails={MaharashtraArts}
        artsCourse={"/learn-Indian-culture/maharashtra-art-course"}
      />
    </div>
  );
};

export default MaharashtraState;
