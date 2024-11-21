// home
import heritageImg from "./../../assets/Home/heritage.avif";
import cultureImg from "./../../assets/Home/culture.avif";
import learnImg from "./../../assets/Home/learn.avif";
import exploreImg from "./../../assets/Home/exploreDiversity.avif";
import blogsImg from "./../../assets/Home/blogs.avif";
import virtualStoreImg from "./../../assets/Home/virtual.avif";

// culture

import langImg from "./../../assets/culture/language.avif";
import religiousImg from "./../../assets/culture/religious.avif";
import cuisineImg from "./../../assets/culture/cuisine.avif";
import festivalImg from "./../../assets/culture/festival.avif";
import greetingImg from "./../../assets/culture/greeting.avif";
import weddingImg from "./../../assets/culture/wedding.avif";

// courses

import BengaliLangImg from "./../../assets/courses/BengaliLang.png";

// states

import assamImg from "./../../assets/states/assam.png";
import karnatakaImg from "./../../assets/states/karnataka.png";
import meghalayaImg from "./../../assets/states/meghalaya.png";
import uttarpradeshImg from "./../../assets/states/uttar-pradesh.png";
import andhrapradeshImg from "./../../assets/states/andhra-pradesh.png";
import arunachalpradeshImg from "./../../assets/states/arunachal-pradesh.png";
import biharImg from "./../../assets/states/bihar.png";
import chhattisgarhImg from "./../../assets/states/Chhattisgarh.png";
import goaImg from "./../../assets/states/Goa.png";
import gujaratImg from "./../../assets/states/Gujarat.png";
import haryanaImg from "./../../assets/states/Haryana.png";
import himachalpradeshImg from "./../../assets/states/himachal-pradesh.png";
import jharkhandImg from "./../../assets/states/Jharkhand.png";
import keralaImg from "./../../assets/states/Kerala.png";
import madhyapradeshImg from "./../../assets/states/madhya-pradesh.png";
import maharashtraImg from "./../../assets/states/Maharashtra.png";
import manipurImg from "./../../assets/states/Manipur.png";
import mizoramImg from "./../../assets/states/Mizoram.png";
import nagalandImg from "./../../assets/states/Nagaland.png";
import odishaImg from "./../../assets/states/Odisha.png";
import punjabImg from "./../../assets/states/Punjab.png";
import rajasthanImg from "./../../assets/states/Rajasthan.png";
import sikkimImg from "./../../assets/states/Sikkim.png";
import tamilnaduImg from "./../../assets/states/Tamil-Nadu.png";
import telanganaImg from "./../../assets/states/Telangana.png";
import tripuraImg from "./../../assets/states/Tripura.png";
import uttarakhandImg from "./../../assets/states/Uttarakhand.png";
import wbImg from "./../../assets/states/west-bengal.png";
import jkImg from "./../../assets/states/Jammu.png";
import andamanImg from "./../../assets/states/andaman.png";
import chandigarhImg from "./../../assets/states/chandigarh.png";
import dadraImg from "./../../assets/states/dadra.png";
import delhiImg from "./../../assets/states/Delhi.png";
import puducherryImg from "./../../assets/states/puducherry.png";
import ladakhImg from "./../../assets/states/ladakh.png";
import lakshadweepImg from "./../../assets/states/lakshya.png";

