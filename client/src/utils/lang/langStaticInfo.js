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
import festivalsImg from "./../../assets/culture/festival.avif";
import greetingImg from "./../../assets/culture/greeting.avif";
import weddingImg from "./../../assets/culture/wedding.avif";

// calendar

import newYear from "./../../assets/calendar/newYear.png";

import br from "./../../assets/calendar/br.jpg";
import eid from "./../../assets/calendar/eid.jpg";
import goodFriday from "./../../assets/calendar/goodFriday.jpg";
import holi from "./../../assets/calendar/holi.jpg";
import makar from "./../../assets/calendar/makar.jpg";
import netaji from "./../../assets/calendar/netaji.jpg";
import pongal from "./../../assets/calendar/pongal.jpg";
import ramnabami from "./../../assets/calendar/ramnabami.jpg";
import republic from "./../../assets/calendar/republic.jpg";
import shiv from "./../../assets/calendar/shiv.jpg";
import vasant from "./../../assets/calendar/vasant.jpg";
import buddy from "./../../assets/calendar/buddy.jpg";
import rath from "./../../assets/calendar/rath.jpg";
import christmas from "./../../assets/calendar/christmas.jpg";

// states

import assasImg from "./../../assets/states/assam.png";
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
import jharkhansImg from "./../../assets/states/Jharkhand.png";
import keralaImg from "./../../assets/states/Kerala.png";
import madhyapradeshImg from "./../../assets/states/madhya-pradesh.png";
import maharashtraImg from "./../../assets/states/Maharashtra.png";
import manipurImg from "./../../assets/states/Manipur.png";
import mizorasImg from "./../../assets/states/Mizoram.png";
import nagalansImg from "./../../assets/states/Nagaland.png";
import odishaImg from "./../../assets/states/Odisha.png";
import punjabImg from "./../../assets/states/Punjab.png";
import rajasthanImg from "./../../assets/states/Rajasthan.png";
import sikkisImg from "./../../assets/states/Sikkim.png";
import tamilnaduImg from "./../../assets/states/Tamil-Nadu.png";
import telanganaImg from "./../../assets/states/Telangana.png";
import tripuraImg from "./../../assets/states/Tripura.png";
import uttarakhansImg from "./../../assets/states/Uttarakhand.png";
import wbImg from "./../../assets/states/west-bengal.png";
import jsImg from "./../../assets/states/Jammu.png";
import andamanImg from "./../../assets/states/andaman.png";
import chandigarhImg from "./../../assets/states/chandigarh.png";
import dadraImg from "./../../assets/states/dadra.png";
import delhiImg from "./../../assets/states/Delhi.png";
import puducherryImg from "./../../assets/states/puducherry.png";
import ladakhImg from "./../../assets/states/ladakh.png";
import lakshadweepImg from "./../../assets/states/lakshya.png";

// career

import adminImg from "../../assets/career/admins.png";
import blogWriterImg from "../../assets/career/blogWriter.png";
import digiArtImg from "../../assets/career/digiArt.png";
import seoImg from "../../assets/career/seo.png";
import teacherImg from "../../assets/career/teacher.png";
import vlogCreatorImg from "../../assets/career/vlogCreator.png";
// religion
import hinduImg from "../../assets/culture/1.png";
import buddiImg from "../../assets/culture/2.png";
import jainiImg from "../../assets/culture/3.png";
import sikhiImg from "../../assets/culture/4.png";
import islamImg from "../../assets/culture/5.png";

