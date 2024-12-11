import React from "react";
import SingleStateCulture from ".";
import tajImg from "../../assets/culture/stateCultureBg.png";
import wbImg from "../../assets/states/west-bengal.png";

const WestBengalCuisines = [
  {
    cuisineImage:
      "https://www.jcookingodyssey.com/wp-content/uploads/2013/06/IMG_0970-1-1024x682.jpg",
    cuisineName: "Roshogolla",
  },
  {
    cuisineImage: "https://notoutofthebox.in/wp-content/uploads/2014/09/sh.jpg",
    cuisineName: "Shorshe Ilish",
  },
  {
    cuisineImage:
      "https://www.archanaskitchen.com//images/archanaskitchen/1-Author/Karthika_Gopalakrishnan/Aar_macher_Jhol.jpg",
    cuisineName: "Macher Jhol",
  },
  {
    cuisineImage:
      "https://madscookhouse.com/wp-content/uploads/2021/02/Chicken-Kathi-Roll.jpg",
    cuisineName: "Kathi Roll",
  },
];

const WestBengalArts = [
  {
    artImage:
      "https://i.scdn.co/image/ab67616d0000b2737402916987c1811c4f4d3ca9",
    artName: "Rabindra Sangeet",
  },
  {
    artImage:
      "https://d35l77wxi0xou3.cloudfront.net/opencart/image/productFromFeb2020/BENGAL%20PATTACHITRA%20ART-%20SCROLL%20FORM1605076788-600x600.png",
    artName: "Bengal Pattachitra",
  },
  {
    artImage:
      "https://www.sowpeace.in/cdn/shop/products/three-women-terracotta-wall-artterracotta-wallartsowpeaceterr-terr-wd-ttaw-593868.jpg?v=1697924711",
    artName: "Terracotta Art",
  },
  {
    artImage:
      "https://dastkarihaat.com/cdn/shop/products/Kalighatpainting_fromWestBengal_by_RadhaChitrakar_LAT02.2_1024x.jpg?v=1650963699",
    artName: "Kalighat Paintings",
  },
];

const WestBengalState = () => {
  return (
    <div>
      <SingleStateCulture
        stateName={["West", "Bengal"]}
        greetingImg="https://www.dishanews.com/wp-content/uploads/2018/10/Bengali_traditional_dress_20170828095042.jpg"
        greetingName={"Nomoshkar"}
        stateImg="https://www.thisismyindia.com/images/west-bengal/durga-puja.jpg"
        stateHistory="
West Bengal, located in eastern India, has a rich history shaped by its ancient civilizations, including the Mauryan and Gupta empires. In the medieval period, it was ruled by the Bengal Sultanate and became a major center for trade and culture. Under British colonial rule, Kolkata became the capital of British India, and the region saw the rise of the Bengali Renaissance, with figures like Rabindranath Tagore leading social and cultural reforms. After India’s independence in 1947, Bengal was divided into West Bengal and East Bengal (now Bangladesh), leading to significant migration and tensions. Post-independence, West Bengal experienced political shifts, including the long rule of the Communist Party, and has evolved into a hub for culture, arts, and economic growth."
        stateHistoryVideo={"https://youtu.be/example-westbengal-history"}
        cuisineDetails={WestBengalCuisines}
        cuisineCourse={"/learn-Indian-culture/westbengal-cuisine-course"}
        clothingImg="https://static.toiimg.com/photo/msid-66092225,width-96,height-65.cms"
        clothingDetails={`Traditional clothing in West Bengal reflects its rich heritage and artistic craftsmanship. Women traditionally wear sarees such as the elegant *Tant* and the opulent *Baluchari*, known for their intricate motifs depicting stories and myths. The men often wear *dhoti* and *kurta*, with *Panjabi* being popular for festivals. The use of muslin fabric, historically famous as 'woven air,' also adds to the textile legacy.`}
        languageImg="https://www.planeta.com/wp-content/uploads/2020/02/bangla-scaled.jpg"
        languageDetails={`Bengali, the official language of West Bengal, is one of the most spoken languages in the world and has a deep literary history. It is written in the Bengali script and boasts an impressive body of work from poets, authors, and playwrights. The language is known for its melodious tone and expressive capacity, exemplified in the works of poets like Kazi Nazrul Islam and novelists like Sarat Chandra Chattopadhyay.`}
        languageCourse={"/learn-Indian-culture/bengali-course"}
        artsDetails={WestBengalArts}
        artsCourse={"/learn-Indian-culture/westbengal-art-course"}
      />
    </div>
  );
};

export default WestBengalState;