export const Static_Information = {
  en: {
    translation: {
      // -------------------------- COMMON STATIC NAMES ---------------------------
      CommonStaticInfo: {
        cultureCalendarHeading: "📆Cultural Calendar of India",
        ourGreeting: "Our Greeting",
        briefHistory: "Brief History",
        briefHistoryPara: "Discover the rich heritage and story of the region",
        cuisines: "Cuisines",
        cuisinesPara: "Taste the flavors that define culture and tradition",
        clothings: "Clothing",
        clothingPara:
          "Explore iconic attire reflecting heritage and local identity",
        languages: "Language",
        languagesPara:
          "Dive into the linguistic treasures shaping communication and culture",
        artsCrafts: "Arts & Crafts",
        artsCraftsPara:
          "Uncover timeless creativity through handcrafted masterpieces and traditions",
        buttonWantToKnowMore: "Want to know more?",
        buttonWantToCook: "Want to cook?",
      },

      // -------------------------- HOME ---------------------------
      HomeData: {
        homeButtonName: "VISIT",
        Home: [
          {
            para: `Dive deep into India’s historical and cultural wealth by exploring its most celebrated World Heritage Sites. This section is dedicated to the architectural and natural marvels that have stood the test of time, each narrating a story of its own. From the majestic forts that once guarded kingdoms to the sacred temp`,
            image: heritageImg,
            shadow: "shadow-highlight",
            headingName: "Unveiling India’s Timeless Treasures",
            buttonLink: "/heritage",
            featuringData: [
              {
                featureName: "Local Indian Heritages",
              },
              {
                featureName: "UNESCO Unlisted Indian Heritages",
              },
              {
                featureName: "UNESCO Listed Indian Heritages",
              },
            ],
          },
          {
            para: `Dive deep into India’s historical and cultural wealth by exploring its most celebrated World Heritage Sites. This section is dedicated to the architectural and natural marvels that have stood the test of time, each narrating a story of its own. From the majestic forts that once guarded kingdoms to the sacred temp`,
            image: cultureImg,
            shadow: "shadow-dark_secondary_text",
            headingName: "Experience the Living Tapestry of India’s Culture",
            buttonLink: "/culture-tradition",
            featuringData: [
              {
                featureName: "Indian Cultural Calendar",
              },
              {
                featureName: "Types of Indian Cultures",
              },
              {
                featureName: "State-Wise Indian Cultures",
              },
            ],
          },
          {
            para: `Dive deep into India’s historical and cultural wealth by exploring its most celebrated World Heritage Sites. This section is dedicated to the architectural and natural marvels that have stood the test of time, each narrating a story of its own. From the majestic forts that once guarded kingdoms to the sacred temp`,
            image: learnImg,
            shadow: "shadow-highlight_hover",
            headingName:
              "Dive Deep into the Rich Tapestry of Indian Traditions",
            buttonLink: "/learn-Indian-culture",
            featuringData: [
              {
                featureName: "Learn Different Languages",
              },
              {
                featureName: "Learn Different Cuisines",
              },
              {
                featureName: "Learn Different Arts",
              },
              {
                featureName: "Learn Different Sports",
              },
            ],
          },
          {
            para: `Dive deep into India’s historical and cultural wealth by exploring its most celebrated World Heritage Sites. This section is dedicated to the architectural and natural marvels that have stood the test of time, each narrating a story of its own. From the majestic forts that once guarded kingdoms to the sacred temp`,
            image: exploreImg,
            shadow: "shadow-highlight",
            headingName: "Craft Your Perfect Indian Adventure",
            buttonLink: "/explore-diversity",
            featuringData: [
              {
                featureName: "Predict Tour Budgets",
              },
              {
                featureName: "Create Personal Itinerary",
              },
              {
                featureName: "Explore Nearest Attractions",
              },
              {
                featureName: "Transcribe Ancient Scripts",
              },
              {
                featureName: "Personalized Story Telling",
              },
            ],
          },
          {
            para: `Dive deep into India’s historical and cultural wealth by exploring its most celebrated World Heritage Sites. This section is dedicated to the architectural and natural marvels that have stood the test of time, each narrating a story of its own. From the majestic forts that once guarded kingdoms to the sacred temp`,
            image: blogsImg,
            shadow: "shadow-dark_secondary_text",
            headingName: "Explore India Through the Eyes of Fellow Travelers",
            buttonLink: "/blogs-vlogs",
            featuringData: [
              {
                featureName: "Upload Blogs & Vlogs",
              },
              {
                featureName: "Read/Listen Different Contents",
              },
            ],
          },
          {
            para: `Dive deep into India’s historical and cultural wealth by exploring its most celebrated World Heritage Sites. This section is dedicated to the architectural and natural marvels that have stood the test of time, each narrating a story of its own. From the majestic forts that once guarded kingdoms to the sacred temp`,
            image: virtualStoreImg,
            shadow: "shadow-highlight_hover",
            headingName: "Bring a Piece of India’s Heritage Home",
            buttonLink: "/virtual-store",
            featuringData: [
              {
                featureName: "Buy Antique Products",
              },
            ],
          },
        ],
      },

      // ------------------------- CULTURE & TRADITION --------------

      AllCulturesData: {
        allCultureHeading: "Cultural Richness of India🪔",
        AllCulturesName: [
          {
            cultureImg: weddingImg,
            cultureIntro: `Celebrate India’s artistic heritage, from classical to contemporary 🎨`,
            cultureName: "Arts",
            individualPage: "/culture-tradition/id",
          },
          {
            cultureImg: weddingImg,
            cultureIntro: `Unravel the elegance of India’s traditional and modern attire 🥻`,
            cultureName: "Clothing",
            individualPage: "/culture-tradition/clothing-culture",
          },
          {
            cultureImg: cuisineImg,
            cultureIntro: `Savor the flavors of India’s iconic dishes and regional delights 🍛`,
            cultureName: "Cuisines",
            individualPage: "/culture-tradition/id",
          },

          {
            cultureImg: weddingImg,
            cultureIntro: `Dive into the traditions of Indian families and majestic weddings 🏠`,
            cultureName: "Family Structures & Weddings",
            individualPage: "/culture-tradition/id",
          },
          {
            cultureImg: festivalImg,
            cultureIntro: `Experience the vibrance of India’s grand festivals and celebrations 🥳`,
            cultureName: "Festivals",
            individualPage: "/culture-tradition/id",
          },
          {
            cultureImg: greetingImg,
            cultureIntro: `Learn the warmth and meaning behind India’s unique ways of greeting 🙏`,
            cultureName: "Greetings",
            individualPage: "/culture-tradition/id",
          },
          {
            cultureImg: langImg,
            cultureIntro: `Explore India’s linguistic treasures and the beauty of its 22 official languages 🌐`,
            cultureName: "Languages",
            individualPage: "/culture-tradition/single-page",
          },
          {
            cultureImg: religiousImg,
            cultureIntro: `Discover the spiritual essence of India’s diverse faiths and traditions 🛐`,
            cultureName: "Religion",
            individualPage: "/culture-tradition/multiple-pages",
          },
          {
            cultureImg: weddingImg,
            cultureIntro: `Explore India’s love for sports, from cricket to ancient martial arts 🏑`,
            cultureName: "Sports",
            individualPage: "/culture-tradition/sport-culture",
          },
        ],
      },

      StateCulturesData: {
        stateHeading: "India's Cultural Odyssey: State-Wise🗺️",
        AllStatesName: [
          {
            stateImg: andhrapradeshImg,
            stateName: "1. Andhra Pradesh",
            individualPage: "/culture-tradition/andhra-pradesh-state",
          },
          {
            stateImg: arunachalpradeshImg,
            stateName: "2. Arunachal Pradesh",
            individualPage: "/culture-tradition/arunachal-pradesh-state",
          },
          {
            stateImg: assamImg,
            stateName: "3. Assam",
            individualPage: "/culture-tradition/assam-state",
          },
          {
            stateImg: biharImg,
            stateName: "4. Bihar",
            individualPage: "/culture-tradition/bihar-state",
          },
          {
            stateImg: chhattisgarhImg,
            stateName: "5. Chhattisgarh",
            individualPage: "/culture-tradition/chhattisgarh-state",
          },
          {
            stateImg: goaImg,
            stateName: "6. Goa",
            individualPage: "/culture-tradition/goa-state",
          },
          {
            stateImg: gujaratImg,
            stateName: "7. Gujarat",
            individualPage: "/culture-tradition/gujarat-state",
          },
          {
            stateImg: haryanaImg,
            stateName: "8. Haryana",
            individualPage: "/culture-tradition/haryana-state",
          },
          {
            stateImg: himachalpradeshImg,
            stateName: "9. Himachal Pradesh",
            individualPage: "/culture-tradition/himachal-pradesh-state",
          },
          {
            stateImg: jharkhandImg,
            stateName: "10. Jharkhand",
            individualPage: "/culture-tradition/jharkhand-state",
          },
          {
            stateImg: karnatakaImg,
            stateName: "11. Karnataka",
            individualPage: "/culture-tradition/karnataka-state",
          },
          {
            stateImg: keralaImg,
            stateName: "12. Kerala",
            individualPage: "/culture-tradition/kerala-state",
          },
          {
            stateImg: madhyapradeshImg,
            stateName: "13. Madhya Pradesh",
            individualPage: "/culture-tradition/madhya-pradesh-state",
          },
          {
            stateImg: maharashtraImg,
            stateName: "14. Maharashtra",
            individualPage: "/culture-tradition/maharashtra-state",
          },
          {
            stateImg: manipurImg,
            stateName: "15. Manipur",
            individualPage: "/culture-tradition/manipur-state",
          },
          {
            stateImg: meghalayaImg,
            stateName: "16. Meghalaya",
            individualPage: "/culture-tradition/meghalaya-state",
          },
          {
            stateImg: mizoramImg,
            stateName: "17. Mizoram",
            individualPage: "/culture-tradition/mizoram-state",
          },
          {
            stateImg: nagalandImg,
            stateName: "18. Nagaland",
            individualPage: "/culture-tradition/nagaland-state",
          },
          {
            stateImg: odishaImg,
            stateName: "19. Odisha",
            individualPage: "/culture-tradition/odisha-state",
          },
          {
            stateImg: punjabImg,
            stateName: "20. Punjab",
            individualPage: "/culture-tradition/punjab-state",
          },
          {
            stateImg: rajasthanImg,
            stateName: "21. Rajasthan",
            individualPage: "/culture-tradition/rajasthan-state",
          },
          {
            stateImg: sikkimImg,
            stateName: "22. Sikkim",
            individualPage: "/culture-tradition/sikkim-state",
          },
          {
            stateImg: tamilnaduImg,
            stateName: "23. Tamil Nadu",
            individualPage: "/culture-tradition/tamil-nadu-state",
          },
          {
            stateImg: telanganaImg,
            stateName: "24. Telangana",
            individualPage: "/culture-tradition/telangana-state",
          },
          {
            stateImg: tripuraImg,
            stateName: "25. Tripura",
            individualPage: "/culture-tradition/tripura-state",
          },
          {
            stateImg: uttarpradeshImg,
            stateName: "26. Uttar Pradesh",
            individualPage: "/culture-tradition/uttar-pradesh-state",
          },
          {
            stateImg: uttarakhandImg,
            stateName: "27. Uttarakhand",
            individualPage: "/culture-tradition/uttarakhand-state",
          },
          {
            stateImg: wbImg,
            stateName: "28. West Bengal",
            individualPage: "/culture-tradition/west-bengal-state",
          },

          {
            stateImg: andamanImg,
            stateName: "29. Andaman and Nicobar Islands (Union Territory)",
            individualPage: "/culture-tradition/andaman-nicobar-ut",
          },
          {
            stateImg: chandigarhImg,
            stateName: "30. Chandigarh (Union Territory)",
            individualPage: "/culture-tradition/chandigarh-ut",
          },
          {
            stateImg: dadraImg,
            stateName:
              "31. Dadra and Nagar Haveli and Daman and Diu (Union Territory)",
            individualPage: "/culture-tradition/dadra-diu-ut",
          },
          {
            stateImg: delhiImg,
            stateName: "32. Delhi (Union Territory)",
            individualPage: "/culture-tradition/delhi-ut",
          },
          {
            stateImg: jkImg,
            stateName: "33. Jammu and Kashmir (Union Territory)",
            individualPage: "/culture-tradition/jammu-kashmir-ut",
          },
          {
            stateImg: ladakhImg,
            stateName: "34. Ladakh (Union Territory)",
            individualPage: "/culture-tradition/ladakh-ut",
          },
          {
            stateImg: lakshadweepImg,
            stateName: "35. Lakshadweep (Union Territory)",
            individualPage: "/culture-tradition/lakshadweep-ut",
          },
          {
            stateImg: puducherryImg,
            stateName: "36. Puducherry (Union Territory)",
            individualPage: "/culture-tradition/puducherry-ut",
          },
        ],
      },
      AndhraPradeshData: {
        stateName: ["Andhra", "Pradesh"],
        greetingImg: weddingImg,
        greetingName: "Nomoskar",
        stateImg: wbImg,
        stateHistory:
          "Assam, located in the lush northeastern region of India...",
        stateHistoryVideo: "https://youtu.be/CkZyrYfofHc",
        cuisineDetails: [
          {
            cuisineImage: greetingImg,
            cuisineName: "Luchi + Cholar Daal",
          },
          {
            cuisineImage: greetingImg,
            cuisineName: "Bhaat + Daal",
          },
        ],
        cuisineCourse: "/learn-Indian-culture/assam-cuisine-course",
        clothingImg: wbImg,
        clothingDetails:
          "The traditional attire of Assam reflects its rich heritage...",
        languageImg: wbImg,
        languageDetails: "The official language of Assam is Assamese...",
        languageCourse: "/learn-Indian-culture/assamese-course",
        artsDetails: [
          {
            cuisineImage: greetingImg,
            cuisineName: "Bihu Dance",
          },
        ],
        artsCourse: "/learn-Indian-culture/assam-art-course",
      },
    },
  },
  hi: {
    translation: {
      // -------------------------- COMMON STATIC NAMES ---------------------------
      CommonStaticInfo: {
        cultureCalendarHeading: "📆भारत का सांस्कृतिक कैलेंडर",
        ourGreeting: "Our Greeting",
        briefHistory: "Brief History",
        briefHistoryPara: "Discover the rich heritage and story of the region",
        cuisines: "Cuisines",
        cuisinesPara: "Taste the flavors that define culture and tradition",
        clothings: "Clothing",
        clothingPara:
          "Explore iconic attire reflecting heritage and local identity",
        languages: "Language",
        languagesPara:
          "Dive into the linguistic treasures shaping communication and culture",
        artsCrafts: "Arts & Crafts",
        artsCraftsPara:
          "Uncover timeless creativity through handcrafted masterpieces and traditions",
        buttonWantToKnowMore: "Want to know more?",
        buttonWantToCook: "Want to cook?",
      },

      // -------------------------- HOME ---------------------------
      HomeData: {
        homeButtonName: "और जानिये",
        Home: [
          {
            para: `भारत की ऐतिहासिक और सांस्कृतिक संपत्ति में गहराई से समा जाएं, इसके सबसे प्रसिद्ध विश्व धरोहर स्थलों का अन्वेषण करते हुए। यह अनुभाग उन वास्तुकला और प्राकृतिक चमत्कारों को समर्पित है जिन्होंने समय की कसौटी पर खरा उतरते हुए अपनी अलग कहानी सुनाई है। भव्य किलों से लेकर पवित्र मंदिरों तक, जो कभी साम्राज्यों की रक्षा करते थे।`,
            image: heritageImg,
            shadow: "shadow-highlight",
            headingName: "भारत की शाश्वत धरोहरों का अनावरण",
            buttonLink: "/heritage",
            featuringData: [
              { featureName: "स्थानीय भारतीय धरोहर" },
              {
                featureName:
                  "यूनेस्को द्वारा सूचीबद्ध न होने वाली भारतीय धरोहरें",
              },
              { featureName: "यूनेस्को द्वारा सूचीबद्ध भारतीय धरोहरें" },
            ],
          },
          {
            para: `भारत की ऐतिहासिक और सांस्कृतिक संपत्ति में गहराई से समा जाएं, इसके सबसे प्रसिद्ध विश्व धरोहर स्थलों का अन्वेषण करते हुए। यह अनुभाग उन वास्तुकला और प्राकृतिक चमत्कारों को समर्पित है जिन्होंने समय की कसौटी पर खरा उतरते हुए अपनी अलग कहानी सुनाई है। भव्य किलों से लेकर पवित्र मंदिरों तक, जो कभी साम्राज्यों की रक्षा करते थे।`,
            image: cultureImg,
            shadow: "shadow-dark_secondary_text",
            headingName: "भारत की संस्कृति के जीवित चित्रपट का अनुभव करें",
            buttonLink: "/culture-tradition",
            featuringData: [
              { featureName: "भारतीय सांस्कृतिक कैलेंडर" },
              { featureName: "भारतीय संस्कृतियों के प्रकार" },
              { featureName: "राज्य-वार भारतीय संस्कृतियां" },
            ],
          },
          {
            para: `भारत की ऐतिहासिक और सांस्कृतिक संपत्ति में गहराई से समा जाएं, इसके सबसे प्रसिद्ध विश्व धरोहर स्थलों का अन्वेषण करते हुए। यह अनुभाग उन वास्तुकला और प्राकृतिक चमत्कारों को समर्पित है जिन्होंने समय की कसौटी पर खरा उतरते हुए अपनी अलग कहानी सुनाई है। भव्य किलों से लेकर पवित्र मंदिरों तक, जो कभी साम्राज्यों की रक्षा करते थे।`,
            image: learnImg,
            shadow: "shadow-highlight_hover",
            headingName: "भारत की परंपराओं के समृद्ध चित्रपट में गहरे उतरें",
            buttonLink: "/learn-Indian-culture",
            featuringData: [
              { featureName: "विभिन्न भाषाएं सीखें" },
              { featureName: "विभिन्न व्यंजन सीखें" },
              { featureName: "विभिन्न कला रूप सीखें" },
              { featureName: "विभिन्न खेल सीखें" },
            ],
          },
          {
            para: `भारत की ऐतिहासिक और सांस्कृतिक संपत्ति में गहराई से समा जाएं, इसके सबसे प्रसिद्ध विश्व धरोहर स्थलों का अन्वेषण करते हुए। यह अनुभाग उन वास्तुकला और प्राकृतिक चमत्कारों को समर्पित है जिन्होंने समय की कसौटी पर खरा उतरते हुए अपनी अलग कहानी सुनाई है। भव्य किलों से लेकर पवित्र मंदिरों तक, जो कभी साम्राज्यों की रक्षा करते थे।`,
            image: exploreImg,
            shadow: "shadow-highlight",
            headingName: "अपनी आदर्श भारतीय यात्रा बनाएं",
            buttonLink: "/explore-diversity",
            featuringData: [
              { featureName: "यात्रा बजट का पूर्वानुमान करें" },
              { featureName: "व्यक्तिगत यात्रा कार्यक्रम बनाएं" },
              { featureName: "निकटतम आकर्षणों का अन्वेषण करें" },
              { featureName: "प्राचीन लिपियों का लिप्यंतरण करें" },
              { featureName: "व्यक्तिगत कहानी सुनाना" },
            ],
          },
          {
            para: `भारत की ऐतिहासिक और सांस्कृतिक संपत्ति में गहराई से समा जाएं, इसके सबसे प्रसिद्ध विश्व धरोहर स्थलों का अन्वेषण करते हुए। यह अनुभाग उन वास्तुकला और प्राकृतिक चमत्कारों को समर्पित है जिन्होंने समय की कसौटी पर खरा उतरते हुए अपनी अलग कहानी सुनाई है। भव्य किलों से लेकर पवित्र मंदिरों तक, जो कभी साम्राज्यों की रक्षा करते थे।`,
            image: blogsImg,
            shadow: "shadow-dark_secondary_text",
            headingName: "भारत को सहयात्री के दृष्टिकोण से अन्वेषण करें",
            buttonLink: "/blogs-vlogs",
            featuringData: [
              { featureName: "ब्लॉग्स और व्लॉग्स अपलोड करें" },
              { featureName: "विभिन्न सामग्री पढ़ें/सुनें" },
            ],
          },
          {
            para: `भारत की ऐतिहासिक और सांस्कृतिक संपत्ति में गहराई से समा जाएं, इसके सबसे प्रसिद्ध विश्व धरोहर स्थलों का अन्वेषण करते हुए। यह अनुभाग उन वास्तुकला और प्राकृतिक चमत्कारों को समर्पित है जिन्होंने समय की कसौटी पर खरा उतरते हुए अपनी अलग कहानी सुनाई है। भव्य किलों से लेकर पवित्र मंदिरों तक, जो कभी साम्राज्यों की रक्षा करते थे।`,
            image: virtualStoreImg,
            shadow: "shadow-highlight_hover",
            headingName: "भारत की धरोहर का एक टुकड़ा अपने घर लाएं",
            buttonLink: "/virtual-store",
            featuringData: [{ featureName: "प्राचीन उत्पाद खरीदें" }],
          },
        ],
      },

      // ------------------------- CULTURE & TRADITION --------------

      AllCulturesData: {
        allCultureHeading: "भारत की सांस्कृतिक समृद्धि🪔",
        AllCulturesName: [
          {
            cultureImg: weddingImg,
            cultureIntro: `Celebrate India’s artistic heritage, from classical to contemporary 🎨`,
            cultureName: "Arts",
            individualPage: "/culture-tradition/id",
          },
          {
            cultureImg: weddingImg,
            cultureIntro: `भारत के पारंपरिक और आधुनिक परिधानों की खूबसूरती को देखें 🥻`,
            cultureName: "वस्त्र",
            individualPage: "/culture-tradition/clothing-culture",
          },
          {
            cultureImg: cuisineImg,
            cultureIntro: `Savor the flavors of India’s iconic dishes and regional delights 🍛`,
            cultureName: "Cuisines",
            individualPage: "/culture-tradition/id",
          },

          {
            cultureImg: weddingImg,
            cultureIntro: `Dive into the traditions of Indian families and majestic weddings 🏠`,
            cultureName: "Family Structures & Weddings",
            individualPage: "/culture-tradition/id",
          },
          {
            cultureImg: festivalImg,
            cultureIntro: `Experience the vibrance of India’s grand festivals and celebrations 🥳`,
            cultureName: "Festivals",
            individualPage: "/culture-tradition/id",
          },
          {
            cultureImg: greetingImg,
            cultureIntro: `Learn the warmth and meaning behind India’s unique ways of greeting 🙏`,
            cultureName: "Greetings",
            individualPage: "/culture-tradition/id",
          },
          {
            cultureImg: langImg,
            cultureIntro: `Explore India’s linguistic treasures and the beauty of its 22 official languages 🌐`,
            cultureName: "Languages",
            individualPage: "/culture-tradition/single-page",
          },
          {
            cultureImg: religiousImg,
            cultureIntro: `Discover the spiritual essence of India’s diverse faiths and traditions 🛐`,
            cultureName: "Religion",
            individualPage: "/culture-tradition/multiple-pages",
          },
          {
            cultureImg: weddingImg,
            cultureIntro: `Explore India’s love for sports, from cricket to ancient martial arts 🏑`,
            cultureName: "Sports",
            individualPage: "/culture-tradition/sport-culture",
          },
        ],
      },

      StateCulturesData: {
        stateHeading: "भारत की सांस्कृतिक यात्रा: राज्यवार🗺️",
        AllStatesName: [
          {
            stateImg: andhrapradeshImg,
            stateName: "1. आंध्र प्रदेश",
            individualPage: "/culture-tradition/andhra-pradesh-state",
          },
          {
            stateImg: arunachalpradeshImg,
            stateName: "2. अरुणाचल प्रदेश",
            individualPage: "/culture-tradition/arunachal-pradesh-state",
          },
          {
            stateImg: assamImg,
            stateName: "3. असम",
            individualPage: "/culture-tradition/assam-state",
          },
          {
            stateImg: biharImg,
            stateName: "4. बिहार",
            individualPage: "/culture-tradition/bihar-state",
          },
          {
            stateImg: chhattisgarhImg,
            stateName: "5. छत्तीसगढ़",
            individualPage: "/culture-tradition/chhattisgarh-state",
          },
          {
            stateImg: goaImg,
            stateName: "6. गोवा",
            individualPage: "/culture-tradition/goa-state",
          },
          {
            stateImg: gujaratImg,
            stateName: "7. गुजरात",
            individualPage: "/culture-tradition/gujarat-state",
          },
          {
            stateImg: haryanaImg,
            stateName: "8. हरियाणा",
            individualPage: "/culture-tradition/haryana-state",
          },
          {
            stateImg: himachalpradeshImg,
            stateName: "9. हिमाचल प्रदेश",
            individualPage: "/culture-tradition/himachal-pradesh-state",
          },
          {
            stateImg: jharkhandImg,
            stateName: "10. झारखंड",
            individualPage: "/culture-tradition/jharkhand-state",
          },
          {
            stateImg: karnatakaImg,
            stateName: "11. कर्नाटक",
            individualPage: "/culture-tradition/karnataka-state",
          },
          {
            stateImg: keralaImg,
            stateName: "12. केरल",
            individualPage: "/culture-tradition/kerala-state",
          },
          {
            stateImg: madhyapradeshImg,
            stateName: "13. मध्य प्रदेश",
            individualPage: "/culture-tradition/madhya-pradesh-state",
          },
          {
            stateImg: maharashtraImg,
            stateName: "14. महाराष्ट्र",
            individualPage: "/culture-tradition/maharashtra-state",
          },
          {
            stateImg: manipurImg,
            stateName: "15. मणिपुर",
            individualPage: "/culture-tradition/manipur-state",
          },
          {
            stateImg: meghalayaImg,
            stateName: "16. मेघालय",
            individualPage: "/culture-tradition/meghalaya-state",
          },
          {
            stateImg: mizoramImg,
            stateName: "17. मिजोरम",
            individualPage: "/culture-tradition/mizoram-state",
          },
          {
            stateImg: nagalandImg,
            stateName: "18. नागालैंड",
            individualPage: "/culture-tradition/nagaland-state",
          },
          {
            stateImg: odishaImg,
            stateName: "19. ओडिशा",
            individualPage: "/culture-tradition/odisha-state",
          },
          {
            stateImg: punjabImg,
            stateName: "20. पंजाब",
            individualPage: "/culture-tradition/punjab-state",
          },
          {
            stateImg: rajasthanImg,
            stateName: "21. राजस्थान",
            individualPage: "/culture-tradition/rajasthan-state",
          },
          {
            stateImg: sikkimImg,
            stateName: "22. सिक्किम",
            individualPage: "/culture-tradition/sikkim-state",
          },
          {
            stateImg: tamilnaduImg,
            stateName: "23. तमिलनाडु",
            individualPage: "/culture-tradition/tamil-nadu-state",
          },
          {
            stateImg: telanganaImg,
            stateName: "24. तेलंगाना",
            individualPage: "/culture-tradition/telangana-state",
          },
          {
            stateImg: tripuraImg,
            stateName: "25. त्रिपुरा",
            individualPage: "/culture-tradition/tripura-state",
          },
          {
            stateImg: uttarpradeshImg,
            stateName: "26. उत्तर प्रदेश",
            individualPage: "/culture-tradition/uttar-pradesh-state",
          },
          {
            stateImg: uttarakhandImg,
            stateName: "27. उत्तराखंड",
            individualPage: "/culture-tradition/uttarakhand-state",
          },
          {
            stateImg: wbImg,
            stateName: "28. पश्चिम बंगाल",
            individualPage: "/culture-tradition/west-bengal-state",
          },
          {
            stateImg: andamanImg,
            stateName: "29. अंडमान और निकोबार द्वीप समूह (संघ राज्य क्षेत्र)",
            individualPage: "/culture-tradition/andaman-nicobar-ut",
          },
          {
            stateImg: chandigarhImg,
            stateName: "30. चंडीगढ़ (संघ राज्य क्षेत्र)",
            individualPage: "/culture-tradition/chandigarh-ut",
          },
          {
            stateImg: dadraImg,
            stateName:
              "31. दादरा और नगर हवेली और दमन और दीव (संघ राज्य क्षेत्र)",
            individualPage: "/culture-tradition/dadra-diu-ut",
          },
          {
            stateImg: delhiImg,
            stateName: "32. दिल्ली (संघ राज्य क्षेत्र)",
            individualPage: "/culture-tradition/delhi-ut",
          },
          {
            stateImg: jkImg,
            stateName: "33. जम्मू और कश्मीर (संघ राज्य क्षेत्र)",
            individualPage: "/culture-tradition/jammu-kashmir-ut",
          },
          {
            stateImg: ladakhImg,
            stateName: "34. लद्दाख (संघ राज्य क्षेत्र)",
            individualPage: "/culture-tradition/ladakh-ut",
          },
          {
            stateImg: lakshadweepImg,
            stateName: "35. लक्षद्वीप (संघ राज्य क्षेत्र)",
            individualPage: "/culture-tradition/lakshadweep-ut",
          },
          {
            stateImg: puducherryImg,
            stateName: "36. पुदुचेरी (संघ राज्य क्षेत्र)",
            individualPage: "/culture-tradition/puducherry-ut",
          },
        ],
      },

      AndhraPradeshData: {
        stateName: ["आंध्र", "प्रदेश"],
        greetingImg: weddingImg,
        greetingName: "📆भारत",
        stateImg: wbImg,
        stateHistory: "असम, भारत के हरे-भरे पूर्वोत्तर क्षेत्र में स्थित है...",
        stateHistoryVideo: "https://youtu.be/CkZyrYfofHc",
        cuisineDetails: [
          {
            cuisineImage: greetingImg,
            cuisineName: "Luchi + Cholar Daal",
          },
          {
            cuisineImage: greetingImg,
            cuisineName: "Bhaat + Daal",
          },
        ],
        cuisineCourse: "/learn-Indian-culture/assam-cuisine-course",
        clothingImg: wbImg,
        clothingDetails:
          "असम की पारंपरिक पोशाक इसकी समृद्ध विरासत को दर्शाती है...",
        languageImg: wbImg,
        languageDetails: "असम की आधिकारिक भाषा असमिया है...",
        languageCourse: "/learn-Indian-culture/assamese-course",
        artsDetails: [
          {
            cuisineImage: greetingImg,
            cuisineName: "Bihu Dance",
          },
        ],
        artsCourse: "/learn-Indian-culture/assam-art-course",
      },
    },
  },
  bn: {
    translation: {
      // -------------------------- COMMON STATIC NAMES ---------------------------
      CommonStaticInfo: {
        cultureCalendarHeading: "📆ভারতের সাংস্কৃতিক ক্যালেন্ডার",
        ourGreeting: "Our Greeting",
        briefHistory: "Brief History",
        briefHistoryPara: "Discover the rich heritage and story of the region",
        cuisines: "Cuisines",
        cuisinesPara: "Taste the flavors that define culture and tradition",
        clothings: "Clothing",
        clothingPara:
          "Explore iconic attire reflecting heritage and local identity",
        languages: "Language",
        languagesPara:
          "Dive into the linguistic treasures shaping communication and culture",
        artsCrafts: "Arts & Crafts",
        artsCraftsPara:
          "Uncover timeless creativity through handcrafted masterpieces and traditions",
        buttonWantToKnowMore: "Want to know more?",
        buttonWantToCook: "Want to cook?",
      },

      // -------------------------- HOME ---------------------------
      HomeData: {
        homeButtonName: "বিস্তারিত জানুন",
        Home: [
          {
            para: `ভারতের ঐতিহাসিক এবং সাংস্কৃতিক সম্পদে গভীরভাবে প্রবেশ করুন তার সবচেয়ে বিখ্যাত বিশ্ব ঐতিহ্যস্থলগুলি অন্বেষণ করে। এই বিভাগটি ঐতিহাসিক এবং প্রাকৃতিক বিস্ময়গুলির প্রতি উৎসর্গীকৃত, যা সময়ের পরীক্ষায় টিকে আছে এবং প্রত্যেকটি তার নিজস্ব গল্প বলে। রাজবাড়ি এবং মন্দিরগুলি থেকে শুরু করে যা এক সময় রাজ্য রক্ষার কাজ করেছে।`,
            image: heritageImg,
            shadow: "shadow-highlight",
            headingName: "ভারতের চিরকালীন ঐতিহ্যের উন্মোচন",
            buttonLink: "/heritage",
            featuringData: [
              { featureName: "স্থানীয় ভারতীয় ঐতিহ্য" },
              { featureName: "ইউনেস্কো-অবশেষ ভারতীয় ঐতিহ্য" },
              { featureName: "ইউনেস্কো-তালিকাভুক্ত ভারতীয় ঐতিহ্য" },
            ],
          },
          {
            para: `ভারতের ঐতিহাসিক এবং সাংস্কৃতিক সম্পদে গভীরভাবে প্রবেশ করুন তার সবচেয়ে বিখ্যাত বিশ্ব ঐতিহ্যস্থলগুলি অন্বেষণ করে। এই বিভাগটি ঐতিহাসিক এবং প্রাকৃতিক বিস্ময়গুলির প্রতি উৎসর্গীকৃত, যা সময়ের পরীক্ষায় টিকে আছে এবং প্রত্যেকটি তার নিজস্ব গল্প বলে। রাজবাড়ি এবং মন্দিরগুলি থেকে শুরু করে যা এক সময় রাজ্য রক্ষার কাজ করেছে।`,
            image: cultureImg,
            shadow: "shadow-dark_secondary_text",
            headingName: "ভারতের সংস্কৃতির জীবন্ত চিত্রকল্প অনুভব করুন",
            buttonLink: "/culture-tradition",
            featuringData: [
              { featureName: "ভারতীয় সাংস্কৃতিক ক্যালেন্ডার" },
              { featureName: "ভারতীয় সংস্কৃতির ধরণ" },
              { featureName: "রাজ্যভিত্তিক ভারতীয় সংস্কৃতির" },
            ],
          },
          {
            para: `ভারতের ঐতিহাসিক এবং সাংস্কৃতিক সম্পদে গভীরভাবে প্রবেশ করুন তার সবচেয়ে বিখ্যাত বিশ্ব ঐতিহ্যস্থলগুলি অন্বেষণ করে। এই বিভাগটি ঐতিহাসিক এবং প্রাকৃতিক বিস্ময়গুলির প্রতি উৎসর্গীকৃত, যা সময়ের পরীক্ষায় টিকে আছে এবং প্রত্যেকটি তার নিজস্ব গল্প বলে। রাজবাড়ি এবং মন্দিরগুলি থেকে শুরু করে যা এক সময় রাজ্য রক্ষার কাজ করেছে।`,
            image: learnImg,
            shadow: "shadow-highlight_hover",
            headingName:
              "ভারতের ঐতিহ্যগুলির সমৃদ্ধ চিত্রকল্পে গভীরভাবে প্রবেশ করুন",
            buttonLink: "/learn-Indian-culture",
            featuringData: [
              { featureName: "ভিন্ন ভাষা শিখুন" },
              { featureName: "ভিন্ন খাবার শিখুন" },
              { featureName: "ভারতীয় শিল্প শিখুন" },
              { featureName: "ভিন্ন খেলা শিখুন" },
            ],
          },
          {
            para: `ভারতের ঐতিহাসিক এবং সাংস্কৃতিক সম্পদে গভীরভাবে প্রবেশ করুন তার সবচেয়ে বিখ্যাত বিশ্ব ঐতিহ্যস্থলগুলি অন্বেষণ করে। এই বিভাগটি ঐতিহাসিক এবং প্রাকৃতিক বিস্ময়গুলির প্রতি উৎসর্গীকৃত, যা সময়ের পরীক্ষায় টিকে আছে এবং প্রত্যেকটি তার নিজস্ব গল্প বলে। রাজবাড়ি এবং মন্দিরগুলি থেকে শুরু করে যা এক সময় রাজ্য রক্ষার কাজ করেছে।`,
            image: exploreImg,
            shadow: "shadow-highlight",
            headingName: "আপনার আদর্শ ভারতীয় ভ্রমণ পরিকল্পনা করুন",
            buttonLink: "/explore-diversity",
            featuringData: [
              { featureName: "ভ্রমণের বাজেট পূর্বাভাস করুন" },
              { featureName: "ব্যক্তিগত ভ্রমণসূচি তৈরি করুন" },
              { featureName: "নিকটতম আকর্ষণ খুঁজুন" },
              { featureName: "প্রাচীন লিপির রূপান্তর করুন" },
              { featureName: "ব্যক্তিগত গল্প বলুন" },
            ],
          },
          {
            para: `ভারতের ঐতিহাসিক এবং সাংস্কৃতিক সম্পদে গভীরভাবে প্রবেশ করুন তার সবচেয়ে বিখ্যাত বিশ্ব ঐতিহ্যস্থলগুলি অন্বেষণ করে। এই বিভাগটি ঐতিহাসিক এবং প্রাকৃতিক বিস্ময়গুলির প্রতি উৎসর্গীকৃত, যা সময়ের পরীক্ষায় টিকে আছে এবং প্রত্যেকটি তার নিজস্ব গল্প বলে। রাজবাড়ি এবং মন্দিরগুলি থেকে শুরু করে যা এক সময় রাজ্য রক্ষার কাজ করেছে।`,
            image: blogsImg,
            shadow: "shadow-dark_secondary_text",
            headingName: "ভারতকে এক সহযাত্রী চোখে দেখুন",
            buttonLink: "/blogs-vlogs",
            featuringData: [
              { featureName: "ব্লগ এবং ভ্লগ আপলোড করুন" },
              { featureName: "বিভিন্ন বিষয়বস্তু পড়ুন/শুনুন" },
            ],
          },
          {
            para: `ভারতের ঐতিহাসিক এবং সাংস্কৃতিক সম্পদে গভীরভাবে প্রবেশ করুন তার সবচেয়ে বিখ্যাত বিশ্ব ঐতিহ্যস্থলগুলি অন্বেষণ করে। এই বিভাগটি ঐতিহাসিক এবং প্রাকৃতিক বিস্ময়গুলির প্রতি উৎসর্গীকৃত, যা সময়ের পরীক্ষায় টিকে আছে এবং প্রত্যেকটি তার নিজস্ব গল্প বলে। রাজবাড়ি এবং মন্দিরগুলি থেকে শুরু করে যা এক সময় রাজ্য রক্ষার কাজ করেছে।`,
            image: virtualStoreImg,
            shadow: "shadow-highlight_hover",
            headingName: "ভারতের ঐতিহ্য আপনার ঘরে নিয়ে আসুন",
            buttonLink: "/virtual-store",
            featuringData: [{ featureName: "প্রাচীন পণ্য কিনুন" }],
          },
        ],
      },

      // ------------------------- CULTURE & TRADITION --------------

      AllCulturesData: {
        allCultureHeading: "ভারতের সাংস্কৃতিক সমৃদ্ধি 🪔",
        AllCulturesName: [
          {
            cultureImg: weddingImg,
            cultureIntro: `Celebrate India’s artistic heritage, from classical to contemporary 🎨`,
            cultureName: "Arts",
            individualPage: "/culture-tradition/id",
          },
          {
            cultureImg: weddingImg,
            cultureIntro: `ভারতের ঐতিহ্যবাহী এবং আধুনিক পোশাকের কমনীয়তা উন্মোচন করুন 🥻`,
            cultureName: "পোশাক",
            individualPage: "/culture-tradition/clothing-culture",
          },
          {
            cultureImg: cuisineImg,
            cultureIntro: `Savor the flavors of India’s iconic dishes and regional delights 🍛`,
            cultureName: "Cuisines",
            individualPage: "/culture-tradition/id",
          },

          {
            cultureImg: weddingImg,
            cultureIntro: `Dive into the traditions of Indian families and majestic weddings 🏠`,
            cultureName: "Family Structures & Weddings",
            individualPage: "/culture-tradition/id",
          },
          {
            cultureImg: festivalImg,
            cultureIntro: `Experience the vibrance of India’s grand festivals and celebrations 🥳`,
            cultureName: "Festivals",
            individualPage: "/culture-tradition/id",
          },
          {
            cultureImg: greetingImg,
            cultureIntro: `Learn the warmth and meaning behind India’s unique ways of greeting 🙏`,
            cultureName: "Greetings",
            individualPage: "/culture-tradition/id",
          },
          {
            cultureImg: langImg,
            cultureIntro: `Explore India’s linguistic treasures and the beauty of its 22 official languages 🌐`,
            cultureName: "Languages",
            individualPage: "/culture-tradition/single-page",
          },
          {
            cultureImg: religiousImg,
            cultureIntro: `Discover the spiritual essence of India’s diverse faiths and traditions 🛐`,
            cultureName: "Religion",
            individualPage: "/culture-tradition/multiple-pages",
          },
          {
            cultureImg: weddingImg,
            cultureIntro: `Explore India’s love for sports, from cricket to ancient martial arts 🏑`,
            cultureName: "Sports",
            individualPage: "/culture-tradition/sport-culture",
          },
        ],
      },

      StateCulturesData: {
        stateHeading: "ভারতের সাংস্কৃতিক অভিযান: রাজ্য-ভিত্তিক🗺️",
        AllStatesName: [
          {
            stateImg: andhrapradeshImg,
            stateName: "১. অন্ধ্র প্রদেশ",
            individualPage: "/culture-tradition/andhra-pradesh-state",
          },
          {
            stateImg: arunachalpradeshImg,
            stateName: "২. অরুণাচল প্রদেশ",
            individualPage: "/culture-tradition/arunachal-pradesh-state",
          },
          {
            stateImg: assamImg,
            stateName: "৩. আসাম",
            individualPage: "/culture-tradition/assam-state",
          },
          {
            stateImg: biharImg,
            stateName: "৪. বিহার",
            individualPage: "/culture-tradition/bihar-state",
          },
          {
            stateImg: chhattisgarhImg,
            stateName: "৫. ছত্তিশগড়",
            individualPage: "/culture-tradition/chhattisgarh-state",
          },
          {
            stateImg: goaImg,
            stateName: "৬. গোয়া",
            individualPage: "/culture-tradition/goa-state",
          },
          {
            stateImg: gujaratImg,
            stateName: "৭. গুজরাট",
            individualPage: "/culture-tradition/gujarat-state",
          },
          {
            stateImg: haryanaImg,
            stateName: "৮. হরিয়ানা",
            individualPage: "/culture-tradition/haryana-state",
          },
          {
            stateImg: himachalpradeshImg,
            stateName: "৯. হিমাচল প্রদেশ",
            individualPage: "/culture-tradition/himachal-pradesh-state",
          },
          {
            stateImg: jharkhandImg,
            stateName: "১০. ঝাড়খন্ড",
            individualPage: "/culture-tradition/jharkhand-state",
          },
          {
            stateImg: karnatakaImg,
            stateName: "১১. কর্ণাটক",
            individualPage: "/culture-tradition/karnataka-state",
          },
          {
            stateImg: keralaImg,
            stateName: "১২. কেরালা",
            individualPage: "/culture-tradition/kerala-state",
          },
          {
            stateImg: madhyapradeshImg,
            stateName: "১৩. মধ্যপ্রদেশ",
            individualPage: "/culture-tradition/madhya-pradesh-state",
          },
          {
            stateImg: maharashtraImg,
            stateName: "১৪. মহারাষ্ট্র",
            individualPage: "/culture-tradition/maharashtra-state",
          },
          {
            stateImg: manipurImg,
            stateName: "১৫. মণিপুর",
            individualPage: "/culture-tradition/manipur-state",
          },
          {
            stateImg: meghalayaImg,
            stateName: "১৬. মেঘালয়",
            individualPage: "/culture-tradition/meghalaya-state",
          },

          {
            stateImg: mizoramImg,
            stateName: "১৭. মিজোরাম",
            individualPage: "/culture-tradition/mizoram-state",
          },
          {
            stateImg: nagalandImg,
            stateName: "১৮. নাগাল্যান্ড",
            individualPage: "/culture-tradition/nagaland-state",
          },
          {
            stateImg: odishaImg,
            stateName: "১৯. ওড়িশা",
            individualPage: "/culture-tradition/odisha-state",
          },
          {
            stateImg: punjabImg,
            stateName: "২০. পাঞ্জাব",
            individualPage: "/culture-tradition/punjab-state",
          },
          {
            stateImg: rajasthanImg,
            stateName: "২১. রাজস্থান",
            individualPage: "/culture-tradition/rajasthan-state",
          },
          {
            stateImg: sikkimImg,
            stateName: "২২. সিক্কিম",
            individualPage: "/culture-tradition/sikkim-state",
          },
          {
            stateImg: tamilnaduImg,
            stateName: "২৩. তামিলনাড়ু",
            individualPage: "/culture-tradition/tamil-nadu-state",
          },
          {
            stateImg: telanganaImg,
            stateName: "২৪. তেলেঙ্গানা",
            individualPage: "/culture-tradition/telangana-state",
          },
          {
            stateImg: tripuraImg,
            stateName: "২৫. ত্রিপুরা",
            individualPage: "/culture-tradition/tripura-state",
          },
          {
            stateImg: uttarpradeshImg,
            stateName: "২৬. উত্তরপ্রদেশ",
            individualPage: "/culture-tradition/uttar-pradesh-state",
          },
          {
            stateImg: uttarakhandImg,
            stateName: "২৭. উত্তরাখণ্ড",
            individualPage: "/culture-tradition/uttarakhand-state",
          },
          {
            stateImg: wbImg,
            stateName: "২৮. পশ্চিমবঙ্গ",
            individualPage: "/culture-tradition/west-bengal-state",
          },
          {
            stateImg: andamanImg,
            stateName: "২৯. আন্দামান ও নিকোবর দ্বীপপুঞ্জ (কেন্দ্রশাসিত অঞ্চল)",
            individualPage: "/culture-tradition/andaman-nicobar-ut",
          },
          {
            stateImg: chandigarhImg,
            stateName: "৩০. চণ্ডীগড় (কেন্দ্রশাসিত অঞ্চল)",
            individualPage: "/culture-tradition/chandigarh-ut",
          },
          {
            stateImg: dadraImg,
            stateName:
              "৩১. দাদরা ও নগর হাভেলি এবং দমন ও দিউ (কেন্দ্রশাসিত অঞ্চল)",
            individualPage: "/culture-tradition/dadra-diu-ut",
          },
          {
            stateImg: delhiImg,
            stateName: "৩২. দিল্লি (কেন্দ্রশাসিত অঞ্চল)",
            individualPage: "/culture-tradition/delhi-ut",
          },
          {
            stateImg: jkImg,
            stateName: "৩৩. জম্মু ও কাশ্মীর (কেন্দ্রশাসিত অঞ্চল)",
            individualPage: "/culture-tradition/jammu-kashmir-ut",
          },
          {
            stateImg: ladakhImg,
            stateName: "৩৪. লাদাখ (কেন্দ্রশাসিত অঞ্চল)",
            individualPage: "/culture-tradition/ladakh-ut",
          },
          {
            stateImg: lakshadweepImg,
            stateName: "৩৫. লক্ষদ্বীপ (কেন্দ্রশাসিত অঞ্চল)",
            individualPage: "/culture-tradition/lakshadweep-ut",
          },
          {
            stateImg: puducherryImg,
            stateName: "৩৬. পুদুচেরি (কেন্দ্রশাসিত অঞ্চল)",
            individualPage: "/culture-tradition/puducherry-ut",
          },
        ],
      },

      AndhraPradeshData: {
        stateName: ["आंध्र", "प्रदेश"],
        greetingImg: weddingImg,
        greetingName: "Nomoskar",
        stateImg: wbImg,
        stateHistory: "असम, भारत के हरे-भरे पूर्वोत्तर क्षेत्र में स्थित है...",
        stateHistoryVideo: "https://youtu.be/CkZyrYfofHc",
        cuisineDetails: [
          {
            cuisineImage: greetingImg,
            cuisineName: "Luchi + Cholar Daal",
          },
          {
            cuisineImage: greetingImg,
            cuisineName: "Bhaat + Daal",
          },
        ],
        cuisineCourse: "/learn-Indian-culture/assam-cuisine-course",
        clothingImg: wbImg,
        clothingDetails:
          "असम की पारंपरिक पोशाक इसकी समृद्ध विरासत को दर्शाती है...",
        languageImg: wbImg,
        languageDetails: "असम की आधिकारिक भाषा असमिया है...",
        languageCourse: "/learn-Indian-culture/assamese-course",
        artsDetails: [
          {
            cuisineImage: greetingImg,
            cuisineName: "Bihu Dance",
          },
        ],
        artsCourse: "/learn-Indian-culture/assam-art-course",
      },
    },
  },
};
