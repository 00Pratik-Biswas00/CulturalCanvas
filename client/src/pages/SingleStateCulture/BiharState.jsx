import React from "react";
import SingleStateCulture from ".";
import tajImg from "../../assets/culture/stateCultureBg.png";
import wbImg from "../../assets/states/west-bengal.png";

const BiharCuisines = [
  {
    cuisineImage:
      "https://i0.wp.com/onewholesomemeal.com/wp-content/uploads/2020/01/Litti-Chokha.jpg?fit=864%2C1080&ssl=1",
    cuisineName: "Litti Chokha",
  },
  {
    cuisineImage:
      "https://www.chefkunalkapur.com/wp-content/uploads/2021/12/OZZ_9225-scaled.jpg?v=1639763212",
    cuisineName: "Sattu Paratha",
  },
  {
    cuisineImage:
      "https://i0.wp.com/myspicetrunk.com/wp-content/uploads/2019/10/WhatsApp-Image-2019-10-29-at-4.07.07-PM-2.jpeg?resize=720%2C960&ssl=1",
    cuisineName: "Dal Pitha",
  },
  {
    cuisineImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Thekua_-_Chhath_Festival_-_Kolkata_2013-11-09_4316.JPG/1200px-Thekua_-_Chhath_Festival_-_Kolkata_2013-11-09_4316.JPG",
    cuisineName: "Thekua",
  },
];

const BiharArts = [
  {
    artImage:
      "https://d35l77wxi0xou3.cloudfront.net/opencart/image/productFromFeb2020/Traditional%20Madhubani%20Painting1615964610-600x600.jpg",
    artName: "Madhubani Painting",
  },
  {
    artImage:
      "https://4.imimg.com/data4/XW/HU/MY-4260473/sikki-grass-products-500x500.jpg",
    artName: "Sikki Craft",
  },
  {
    artImage:
      "https://cdn.thisday.app/media/uploads/manjusa.1_0f609dd3-8edc-442a-9af8-b89376697612_1024x1024.jpg-23a190bcd670504d_cmprssd.webp",
    artName: "Manjusha Art",
  },
  {
    artImage:
      "https://i0.wp.com/purbashree.com/wp-content/uploads/2023/12/1-7-1.webp?resize=1024%2C768&ssl=1",
    artName: "Bamboo and Cane Craft",
  },
];

const BiharState = () => {
  return (
    <div>
      <SingleStateCulture
        stateName={["Bihar"]}
        greetingImg="https://arghaghose.wordpress.com/wp-content/uploads/2020/07/bihar-2-1.png?w=783"
        greetingName={"Nomoskar"}
        stateImg="https://bihar.inkhabar.com/wp-content/uploads/2024/05/3-1.png"
        stateHistory="
Bihar, located in eastern India, is a land steeped in history and culture. Once the heart of ancient empires like the Maurya and Gupta, it was also the birthplace of Buddhism and Jainism. The region is home to iconic sites such as Nalanda, an ancient center of learning, and Bodh Gaya, where Buddha attained enlightenment. Bihar's vibrant festivals, traditional crafts, and enduring contributions to Indian history reflect its rich heritage and cultural significance."
        cuisineDetails={BiharCuisines}
        cuisineCourse={"/learn-Indian-culture/assam-cuisine-course"}
        clothingImg="https://4.imimg.com/data4/BD/OS/MY-14187327/img-20160331-wa0023-500x500.jpg"
        clothingDetails={`The traditional attire of Assam reflects its rich heritage. Women often wear the Mekhela Chador, a two-piece garment known for its elegance and typically woven from indigenous silks like Muga, Pat, and Eri. The Mekhela Chador is adorned with intricate handwoven designs that depict folklore, flora, and fauna. Men usually don traditional dhotis paired with Gamosas, a versatile piece of cloth that signifies respect and is used in various ceremonies. The textiles of Assam are deeply woven into its cultural fabric, representing the artistry and skills passed down through generations.`}
        languageImg="https://orientblackswan.com/bigcovers/9789354422041.jpg"
        languageDetails={`The official language of Assam is Assamese, which is an Indo-Aryan language with a history dating back to the 7th century. The language has a rich literary tradition, with medieval works such as the *Kirtan-ghosa* by the revered saint-poet Sankardev and various works by Madhavdev. Assamese script is derived from the Brahmi script and shares similarities with the Bengali and Odia scripts. The language is known for its melodious tone and significant vocabulary influenced by its diverse ethnic communities.`}
        languageCourse={"/learn-Indian-culture/assamese-course"}
        artsDetails={BiharArts}
        artsCourse={"/learn-Indian-culture/assam-art-course"}
      />
    </div>
  );
};

export default BiharState;
