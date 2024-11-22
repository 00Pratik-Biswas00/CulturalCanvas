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
        greetingName: "Namaskaram",
        stateImg: andhrapradeshImg,
        stateHistory:
        "Andhra Pradesh, a state in southeastern India, boasts a rich and multifaceted history shaped by ancient dynasties, flourishing cultures, and significant resistance movements. The history of Andhra Pradesh dates back to the Mauryan Empire (4th–3rd century BCE), which helped establish early administrative structures in the region. Post-Mauryan rule, the Satavahanas (2nd century BCE–3rd century CE) rose to prominence, becoming one of the earliest Deccan dynasties. Known for their extensive trade networks, they contributed to Buddhist architectural marvels such as the Amaravati Stupa. \n\n Following the Satavahanas, Andhra saw the rise of the Pallavas, Chalukyas, and Rashtrakutas. The Pallavas (3rd–9th century CE), famous for their contributions to art and architecture, were instrumental in constructing several ancient temples, including those at Kanchi and Guntur. \n\n The Eastern Chalukyas (7th–12th century CE) significantly impacted the Telugu region, promoting Telugu literature. Their rule was followed by the Kakatiya dynasty (12th–14th century CE), which unified Telugu-speaking regions and left behind architectural marvels such as the Thousand Pillar Temple and the Warangal Fort. In the 14th century, Andhra Pradesh became part of the Vijayanagara Empire, known for its patronage of art and literature. Iconic structures like the Lepakshi Temple exemplify their influence. \n\n During colonial rule, Andhra Pradesh was part of the Madras Presidency, contributing significantly to India's freedom struggle. The state is also known for its enduring cultural legacy, including Kuchipudi dance, vibrant festivals, and Telugu literature. Today, Andhra Pradesh thrives as a center of historical preservation and cultural celebration.",
        stateHistoryVideo: "https://youtu.be/CkZyrYfofHc",
        cuisineDetails: [
          {
            cuisineImage: greetingImg,
            cuisineName: "Pulihora (Tamarind Rice)",
          },
          {
            cuisineImage: greetingImg,
            cuisineName: "Gongura Pachadi (Roselle Leaf Pickle)",
          },
          {
            cuisineImage: greetingImg,
            cuisineName: "Hyderabadi Biryani",
          },
          {
            cuisineImage: greetingImg,
            cuisineName: "Boorelu (Sweet Dumplings)",
          },
          {
            cuisineImage: greetingImg,
            cuisineName: "Pesarattu (Green Gram Dosa)",
          },
        ],
        cuisineCourse: "/learn-Indian-culture/assam-cuisine-course",
        clothingImg: andhrapradeshImg,
        clothingDetails: 
  "The traditional attire of Andhra Pradesh beautifully encapsulates the state's cultural richness and diversity. Women predominantly wear sarees made from luxurious fabrics like Pochampally ikat, Mangalagiri cotton, and Dharmavaram silk. These sarees are often adorned with intricate designs and vibrant patterns, symbolizing elegance and heritage. Dharmavaram sarees, for instance, feature zari work and motifs inspired by flora, fauna, and temple architecture, while Gadwal sarees uniquely combine cotton for the body and silk for the pallu and border, creating striking color contrasts. Men traditionally wear dhotis paired with kurtas, often complemented by an angavastram, a draped cloth symbolizing sophistication. In tribal areas, attire reflects local artistry, with unique textiles and patterns crafted using natural dyes and traditional weaving techniques. These garments, often adorned with symbolic motifs, highlight the creative ingenuity and cultural significance of Andhra Pradesh's tribal communities. The state's traditional clothing is not only a testament to its heritage but also a celebration of its artisans' skilled craftsmanship, with each piece narrating a story of tradition and cultural pride.",

        languageImg: andhrapradeshImg,
        languageDetails:
          "The official language of Andhra Pradesh is Telugu, one of the six classical languages of India. Known as the 'Italian of the East,' Telugu is celebrated for its melodic tones and vast literary heritage. The language is widely spoken and used in educational institutions, official communications, and day-to-day interactions. Telugu literature has produced renowned poets and writers, enriching the cultural tapestry of India. The language has a rich tradition of both oral and written storytelling, with ancient texts like the Andhra Mahabharata and classical poetry that date back over two thousand years. Telugu is also recognized as one of the languages of classical dance, particularly in the form of Kuchipudi, which utilizes the language for its traditional performances. It is written in the Telugu script, which has a distinct circular and curvilinear appearance, and is known for its unique phonetics and sound system.",
        languageCourse: "/learn-Indian-culture/assamese-course",
        artsDetails: [
          {
            cuisineImage: greetingImg,
            cuisineName: "Kuchipudi Dance",
          },
          {
            cuisineImage: greetingImg,
            cuisineName: "Burrakatha (Folk Storytelling)",
          },
          {
            cuisineImage: greetingImg,
            cuisineName: "Tholu Bommalata (Shadow Puppetry)",
          },
          {
            cuisineImage: greetingImg,
            cuisineName: "Perini Sivatandavam (Warrior Dance)",
          },
          {
            cuisineImage: greetingImg,
            cuisineName: "Veeranatyam (Dance of Warriors)",
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
        ourGreeting: "हमारी शुभकामनाएँ",
        briefHistory: "संक्षिप्त इतिहास",
        briefHistoryPara: "क्षेत्र की समृद्ध विरासत और कहानी की खोज करें",
        cuisines: "व्यंजनों",
        cuisinesPara: "उन स्वादों का स्वाद लें जो संस्कृति और परंपरा को परिभाषित करते हैं",
        clothings: "वस्त्र",
        clothingPara:
          "विरासत और स्थानीय पहचान को प्रतिबिंबित करने वाली प्रतिष्ठित पोशाक का अन्वेषण करें",
        languages: "भाषा",
        languagesPara:
          "संचार और संस्कृति को आकार देने वाले भाषाई खजाने में गोता लगाएँ",
        artsCrafts: "कला और शिल्प",
        artsCraftsPara:
          "हस्तनिर्मित उत्कृष्ट कृतियों और परंपराओं के माध्यम से कालातीत रचनात्मकता को उजागर करें",
        buttonWantToKnowMore: "और अधिक जानने की इच्छा है?",
        buttonWantToCook: "खाना बनाना चाहते हैं?",
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
            cultureIntro: `शास्त्रीय से समकालीन तक, भारत की कलात्मक विरासत का जश्न मनाएं 🎨`,
            cultureName: "कला",
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
            cultureIntro: `भारत के प्रतिष्ठित व्यंजनों और क्षेत्रीय व्यंजनों के स्वाद का आनंद लें🍛`,
            cultureName: "व्यंजनों",
            individualPage: "/culture-tradition/id",
          },

          {
            cultureImg: weddingImg,
            cultureIntro: `भारतीय परिवारों की परंपराओं और राजसी शादियों के बारे में जानें 🏠`,
            cultureName: "पारिवारिक संरचनाएँ और शादियाँ",
            individualPage: "/culture-tradition/id",
          },
          {
            cultureImg: festivalImg,
            cultureIntro: `भारत के भव्य त्योहारों और समारोहों की जीवंतता का अनुभव करें🥳`,
            cultureName: "समारोह",
            individualPage: "/culture-tradition/id",
          },
          {
            cultureImg: greetingImg,
            cultureIntro: `भारत के अभिवादन के अनूठे तरीकों के पीछे की गर्मजोशी और अर्थ को जानें 🙏`,
            cultureName: "अभिवादन",
            individualPage: "/culture-tradition/id",
          },
          {
            cultureImg: langImg,
            cultureIntro: `भारत के भाषाई खजाने और इसकी 22 आधिकारिक भाषाओं की सुंदरता का अन्वेषण करें 🌐`,
            cultureName: "भाषा",
            individualPage: "/culture-tradition/single-page",
          },
          {
            cultureImg: religiousImg,
            cultureIntro: `भारत की विविध आस्थाओं और परंपराओं के आध्यात्मिक सार की खोज करें 🛐`,
            cultureName: "धर्म",
            individualPage: "/culture-tradition/multiple-pages",
          },
          {
            cultureImg: weddingImg,
            cultureIntro: `क्रिकेट से लेकर प्राचीन मार्शल आर्ट तक, खेलों के प्रति भारत के प्रेम का अन्वेषण करें 🏑`,
            cultureName: "खेल",
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
        greetingName: "नमस्कारम",
        stateImg: andhrapradeshImg,
        stateHistory:
        "आंध्र प्रदेश, जो भारत के दक्षिण-पूर्वी क्षेत्र में स्थित है, एक समृद्ध और विविधतापूर्ण इतिहास रखता है, जो प्राचीन साम्राज्यों, समृद्ध संस्कृतियों और महत्वपूर्ण प्रतिरोध आंदोलनों से आकारित हुआ है। आंध्र प्रदेश का इतिहास मौर्य साम्राज्य (4वीं–3वीं शताब्दी ईसा पूर्व) से जुड़ा है, जिसने क्षेत्र में प्रारंभिक प्रशासनिक संरचनाओं की स्थापना की। मौर्य साम्राज्य के बाद, सातवाहन (2वीं शताब्दी ईसा पूर्व–3वीं शताब्दी ईस्वी) ने प्रगति की, जो दक्षिण भारत की सबसे प्रारंभिक राजवंशों में से एक था। व्यापार नेटवर्क के लिए प्रसिद्ध, सातवाहन ने बौद्ध वास्तुकला के अद्भुत उदाहरण जैसे अमरावती स्तूप का निर्माण किया। \n\n सातवाहन के बाद, आंध्र प्रदेश में पलवों, चालुक्य और राष्ट्रकूटों का उदय हुआ। पलवों (3वीं–9वीं शताब्दी ईस्वी), जिन्होंने कला और वास्तुकला में महत्वपूर्ण योगदान दिया, ने कई प्राचीन मंदिरों का निर्माण किया, जिनमें कांची और गुंटूर के मंदिर शामिल हैं। \n\n पूर्व चालुक्य (7वीं–12वीं शताब्दी ईस्वी) ने तेलुगु क्षेत्र पर महत्वपूर्ण प्रभाव डाला और तेलुगु साहित्य को बढ़ावा दिया। उनके शासन के बाद काकतीय राजवंश (12वीं–14वीं शताब्दी ईस्वी) का उदय हुआ, जिसने तेलुगु भाषी क्षेत्रों को एकजुट किया और हजारों स्तंभों वाले मंदिर और वारंगल किला जैसे वास्तुकला के अद्वितीय उदाहरण छोड़े। 14वीं शताब्दी में, आंध्र प्रदेश विजयनगर साम्राज्य का हिस्सा बन गया, जो कला और साहित्य के प्रोत्साहन के लिए जाना जाता है। लेपाक्षी मंदिर जैसे प्रतिष्ठित संरचनाएँ उनके प्रभाव का प्रतीक हैं। \n\n औपनिवेशिक शासन के दौरान, आंध्र प्रदेश मद्रास प्रेसिडेंसी का हिस्सा था और भारतीय स्वतंत्रता संग्राम में महत्वपूर्ण योगदान दिया। राज्य अपनी समृद्ध सांस्कृतिक धरोहर के लिए भी जाना जाता है, जिसमें क Kuchipudi नृत्य, जीवंत त्यौहार और तेलुगु साहित्य शामिल हैं। आज आंध्र प्रदेश ऐतिहासिक संरक्षण और सांस्कृतिक उत्सवों का केंद्र बनकर उभरा है।",
        stateHistoryVideo: "https://youtu.be/CkZyrYfofHc",
        cuisineDetails: [
          {
            cuisineImage: greetingImg,
            cuisineName: "पुलिहोरा (इमली चावल)",
          },
          {
            cuisineImage: greetingImg,
            cuisineName: "गोंगुरा पचड़ी (गोंगुरा पत्तियों का अचार)",
          },
          {
            cuisineImage: greetingImg,
            cuisineName: "हैदराबादी बिरयानी",
          },
          {
            cuisineImage: greetingImg,
            cuisineName: "बूरैलू (मीठे पकौड़े)",
          },
          {
            cuisineImage: greetingImg,
            cuisineName: "पेसरत्तू (हरी मूंग का डोसा)",
          },
        ],
        cuisineCourse: "/learn-Indian-culture/assam-cuisine-course",
        clothingImg: andhrapradeshImg,
        clothingDetails: 
  "आंध्र प्रदेश की पारंपरिक पोशाक राज्य की सांस्कृतिक समृद्धि और विविधता को सुंदरता से प्रस्तुत करती है। महिलाएँ आमतौर पर पोचमपल्ली इकत, मंगलागिरी कॉटन और धर्मावरम रेशम जैसे शानदार कपड़ों से बनी साड़ियाँ पहनती हैं। इन साड़ियों पर जटिल डिज़ाइन और जीवंत पैटर्न होते हैं, जो शान और धरोहर का प्रतीक होते हैं। उदाहरण के लिए, धर्मावरम साड़ियों में ज़री काम और पुष्प, वन्यजीव और मंदिर वास्तुकला से प्रेरित रूपांकनों का समावेश होता है, जबकि गडवाल साड़ियाँ शरीर के लिए कॉटन और पल्लू और किनारे के लिए रेशम का संयोजन करके आकर्षक रंगों का मेल करती हैं। पुरुष पारंपरिक रूप से धोती पहनते हैं, जो कुर्ते के साथ होती है, और इसे अक्सर अंगवस्त्रम से सजाया जाता है, जो sophistication का प्रतीक होता है। आदिवासी क्षेत्रों में, परिधान स्थानीय कला का प्रतीक होते हैं, जिनमें प्राकृतिक रंगों और पारंपरिक बुनाई तकनीकों का उपयोग कर बनाए गए अद्वितीय वस्त्र होते हैं। ये परिधान अक्सर प्रतीकात्मक रूपांकनों से सजे होते हैं, जो आंध्र प्रदेश के आदिवासी समुदायों की रचनात्मक प्रतिभा और सांस्कृतिक महत्व को उजागर करते हैं। राज्य की पारंपरिक पोशाक न केवल इसके धरोहर का प्रतीक है, बल्कि इसके कारीगरों की कुशल शिल्पकला का उत्सव भी है, जिसमें प्रत्येक टुकड़ा परंपरा और सांस्कृतिक गर्व की कहानी कहता है।",
        languageImg: andhrapradeshImg,
        languageDetails:
          "आंध्र प्रदेश की आधिकारिक भाषा तेलुगु है, जो भारत की छह शास्त्रीय भाषाओं में से एक है। 'पूरब का इतालवी' के रूप में जाना जाने वाला तेलुगु अपनी सुरेल ध्वनियों और विशाल साहित्यिक धरोहर के लिए प्रसिद्ध है। यह भाषा व्यापक रूप से बोली जाती है और शैक्षिक संस्थानों, आधिकारिक संचार, और दैनिक जीवन में उपयोग की जाती है। तेलुगु साहित्य ने प्रसिद्ध कवियों और लेखकों को जन्म दिया है, जिन्होंने भारत की सांस्कृतिक परंपरा को समृद्ध किया है। इस भाषा का मौखिक और लिखित कथा कहने की एक समृद्ध परंपरा है, जिसमें आंध्र महाभारत जैसे प्राचीन ग्रंथ और शास्त्रीय कविता शामिल हैं, जो दो हजार साल से भी पुरानी हैं। तेलुगु को शास्त्रीय नृत्य की भाषाओं में भी पहचाना जाता है, विशेष रूप से कुचिपुड़ी नृत्य में, जो अपनी पारंपरिक प्रस्तुतियों में इस भाषा का उपयोग करता है। इसे तेलुगु लिपि में लिखा जाता है, जो अपनी गोल और वक्र आकृति के लिए जानी जाती है, और इसके अद्वितीय ध्वन्यात्मकता और ध्वनि प्रणाली के लिए भी प्रसिद्ध है।",
        languageCourse: "/learn-Indian-culture/assamese-course",
        artsDetails: [
          {
            cuisineImage: greetingImg,
            cuisineName: "कुचिपुड़ी नृत्य",
          },
          {
            cuisineImage: greetingImg,
            cuisineName: "बुरकथा (लोककथा कथन)",
          },
          {
            cuisineImage: greetingImg,
            cuisineName: "थोलु बम्मलता (छाया कठपुतली)",
          },
          {
            cuisineImage: greetingImg,
            cuisineName: "पेरिनी शिवतांडव (योद्धा नृत्य)",
          },
          {
            cuisineImage: greetingImg,
            cuisineName: "वीरनाट्यम (योद्धाओं का नृत्य)",
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
        cultureCalendarHeading: "📆 ভারতের সাংস্কৃতিক ক্যালেন্ডার",
        ourGreeting: "আমাদের অভিবাদন",
        briefHistory: "সংক্ষিপ্ত ইতিহাস",
        briefHistoryPara: "অঞ্চলের সমৃদ্ধ ঐতিহ্য এবং গল্প আবিষ্কার করুন",
        cuisines: "রান্না",
        cuisinesPara: "সেই স্বাদগুলি উপভোগ করুন যা সংস্কৃতি এবং ঐতিহ্যকে সংজ্ঞায়িত করে",
        clothings: "পোশাক",
        clothingPara: "ঐতিহ্য এবং স্থানীয় পরিচয় প্রতিফলিত করতে আইকনিক পোশাক আবিষ্কার করুন",
        languages: "ভাষা",
        languagesPara: "ভাষার রত্নগুলি আবিষ্কার করুন যা যোগাযোগ এবং সংস্কৃতিকে গঠন করে",
        artsCrafts: "শিল্প ও হস্তশিল্প",
        artsCraftsPara: "হস্তনির্মিত মাস্টারপিস এবং ঐতিহ্যগুলির মাধ্যমে চিরন্তন সৃজনশীলতা আবিষ্কার করুন",
        buttonWantToKnowMore: "আরও জানতে চান?",
        buttonWantToCook: "রান্না করতে চান?"

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
            cultureIntro: `ভারতের শিল্প ঐতিহ্য উদযাপন করুন, প্রাচীন থেকে আধুনিক 🎨`,
            cultureName: "শিল্প",
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
            cultureIntro: `ভারতের আইকনিক খাবারের স্বাদ এবং আঞ্চলিক মজাদার খাবারের স্বাদ নিন 🍛`,
            cultureName: "রান্না",
            individualPage: "/culture-tradition/id",
          },
          {
            cultureImg: weddingImg,
            cultureIntro: `ভারতের পারিবারিক ঐতিহ্য এবং মহিমাময় বিয়ের রীতি আবিষ্কার করুন 🏠`,
            cultureName: "পারিবারিক কাঠামো ও বিয়ে",
            individualPage: "/culture-tradition/id",
          },
          {
            cultureImg: festivalImg,
            cultureIntro: `ভারতের মহৎ উৎসব এবং উদযাপনের রঙিন অভিজ্ঞতা নিন 🥳`,
            cultureName: "উৎসব",
            individualPage: "/culture-tradition/id",
          },
          {
            cultureImg: greetingImg,
            cultureIntro: `ভারতের অনন্য অভিবাদনের উষ্ণতা এবং অর্থ জানুন 🙏`,
            cultureName: "অভিবাদন",
            individualPage: "/culture-tradition/id",
          },
          {
            cultureImg: langImg,
            cultureIntro: `ভারতের ভাষাগত রত্ন এবং তার ২২টি অফিসিয়াল ভাষার সৌন্দর্য আবিষ্কার করুন 🌐`,
            cultureName: "ভাষা",
            individualPage: "/culture-tradition/single-page",
          },
          {
            cultureImg: religiousImg,
            cultureIntro: `ভারতের বিভিন্ন ধর্ম ও ঐতিহ্যের আধ্যাত্মিক সত্ত্বা আবিষ্কার করুন 🛐`,
            cultureName: "ধর্ম",
            individualPage: "/culture-tradition/multiple-pages",
          },
          {
            cultureImg: weddingImg,
            cultureIntro: `ভারতের খেলাধুলার প্রতি ভালোবাসা আবিষ্কার করুন, ক্রিকেট থেকে প্রাচীন মার্শাল আর্ট 🏑`,
            cultureName: "খেলাধুলা",
            individualPage: "/culture-tradition/sport-culture",
          },
        ]
        
        
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
        stateName: ["আন্ধ্র", "প্রদেশ"],
        greetingImg: weddingImg,
        greetingName: "নমস্কারম",
        stateImg: andhrapradeshImg,
        stateHistory:
        "আন্ধ্র প্রদেশ, যা ভারতীয় দক্ষিণ-পূর্ব অঞ্চলে অবস্থিত, একটি সমৃদ্ধ এবং বৈচিত্র্যময় ইতিহাস ধারণ করে, যা প্রাচীন সাম্রাজ্য, সমৃদ্ধ সংস্কৃতির এবং গুরুত্বপূর্ণ প্রতিরোধ আন্দোলন দ্বারা গঠিত হয়েছে। আন্ধ্র প্রদেশের ইতিহাস মৌর্য সাম্রাজ্যের (৪র্থ–৩য় শতাব্দী খ্রিস্টপূর্ব) সাথে সম্পর্কিত, যা এই অঞ্চলে প্রাথমিক প্রশাসনিক কাঠামো স্থাপন করেছিল। মৌর্য সাম্রাজ্যের পর, সাতাবাহন (২য় শতাব্দী খ্রিস্টপূর্ব–৩য় শতাব্দী খ্রিস্টাব্দ) অগ্রগতি করেছিল, যা দক্ষিণ ভারতের অন্যতম প্রাচীন রাজবংশ ছিল। ব্যবসায়িক নেটওয়ার্কের জন্য বিখ্যাত, সাতাবাহনরা বৌদ্ধ স্থাপত্যের চমৎকার উদাহরণ যেমন অমরাবতী স্তূপ নির্মাণ করেছিল। \n\n সাতাবাহনের পর, আন্ধ্র প্রদেশে পালবংশ, চালুক্য এবং রাষ্ট্রকূটদের উত্থান ঘটেছিল। পালবংশ (৩য়–৯ম শতাব্দী খ্রিস্টাব্দ), যারা শিল্প এবং স্থাপত্যে গুরুত্বপূর্ণ অবদান রেখেছিল, অনেক প্রাচীন মন্দির নির্মাণ করেছিল, যার মধ্যে কান্নাচি এবং গুড়তুর মন্দিরগুলি অন্তর্ভুক্ত। \n\n পূর্ব চালুক্য (৭ম–১২ম শতাব্দী খ্রিস্টাব্দ) তেলুগু অঞ্চলে গুরুত্বপূর্ণ প্রভাব ফেলেছিল এবং তেলুগু সাহিত্যকে উৎসাহিত করেছিল। তাদের শাসনের পর কাকতীয় রাজবংশ (১২ম–১৪ম শতাব্দী খ্রিস্টাব্দ) উত্থিত হয়েছিল, যারা তেলুগু ভাষাভাষী অঞ্চলের মধ্যে ঐক্য প্রতিষ্ঠা করেছিল এবং হাজার হাজার স্তম্ভবিশিষ্ট মন্দির ও ওয়ারঙ্গল দুর্গের মতো স্থাপত্যের অসাধারণ উদাহরণ রেখে গিয়েছিল। ১৪শ শতাব্দীতে, আন্ধ্র প্রদেশ বিজয়নগর সাম্রাজ্যের অংশ হয়ে উঠেছিল, যা শিল্প ও সাহিত্যের উন্নতির জন্য পরিচিত। লেপাক্ষী মন্দিরের মতো প্রতীকি স্থাপত্য তাদের প্রভাবের প্রতীক ছিল। \n\n ঔপনিবেশিক শাসনের সময়, আন্ধ্র প্রদেশ মাদ্রাজ প্রেসিডেন্সির অংশ ছিল এবং ভারতীয় স্বাধীনতা সংগ্রামে গুরুত্বপূর্ণ অবদান রেখেছিল। রাজ্যটি তার সমৃদ্ধ সাংস্কৃতিক ঐতিহ্যের জন্যও পরিচিত, যার মধ্যে কুচিপুড়ি নৃত্য, প্রাণবন্ত উৎসব এবং তেলুগু সাহিত্য অন্তর্ভুক্ত রয়েছে। আজ আন্ধ্র প্রদেশ ঐতিহাসিক সংরক্ষণ এবং সাংস্কৃতিক উৎসবের কেন্দ্র হিসেবে আবির্ভূত হয়েছে।",
        stateHistoryVideo: "https://youtu.be/CkZyrYfofHc",
        cuisineDetails: [
          {
            cuisineImage: greetingImg,
            cuisineName: "পুলিহোরা (তেঁতুল ভাত)",
          },
          {
            cuisineImage: greetingImg,
            cuisineName: "গোঙ্গুরা পচ্চড়ি (গোঙ্গুরা পাতা আচার)",
          },
          {
            cuisineImage: greetingImg,
            cuisineName: "হায়দ্রাবাদি বিরিয়ানি",
          },
          {
            cuisineImage: greetingImg,
            cuisineName: "বুরাইলু (মিষ্টি পাকোড়ে)",
          },
          {
            cuisineImage: greetingImg,
            cuisineName: "পেসরত্তু (সবুজ মুগ ডোসা)",
          },
        ],
        cuisineCourse: "/learn-Indian-culture/assam-cuisine-course",
        clothingImg: andhrapradeshImg,
        clothingDetails: 
  "আন্ধ্র প্রদেশের ঐতিহ্যবাহী পোশাক রাজ্যের সাংস্কৃতিক সমৃদ্ধি এবং বৈচিত্র্যকে সুন্দরভাবে উপস্থাপন করে। মহিলারা সাধারণত পোচমপল্লী ইকত, মঙ্গলাগিরি কটন এবং ধর্মাবরম রেশমের মতো চমৎকার কাপড় থেকে তৈরি শাড়ি পরেন। এই শাড়িগুলিতে জটিল ডিজাইন এবং প্রাণবন্ত প্যাটার্ন থাকে, যা গর্ব এবং ঐতিহ্যের প্রতীক। উদাহরণস্বরূপ, ধর্মাবরম শাড়িগুলিতে জরী কাজ এবং ফুল, বন্যপ্রাণী এবং মন্দির স্থাপত্য থেকে অনুপ্রাণিত আকারের অন্তর্ভুক্ত থাকে, যখন গাডওয়াল শাড়িগুলি শরীরের জন্য কটন এবং পল্লু এবং কিনারায় রেশমের সংমিশ্রণ করে আকর্ষণীয় রঙের মিশ্রণ তৈরি করে। পুরুষরা ঐতিহ্যগতভাবে ধুতি পরেন, যা কুর্তার সাথে থাকে, এবং এটি প্রায়শই অঙ্গবাস্ত্র দ্বারা সজ্জিত হয়, যা পরিশীলিততার প্রতীক। আদিবাসী অঞ্চলে, পোশাক স্থানীয় শিল্পের প্রতীক হয়, যার মধ্যে প্রাকৃতিক রং এবং ঐতিহ্যবাহী বুনন কৌশল ব্যবহার করে তৈরি করা অনন্য কাপড় থাকে। এই পোশাকগুলি প্রায়শই প্রতীকী ডিজাইনে সজ্জিত হয়, যা আন্ধ্র প্রদেশের আদিবাসী সম্প্রদায়গুলির সৃজনশীল প্রতিভা এবং সাংস্কৃতিক গুরুত্ব প্রদর্শন করে। রাজ্যের ঐতিহ্যবাহী পোশাক শুধু এর ঐতিহ্যের প্রতীক নয়, বরং এর কারিগরদের দক্ষ কারিগরি কাজের উদযাপনও, যেখানে প্রতিটি টুকরা ঐতিহ্য এবং সাংস্কৃতিক গর্বের গল্প বলে।",
        languageImg: andhrapradeshImg,
        languageDetails:
          "আন্ধ্র প্রদেশের অফিসিয়াল ভাষা হল তেলুগু, যা ভারতের ছয়টি শাস্ত্রীয় ভাষার মধ্যে একটি। 'প্রাচ্যের ইতালীয়' নামে পরিচিত তেলুগু তার সুরেলা সুর এবং বিস্তৃত সাহিত্যিক ঐতিহ্যের জন্য প্রশংসিত। এটি ব্যাপকভাবে কথা বলা হয় এবং শিক্ষা প্রতিষ্ঠান, সরকারি যোগাযোগ এবং দৈনন্দিন জীবনে ব্যবহৃত হয়। তেলুগু সাহিত্য খ্যাতনামা কবি এবং লেখক তৈরি করেছে, যারা ভারতের সাংস্কৃতিক পরম্পরা সমৃদ্ধ করেছেন। এই ভাষার মৌখিক এবং লিখিত গল্প বলার একটি সমৃদ্ধ ঐতিহ্য রয়েছে, যার মধ্যে আন্ধ্র মহাভারত এর মতো প্রাচীন গ্রন্থ এবং শাস্ত্রীয় কবিতা অন্তর্ভুক্ত রয়েছে, যা দুই হাজার বছরেরও বেশি পুরানো। তেলুগু ভাষাকে শাস্ত্রীয় নৃত্যের ভাষাগুলির মধ্যে একটিও বলা হয়, বিশেষ করে কুচিপুড়ি নৃত্যে, যা তার ঐতিহ্যবাহী প্রদর্শনীগুলিতে এই ভাষার ব্যবহার করে। এটি তেলুগু লিপিতে লেখা হয়, যা তার গোলাকার এবং বক্ররেখাযুক্ত আকারের জন্য পরিচিত, এবং এর অনন্য ধ্বনিতত্ত্ব এবং ধ্বনি ব্যবস্থার জন্যও প্রসিদ্ধ।",
        languageCourse: "/learn-Indian-culture/assamese-course",
        artsDetails: [
          {
            cuisineImage: greetingImg,
            cuisineName: "কুচিপুড়ি নৃত্য",
          },
          {
            cuisineImage: greetingImg,
            cuisineName: "বুরকথা (লোককথা গল্প বলার শিল্প)",
          },
          {
            cuisineImage: greetingImg,
            cuisineName: "থোলু বম্বালটা (ছায়া পুতুল নাচ)",
          },
          {
            cuisineImage: greetingImg,
            cuisineName: "পেরিণী শিবতাণ্ডব (যোদ্ধা নৃত্য)",
          },
          {
            cuisineImage: greetingImg,
            cuisineName: "বীরনাট্যম (যোদ্ধাদের নৃত্য)",
          },
        ],
        artsCourse: "/learn-Indian-culture/assam-art-course",
      },

    },
  },
};