export const Static_Information = {
  en: {
    translation: {
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
        buttonWantToLearn: "Want to learn?",
      },
      UserRoutesNames: [
        {
          route_link: "/",
          route_name: "Home",
        },
        {
          route_link: "/heritage",
          route_name: "Heritage",
        },
        {
          route_link: "/culture-tradition",
          route_name: "Culture & Tradition",
        },
        {
          route_link: "/learn-Indian-culture",
          route_name: "Cultural Course",
        },
        {
          route_link: "/explore-diversity",
          route_name: "Explore Diversity",
        },
        {
          route_link: "/blogs-vlogs",
          route_name: "Blogs & Vlogs",
        },
        {
          route_link: "/live-contest",
          route_name: "Live Contest",
        },
        {
          route_link: "/career",
          route_name: "Career",
        },
        {
          route_link: "/virtual-store",
          route_name: "Store",
        },
      ],
      // -------------------------- HOME ---------------------------
      HomeData: {
        homeButtonName: "VISIT",

        MulHome: {
          HeriHome: [
            {
              para: `Dive deep into India’s historical and cultural wealth by exploring its most celebrated World Heritage Sites. This section is dedicated to the architectural and natural marvels that have stood the test of time, each narrating a story of its own. From the majestic forts that once guarded kingdoms to the sacred temp`,
              image: heritageImg,
              shadow: "shadow-highlight",
              headingName: "Unveiling India’s Timeless Treasures",
              buttonLink: "/heritage",
              featuring: "Featuring",

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
              nRHead: "Welcome You Here!",
              nRPara: `A warm welcome to our city! Discover the heart of India's
                central highlands. Explore ancient temples, lush landscapes, and
                bustling markets. Indulge in delectable local cuisine and
                experience the warmth of our people. Have a memorable stay!`,
              nRoptions: "Select Attraction Type",
              op1: "Tourist Spots",
              op2: "Restaurants",
              op3: "Hotels",
              op4: "Hospitals",
              op5: "Police Stations",

              nR: "Nearest Attractions",
              dist: "Distance",
            },
          ],
          StoreHome: [
            {
              para: `Dive deep into India’s historical and cultural wealth by exploring its most celebrated World Heritage Sites. This section is dedicated to the architectural and natural marvels that have stood the test of time, each narrating a story of its own. From the majestic forts that once guarded kingdoms to the sacred temp`,
              image: virtualStoreImg,
              shadow: "shadow-dark_secondary_text",
              headingName: "Bring a Piece of India’s Heritage Home",
              buttonLink: "/virtual-store",
              featuringData: [
                {
                  featureName: "Buy Antique Products",
                },
                {
                  featureName: "Sell/Promote Antique Products",
                },
              ],
              proText: "Check out the local products around you",
            },
          ],
          Home: [
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
              shadow: "shadow-highlight",
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
              image: exploreImg,
              shadow: "shadow-highlight_hover",
              headingName: "Craft Your Perfect Indian Adventure",
              buttonLink: "/explore-diversity",
              featuringData: [
                {
                  featureName: "Cultural Heritage Story Telling",
                },
                {
                  featureName: "Predict Heritage Trip Budgets",
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
                  featureName: "Heritage Manual Summary",
                },
              ],
            },

            // {
            //   para: `Get ready to dive into the excitement! Our live contest is now live. Test your skills, showcase your talent, and stand a chance to win incredible prizes. Don't miss out on this thrilling opportunity.`,
            //   image: blogsImg,
            //   shadow: "shadow-highlight_hover",
            //   headingName: "Win Big! Participate in Our Live Contest",
            //   buttonLink: "/live-contest",
            //   featuringData: [
            //     {
            //       featureName: "Content Writing Contest",
            //     },
            //     {
            //       featureName: "Digital Art Contest",
            //     },
            //     {
            //       featureName: "Indian Heritage and Culture Quiz Contest",
            //     },
            //     {
            //       featureName: "Content Creation (Vlog) Contest",
            //     },
            //   ],
            // },

            // {
            //   para: `Discover a world of possibilities at Cultural Canvas. Explore our diverse range of career opportunities and join a team of talented individuals. Start your journey today.`,
            //   image: blogsImg,
            //   shadow: "shadow-highlight",
            //   headingName: "Your Next Career Adventure Starts Here",
            //   buttonLink: "/career",
            //   featuringData: [
            //     {
            //       featureName: "Career opportunity for Admins",
            //     },
            //     {
            //       featureName: "Career opportunity for Blog Writers",
            //     },

            //     {
            //       featureName: "Career opportunity for Teachers",
            //     },
            //     {
            //       featureName: "Career opportunity for Digital Artists",
            //     },
            //     {
            //       featureName: "Career opportunity for Sellers",
            //     },
            //     {
            //       featureName: "Career opportunity for Content Creators",
            //     },
            //   ],
            // },
          ],
        },
      },

      // ------------------------- CULTURE & TRADITION --------------

      CultureCalendarData: [
        {
          name: "New Year's Day",
          description:
            "Celebration of the first day of the year with festivities and resolutions.",
          date: "2025-01-01",
          image: newYear,
          location: {
            city: null,
            state: null,
            lat: null,
            lng: null,
          },
        },
        {
          name: "Makar Sankranti",
          description:
            "Harvest festival celebrated with kite flying and traditional foods.",
          date: "2025-01-14",
          image: makar,
          location: {
            city: "Ahmedabad",
            state: "Gujarat",
            lat: 23.0225,
            lng: 72.5714,
          },
        },
        {
          name: "Pongal",
          description:
            "Harvest festival celebrated in Tamil Nadu with traditional rituals and feasts.",
          date: "2025-01-15",
          image: pongal,
          location: {
            city: "Chennai",
            state: "Tamil Nadu",
            lat: 13.0827,
            lng: 80.2707,
          },
        },
        {
          name: "Subhash Chandra Bose Jayanti",
          description:
            "Birth anniversary of Netaji Subhash Chandra Bose, a prominent leader in India's freedom struggle.",
          date: "2025-01-23",
          image: netaji,
          location: {
            city: null,
            state: null,
            lat: null,
            lng: null,
          },
        },
        {
          name: "Republic Day",
          description:
            "National holiday in India celebrating the adoption of the Constitution.",
          date: "2025-01-26",
          image: republic,
          location: {
            city: null,
            state: null,
            lat: null,
            lng: null,
          },
        },
        {
          name: "Vasant Panchami",
          description:
            "Festival dedicated to Goddess Saraswati, celebrating knowledge, art, and wisdom.",
          date: "2025-02-03",
          image: vasant,
          location: {
            city: "Kolkata",
            state: "West Bengal",
            lat: 22.5726,
            lng: 88.3639,
          },
        },
        {
          name: "Maha Shivaratri",
          description:
            "Dedicated to Lord Shiva, celebrated with fasting and night-long prayers.",
          date: "2025-03-01",
          image: shiv,
          location: {
            city: "Varanasi",
            state: "Uttar Pradesh",
            lat: 25.3176,
            lng: 82.9739,
          },
        },
        {
          name: "Holi",
          description:
            "The festival of colors celebrated with joy and enthusiasm.",
          date: "2025-03-13",
          image: holi,
          location: {
            city: null,
            state: null,
            lat: null,
            lng: null,
          },
        },
        {
          name: "Ram Navami",
          description:
            "Celebration of Lord Rama's birth with prayers and festivities.",
          date: "2025-04-02",
          image: ramnabami,
          location: {
            city: "Ayodhya",
            state: "Uttar Pradesh",
            lat: 26.7993,
            lng: 82.1986,
          },
        },
        {
          name: "Good Friday",
          description: "Commemoration of the crucifixion of Jesus Christ.",
          date: "2025-04-18",
          image: goodFriday,
          location: {
            city: null,
            state: null,
            lat: null,
            lng: null,
          },
        },
        {
          name: "Ambedkar Jayanti",
          description:
            "Birth anniversary of Dr. B.R. Ambedkar, architect of the Indian Constitution.",
          date: "2025-04-14",
          image: br,
          location: {
            city: null,
            state: null,
            lat: null,
            lng: null,
          },
        },
        {
          name: "Eid al-Fitr",
          description:
            "The conclusion of Ramadan with a festive day of prayers and feasting.",
          date: "2025-03-30",
          image: eid,
          location: {
            city: null,
            state: null,
            lat: null,
            lng: null,
          },
        },
        {
          name: "Buddha Purnima",
          description:
            "Celebration of Lord Buddha's birth, enlightenment, and death.",
          date: "2025-05-10",
          image: buddy,
          location: {
            city: "Bodh Gaya",
            state: "Bihar",
            lat: 24.6961,
            lng: 84.9869,
          },
        },
        {
          name: "Rath Yatra",
          description:
            "A chariot festival associated with Lord Jagannath in Odisha.",
          date: "2025-06-27",
          image: rath,
          location: {
            city: "Puri",
            state: "Odisha",
            lat: 19.8135,
            lng: 85.8312,
          },
        },
        {
          name: "Guru Purnima",
          description: "A day dedicated to spiritual and academic teachers.",
          date: "2025-07-11",
          image: rath,
          location: {
            city: null,
            state: null,
            lat: null,
            lng: null,
          },
        },
        {
          name: "Independence Day",
          description:
            "India's national holiday marking independence from British rule.",
          date: "2025-08-15",
          image: rath,
          location: {
            city: null,
            state: null,
            lat: null,
            lng: null,
          },
        },
        {
          name: "Raksha Bandhan",
          description:
            "Celebration of the bond between brothers and sisters with the tying of rakhi.",
          date: "2025-08-29",
          image: rath,
          location: {
            city: null,
            state: null,
            lat: null,
            lng: null,
          },
        },
        {
          name: "Janmashtami",
          description:
            "Celebration of the birth of Lord Krishna with fasting and midnight prayers.",
          date: "2025-08-31",
          image: rath,
          location: {
            city: "Mathura",
            state: "Uttar Pradesh",
            lat: 27.4924,
            lng: 77.6737,
          },
        },
        {
          name: "Ganesh Chaturthi",
          description:
            "Festival honoring Lord Ganesha with prayers, processions, and offerings.",
          date: "2025-09-01",
          image: rath,
          location: {
            city: "Mumbai",
            state: "Maharashtra",
            lat: 19.076,
            lng: 72.8777,
          },
        },
        {
          name: "Onam",
          description:
            "Harvest festival of Kerala celebrated with cultural events and traditional feasts.",
          date: "2025-09-08",
          image: rath,
          location: {
            city: "Thiruvananthapuram",
            state: "Kerala",
            lat: 8.5241,
            lng: 76.9366,
          },
        },
        {
          name: "Navratri/Durga Puja",
          description:
            "Nine-day festival dedicated to Goddess Durga, celebrated with dance and devotion.",
          date: "2025-10-01",
          image: rath,
          location: {
            city: null,
            state: null,
            lat: null,
            lng: null,
          },
        },
        {
          name: "Dussehra",
          description:
            "Marks the victory of Lord Rama over Ravana and symbolizes the triumph of good over evil.",
          date: "2025-10-11",
          image: rath,
          location: {
            city: "Mysore",
            state: "Karnataka",
            lat: 12.2958,
            lng: 76.6394,
          },
        },
        {
          name: "Valmiki Jayanti",
          description:
            "Commemorates the birth of Maharishi Valmiki, the author of the Ramayana.",
          date: "2025-10-17",
          image: rath,
          location: {
            city: null,
            state: null,
            lat: null,
            lng: null,
          },
        },
      ],

      AllCulturesData: {
        allCultureHeading: "Cultural Richness of India🪔",
        AllCulturesName: [
          {
            cultureImg: weddingImg,
            cultureIntro: `Celebrate India’s artistic heritage, from classical to contemporary 🎨`,
            cultureName: "Arts",
            individualPage: "/culture-tradition/art-culture",
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
            individualPage: "/culture-tradition/cuisine-culture",
          },

          {
            cultureImg: weddingImg,
            cultureIntro: `Dive into the traditions of Indian families and majestic weddings 🏠`,
            cultureName: "Family Structures & Weddings",
            individualPage: "/culture-tradition/wedding-culture",
          },
          {
            cultureImg: festivalsImg,
            cultureIntro: `Experience the vibrance of India’s grand festivals and celebrations 🥳`,
            cultureName: "Festivals",
            individualPage: "/culture-tradition/festival-culture",
          },
          {
            cultureImg: greetingImg,
            cultureIntro: `Learn the warmth and meaning behind India’s unique ways of greeting 🙏`,
            cultureName: "Greetings",
            individualPage: "/culture-tradition/greeting-culture",
          },
          {
            cultureImg: langImg,
            cultureIntro: `Explore India’s linguistic treasures and the beauty of its 22 official languages 🌐`,
            cultureName: "Languages",
            individualPage: "/culture-tradition/language-culture",
          },
          {
            cultureImg: religiousImg,
            cultureIntro: `Discover the spiritual essence of India’s diverse faiths and traditions 🛐`,
            cultureName: "Religion",
            individualPage: "/culture-tradition/religion",
          },
          {
            cultureImg: weddingImg,
            cultureIntro: `Explore India’s love for sports, from cricket to ancient martial arts 🏑`,
            cultureName: "Sports",
            individualPage: "/culture-tradition/sport-culture",
          },
        ],
      },
      ClothingCultureData: {
        traditionalClothsHeading: "Traditional Cloths of India",
        sareeHeading: "Saree",
        sareeDescription: `The saree, an iconic symbol of Indian culture, is renowned for its
            grace and versatility. Spanning over 5-6 yards of fabric, it is
            draped elegantly around the body, showcasing the wearer’s poise and
            sophistication. Worn across India, the saree embodies both tradition
            and style, making it a cherished garment for various occasions.
            <br /><br />
            A saree consists of three primary components: the saree
            itself, a blouse (choli), and a petticoat. The petticoat is worn
            underneath and acts as a foundation, while the blouse complements
            the saree with a fitted, often embellished, top. The saree is
            wrapped around the waist, with one end draped over the shoulder,
            known as the pallu. The draping style varies by region, with
            different patterns and techniques that highlight the saree’s rich
            cultural significance.
            <br /><br />

            The saree is a preferred choice for a variety of occasions,
            including weddings, festivals, and formal events. Its adaptability
            allows it to be dressed up with elaborate jewelry and accessories or
            worn casually for everyday wear. The saree's timeless appeal
            continues to captivate and inspire fashion trends both in India and
            around the world. <br /><br />

            The saree is not merely a piece of clothing; it represents a
            deep-rooted cultural heritage. Each region of India has its unique
            style of draping and fabric, reflecting local traditions and
            artistry. From the Banarasi silk sarees of Varanasi to the
            Kanjeevaram silks of Tamil Nadu, each saree tells a story of its
            origin, weaving history into its fabric.`,
        DiffSarees: [
          {
            sImg: greetingImg,
            sName: "Bandhani Saree",
            sIntro:
              "A traditional tie-dye saree originating from Gujarat and Rajasthan ▶️",
          },
          {
            sImg: greetingImg,
            sName: "Banarasi Silk Saree",
            sIntro:
              "Exquisite saree known for its intricate gold and silver brocade ▶️",
          },
          {
            sImg: greetingImg,
            sName: "Silk Saree",
            sIntro:
              "Elegant saree crafted from pure silk for a luxurious feel ▶️",
          },
          {
            sImg: ladakhImg,
            sName: "Dola Silk Saree",
            sIntro:
              "A premium saree with a blend of softness and vibrant patterns ▶️",
          },
          {
            sImg: ladakhImg,
            sName: "Georgette Saree",
            sIntro:
              "Lightweight and easy-to-drape saree perfect for every occasion ▶️",
          },
          {
            sImg: ladakhImg,
            sName: "Kanjeevaram Saree",
            sIntro:
              "South India's pride, known for its rich colors and thick borders ▶️",
          },
          {
            sImg: ladakhImg,
            sName: "Chanderi Saree",
            sIntro:
              "A blend of cotton and silk with zari work for a delicate look ▶️",
          },
          {
            sImg: ladakhImg,
            sName: "Tant Saree",
            sIntro: "A crisp and breathable cotton saree from West Bengal ▶️",
          },
          {
            sImg: ladakhImg,
            sName: "Paithani Saree",
            sIntro:
              "A regal saree from Maharashtra with intricate peacock motifs ▶️",
          },
          {
            sImg: ladakhImg,
            sName: "Pochampally Ikat Saree",
            sIntro:
              "Known for its geometric patterns and handwoven artistry ▶️",
          },
          {
            sImg: ladakhImg,
            sName: "Kasavu Saree",
            sIntro:
              "Kerala's traditional saree with golden borders for festive vibes ▶️",
          },
          {
            sImg: ladakhImg,
            sName: "Mysore Silk Saree",
            sIntro:
              "Famed for its shimmering texture and vibrant solid colors ▶️",
          },
          {
            sImg: ladakhImg,
            sName: "Chiffon Saree",
            sIntro:
              "An ultra-light saree ideal for comfort and graceful draping ▶️",
          },
          {
            sImg: ladakhImg,
            sName: "Patola Saree",
            sIntro:
              "A double ikat masterpiece from Gujarat with vivid designs ▶️",
          },
          {
            sImg: ladakhImg,
            sName: "Kota Doria Saree",
            sIntro: "A sheer and airy saree with unique square patterns ▶️",
          },
        ],
        dhotiHeading: "Dhoti",
        dhotiDescription: `The dhoti is a traditional garment worn predominantly in South India
            and Bengal. It is known for its simplicity and elegance,
            representing a blend of cultural heritage and comfort. Typically
            worn by men, the dhoti is a versatile piece of clothing that
            connects wearers to their roots. <br /><br />
            A dhoti is a rectangular
            piece of fabric, often 5-6 yards long, that is wrapped around the
            waist and tied in place. Traditionally made from cotton or silk, it
            provides a comfortable and breathable option for daily wear and
            formal occasions. The dhoti is paired with a kurta or shirt,
            creating a classic and refined look.
            <br /><br />
            The dhoti is more than just clothing; it is a symbol of cultural
            identity and tradition. Its origins trace back to ancient India,
            where it was worn by men across various regions. The garment’s
            simplicity and practicality reflect the values of modesty and
            respect prevalent in Indian culture.
            <br /><br />
            The dhoti is often worn during religious ceremonies, festivals, and
            formal events. It is favored for its comfort and ease of movement,
            making it suitable for traditional rituals and cultural gatherings.
            The dhoti’s enduring legacy continues to celebrate Indian heritage
            and tradition.`,
        DiffDhotis: [
          {
            sImg: wbImg,
            sName: "Tamil Veshti Dhoti",
            sIntro:
              "Traditional attire in Tamil Nadu, worn for rituals and daily wear ▶️",
          },
          {
            sImg: wbImg,
            sName: "Kannada Kache Panche Dhoti",
            sIntro:
              "A classic dhoti style with pleats, commonly worn in Karnataka ▶️",
          },
          {
            sImg: wbImg,
            sName: "Telugu Pancha Dhoti",
            sIntro:
              "Simple yet elegant, a staple for Andhra Pradesh ceremonies ▶️",
          },
          {
            sImg: wbImg,
            sName: "Punjabi Chadra",
            sIntro:
              "A vibrant and colorful dhoti draped for special occasions ▶️",
          },
          {
            sImg: wbImg,
            sName: "Maharashtrian Dhotar",
            sIntro:
              "A crisp white dhoti often paired with a kurta or angavastram ▶️",
          },
          {
            sImg: wbImg,
            sName: "Rajasthani Dulangi Dhoti",
            sIntro:
              "Brightly colored dhoti with bold prints, worn traditionally in Rajasthan ▶️",
          },
          {
            sImg: wbImg,
            sName: "The Bengali Kochano or Pleated Dhoti",
            sIntro:
              "Elegant white dhoti with intricate pleats, popular in Bengal ▶️",
          },
          {
            sImg: wbImg,
            sName: "Readymade Velcro Dhoti",
            sIntro:
              "A modern twist for convenience, pre-stitched and easy to wear ▶️",
          },
          {
            sImg: wbImg,
            sName: "Kerala Mundu",
            sIntro:
              "A lightweight and breathable dhoti, often paired with a golden border ▶️",
          },
          {
            sImg: wbImg,
            sName: "Gujarati Dhoti",
            sIntro:
              "Known for its comfort and flair, commonly worn during garba ▶️",
          },
          {
            sImg: wbImg,
            sName: "Odisha Dhoti",
            sIntro:
              "Traditional dhoti paired with a colorful border for festive occasions ▶️",
          },
          {
            sImg: wbImg,
            sName: "Assamese Dhoti",
            sIntro:
              "A white dhoti with red accents, typically worn during Bihu celebrations ▶️",
          },
          {
            sImg: wbImg,
            sName: "Bhagalpuri Dhoti",
            sIntro:
              "Renowned for its silky texture and worn for formal occasions ▶️",
          },
          {
            sImg: wbImg,
            sName: "Rajbari Style Dhoti",
            sIntro:
              "An elegant drape popularized by royalty in Eastern India ▶️",
          },
          {
            sImg: wbImg,
            sName: "Dhoti Kurta Set",
            sIntro: "A complete traditional look with a paired kurta ▶️",
          },
          {
            sImg: wbImg,
            sName: "Kashmiri Dhoti",
            sIntro:
              "Woolen dhoti designed for warmth and traditional elegance ▶️",
          },
          {
            sImg: wbImg,
            sName: "Mysuru Panche Dhoti",
            sIntro:
              "A royal dhoti adorned with zari borders, worn in Karnataka ▶️",
          },
          {
            sImg: wbImg,
            sName: "Chhattisgarhi Dhoti",
            sIntro:
              "A simple cotton dhoti, ideal for daily wear in central India ▶️",
          },
          {
            sImg: wbImg,
            sName: "Jodhpuri Dhoti",
            sIntro:
              "A tailored dhoti reflecting the aristocratic heritage of Rajasthan ▶️",
          },
          {
            sImg: wbImg,
            sName: "Vidarbha Style Dhoti",
            sIntro:
              "Traditional wear of Vidarbha region, known for its unique drape ▶️",
          },
          {
            sImg: wbImg,
            sName: "Tribal Dhoti",
            sIntro:
              "Worn by tribal communities with unique patterns and earthy tones ▶️",
          },
          {
            sImg: wbImg,
            sName: "Angarkha Dhoti",
            sIntro:
              "Worn with an angarkha, this dhoti highlights Rajputana culture ▶️",
          },
          {
            sImg: wbImg,
            sName: "Gandhi Dhoti",
            sIntro: "Minimalist, handwoven dhoti inspired by Mahatma Gandhi ▶️",
          },
          {
            sImg: wbImg,
            sName: "Cotton Temple Dhoti",
            sIntro:
              "Popular in South India, used during religious ceremonies ▶️",
          },
          {
            sImg: wbImg,
            sName: "Festival Zari Dhoti",
            sIntro:
              "Richly embroidered dhoti, ideal for weddings and festivals ▶️",
          },
        ],
        salwarHeading: "Salwar Kameez: The Quintessential North Indian Attire",
        salwarDescription: `
        Introduction: The salwar kameez is a beloved traditional outfit worn by women across North India. Known for its comfort and elegance, this ensemble has become a staple in Indian fashion, symbolizing both cultural heritage and modern style.

        Overview: The salwar kameez consists of three main pieces: the kameez (a long tunic or top), the salwar (loose-fitting trousers), and the dupatta (a long scarf). The kameez can vary in length and style, often featuring intricate embroidery or prints. The salwar is designed for ease of movement and comfort, while the dupatta adds a touch of grace and modesty. Together, these elements create an outfit that balances practicality with aesthetic appeal, making it a favorite across generations.

        Cultural Significance: Originating from the Mughal era, the salwar kameez has evolved over time, blending traditional designs with contemporary trends. It reflects the rich cultural tapestry of North India and showcases the region's textile artistry through diverse fabrics and embellishments. The embroidery techniques, block prints, and hand-painted patterns on the kameez are testaments to India's craftsmanship. Over time, the salwar kameez has become a cultural icon, embodying elegance and tradition while adapting to modern sensibilities.

        Occasions: The salwar kameez is versatile, suitable for casual wear, formal events, and festive occasions. It is often chosen for daily wear as well as special celebrations, including weddings and religious ceremonies. Its adaptability allows it to be styled in numerous ways, making it a favored choice for women of all ages. Whether paired with simple accessories for a casual look or adorned with heavy embroidery and ornate jewelry for festive events, the salwar kameez continues to charm with its timeless appeal.

        Modern Adaptations: Over the years, the salwar kameez has undergone significant transformations to align with contemporary fashion trends. Designers have introduced modern cuts, fusion styles, and experimental patterns, making this attire popular not only in India but also globally. Palazzo-style salwars, Anarkali suits, and asymmetrical kameez designs are some of the innovations that blend tradition with modernity. The salwar kameez remains a canvas for creativity, ensuring its place in both traditional and modern wardrobes.
        `,
        DiffSalwars: [
          {
            sImg: wbImg,
            sName: "Patiala Salwar Kameez",
            sIntro:
              "Known for its pleated and voluminous bottoms, Patiala suits are vibrant and iconic attire from Punjab. ▶️",
          },
          {
            sImg: wbImg,
            sName: "Anarkali Suit",
            sIntro:
              "A floor-length kameez paired with churidar salwar, this design exudes royal elegance. ▶️",
          },
          {
            sImg: wbImg,
            sName: "Palazzo Salwar Kameez",
            sIntro:
              "Modern and chic, this style features wide-legged palazzos for a contemporary look. ▶️",
          },
          {
            sImg: wbImg,
            sName: "Straight-Cut Salwar Kameez",
            sIntro:
              "Simple yet stylish, this classic design is perfect for both formal and casual wear. ▶️",
          },
          {
            sImg: wbImg,
            sName: "Churidar Salwar Kameez",
            sIntro:
              "Featuring tight-fitted churidar bottoms, this outfit is a timeless classic. ▶️",
          },
          {
            sImg: wbImg,
            sName: "Sharara Suit",
            sIntro:
              "A festive favorite, the sharara suit features flared bottoms and intricate embroidery. ▶️",
          },
          {
            sImg: wbImg,
            sName: "Angrakha Salwar Kameez",
            sIntro:
              "With its overlapping kameez design, the Angrakha style is a nod to traditional Mughal fashion. ▶️",
          },
          {
            sImg: wbImg,
            sName: "Cape Salwar Kameez",
            sIntro:
              "A modern twist, this style features a cape layer for a glamorous look. ▶️",
          },
          {
            sImg: wbImg,
            sName: "Patiyala Dhoti Salwar Suit",
            sIntro:
              "A perfect blend of comfort and elegance, this suit combines dhoti-style bottoms with a chic kameez. ▶️",
          },
          {
            sImg: wbImg,
            sName: "Indo-Western Salwar Kameez",
            sIntro:
              "A fusion of Indian and Western designs, this style brings modernity to traditional attire. ▶️",
          },
          {
            sImg: wbImg,
            sName: "Afghani Salwar Kameez",
            sIntro:
              "Inspired by Afghan fashion, this style features loose, flowy salwars with elegant kameez. ▶️",
          },
          {
            sImg: wbImg,
            sName: "Jacket-Style Salwar Kameez",
            sIntro:
              "A stylish addition, this outfit pairs a jacket with a salwar suit for a regal look. ▶️",
          },
          {
            sImg: wbImg,
            sName: "Umbrella-Cut Kameez",
            sIntro:
              "Known for its wide flare, this kameez style adds a dramatic touch to any outfit. ▶️",
          },
          {
            sImg: wbImg,
            sName: "Asymmetrical Salwar Kameez",
            sIntro:
              "With its uneven hemline, this modern style adds a trendy edge to traditional attire. ▶️",
          },
          {
            sImg: wbImg,
            sName: "Dhoti-Style Salwar Kameez",
            sIntro:
              "Featuring dhoti-inspired bottoms, this style combines tradition and contemporary elegance. ▶️",
          },
          {
            sImg: wbImg,
            sName: "Pakistani Salwar Kameez",
            sIntro:
              "Renowned for its long kameez and elegant salwars, this style is a blend of grace and sophistication. ▶️",
          },
          {
            sImg: wbImg,
            sName: "Front-Slit Salwar Kameez",
            sIntro:
              "A bold and modern choice, this kameez features a slit in the front for added flair. ▶️",
          },
          {
            sImg: wbImg,
            sName: "Peplum-Style Salwar Kameez",
            sIntro:
              "A chic design with a peplum-style kameez, perfect for adding a touch of glamour. ▶️",
          },
          {
            sImg: wbImg,
            sName: "Gharara Salwar Kameez",
            sIntro:
              "Traditional yet glamorous, this suit features heavily flared gharara pants with a short kameez. ▶️",
          },
          {
            sImg: wbImg,
            sName: "Lehenga-Style Salwar Kameez",
            sIntro:
              "A fusion of lehenga and salwar kameez, this outfit is ideal for weddings and grand celebrations. ▶️",
          },
        ],
        kurtaHeading: "Kurta-Pajama: A Blend of Comfort and Style",
        kurtaDescription: `
Introduction: The kurta-pajama is a versatile and classic outfit for men, deeply rooted in Indian tradition. Known for its simplicity and comfort, it has remained a popular choice for casual wear, festive occasions, and formal events.

Overview: The kurta is a long tunic that can be plain, embroidered, or patterned, while the pajama is a slim or loose-fitting bottom. This outfit seamlessly combines practicality and elegance, making it suitable for men of all ages. Whether crafted from cotton, silk, or other rich fabrics, the kurta-pajama remains timeless in Indian fashion.

Cultural Significance: Tracing its origins to the Mughal era, the kurta-pajama is a symbol of Indian heritage and craftsmanship. It reflects the diverse cultural fabric of India, with regional variations such as the Lucknowi Chikankari kurta and Punjabi embroidered styles. The kurta-pajama is often worn during religious ceremonies, weddings, and festivals, symbolizing grace and tradition.

Occasions: Perfect for both everyday wear and special events, the kurta-pajama is adaptable to various occasions. For casual outings, a plain cotton kurta paired with simple pajama pants is ideal. For weddings and celebrations, heavily embroidered kurtas in silk or brocade are paired with churidars or dhoti-style pajamas for a regal look.

Modern Adaptations: Designers have reinvented the kurta-pajama with asymmetric hemlines, side slits, and fusion styles like pairing kurtas with jeans or modern trousers. The introduction of printed kurtas and Indo-Western ensembles has expanded its appeal globally, making it a fashion statement for men across the world.
`,
        DiffKurtas: [
          {
            sImg: wbImg,
            sName: "Chikankari Kurta",
            sIntro:
              "Featuring intricate hand-embroidered patterns, this style is a favorite for traditional occasions. ▶️",
          },
          {
            sImg: wbImg,
            sName: "Pathani Kurta",
            sIntro:
              "With a rugged yet elegant design, the Pathani kurta is inspired by traditional Afghan attire. ▶️",
          },
          {
            sImg: wbImg,
            sName: "Asymmetric Kurta",
            sIntro:
              "A modern twist, this kurta features an uneven hemline for a contemporary look. ▶️",
          },
          {
            sImg: wbImg,
            sName: "Short Kurta",
            sIntro:
              "A casual and trendy option, this kurta is shorter in length and pairs well with jeans. ▶️",
          },
          {
            sImg: wbImg,
            sName: "Sherwani-Style Kurta",
            sIntro:
              "Richly embellished, this kurta exudes grandeur and is ideal for weddings and grand occasions. ▶️",
          },
          {
            sImg: wbImg,
            sName: "Printed Kurta",
            sIntro:
              "Adorned with vibrant prints, this kurta adds a splash of color to your wardrobe. ▶️",
          },
          {
            sImg: wbImg,
            sName: "Silk Kurta",
            sIntro:
              "Crafted from luxurious silk, this kurta offers an elegant and sophisticated appearance. ▶️",
          },
          {
            sImg: wbImg,
            sName: "Indo-Western Kurta",
            sIntro:
              "A blend of traditional and modern aesthetics, perfect for contemporary fashion enthusiasts. ▶️",
          },
          {
            sImg: wbImg,
            sName: "Linen Kurta",
            sIntro:
              "Lightweight and breathable, this kurta is a great choice for summer festivities. ▶️",
          },
          {
            sImg: wbImg,
            sName: "Bandhgala Kurta",
            sIntro:
              "Featuring a closed-neck design, this kurta is a stylish pick for formal events. ▶️",
          },
        ],
        lehengaHeading: "Lehenga-Choli: The Bridal Splendor of India",
        lehengaDescription: `
Introduction: The lehenga-choli is a quintessential bridal outfit in India, embodying tradition, opulence, and grace. Its intricate embroidery, luxurious fabrics, and vibrant colors make it a timeless choice for weddings and grand celebrations.

Overview: This attire consists of three components: the lehenga (a flared skirt), the choli (a fitted blouse), and the dupatta (a long scarf). The lehenga is often heavily embellished with zari, sequins, or embroidery, while the choli complements with matching or contrasting designs. Together, these elements create a regal and eye-catching ensemble.

Cultural Significance: The lehenga-choli holds a special place in Indian weddings, symbolizing joy, celebration, and cultural heritage. Its design varies across regions, from the Bandhani patterns of Gujarat to the intricate zardozi work of Rajasthan. Worn primarily during weddings and festivals, it represents the rich traditions and artistry of India.

Occasions: The lehenga-choli is not limited to weddings; it is also a favorite for sangeet, mehendi, and festive gatherings. Bridal lehengas are crafted with exquisite detail, while simpler lehengas in cotton or silk are ideal for casual celebrations.

Modern Adaptations: Designers have reimagined the lehenga-choli with fusion styles like lehenga gowns, crop top lehengas, and contemporary drapes. Experimentation with lighter fabrics, unique cuts, and minimalistic embroidery has made it a versatile outfit for modern brides and fashion enthusiasts.
`,
        DiffLehengas: [
          {
            sImg: wbImg,
            sName: "Bridal Lehenga",
            sIntro:
              "Exquisitely crafted with heavy embroidery and embellishments, perfect for the wedding day. ▶️",
          },
          {
            sImg: wbImg,
            sName: "A-Line Lehenga",
            sIntro:
              "With a fitted waist and flared hem, this style creates a flattering silhouette. ▶️",
          },
          {
            sImg: wbImg,
            sName: "Fish-Cut Lehenga",
            sIntro:
              "This style hugs the body till the knees and flares out, resembling a mermaid’s tail. ▶️",
          },
          {
            sImg: wbImg,
            sName: "Circular Lehenga",
            sIntro:
              "The classic choice with wide flares and intricate embroidery, perfect for traditional ceremonies. ▶️",
          },
          {
            sImg: wbImg,
            sName: "Panelled Lehenga",
            sIntro:
              "With multiple panels stitched together, this lehenga adds volume and variety to the outfit. ▶️",
          },
          {
            sImg: wbImg,
            sName: "Chikankari Lehenga",
            sIntro:
              "Featuring delicate hand-embroidered patterns, ideal for elegant and subtle looks. ▶️",
          },
          {
            sImg: wbImg,
            sName: "Lehenga Saree",
            sIntro:
              "A fusion of lehenga and saree, combining the beauty of both attires in one. ▶️",
          },
          {
            sImg: wbImg,
            sName: "Indo-Western Lehenga",
            sIntro:
              "A modern take with unique cuts and minimal embellishments, perfect for contemporary fashion. ▶️",
          },
          {
            sImg: wbImg,
            sName: "Velvet Lehenga",
            sIntro:
              "Crafted from rich velvet fabric, exuding luxury and sophistication. ▶️",
          },
          {
            sImg: wbImg,
            sName: "Jacket-Style Lehenga",
            sIntro:
              "Paired with a stylish jacket instead of a choli, adding a modern twist to tradition. ▶️",
          },
        ],
        sherwaniHeading: "Sherwani: The Regal Groom's Attire",
        sherwaniDescription: `
    Introduction: The Sherwani is the quintessential choice for grooms during weddings, symbolizing royal elegance and grace. With its rich history and timeless appeal, it remains a favorite for men on their special day.
    
    Overview: The Sherwani is a long coat-like garment, typically worn over a kurta, paired with a churidar or a straight pant. It features intricate embroidery, luxurious fabrics like silk, velvet, or brocade, and is often accessorized with a dupatta or stole.
    
    Cultural Significance: Originating from the Mughal era, the Sherwani is a reflection of the regal heritage and craftsmanship of India. Its popularity in weddings, particularly in North India, showcases its importance as a symbol of grandeur and celebration.
    
    Occasions: While primarily worn by grooms during weddings, the Sherwani is also a popular choice for other celebrations like receptions, sangeet, and festive occasions. The design and embroidery of Sherwanis can vary depending on the region and personal preferences.
    
    Modern Adaptations: Designers have modernized the Sherwani with fusion elements, such as asymmetrical cuts, short Sherwanis, and even fusion Sherwani kurtas. They are now available in various styles, including minimalistic designs for contemporary grooms.
  `,
        DiffSherwanis: [
          {
            sImg: wbImg,
            sName: "Traditional Sherwani",
            sIntro:
              "A classic Sherwani with intricate embroidery, perfect for traditional weddings. ▶️",
          },
          {
            sImg: wbImg,
            sName: "Designer Sherwani",
            sIntro:
              "Modern cuts and exclusive fabrics make this Sherwani a showstopper for the groom. ▶️",
          },
          {
            sImg: wbImg,
            sName: "Pathani Sherwani",
            sIntro:
              "Inspired by Afghan-style fashion, this Sherwani offers a rugged yet regal look. ▶️",
          },
          {
            sImg: wbImg,
            sName: "Short Sherwani",
            sIntro:
              "A contemporary twist with shorter lengths and a modern fit, ideal for a stylish groom. ▶️",
          },
          {
            sImg: wbImg,
            sName: "Velvet Sherwani",
            sIntro:
              "Crafted from luxurious velvet fabric, exuding sophistication and class. ▶️",
          },
        ],

        meklaChadorHeading: "Mekla Chador: The Traditional Bengali Elegance",
        meklaChadorDescription: `
    Introduction: The Mekla Chador is a traditional attire of Bengal, representing grace and femininity. Worn during weddings and festivals, this ensemble is a beautiful combination of the saree and a chador (veil), symbolizing both tradition and modern elegance.
    
    Overview: The Mekla Chador consists of a wide-bordered saree paired with a matching blouse and a veil draped over the head. The saree’s design often features intricate patterns, traditional motifs, and rich fabric choices like kanjeevaram or cotton.
    
    Cultural Significance: Deeply rooted in Bengali culture, the Mekla Chador is predominantly worn by brides during their wedding ceremonies. The bright colors and floral designs reflect the vibrant traditions of the Bengali community.
    
    Occasions: While the Mekla Chador is most often worn by brides, it is also seen during festivals such as Durga Puja and other grand cultural celebrations. Its elegance makes it a standout choice for traditional occasions.
    
    Modern Adaptations: Designers have modernized the Mekla Chador with contemporary drapes and fusion styles, blending traditional weaves with modern fashion elements, making it more versatile for younger generations.
  `,
        DiffMeklaChadors: [
          {
            sImg: wbImg,
            sName: "Traditional Mekla Chador",
            sIntro:
              "A classic Mekla Chador with intricate traditional designs, ideal for wedding ceremonies. ▶️",
          },
          {
            sImg: wbImg,
            sName: "Fusion Mekla Chador",
            sIntro:
              "Modern touches and vibrant colors, perfect for younger brides. ▶️",
          },
          {
            sImg: wbImg,
            sName: "Kanjeevaram Mekla Chador",
            sIntro:
              "Luxury meets tradition with this silk Mekla Chador, ideal for grand weddings. ▶️",
          },
          {
            sImg: wbImg,
            sName: "Cotton Mekla Chador",
            sIntro:
              "Lightweight and breathable, this Mekla Chador is perfect for summer celebrations. ▶️",
          },
        ],

        munduHeading: "Mundu: The Traditional South Indian Wear",
        munduDescription: `
    Introduction: The Mundu is a traditional garment worn in South India, particularly in Kerala, representing cultural heritage and simplicity. Worn by men, it is known for its comfort and functionality, making it a staple in everyday wear and festive occasions.
    
    Overview: The Mundu is a simple piece of cloth, usually white or cream, draped around the waist and secured with a knot. It is often paired with a traditional shirt or kurta, creating a classic look for formal and festive events.
    
    Cultural Significance: The Mundu is an integral part of the Kerala culture, worn during religious ceremonies, weddings, and festivals. It reflects the peaceful and simple lifestyle of the people of Kerala.
    
    Occasions: Traditionally worn by men for daily activities, the Mundu is also worn during weddings, especially paired with a traditional shirt or jacket for grooms.
    
    Modern Adaptations: Though simple, the Mundu has seen adaptations in recent years with embroidery, fusion styles, and modern cuts for contemporary men.
  `,
        DiffMundus: [
          {
            sImg: wbImg,
            sName: "Traditional Mundu",
            sIntro:
              "A classic white Mundu, perfect for formal and religious ceremonies. ▶️",
          },
          {
            sImg: wbImg,
            sName: "Designer Mundu",
            sIntro:
              "Modern cuts and embroidery bring a stylish twist to the traditional Mundu. ▶️",
          },
          {
            sImg: wbImg,
            sName: "Silk Mundu",
            sIntro:
              "Crafted from luxurious silk, ideal for weddings and grand occasions. ▶️",
          },
        ],

        bandhgalaHeading: "Bandhgala: The Elegant Indo-Western Attire",
        bandhgalaDescription: `
    Introduction: The Bandhgala, also known as the Nehru jacket, is a formal Indian outfit that blends traditional and modern elements. Known for its structured design and royal appeal, it is a popular choice for weddings, parties, and formal occasions.
    
    Overview: The Bandhgala is a tailored, buttoned jacket with a stand-up collar, typically worn over a kurta or shirt. The garment is known for its sophisticated fit and is often made of rich fabrics like silk, wool, or brocade.
    
    Cultural Significance: Named after India’s first Prime Minister Jawaharlal Nehru, the Bandhgala has become a symbol of refined elegance in Indian menswear. It represents the perfect fusion of Indian tradition and Western influence.
    
    Occasions: The Bandhgala is a go-to attire for weddings, formal gatherings, and evening events. It is often paired with a kurta, churidar, or even trousers, making it a versatile outfit for various occasions.
    
    Modern Adaptations: The Bandhgala has undergone several modern reinventions, with designers experimenting with cuts, fabrics, and embroidery to suit contemporary tastes. It is now a favorite for stylish men looking to make a statement.
  `,
        DiffBandgalas: [
          {
            sImg: wbImg,
            sName: "Traditional Bandhgala",
            sIntro:
              "A classic Bandhgala with minimal embroidery and a formal fit, ideal for weddings. ▶️",
          },
          {
            sImg: wbImg,
            sName: "Designer Bandhgala",
            sIntro:
              "Modern and stylish, with unique cuts and embroidery for a contemporary look. ▶️",
          },
          {
            sImg: wbImg,
            sName: "Silk Bandhgala",
            sIntro:
              "Crafted from luxurious silk, this Bandhgala adds a regal touch to formal occasions. ▶️",
          },
          {
            sImg: wbImg,
            sName: "Short Bandhgala",
            sIntro:
              "A trendy, shorter version of the traditional Bandhgala, perfect for modern grooms. ▶️",
          },
        ],
        phiranHeading: "Phiran: The Traditional Kashmiri Attire",
        phiranDescription: `
    Introduction: The Phiran is a traditional Kashmiri garment, widely worn by both men and women, known for its elegance and warmth. It is especially popular during the cold winter months in Kashmir, providing both comfort and style.
    
    Overview: The Phiran is a long, flowing robe that reaches the ankles, typically made from wool or cotton, depending on the season. It features a loose fit, making it ideal for layering and warmth. The garment often features intricate embroidery, particularly around the cuffs, collar, and hem, reflecting the rich craftsmanship of the region.
    
    Cultural Significance: The Phiran holds deep cultural importance in Kashmiri heritage. Worn for centuries, it is a symbol of regional identity and is a reflection of the natural beauty and artisanal traditions of Kashmir.
    
    Occasions: Traditionally worn in daily life, the Phiran is also seen on festive occasions, including religious ceremonies, weddings, and cultural events. The designs vary depending on the formality of the occasion, with more elaborate embroidery used for special events.
    
    Modern Adaptations: The Phiran has undergone several transformations, with designers incorporating modern elements such as vibrant colors, contemporary cuts, and fusion styles. It is now being worn by people outside Kashmir as a statement piece for cultural fashion.
  `,
        DiffPhirans: [
          {
            sImg: wbImg,
            sName: "Traditional Phiran",
            sIntro:
              "A classic woolen Phiran, perfect for the cold winters of Kashmir. ▶️",
          },
          {
            sImg: wbImg,
            sName: "Embroidered Phiran",
            sIntro:
              "Intricate Kashmiri embroidery adorns this Phiran, ideal for weddings and special occasions. ▶️",
          },
          {
            sImg: wbImg,
            sName: "Cotton Phiran",
            sIntro:
              "Lightweight and breathable, perfect for warm-weather wear and casual occasions. ▶️",
          },
          {
            sImg: wbImg,
            sName: "Modern Phiran",
            sIntro:
              "A contemporary take on the traditional Phiran with a stylish fit and bold colors. ▶️",
          },
          {
            sImg: wbImg,
            sName: "Festive Phiran",
            sIntro:
              "Rich fabric and detailed embroidery make this Phiran a perfect choice for festive occasions. ▶️",
          },
        ],
      },
      ReligionData: [
        {
          name: "Hinduism",
          intro:
            "Hinduism, one of the oldest religions in the world, is a diverse and complex spiritual tradition rooted in the Indian subcontinent. It emphasizes dharma (moral duty), karma (action and consequence), and moksha (liberation from the cycle of rebirth). Key scriptures include the Vedas, Upanishads, Bhagavad Gita, and Ramayana, and its practices range from devotion to deities like Vishnu, Shiva, and Devi, to yoga and meditation. Hindu festivals such as Diwali and Holi celebrate light, renewal, and community spirit.",
          image: hinduImg,
          religionLink: "/culture-tradition/religion/hinduism",
        },
        {
          name: "Buddhism",
          intro:
            "Buddhism is a spiritual tradition founded by Siddhartha Gautama, known as the Buddha, in the 5th-4th centuries BCE in India. It focuses on the Four Noble Truths and the Eightfold Path as a means to overcome suffering and achieve enlightenment (nirvana). Central concepts include mindfulness, meditation, and compassion. Buddhist teachings have influenced diverse cultures, with practices varying from Theravada's simplicity to Mahayana's bodhisattva path and Vajrayana's rituals.",
          image: buddiImg,
          religionLink: "/culture-tradition/religion/buddism",
        },
        {
          name: "Jainism",
          intro:
            "Jainism is an ancient Indian religion emphasizing non-violence (ahimsa), truth, and asceticism. Founded by the Tirthankaras, with Mahavira as the most recent, Jainism seeks liberation of the soul through self-discipline and purity. Jains follow strict ethical codes, including non-possession and vegetarianism, and worship at beautifully adorned temples. Key scriptures include the Agamas, which guide spiritual practices and ethical living.",
          image: jainiImg,
          religionLink: "/culture-tradition/religion/jainism",
        },
        {
          name: "Sikhism",
          intro:
            "Sikhism, founded in the 15th century by Guru Nanak in Punjab, India, is a monotheistic religion promoting equality, justice, and service. The Guru Granth Sahib, the eternal scripture, serves as the faith's spiritual guide. Sikhs practice devotion through prayer, community service (seva), and the concept of sharing (vand chakko). The Golden Temple in Amritsar symbolizes the Sikh ideals of openness and inclusivity.",
          image: sikhiImg,
          religionLink: "/culture-tradition/religion/sikhism",
        },
        {
          name: "Islam",
          intro:
            "Islam, a monotheistic religion founded in the 7th century CE by the Prophet Muhammad in Arabia, emphasizes submission to the will of Allah (God). Its core principles are encapsulated in the Five Pillars: faith, prayer, fasting, charity, and pilgrimage to Mecca. The Quran, believed to be the word of God, guides Muslims in spiritual and daily life. Islamic culture has profoundly influenced art, architecture, science, and literature worldwide.",
          image: islamImg,
          religionLink: "/culture-tradition/religion/islam",
        },
      ],

      HinduismData: {
        image: hinduImg,
        name: "Hinduism",
        introduction:
          "Hinduism, one of the world's oldest and most diverse religions, is deeply rooted in the Indian subcontinent. It encompasses a rich tapestry of spiritual traditions, philosophies, and cultural practices.",
        overview:
          "Hinduism is one of the world's oldest and most diverse religions, characterized by a rich tapestry of beliefs, rituals, and philosophies. It is the predominant religion in India and Nepal and has millions of followers worldwide. Hinduism is not a monolithic religion but a complex, pluralistic tradition with numerous deities, practices, and schools of thought.",

        history:
          "Hinduism's origins trace back over 4,000 years to the ancient Indus Valley Civilization and the Vedic period (1500–500 BCE). The Vedas, a collection of sacred texts, are among the earliest religious writings in Hinduism. Over centuries, Hinduism evolved through various philosophical and devotional movements, including the Upanishads, which introduced the concepts of karma and moksha (liberation).The epics, Mahabharata and Ramayana, and the Puranas further shaped Hindu beliefs and practices. The emergence of devotional (bhakti) movements between the 7th and 12th centuries CE emphasized personal devotion to deities such as Vishnu, Shiva, and Shakti, leading to a rich tradition of temple worship and pilgrimage.",
        regions:
          "Hinduism is predominantly practiced in India, with significant communities in Nepal, Bangladesh, and Sri Lanka. The Indian diaspora has spread its traditions globally, making Hindu festivals and temples common in countries like the United States, Canada, and the United Kingdom.",
        core_beliefs: [
          {
            title: "Dharma",
            description:
              "The moral and ethical duties or responsibilities of an individual.",
          },
          {
            title: "Karma",
            description:
              "The principle of cause and effect, where actions influence one's future.",
          },
          {
            title: "Moksha",
            description:
              "The ultimate goal of liberation from the cycle of birth and rebirth.",
          },
          {
            title: "Deities",
            description:
              "A vast pantheon including Brahma (the creator), Vishnu (the preserver), and Shiva (the destroyer).",
          },
        ],
        practices:
          "Hindu practices include rituals, meditation, yoga, and pilgrimage to sacred sites. Festivals like Diwali, Holi, and Navaratri are celebrated with fervor, reflecting the vibrant and diverse nature of Hindu worship and community life.",
      },

      StateCulturesData: {
        stateHeading: "India's Cultural Odyssey: State-Wise🗺️",
        AllStatesName: [
          {
            stateImg: andhrapradeshImg,
            stateName: "1. Andhra Pradesh",
            individualPage: "/culture-tradition/andhra-pradesh",
          },
          {
            stateImg: arunachalpradeshImg,
            stateName: "2. Arunachal Pradesh",
            individualPage: "/culture-tradition/arunachal-pradesh",
          },
          {
            stateImg: assasImg,
            stateName: "3. Assam",
            individualPage: "/culture-tradition/assam",
          },
          {
            stateImg: biharImg,
            stateName: "4. Bihar",
            individualPage: "/culture-tradition/bihar",
          },
          {
            stateImg: chhattisgarhImg,
            stateName: "5. Chhattisgarh",
            individualPage: "/culture-tradition/chhattisgarh",
          },
          {
            stateImg: goaImg,
            stateName: "6. Goa",
            individualPage: "/culture-tradition/goa",
          },
          {
            stateImg: gujaratImg,
            stateName: "7. Gujarat",
            individualPage: "/culture-tradition/gujarat",
          },
          {
            stateImg: haryanaImg,
            stateName: "8. Haryana",
            individualPage: "/culture-tradition/haryana",
          },
          {
            stateImg: himachalpradeshImg,
            stateName: "9. Himachal Pradesh",
            individualPage: "/culture-tradition/himachal-pradesh",
          },
          {
            stateImg: jharkhansImg,
            stateName: "10. Jharkhand",
            individualPage: "/culture-tradition/jharkhand",
          },
          {
            stateImg: karnatakaImg,
            stateName: "11. Karnataka",
            individualPage: "/culture-tradition/karnataka",
          },
          {
            stateImg: keralaImg,
            stateName: "12. Kerala",
            individualPage: "/culture-tradition/kerala",
          },
          {
            stateImg: madhyapradeshImg,
            stateName: "13. Madhya Pradesh",
            individualPage: "/culture-tradition/madhya-pradesh",
          },
          {
            stateImg: maharashtraImg,
            stateName: "14. Maharashtra",
            individualPage: "/culture-tradition/maharashtra",
          },
          {
            stateImg: manipurImg,
            stateName: "15. Manipur",
            individualPage: "/culture-tradition/manipur",
          },
          {
            stateImg: meghalayaImg,
            stateName: "16. Meghalaya",
            individualPage: "/culture-tradition/meghalaya",
          },
          {
            stateImg: mizorasImg,
            stateName: "17. Mizoram",
            individualPage: "/culture-tradition/mizoram",
          },
          {
            stateImg: nagalansImg,
            stateName: "18. Nagaland",
            individualPage: "/culture-tradition/nagaland",
          },
          {
            stateImg: odishaImg,
            stateName: "19. Odisha",
            individualPage: "/culture-tradition/odisha",
          },
          {
            stateImg: punjabImg,
            stateName: "20. Punjab",
            individualPage: "/culture-tradition/punjab",
          },
          {
            stateImg: rajasthanImg,
            stateName: "21. Rajasthan",
            individualPage: "/culture-tradition/rajasthan",
          },
          {
            stateImg: sikkisImg,
            stateName: "22. Sikkim",
            individualPage: "/culture-tradition/sikkim",
          },
          {
            stateImg: tamilnaduImg,
            stateName: "23. Tamil Nadu",
            individualPage: "/culture-tradition/tamil-nadu",
          },
          {
            stateImg: telanganaImg,
            stateName: "24. Telangana",
            individualPage: "/culture-tradition/telangana",
          },
          {
            stateImg: tripuraImg,
            stateName: "25. Tripura",
            individualPage: "/culture-tradition/tripura",
          },
          {
            stateImg: uttarpradeshImg,
            stateName: "26. Uttar Pradesh",
            individualPage: "/culture-tradition/uttar-pradesh",
          },
          {
            stateImg: uttarakhansImg,
            stateName: "27. Uttarakhand",
            individualPage: "/culture-tradition/uttarakhand",
          },
          {
            stateImg: wbImg,
            stateName: "28. West Bengal",
            individualPage: "/culture-tradition/west-bengal",
          },

          {
            stateImg: andamanImg,
            stateName: "29. Andaman and Nicobar Islands (Union Territory)",
            individualPage: "/culture-tradition/andaman-and-nicobar-islands",
          },
          {
            stateImg: chandigarhImg,
            stateName: "30. Chandigarh (Union Territory)",
            individualPage: "/culture-tradition/chandigarh",
          },
          {
            stateImg: dadraImg,
            stateName:
              "31. Dadra and Nagar Haveli and Daman and Diu (Union Territory)",
            individualPage:
              "/culture-tradition/dadra-and-nagar-haveli-and-daman-and-diu",
          },
          {
            stateImg: delhiImg,
            stateName: "32. Delhi (Union Territory)",
            individualPage: "/culture-tradition/delhi",
          },
          {
            stateImg: jsImg,
            stateName: "33. Jammu and Kashmir (Union Territory)",
            individualPage: "/culture-tradition/jammu-and-kashmir",
          },
          {
            stateImg: ladakhImg,
            stateName: "34. Ladakh (Union Territory)",
            individualPage: "/culture-tradition/ladakh",
          },
          {
            stateImg: lakshadweepImg,
            stateName: "35. Lakshadweep (Union Territory)",
            individualPage: "/culture-tradition/lakshadweep",
          },
          {
            stateImg: puducherryImg,
            stateName: "36. Puducherry (Union Territory)",
            individualPage: "/culture-tradition/puducherry",
          },
        ],
      },
      AndhraPradeshData: {
        stateName: ["Andhra", "Pradesh"],
        greetingImg: weddingImg,
        greetingName: "Namaskaram",
        stateImg:
          "https://upload.wikimedia.org/wikipedia/commons/0/02/Clay_puppets_from_andhrapradesh_-_india.jpeg",
        stateHistory:
          "Andhra Pradesh, in southeastern India, has a rich history shaped by ancient dynasties, trade, and cultural heritage. Notable rulers include the Mauryans, Satavahanas, Pallavas, and Kakatiyas, who contributed to art, literature, and architecture, such as the Amaravati Stupa and Warangal Fort. During colonial rule, it played a role in India's freedom struggle. Today, it is celebrated for its Kuchipudi dance, vibrant festivals, and Telugu literature.",
        stateHistoryVideo: "https://www.youtube.com/watch?v=FLDZQW5rD_s",
        cuisineDetails: [
          {
            cuisineImage:
              "https://www.indianhealthyrecipes.com/wp-content/uploads/2024/06/pulihora-recipe.jpg",
            cuisineName: "Pulihora (Tamarind Rice)",
          },
          {
            cuisineImage:
              "https://cookingfromheart.com/wp-content/uploads/2016/04/Gongura-2.jpg",
            cuisineName: "Gongura Pachadi (Roselle Pickle)",
          },
          {
            cuisineImage:
              "https://upload.wikimedia.org/wikipedia/commons/7/7c/Hyderabadi_Chicken_Biryani.jpg",
            cuisineName: "Hyderabadi Biryani",
          },
          {
            cuisineImage:
              "https://www.masalakorb.com/wp-content/uploads/2016/01/Poornam-Boorelu-Recipe-Poornalu-V1-500x500.jpg",
            cuisineName: "Boorelu (Sweet Dumplings)",
          },
          {
            cuisineImage:
              "https://i.ytimg.com/vi/c0PQz7TF7RQ/maxresdefault.jpg",
            cuisineName: "Pesarattu (Green Gram Dosa)",
          },
        ],
        cuisineCourse: "/learn-Indian-culture/assam-cuisine-course",
        clothingImg:
          "https://houseofelegance.in/cdn/shop/products/ikat-silk-saree-1.webp?v=1674323426",
        clothingDetails:
          "Andhra's traditional clothing reflects its rich culture. Women wear sarees like Pochampally ikat and Dharmavaram silk, known for vibrant designs. Men wear dhotis with kurtas, often paired with angavastram. Tribal attire features natural dyes and unique motifs, showcasing creativity and heritage.",
        languageImg:
          "https://t4.ftcdn.net/jpg/08/36/42/77/360_F_836427783_QKk4pEkTIP63FaseBFiURT0nWiXJz3mp.jpg",
        languageDetails:
          "Telugu, the official language, is celebrated for its melody and literary heritage. Known as the 'Italian of the East,' it has enriched Indian culture through poetry, storytelling, and classical dance forms like Kuchipudi. Written in a unique circular script, Telugu remains widely used.",
        languageCourse: "/learn-Indian-culture/assamese-course",
        artsDetails: [
          {
            artImage:
              "https://clickstory.in/wp-content/uploads/2016/09/kuchipudi-dancedrama.jpg",
            artName: "Kuchipudi Dance",
          },
          {
            artImage:
              "https://th-i.thgim.com/public/news/national/andhra-pradesh/x13dlp/article29128160.ece/alternates/FREE_1200/19VJPAGEBURRAKATHA",
            artName: "Burrakatha (Folk Storytelling)",
          },
          {
            artImage:
              "https://upload.wikimedia.org/wikipedia/commons/8/83/Hanuman_and_Ravana_in_Tholu_Bommalata%2C_the_shadow_puppet_tradition_of_Andhra_Pradesh%2C_India.JPG",
            artName: "Tholu Bommalata (Shadow Puppetry)",
          },
          {
            artImage:
              "https://www.gktoday.in/wp-content/uploads/2023/03/perini.jpg",
            artName: "Perini Sivatandavam (Warrior Dance)",
          },
          {
            artImage:
              "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgXW-G-4yR3Od2c5UHHR-JkebFMv_1EJjyaqND3Cw6YKu4LJRhnN2OFc5uzSVvY9-JL8VmseRpfwfj1a_CfIsMH-nlxataeakhxD0B2dffsRITHivN9Sv43zI2huLj72ZHHfJ-961ID4-M/s1600/kuchipudi-dance-410_m.jpg",
            artName: "Veeranatyam (Dance of Warriors)",
          },
        ],
        artsCourse: "/learn-Indian-culture/andhra-pradesh-art-course",
      },

      // ------------------------- CAREER --------------

      CareerData: {
        careerHeading: "We are Hiring!",
        diffCareers: [
          {
            jobTitle: "Join the Administrative Team of Cultural Canvas",
            jobDescription:
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio ipsam consequuntur tempore nulla qui deleniti fugit quos, maxime nostrum et facere repudiandae porro exercitationem voluptate! Distinctio mollitia eos facere consequatur?",
            jobLocation: "Work From Office - Kolkata",
            jobSalary: "₹40k/month",
            jobType: "Full-Time",
            jobLink: "/career/admin-form",
            jobImg: adminImg,
          },

          {
            jobTitle: "Share Your Knowledge: Become a Teacher",
            jobDescription:
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio ipsam consequuntur tempore nulla qui deleniti fugit quos, maxime nostrum et facere repudiandae porro exercitationem voluptate! Distinctio mollitia eos facere consequatur?",
            jobLocation: "Work From Office - Kolkata",
            jobSalary: "₹1L/course",
            jobType: "Part-Time",
            jobLink: "/career/teacher-form",
            jobImg: teacherImg,
          },

          {
            jobTitle: "Become a Part of Our Selling Team",
            jobDescription:
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio ipsam consequuntur tempore nulla qui deleniti fugit quos, maxime nostrum et facere repudiandae porro exercitationem voluptate! Distinctio mollitia eos facere consequatur?",
            jobLocation: "Work From Home",
            jobSalary: "₹2k/Art",
            jobType: "Part-Time",
            jobLink: "/",
            jobImg: digiArtImg,
          },

          {
            jobTitle: "Become a Part of Our Creative Writing Team",
            jobDescription:
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio ipsam consequuntur tempore nulla qui deleniti fugit quos, maxime nostrum et facere repudiandae porro exercitationem voluptate! Distinctio mollitia eos facere consequatur?",
            jobLocation: "Work From Home",
            jobSalary: "12p/word",
            jobType: "Part-Time",
            jobLink: "/",
            jobImg: blogWriterImg,
          },

          {
            jobTitle: "Join Our Video Content Creators Team",
            jobDescription:
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio ipsam consequuntur tempore nulla qui deleniti fugit quos, maxime nostrum et facere repudiandae porro exercitationem voluptate! Distinctio mollitia eos facere consequatur?",
            jobLocation: "Work From Anywhere",
            jobSalary: "₹4k/vlog",
            jobType: "Part-Time",
            jobLink: "/",
            jobImg: vlogCreatorImg,
          },

          {
            jobTitle: "Join Our Digital Marketing Team",
            jobDescription:
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio ipsam consequuntur tempore nulla qui deleniti fugit quos, maxime nostrum et facere repudiandae porro exercitationem voluptate! Distinctio mollitia eos facere consequatur?",
            jobLocation: "Work From Home/Office",
            jobSalary: "₹25k/month",
            jobType: "Full-Time",
            jobLink: "/",
            jobImg: seoImg,
          },

          {
            jobTitle: "Paint the Digital Canvas: Join Our Design Team",
            jobDescription:
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio ipsam consequuntur tempore nulla qui deleniti fugit quos, maxime nostrum et facere repudiandae porro exercitationem voluptate! Distinctio mollitia eos facere consequatur?",
            jobLocation: "Work From Home",
            jobSalary: "₹2k/Art",
            jobType: "Part-Time",
            jobLink: "/",
            jobImg: digiArtImg,
          },
        ],
        careerAdmin: {
          heading: "Join Us as a Website Administrator",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, molestiae debitis. Nobis suscipit porro officia quae, eaque nesciunt. Eveniet eaque reprehenderit ut deserunt non ipsa cumque autem expedita inventore distinctio.",
          sH1: "Eligibility Criteria",
          sH1List: [
            {
              des: "Strong knowledge in Hindi, English and atleast one regional language",
            },
            {
              des: "Proficiency in website management tools (React, Tailwind, CMS)",
            },
            {
              des: "Strong problem-solving skills and attention to detail",
            },
            {
              des: "Prior experience as a website administrator (preferred)",
            },
            {
              des: "Excellent communication and organizational skills",
            },
          ],
          sH2: "Responsibilities",
          sH2List: [
            {
              des: "Maintain and update website content",
            },
            {
              des: "Troubleshoot technical issues and ensure website uptime",
            },
            {
              des: "Monitor website performance and implement improvements",
            },
            {
              des: "Collaborate with other departments to ensure smooth operations",
            },
          ],
          sH3: "Job Details",
          sH3List: [
            {
              des: "Salary: ₹25,000 - ₹35,000/month (Negotiable)",
            },
            {
              des: "Job Type: Full-Time (Remote/On-Site)",
            },
            {
              des: "Location: Remote or Office-Based",
            },
          ],
          sH4: "Benefits",
          sH4List: [
            {
              des: "Flexible working hours",
            },
            {
              des: "Paid time off (PTO)",
            },
            {
              des: "Performance bonuses",
            },
            {
              des: "Professional development opportunities",
            },
          ],
          careerImg: adminImg,
        },
        careerInstructor: {
          heading: "Join Us as an Instructor",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, molestiae debitis. Nobis suscipit porro officia quae, eaque nesciunt. Eveniet eaque reprehenderit ut deserunt non ipsa cumque autem expedita inventore distinctio.",
          sH1: "Eligibility Criteria",
          sH1List: [
            {
              des: "Bachelor's degree in Computer Science, IT, or related field",
            },
            {
              des: "Proficiency in website management tools (React, Tailwind, CMS)",
            },
            {
              des: "Strong problem-solving skills and attention to detail",
            },
            {
              des: "Prior experience as a website administrator (preferred)",
            },
            {
              des: "Excellent communication and organizational skills",
            },
          ],
          sH2: "Responsibilities",
          sH2List: [
            {
              des: "Maintain and update website content",
            },
            {
              des: "Troubleshoot technical issues and ensure website uptime",
            },
            {
              des: "Monitor website performance and implement improvements",
            },
            {
              des: "Collaborate with other departments to ensure smooth operations",
            },
          ],
          sH3: "Job Details",
          sH3List: [
            {
              des: "Salary: ₹25,000 - ₹35,000/month (Negotiable)",
            },
            {
              des: "Job Type: Full-Time (Remote/On-Site)",
            },
            {
              des: "Location: Remote or Office-Based",
            },
          ],
          sH4: "Benefits",
          sH4List: [
            {
              des: "Flexible working hours",
            },
            {
              des: "Paid time off (PTO)",
            },
            {
              des: "Performance bonuses",
            },
            {
              des: "Professional development opportunities",
            },
          ],
          careerImg: teacherImg,
        },
      },

      ContestData: {
        contestHeading: "The Competition is LIVE!",
        diffContests: [
          {
            contestTitle:
              "Indian Heritage and Cultural Content Writing Challenge: Your Words, Your World",
            contestLink: "/live-contest/blog",
            contestImg: blogWriterImg,
            contestDate: "07-03-2025",
            contestTime: "14:00",
          },

          {
            contestTitle: "How Well Do You Know India? A Cultural Quiz Journey",
            contestLink: "/live-contest/quiz",
            contestImg: adminImg,
            contestDate: "07-03-2025",
            contestTime: "10:00",
          },

          {
            contestTitle:
              "Showcase India's Rich Heritage Through Your Lens: A Vlog Competition",
            contestLink: "/live-contest/vlog",
            contestImg: vlogCreatorImg,
            contestDate: "07-03-2025",
            contestTime: "17:00",
          },

          {
            contestTitle: "Paint the Canvas of India: Digital Art Competition",
            contestLink: "/live-contest/digital art",
            contestImg: digiArtImg,
            contestDate: "07-03-2025",
            contestTime: "20:00",
          },
        ],
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
        cuisinesPara:
          "उन स्वादों का स्वाद लें जो संस्कृति और परंपरा को परिभाषित करते हैं",
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
        homeButtonName: "विजिट करें",

        MulHome: {
          HeriHome: [
            {
              para: `भारत की ऐतिहासिक और सांस्कृतिक संपदा में गहराई से डुबकी लगाएं और इसके सबसे प्रसिद्ध विश्व धरोहर स्थलों का अन्वेषण करें। यह खंड उन वास्तुशिल्प और प्राकृतिक चमत्कारों को समर्पित है जो समय की कसौटी पर खरे उतरे हैं, प्रत्येक अपनी अनोखी कहानी सुनाते हुए। उन शानदार किलों से लेकर जो कभी राज्यों की रक्षा करते थे, और पवित्र मंदिरों तक।`,
              image: heritageImg,
              shadow: "shadow-highlight",
              headingName: "भारत के अनमोल खजानों का अनावरण",
              buttonLink: "/heritage",
              featuring: "विशेषताएं",

              featuringData: [
                {
                  featureName: "स्थानीय भारतीय धरोहर",
                },
                {
                  featureName: "यूनेस्को अनलिस्टेड भारतीय धरोहर",
                },
                {
                  featureName: "यूनेस्को लिस्टेड भारतीय धरोहर",
                },
              ],
              nRHead: "यहां आपका स्वागत है!",
              nRPara: `हमारे शहर में हार्दिक स्वागत है! भारत के मध्य प्रदेश के दिल को खोजें। प्राचीन मंदिरों, हरे-भरे परिदृश्यों, और हलचल वाले बाजारों की खोज करें। स्थानीय व्यंजनों का स्वाद लें और हमारे लोगों की गर्मजोशी का अनुभव करें। यादगार प्रवास करें!`,
              nRoptions: "आकर्षण प्रकार चुनें",
              op1: "पर्यटक स्थल",
              op2: "रेस्टोरेंट",
              op3: "होटल्स",
              op4: "अस्पताल",
              op5: "पुलिस स्टेशन",

              nR: "निकटतम आकर्षण",
              dist: "दूरी",
            },
          ],
          StoreHome: [
            {
              para: `भारत की ऐतिहासिक और सांस्कृतिक संपदा में गहराई से डुबकी लगाएं और इसके सबसे प्रसिद्ध विश्व धरोहर स्थलों का अन्वेषण करें। यह खंड उन वास्तुशिल्प और प्राकृतिक चमत्कारों को समर्पित है जो समय की कसौटी पर खरे उतरे हैं, प्रत्येक अपनी अनोखी कहानी सुनाते हुए। उन शानदार किलों से लेकर जो कभी राज्यों की रक्षा करते थे, और पवित्र मंदिरों तक।`,
              image: virtualStoreImg,
              shadow: "shadow-dark_secondary_text",
              headingName: "भारत की धरोहर को घर लाएं",
              buttonLink: "/virtual-store",
              featuring: "विशेषताएं",
              featuringData: [
                {
                  featureName: "प्राचीन उत्पाद खरीदें",
                },
                {
                  featureName: "प्राचीन उत्पाद बेचें/प्रचार करें",
                },
              ],
              proText: "अपने आसपास के स्थानीय उत्पाद देखें",
            },
          ],
          Home: [
            {
              para: `भारत की ऐतिहासिक और सांस्कृतिक संपदा में गहराई से डुबकी लगाएं और इसके सबसे प्रसिद्ध विश्व धरोहर स्थलों का अन्वेषण करें। यह खंड उन वास्तुशिल्प और प्राकृतिक चमत्कारों को समर्पित है जो समय की कसौटी पर खरे उतरे हैं, प्रत्येक अपनी अनोखी कहानी सुनाते हुए। उन शानदार किलों से लेकर जो कभी राज्यों की रक्षा करते थे, और पवित्र मंदिरों तक।`,
              image: cultureImg,
              shadow: "shadow-dark_secondary_text",
              headingName: "भारत की संस्कृति का जीवित ताना-बाना अनुभव करें",
              buttonLink: "/culture-tradition",
              featuring: "विशेषताएं",
              featuringData: [
                {
                  featureName: "भारतीय सांस्कृतिक कैलेंडर",
                },
                {
                  featureName: "भारतीय संस्कृतियों के प्रकार",
                },
                {
                  featureName: "राज्य-वार भारतीय संस्कृतियां",
                },
              ],
            },

            {
              para: `भारत की ऐतिहासिक और सांस्कृतिक संपदा में गहराई से डुबकी लगाएं और इसके सबसे प्रसिद्ध विश्व धरोहर स्थलों का अन्वेषण करें। यह खंड उन वास्तुशिल्प और प्राकृतिक चमत्कारों को समर्पित है जो समय की कसौटी पर खरे उतरे हैं, प्रत्येक अपनी अनोखी कहानी सुनाते हुए। उन शानदार किलों से लेकर जो कभी राज्यों की रक्षा करते थे, और पवित्र मंदिरों तक।`,
              image: learnImg,
              shadow: "shadow-highlight",
              headingName:
                "भारतीय परंपराओं के समृद्ध ताना-बाने में गहराई से उतरें",
              buttonLink: "/learn-Indian-culture",
              featuring: "विशेषताएं",
              featuringData: [
                {
                  featureName: "विभिन्न भाषाएं सीखें",
                },
                {
                  featureName: "विभिन्न व्यंजन सीखें",
                },
                {
                  featureName: "विभिन्न कलाएं सीखें",
                },
                {
                  featureName: "विभिन्न खेल सीखें",
                },
              ],
            },

            {
              para: `भारत की ऐतिहासिक और सांस्कृतिक संपदा में गहराई से डुबकी लगाएं और इसके सबसे प्रसिद्ध विश्व धरोहर स्थलों का अन्वेषण करें। यह खंड उन वास्तुशिल्प और प्राकृतिक चमत्कारों को समर्पित है जो समय की कसौटी पर खरे उतरे हैं, प्रत्येक अपनी अनोखी कहानी सुनाते हुए। उन शानदार किलों से लेकर जो कभी राज्यों की रक्षा करते थे, और पवित्र मंदिरों तक।`,
              image: blogsImg,
              shadow: "shadow-dark_secondary_text",
              headingName: "साथी यात्रियों की नजर से भारत का अन्वेषण करें",
              buttonLink: "/blogs-vlogs",
              featuring: "विशेषताएं",
              featuringData: [
                {
                  featureName: "ब्लॉग्स और व्लॉग्स अपलोड करें",
                },
                {
                  featureName: "विभिन्न सामग्रियां पढ़ें/सुनें",
                },
              ],
            },

            {
              para: `भारत की ऐतिहासिक और सांस्कृतिक संपदा में गहराई से डुबकी लगाएं और इसके सबसे प्रसिद्ध विश्व धरोहर स्थलों का अन्वेषण करें। यह खंड उन वास्तुशिल्प और प्राकृतिक चमत्कारों को समर्पित है जो समय की कसौटी पर खरे उतरे हैं, प्रत्येक अपनी अनोखी कहानी सुनाते हुए। उन शानदार किलों से लेकर जो कभी राज्यों की रक्षा करते थे, और पवित्र मंदिरों तक।`,
              image: exploreImg,
              shadow: "shadow-highlight_hover",
              headingName: "अपने परफेक्ट भारतीय साहसिक अभियान को तैयार करें",
              buttonLink: "/explore-diversity",
              featuring: "विशेषताएं",
              featuringData: [
                {
                  featureName: "सांस्कृतिक धरोहर कहानी कहना",
                },
                {
                  featureName: "धरोहर यात्रा बजट का अनुमान लगाएं",
                },
                {
                  featureName: "व्यक्तिगत यात्रा योजना बनाएं",
                },
                {
                  featureName: "निकटतम आकर्षण खोजें",
                },
                {
                  featureName: "प्राचीन लिपियों का लिप्यंतरण करें",
                },
                {
                  featureName: "धरोहर मैनुअल सारांश",
                },
              ],
            },
          ],
        },
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
            cultureImg: festivalsImg,
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

      ClothingCultureData: {
        traditionalClothsHeading: "भारत के पारंपरिक कपड़े",
        sareeHeading: "Saree",
        sareeDescription: `The saree, an iconic symbol of Indian culture, is renowned for its
            grace and versatility. Spanning over 5-6 yards of fabric, it is
            draped elegantly around the body, showcasing the wearer’s poise and
            sophistication. Worn across India, the saree embodies both tradition
            and style, making it a cherished garment for various occasions.
            <br /><br />
            A saree consists of three primary components: the saree
            itself, a blouse (choli), and a petticoat. The petticoat is worn
            underneath and acts as a foundation, while the blouse complements
            the saree with a fitted, often embellished, top. The saree is
            wrapped around the waist, with one end draped over the shoulder,
            known as the pallu. The draping style varies by region, with
            different patterns and techniques that highlight the saree’s rich
            cultural significance.
            <br /><br />

            The saree is a preferred choice for a variety of occasions,
            including weddings, festivals, and formal events. Its adaptability
            allows it to be dressed up with elaborate jewelry and accessories or
            worn casually for everyday wear. The saree's timeless appeal
            continues to captivate and inspire fashion trends both in India and
            around the world. <br /><br />

            The saree is not merely a piece of clothing; it represents a
            deep-rooted cultural heritage. Each region of India has its unique
            style of draping and fabric, reflecting local traditions and
            artistry. From the Banarasi silk sarees of Varanasi to the
            Kanjeevaram silks of Tamil Nadu, each saree tells a story of its
            origin, weaving history into its fabric.`,
        DiffSarees: [
          {
            sImg: ladakhImg,
            sName: "Bandhani Saree",
            sIntro:
              "Lorem ipsum dolor sit amet sit amet consectetursit amet ▶️",
          },

          {
            sImg: ladakhImg,
            sName: "Banarasi Silk Saree",
            sIntro:
              "Lorem ipsum dolor sit amet sit amet consectetursit amet ▶️",
          },

          {
            sImg: ladakhImg,
            sName: "Silk Saree",
            sIntro:
              "Lorem ipsum dolor sit amet sit amet consectetursit amet ▶️",
          },

          {
            sImg: ladakhImg,
            sName: "Dola Silk Saree",
            sIntro:
              "Lorem ipsum dolor sit amet sit amet consectetursit amet ▶️",
          },

          {
            sImg: ladakhImg,
            sName: "Georgette Saree",
            sIntro:
              "Lorem ipsum dolor sit amet sit amet consectetursit amet ▶️",
          },
        ],
        dhotiHeading: "Dhoti",
        dhotiDescription: `The dhoti is a traditional garment worn predominantly in South India
            and Bengal. It is known for its simplicity and elegance,
            representing a blend of cultural heritage and comfort. Typically
            worn by men, the dhoti is a versatile piece of clothing that
            connects wearers to their roots. <br /><br />
            A dhoti is a rectangular
            piece of fabric, often 5-6 yards long, that is wrapped around the
            waist and tied in place. Traditionally made from cotton or silk, it
            provides a comfortable and breathable option for daily wear and
            formal occasions. The dhoti is paired with a kurta or shirt,
            creating a classic and refined look.
            <br /><br />
            The dhoti is more than just clothing; it is a symbol of cultural
            identity and tradition. Its origins trace back to ancient India,
            where it was worn by men across various regions. The garment’s
            simplicity and practicality reflect the values of modesty and
            respect prevalent in Indian culture.
            <br /><br />
            The dhoti is often worn during religious ceremonies, festivals, and
            formal events. It is favored for its comfort and ease of movement,
            making it suitable for traditional rituals and cultural gatherings.
            The dhoti’s enduring legacy continues to celebrate Indian heritage
            and tradition.`,
        DiffDhotis: [
          {
            sImg: wbImg,
            sName: " Tamil Veshti Dhoti",
            sIntro:
              "Lorem ipsum dolor sit amet sit amet consectetursit amet ▶️",
          },

          {
            sImg: wbImg,
            sName: "Kannada Kache Panche Dhoti",
            sIntro:
              "Lorem ipsum dolor sit amet sit amet consectetursit amet ▶️",
          },

          {
            sImg: wbImg,
            sName: "Telugu Pancha Dhoti",
            sIntro:
              "Lorem ipsum dolor sit amet sit amet consectetursit amet ▶️",
          },

          {
            sImg: wbImg,
            sName: "Punjabi Chadra",
            sIntro:
              "Lorem ipsum dolor sit amet sit amet consectetursit amet ▶️",
          },

          {
            sImg: wbImg,
            sName: "Maharashtrian Dhotar",
            sIntro:
              "Lorem ipsum dolor sit amet sit amet consectetursit amet ▶️",
          },

          {
            sImg: wbImg,
            sName: "Rajasthani Dulangi Dhoti",
            sIntro:
              "Lorem ipsum dolor sit amet sit amet consectetursit amet ▶️",
          },

          {
            sImg: wbImg,
            sName: "The Bengali Kochano or Pleated Dhoti",
            sIntro:
              "Lorem ipsum dolor sit amet sit amet consectetursit amet ▶️",
          },

          {
            sImg: wbImg,
            sName: "Readymade Velcro Dhoti",
            sIntro:
              "Lorem ipsum dolor sit amet sit amet consectetursit amet ▶️",
          },
        ],
      },

      StateCulturesData: {
        stateHeading: "भारत की सांस्कृतिक यात्रा: राज्यवार🗺️",
        AllStatesName: [
          {
            stateImg: andhrapradeshImg,
            stateName: "1. आंध्र प्रदेश",
            individualPage: "/culture-tradition/andhra-pradesh",
          },
          {
            stateImg: arunachalpradeshImg,
            stateName: "2. अरुणाचल प्रदेश",
            individualPage: "/culture-tradition/arunachal-pradesh",
          },
          {
            stateImg: assasImg,
            stateName: "3. असम",
            individualPage: "/culture-tradition/assam",
          },
          {
            stateImg: biharImg,
            stateName: "4. बिहार",
            individualPage: "/culture-tradition/bihar",
          },
          {
            stateImg: chhattisgarhImg,
            stateName: "5. छत्तीसगढ़",
            individualPage: "/culture-tradition/chhattisgarh",
          },
          {
            stateImg: goaImg,
            stateName: "6. गोवा",
            individualPage: "/culture-tradition/goa",
          },
          {
            stateImg: gujaratImg,
            stateName: "7. गुजरात",
            individualPage: "/culture-tradition/gujarat",
          },
          {
            stateImg: haryanaImg,
            stateName: "8. हरियाणा",
            individualPage: "/culture-tradition/haryana",
          },
          {
            stateImg: himachalpradeshImg,
            stateName: "9. हिमाचल प्रदेश",
            individualPage: "/culture-tradition/himachal-pradesh",
          },
          {
            stateImg: jharkhansImg,
            stateName: "10. झारखंड",
            individualPage: "/culture-tradition/jharkhand",
          },
          {
            stateImg: karnatakaImg,
            stateName: "11. कर्नाटक",
            individualPage: "/culture-tradition/karnataka",
          },
          {
            stateImg: keralaImg,
            stateName: "12. केरल",
            individualPage: "/culture-tradition/kerala",
          },
          {
            stateImg: madhyapradeshImg,
            stateName: "13. मध्य प्रदेश",
            individualPage: "/culture-tradition/madhya-pradesh",
          },
          {
            stateImg: maharashtraImg,
            stateName: "14. महाराष्ट्र",
            individualPage: "/culture-tradition/maharashtra",
          },
          {
            stateImg: manipurImg,
            stateName: "15. मणिपुर",
            individualPage: "/culture-tradition/manipur",
          },
          {
            stateImg: meghalayaImg,
            stateName: "16. मेघालय",
            individualPage: "/culture-tradition/meghalaya",
          },
          {
            stateImg: mizorasImg,
            stateName: "17. मिजोरम",
            individualPage: "/culture-tradition/mizoram",
          },
          {
            stateImg: nagalansImg,
            stateName: "18. नागालैंड",
            individualPage: "/culture-tradition/nagaland",
          },
          {
            stateImg: odishaImg,
            stateName: "19. ओडिशा",
            individualPage: "/culture-tradition/odisha",
          },
          {
            stateImg: punjabImg,
            stateName: "20. पंजाब",
            individualPage: "/culture-tradition/punjab",
          },
          {
            stateImg: rajasthanImg,
            stateName: "21. राजस्थान",
            individualPage: "/culture-tradition/rajasthan",
          },
          {
            stateImg: sikkisImg,
            stateName: "22. सिक्किम",
            individualPage: "/culture-tradition/sikkim",
          },
          {
            stateImg: tamilnaduImg,
            stateName: "23. तमिलनाडु",
            individualPage: "/culture-tradition/tamil-nadu",
          },
          {
            stateImg: telanganaImg,
            stateName: "24. तेलंगाना",
            individualPage: "/culture-tradition/telangana",
          },
          {
            stateImg: tripuraImg,
            stateName: "25. त्रिपुरा",
            individualPage: "/culture-tradition/tripura",
          },
          {
            stateImg: uttarpradeshImg,
            stateName: "26. उत्तर प्रदेश",
            individualPage: "/culture-tradition/uttar-pradesh",
          },
          {
            stateImg: uttarakhansImg,
            stateName: "27. उत्तराखंड",
            individualPage: "/culture-tradition/uttarakhand",
          },
          {
            stateImg: wbImg,
            stateName: "28. पश्चिम बंगाल",
            individualPage: "/culture-tradition/west-bengal",
          },
          {
            stateImg: andamanImg,
            stateName: "29. अंडमान और निकोबार द्वीप समूह (संघ राज्य क्षेत्र)",
            individualPage: "/culture-tradition/andaman-and-nicobar-islands",
          },
          {
            stateImg: chandigarhImg,
            stateName: "30. चंडीगढ़ (संघ राज्य क्षेत्र)",
            individualPage: "/culture-tradition/chandigarh",
          },
          {
            stateImg: dadraImg,
            stateName:
              "31. दादरा और नगर हवेली और दमन और दीव (संघ राज्य क्षेत्र)",
            individualPage:
              "/culture-tradition/dadra-and-nagar-haveli-and-daman-and-diu",
          },
          {
            stateImg: delhiImg,
            stateName: "32. दिल्ली (संघ राज्य क्षेत्र)",
            individualPage: "/culture-tradition/delhi",
          },
          {
            stateImg: jsImg,
            stateName: "33. जम्मू और कश्मीर (संघ राज्य क्षेत्र)",
            individualPage: "/culture-tradition/jammu-and-kashmir",
          },
          {
            stateImg: ladakhImg,
            stateName: "34. लद्दाख (संघ राज्य क्षेत्र)",
            individualPage: "/culture-tradition/ladakh",
          },
          {
            stateImg: lakshadweepImg,
            stateName: "35. लक्षद्वीप (संघ राज्य क्षेत्र)",
            individualPage: "/culture-tradition/lakshadweep",
          },
          {
            stateImg: puducherryImg,
            stateName: "36. पुदुचेरी (संघ राज्य क्षेत्र)",
            individualPage: "/culture-tradition/puducherry",
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
        cuisinesPara:
          "সেই স্বাদগুলি উপভোগ করুন যা সংস্কৃতি এবং ঐতিহ্যকে সংজ্ঞায়িত করে",
        clothings: "পোশাক",
        clothingPara:
          "ঐতিহ্য এবং স্থানীয় পরিচয় প্রতিফলিত করতে আইকনিক পোশাক আবিষ্কার করুন",
        languages: "ভাষা",
        languagesPara:
          "ভাষার রত্নগুলি আবিষ্কার করুন যা যোগাযোগ এবং সংস্কৃতিকে গঠন করে",
        artsCrafts: "শিল্প ও হস্তশিল্প",
        artsCraftsPara:
          "হস্তনির্মিত মাস্টারপিস এবং ঐতিহ্যগুলির মাধ্যমে চিরন্তন সৃজনশীলতা আবিষ্কার করুন",

        buttonWantToKnowMore: "আরও জানতে চান?",
        buttonWantToCook: "রান্না করতে চান?",
      },

      // -------------------------- HOME ---------------------------
      HomeData: {
        homeButtonName: "VISIT",

        MulHome: {
          HeriHome: [
            {
              para: `Dive deep into India’s historical and cultural wealth by exploring its most celebrated World Heritage Sites. This section is dedicated to the architectural and natural marvels that have stood the test of time, each narrating a story of its own. From the majestic forts that once guarded kingdoms to the sacred temp`,
              image: heritageImg,
              shadow: "shadow-highlight",
              headingName: "Unveiling India’s Timeless Treasures",
              buttonLink: "/heritage",
              featuring: "Featuring",

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
              nRHead: "Welcome You Here!",
              nRPara: `A warm welcome to our city! Discover the heart of India's
                central highlands. Explore ancient temples, lush landscapes, and
                bustling markets. Indulge in delectable local cuisine and
                experience the warmth of our people. Have a memorable stay!`,
              nRoptions: "Select Attraction Type",
              op1: "Tourist Spots",
              op2: "Restaurants",
              op3: "Hotels",
              op4: "Hospitals",
              op5: "Police Stations",

              nR: "Nearest Attractions",
              dist: "Distance",
            },
          ],
          StoreHome: [
            {
              para: `Dive deep into India’s historical and cultural wealth by exploring its most celebrated World Heritage Sites. This section is dedicated to the architectural and natural marvels that have stood the test of time, each narrating a story of its own. From the majestic forts that once guarded kingdoms to the sacred temp`,
              image: virtualStoreImg,
              shadow: "shadow-dark_secondary_text",
              headingName: "Bring a Piece of India’s Heritage Home",
              buttonLink: "/virtual-store",
              featuringData: [
                {
                  featureName: "Buy Antique Products",
                },
                {
                  featureName: "Sell/Promote Antique Products",
                },
              ],
              proText: "Check out the local products around you",
            },
          ],
          Home: [
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
              shadow: "shadow-highlight",
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
              image: exploreImg,
              shadow: "shadow-highlight_hover",
              headingName: "Craft Your Perfect Indian Adventure",
              buttonLink: "/explore-diversity",
              featuringData: [
                {
                  featureName: "Cultural Heritage Story Telling",
                },
                {
                  featureName: "Predict Heritage Trip Budgets",
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
                  featureName: "Heritage Manual Summary",
                },
              ],
            },

            // {
            //   para: `Get ready to dive into the excitement! Our live contest is now live. Test your skills, showcase your talent, and stand a chance to win incredible prizes. Don't miss out on this thrilling opportunity.`,
            //   image: blogsImg,
            //   shadow: "shadow-highlight_hover",
            //   headingName: "Win Big! Participate in Our Live Contest",
            //   buttonLink: "/live-contest",
            //   featuringData: [
            //     {
            //       featureName: "Content Writing Contest",
            //     },
            //     {
            //       featureName: "Digital Art Contest",
            //     },
            //     {
            //       featureName: "Indian Heritage and Culture Quiz Contest",
            //     },
            //     {
            //       featureName: "Content Creation (Vlog) Contest",
            //     },
            //   ],
            // },

            // {
            //   para: `Discover a world of possibilities at Cultural Canvas. Explore our diverse range of career opportunities and join a team of talented individuals. Start your journey today.`,
            //   image: blogsImg,
            //   shadow: "shadow-highlight",
            //   headingName: "Your Next Career Adventure Starts Here",
            //   buttonLink: "/career",
            //   featuringData: [
            //     {
            //       featureName: "Career opportunity for Admins",
            //     },
            //     {
            //       featureName: "Career opportunity for Blog Writers",
            //     },

            //     {
            //       featureName: "Career opportunity for Teachers",
            //     },
            //     {
            //       featureName: "Career opportunity for Digital Artists",
            //     },
            //     {
            //       featureName: "Career opportunity for Sellers",
            //     },
            //     {
            //       featureName: "Career opportunity for Content Creators",
            //     },
            //   ],
            // },
          ],
        },
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
            cultureImg: festivalsImg,
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
        ],
      },

      ClothingCultureData: {
        traditionalClothsHeading: "ভারতের ঐতিহ্যবাহী পোশাক",
        sareeHeading: "Saree",
        sareeDescription: `The saree, an iconic symbol of Indian culture, is renowned for its
            grace and versatility. Spanning over 5-6 yards of fabric, it is
            draped elegantly around the body, showcasing the wearer’s poise and
            sophistication. Worn across India, the saree embodies both tradition
            and style, making it a cherished garment for various occasions.
            <br /><br />
            A saree consists of three primary components: the saree
            itself, a blouse (choli), and a petticoat. The petticoat is worn
            underneath and acts as a foundation, while the blouse complements
            the saree with a fitted, often embellished, top. The saree is
            wrapped around the waist, with one end draped over the shoulder,
            known as the pallu. The draping style varies by region, with
            different patterns and techniques that highlight the saree’s rich
            cultural significance.
            <br /><br />

            The saree is a preferred choice for a variety of occasions,
            including weddings, festivals, and formal events. Its adaptability
            allows it to be dressed up with elaborate jewelry and accessories or
            worn casually for everyday wear. The saree's timeless appeal
            continues to captivate and inspire fashion trends both in India and
            around the world. <br /><br />

            The saree is not merely a piece of clothing; it represents a
            deep-rooted cultural heritage. Each region of India has its unique
            style of draping and fabric, reflecting local traditions and
            artistry. From the Banarasi silk sarees of Varanasi to the
            Kanjeevaram silks of Tamil Nadu, each saree tells a story of its
            origin, weaving history into its fabric.`,
        DiffSarees: [
          {
            sImg: ladakhImg,
            sName: "Bandhani Saree",
            sIntro:
              "Lorem ipsum dolor sit amet sit amet consectetursit amet ▶️",
          },

          {
            sImg: ladakhImg,
            sName: "Banarasi Silk Saree",
            sIntro:
              "Lorem ipsum dolor sit amet sit amet consectetursit amet ▶️",
          },

          {
            sImg: ladakhImg,
            sName: "Silk Saree",
            sIntro:
              "Lorem ipsum dolor sit amet sit amet consectetursit amet ▶️",
          },

          {
            sImg: ladakhImg,
            sName: "Dola Silk Saree",
            sIntro:
              "Lorem ipsum dolor sit amet sit amet consectetursit amet ▶️",
          },

          {
            sImg: ladakhImg,
            sName: "Georgette Saree",
            sIntro:
              "Lorem ipsum dolor sit amet sit amet consectetursit amet ▶️",
          },
        ],
        dhotiHeading: "Dhoti",
        dhotiDescription: `The dhoti is a traditional garment worn predominantly in South India
            and Bengal. It is known for its simplicity and elegance,
            representing a blend of cultural heritage and comfort. Typically
            worn by men, the dhoti is a versatile piece of clothing that
            connects wearers to their roots. <br /><br />
            A dhoti is a rectangular
            piece of fabric, often 5-6 yards long, that is wrapped around the
            waist and tied in place. Traditionally made from cotton or silk, it
            provides a comfortable and breathable option for daily wear and
            formal occasions. The dhoti is paired with a kurta or shirt,
            creating a classic and refined look.
            <br /><br />
            The dhoti is more than just clothing; it is a symbol of cultural
            identity and tradition. Its origins trace back to ancient India,
            where it was worn by men across various regions. The garment’s
            simplicity and practicality reflect the values of modesty and
            respect prevalent in Indian culture.
            <br /><br />
            The dhoti is often worn during religious ceremonies, festivals, and
            formal events. It is favored for its comfort and ease of movement,
            making it suitable for traditional rituals and cultural gatherings.
            The dhoti’s enduring legacy continues to celebrate Indian heritage
            and tradition.`,
        DiffDhotis: [
          {
            sImg: wbImg,
            sName: " Tamil Veshti Dhoti",
            sIntro:
              "Lorem ipsum dolor sit amet sit amet consectetursit amet ▶️",
          },

          {
            sImg: wbImg,
            sName: "Kannada Kache Panche Dhoti",
            sIntro:
              "Lorem ipsum dolor sit amet sit amet consectetursit amet ▶️",
          },

          {
            sImg: wbImg,
            sName: "Telugu Pancha Dhoti",
            sIntro:
              "Lorem ipsum dolor sit amet sit amet consectetursit amet ▶️",
          },

          {
            sImg: wbImg,
            sName: "Punjabi Chadra",
            sIntro:
              "Lorem ipsum dolor sit amet sit amet consectetursit amet ▶️",
          },

          {
            sImg: wbImg,
            sName: "Maharashtrian Dhotar",
            sIntro:
              "Lorem ipsum dolor sit amet sit amet consectetursit amet ▶️",
          },

          {
            sImg: wbImg,
            sName: "Rajasthani Dulangi Dhoti",
            sIntro:
              "Lorem ipsum dolor sit amet sit amet consectetursit amet ▶️",
          },

          {
            sImg: wbImg,
            sName: "The Bengali Kochano or Pleated Dhoti",
            sIntro:
              "Lorem ipsum dolor sit amet sit amet consectetursit amet ▶️",
          },

          {
            sImg: wbImg,
            sName: "Readymade Velcro Dhoti",
            sIntro:
              "Lorem ipsum dolor sit amet sit amet consectetursit amet ▶️",
          },
        ],
      },

      StateCulturesData: {
        stateHeading: "ভারতের সাংস্কৃতিক অভিযান: রাজ্য-ভিত্তিক🗺️",
        AllStatesName: [
          {
            stateImg: andhrapradeshImg,
            stateName: "১. অন্ধ্রপ্রদেশ",
            individualPage: "/culture-tradition/andhra-pradesh",
          },
          {
            stateImg: arunachalpradeshImg,
            stateName: "২. অরুণাচল প্রদেশ",
            individualPage: "/culture-tradition/arunachal-pradesh",
          },
          {
            stateImg: assasImg,
            stateName: "৩. আসাম",
            individualPage: "/culture-tradition/assam",
          },
          {
            stateImg: biharImg,
            stateName: "৪. বিহার",
            individualPage: "/culture-tradition/bihar",
          },
          {
            stateImg: chhattisgarhImg,
            stateName: "৫. ছত্তিশগড়",
            individualPage: "/culture-tradition/chhattisgarh",
          },
          {
            stateImg: goaImg,
            stateName: "৬. গোয়া",
            individualPage: "/culture-tradition/goa",
          },
          {
            stateImg: gujaratImg,
            stateName: "৭. গুজরাট",
            individualPage: "/culture-tradition/gujarat",
          },
          {
            stateImg: haryanaImg,
            stateName: "৮. হরিয়ানা",
            individualPage: "/culture-tradition/haryana",
          },
          {
            stateImg: himachalpradeshImg,
            stateName: "৯. হিমাচল প্রদেশ",
            individualPage: "/culture-tradition/himachal-pradesh",
          },
          {
            stateImg: jharkhansImg,
            stateName: "১০. ঝাড়খন্ড",
            individualPage: "/culture-tradition/jharkhand",
          },
          {
            stateImg: karnatakaImg,
            stateName: "১১. কর্ণাটক",
            individualPage: "/culture-tradition/karnataka",
          },
          {
            stateImg: keralaImg,
            stateName: "১২. কেরালা",
            individualPage: "/culture-tradition/kerala",
          },
          {
            stateImg: madhyapradeshImg,
            stateName: "১৩. মধ্যপ্রদেশ",
            individualPage: "/culture-tradition/madhya-pradesh",
          },
          {
            stateImg: maharashtraImg,
            stateName: "১৪. মহারাষ্ট্র",
            individualPage: "/culture-tradition/maharashtra",
          },
          {
            stateImg: manipurImg,
            stateName: "১৫. মণিপুর",
            individualPage: "/culture-tradition/manipur",
          },
          {
            stateImg: meghalayaImg,
            stateName: "১৬. মেঘালয়",
            individualPage: "/culture-tradition/meghalaya",
          },

          {
            stateImg: mizorasImg,
            stateName: "১৭. মিজোরাম",
            individualPage: "/culture-tradition/mizoram",
          },
          {
            stateImg: nagalansImg,
            stateName: "১৮. নাগাল্যান্ড",
            individualPage: "/culture-tradition/nagaland",
          },
          {
            stateImg: odishaImg,
            stateName: "১৯. ওড়িশা",
            individualPage: "/culture-tradition/odisha",
          },
          {
            stateImg: punjabImg,
            stateName: "২০. পাঞ্জাব",
            individualPage: "/culture-tradition/punjab",
          },
          {
            stateImg: rajasthanImg,
            stateName: "২১. রাজস্থান",
            individualPage: "/culture-tradition/rajasthan",
          },
          {
            stateImg: sikkisImg,
            stateName: "২২. সিক্কিম",
            individualPage: "/culture-tradition/sikkim",
          },
          {
            stateImg: tamilnaduImg,
            stateName: "২৩. তামিলনাড়ু",
            individualPage: "/culture-tradition/tamil-nadu",
          },
          {
            stateImg: telanganaImg,
            stateName: "২৪. তেলেঙ্গানা",
            individualPage: "/culture-tradition/telangana",
          },
          {
            stateImg: tripuraImg,
            stateName: "২৫. ত্রিপুরা",
            individualPage: "/culture-tradition/tripura",
          },
          {
            stateImg: uttarpradeshImg,
            stateName: "২৬. উত্তরপ্রদেশ",
            individualPage: "/culture-tradition/uttar-pradesh",
          },
          {
            stateImg: uttarakhansImg,
            stateName: "২৭. উত্তরাখণ্ড",
            individualPage: "/culture-tradition/uttarakhand",
          },
          {
            stateImg: wbImg,
            stateName: "২৮. পশ্চিমবঙ্গ",
            individualPage: "/culture-tradition/west-bengal",
          },
          {
            stateImg: andamanImg,
            stateName: "২৯. আন্দামান ও নিকোবর দ্বীপপুঞ্জ (কেন্দ্রশাসিত অঞ্চল)",
            individualPage: "/culture-tradition/andaman-and-nicobar-islands",
          },
          {
            stateImg: chandigarhImg,
            stateName: "৩০. চণ্ডীগড় (কেন্দ্রশাসিত অঞ্চল)",
            individualPage: "/culture-tradition/chandigarh",
          },
          {
            stateImg: dadraImg,
            stateName:
              "৩১. দাদরা ও নগর হাভেলি এবং দমন ও দিউ (কেন্দ্রশাসিত অঞ্চল)",
            individualPage:
              "/culture-tradition/dadra-and-nagar-haveli-and-daman-and-diu",
          },
          {
            stateImg: delhiImg,
            stateName: "৩২. দিল্লি (কেন্দ্রশাসিত অঞ্চল)",
            individualPage: "/culture-tradition/delhi",
          },
          {
            stateImg: jsImg,
            stateName: "৩৩. জম্মু ও কাশ্মীর (কেন্দ্রশাসিত অঞ্চল)",
            individualPage: "/culture-tradition/jammu-and-kashmir",
          },
          {
            stateImg: ladakhImg,
            stateName: "৩৪. লাদাখ (কেন্দ্রশাসিত অঞ্চল)",
            individualPage: "/culture-tradition/ladakh",
          },
          {
            stateImg: lakshadweepImg,
            stateName: "৩৫. লক্ষদ্বীপ (কেন্দ্রশাসিত অঞ্চল)",
            individualPage: "/culture-tradition/lakshadweep",
          },
          {
            stateImg: puducherryImg,
            stateName: "৩৬. পুদুচেরি (কেন্দ্রশাসিত অঞ্চল)",
            individualPage: "/culture-tradition/puducherry",
          },
        ],
      },

      AndhraPradeshData: {
        stateName: ["অন্ধ্র", "প্রদেশ"],
        greetingImg: weddingImg,
        greetingName: "নমস্কারম",
        stateImg: andhrapradeshImg,
        stateHistory:
          "অন্ধ্রপ্রদেশ, যা ভারতীয় দক্ষিণ-পূর্ব অঞ্চলে অবস্থিত, একটি সমৃদ্ধ এবং বৈচিত্র্যময় ইতিহাস ধারণ করে, যা প্রাচীন সাম্রাজ্য, সমৃদ্ধ সংস্কৃতির এবং গুরুত্বপূর্ণ প্রতিরোধ আন্দোলন দ্বারা গঠিত হয়েছে। অন্ধ্রপ্রদেশের ইতিহাস মৌর্য সাম্রাজ্যের (৪র্থ–৩য় শতাব্দী খ্রিস্টপূর্ব) সাথে সম্পর্কিত, যা এই অঞ্চলে প্রাথমিক প্রশাসনিক কাঠামো স্থাপন করেছিল। মৌর্য সাম্রাজ্যের পর, সাতাবাহন (২য় শতাব্দী খ্রিস্টপূর্ব–৩য় শতাব্দী খ্রিস্টাব্দ) অগ্রগতি করেছিল, যা দক্ষিণ ভারতের অন্যতম প্রাচীন রাজবংশ ছিল। ব্যবসায়িক নেটওয়ার্কের জন্য বিখ্যাত, সাতাবাহনরা বৌদ্ধ স্থাপত্যের চমৎকার উদাহরণ যেমন অমরাবতী স্তূপ নির্মাণ করেছিল। \n\n সাতাবাহনের পর, অন্ধ্রপ্রদেশে পালবংশ, চালুক্য এবং রাষ্ট্রকূটদের উত্থান ঘটেছিল। পালবংশ (৩য়–৯ম শতাব্দী খ্রিস্টাব্দ), যারা শিল্প এবং স্থাপত্যে গুরুত্বপূর্ণ অবদান রেখেছিল, অনেক প্রাচীন মন্দির নির্মাণ করেছিল, যার মধ্যে কান্নাচি এবং গুড়তুর মন্দিরগুলি অন্তর্ভুক্ত। \n\n পূর্ব চালুক্য (৭ম–১২ম শতাব্দী খ্রিস্টাব্দ) তেলুগু অঞ্চলে গুরুত্বপূর্ণ প্রভাব ফেলেছিল এবং তেলুগু সাহিত্যকে উৎসাহিত করেছিল। তাদের শাসনের পর কাকতীয় রাজবংশ (১২ম–১৪ম শতাব্দী খ্রিস্টাব্দ) উত্থিত হয়েছিল, যারা তেলুগু ভাষাভাষী অঞ্চলের মধ্যে ঐক্য প্রতিষ্ঠা করেছিল এবং হাজার হাজার স্তম্ভবিশিষ্ট মন্দির ও ওয়ারঙ্গল দুর্গের মতো স্থাপত্যের অসাধারণ উদাহরণ রেখে গিয়েছিল। ১৪শ শতাব্দীতে, অন্ধ্রপ্রদেশ বিজয়নগর সাম্রাজ্যের অংশ হয়ে উঠেছিল, যা শিল্প ও সাহিত্যের উন্নতির জন্য পরিচিত। লেপাক্ষী মন্দিরের মতো প্রতীকি স্থাপত্য তাদের প্রভাবের প্রতীক ছিল। \n\n ঔপনিবেশিক শাসনের সময়, অন্ধ্রপ্রদেশ মাদ্রাজ প্রেসিডেন্সির অংশ ছিল এবং ভারতীয় স্বাধীনতা সংগ্রামে গুরুত্বপূর্ণ অবদান রেখেছিল। রাজ্যটি তার সমৃদ্ধ সাংস্কৃতিক ঐতিহ্যের জন্যও পরিচিত, যার মধ্যে কুচিপুড়ি নৃত্য, প্রাণবন্ত উৎসব এবং তেলুগু সাহিত্য অন্তর্ভুক্ত রয়েছে। আজ অন্ধ্রপ্রদেশ ঐতিহাসিক সংরক্ষণ এবং সাংস্কৃতিক উৎসবের কেন্দ্র হিসেবে আবির্ভূত হয়েছে।",
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
          "অন্ধ্রপ্রদেশের ঐতিহ্যবাহী পোশাক রাজ্যের সাংস্কৃতিক সমৃদ্ধি এবং বৈচিত্র্যকে সুন্দরভাবে উপস্থাপন করে। মহিলারা সাধারণত পোচমপল্লী ইকত, মঙ্গলাগিরি কটন এবং ধর্মাবরম রেশমের মতো চমৎকার কাপড় থেকে তৈরি শাড়ি পরেন। এই শাড়িগুলিতে জটিল ডিজাইন এবং প্রাণবন্ত প্যাটার্ন থাকে, যা গর্ব এবং ঐতিহ্যের প্রতীক। উদাহরণস্বরূপ, ধর্মাবরম শাড়িগুলিতে জরী কাজ এবং ফুল, বন্যপ্রাণী এবং মন্দির স্থাপত্য থেকে অনুপ্রাণিত আকারের অন্তর্ভুক্ত থাকে, যখন গাডওয়াল শাড়িগুলি শরীরের জন্য কটন এবং পল্লু এবং কিনারায় রেশমের সংমিশ্রণ করে আকর্ষণীয় রঙের মিশ্রণ তৈরি করে। পুরুষরা ঐতিহ্যগতভাবে ধুতি পরেন, যা কুর্তার সাথে থাকে, এবং এটি প্রায়শই অঙ্গবাস্ত্র দ্বারা সজ্জিত হয়, যা পরিশীলিততার প্রতীক। আদিবাসী অঞ্চলে, পোশাক স্থানীয় শিল্পের প্রতীক হয়, যার মধ্যে প্রাকৃতিক রং এবং ঐতিহ্যবাহী বুনন কৌশল ব্যবহার করে তৈরি করা অনন্য কাপড় থাকে। এই পোশাকগুলি প্রায়শই প্রতীকী ডিজাইনে সজ্জিত হয়, যা অন্ধ্রপ্রদেশের আদিবাসী সম্প্রদায়গুলির সৃজনশীল প্রতিভা এবং সাংস্কৃতিক গুরুত্ব প্রদর্শন করে। রাজ্যের ঐতিহ্যবাহী পোশাক শুধু এর ঐতিহ্যের প্রতীক নয়, বরং এর কারিগরদের দক্ষ কারিগরি কাজের উদযাপনও, যেখানে প্রতিটি টুকরা ঐতিহ্য এবং সাংস্কৃতিক গর্বের গল্প বলে।",
        languageImg: andhrapradeshImg,
        languageDetails:
          "অন্ধ্রপ্রদেশের অফিসিয়াল ভাষা হল তেলুগু, যা ভারতের ছয়টি শাস্ত্রীয় ভাষার মধ্যে একটি। 'প্রাচ্যের ইতালীয়' নামে পরিচিত তেলুগু তার সুরেলা সুর এবং বিস্তৃত সাহিত্যিক ঐতিহ্যের জন্য প্রশংসিত। এটি ব্যাপকভাবে কথা বলা হয় এবং শিক্ষা প্রতিষ্ঠান, সরকারি যোগাযোগ এবং দৈনন্দিন জীবনে ব্যবহৃত হয়। তেলুগু সাহিত্য খ্যাতনামা কবি এবং লেখক তৈরি করেছে, যারা ভারতের সাংস্কৃতিক পরম্পরা সমৃদ্ধ করেছেন। এই ভাষার মৌখিক এবং লিখিত গল্প বলার একটি সমৃদ্ধ ঐতিহ্য রয়েছে, যার মধ্যে অন্ধ্রমহাভারত এর মতো প্রাচীন গ্রন্থ এবং শাস্ত্রীয় কবিতা অন্তর্ভুক্ত রয়েছে, যা দুই হাজার বছরেরও বেশি পুরানো। তেলুগু ভাষাকে শাস্ত্রীয় নৃত্যের ভাষাগুলির মধ্যে একটিও বলা হয়, বিশেষ করে কুচিপুড়ি নৃত্যে, যা তার ঐতিহ্যবাহী প্রদর্শনীগুলিতে এই ভাষার ব্যবহার করে। এটি তেলুগু লিপিতে লেখা হয়, যা তার গোলাকার এবং বক্ররেখাযুক্ত আকারের জন্য পরিচিত, এবং এর অনন্য ধ্বনিতত্ত্ব এবং ধ্বনি ব্যবস্থার জন্যও প্রসিদ্ধ।",
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
