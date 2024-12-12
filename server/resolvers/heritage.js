import Heritage from "../models/heritage.js";
import slugify from "slugify";
import { nanoid } from "nanoid";

const calculateDistance = (lat1, lon1, lat2, lon2) => {
  const R = 6371;
  const toRadians = (deg) => (deg * Math.PI) / 180;

  const dLat = toRadians(lat2 - lat1);
  const dLon = toRadians(lon2 - lon1);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRadians(lat1)) *
      Math.cos(toRadians(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distanceInKm = R * c;

  const distanceInMeters = Math.round(distanceInKm * 1000);
  return distanceInMeters;
};

const heritageResolvers = {
  Query: {
    getHeritages: async () => {
      try {
        const heritages = await Heritage.find();
        return heritages;
      } catch (error) {
        console.error("Error fetching heritages: ", error);
        throw new Error("Error fetching heritages");
      }
    },

    getHeritage: async (_, { slug }) => {
      try {
        console.log("Fetching heritage for slug:", slug);

        const heritage = await Heritage.findOne({ slug: slug });
        if (!heritage) {
          console.warn(`Heritage with slug "${slug}" not found`);
          throw new Error(`Heritage with slug "${slug}" not found`);
        }

        console.log("Heritage found:", heritage);
        return heritage;
      } catch (error) {
        console.error("Error fetching heritage data:", error.message);
        throw new Error(`Error fetching heritage data: ${error.message}`);
      }
    },
    getHeritagesWithDistance: async (_, { currentLocation, state }) => {
      try {
        const { latitude: currentLat, longitude: currentLon } = currentLocation;
        const heritages = await Heritage.find({ state_culture_name: state });
        const results = heritages
          .map((heritage) => {
            const { latitude, longitude } = heritage.coordinates || {};
            const distance =
              latitude && longitude
                ? calculateDistance(currentLat, currentLon, latitude, longitude)
                : null;

            return {
              ...heritage.toObject(),
              distance,
            };
          })
          .filter((heritage) => {
            const { latitude, longitude } = heritage.coordinates || {};
            return !(latitude === currentLat && longitude === currentLon);
          });
        results.sort((a, b) => a.distance - b.distance);
        return results;
      } catch (error) {
        console.error("Error fetching heritages with distance:", error);
        throw new Error("Error fetching heritages with distance");
      }
    },
  },

  Mutation: {
    createHeritage: async (
      _,
      {
        name,
        image,
        introduction,
        endlessDigitalArt,
        animatedVideo,
        vlogVideo,
        part1,
        type_of_heritage,
        tag,
        state_culture_name,
        nearest_attractions,
      },
      { userId }
    ) => {
      let slug;
      if (name) {
        slug = slugify(`${name}-${nanoid()}`, {
          remove: /[*+/~.()'"!:@]/g,
        }).toLowerCase();
      }
      try {
        const formattedAttractions = nearest_attractions?.map((attraction) => ({
          heritage: attraction.heritage,
          distance: attraction.distance,
          entry_fee: attraction.entry_fee,
        }));

        const newHeritage = new Heritage({
          name,
          image,
          slug,
          introduction,
          endlessDigitalArt,
          animatedVideo,
          vlogVideo,
          part1,
          type_of_heritage,
          tag,
          state_culture_name,
          nearest_attractions: formattedAttractions,
          createdBy: userId,
        });

        await newHeritage.save();

        return newHeritage;
      } catch (error) {
        console.error("Error creating heritage: ", error);
        throw new Error("Error creating heritage");
      }
    },

    updateHeritage: async (
      _,
      {
        id,
        name,
        image,
        introduction,
        endlessDigitalArt,
        animatedVideo,
        vlogVideo,
        part1,
        type_of_heritage,
        tag,
        state_culture_name,
        nearest_attractions,
      }
    ) => {
      try {
        const heritage = await Heritage.findById(id);

        if (!heritage) {
          throw new Error("Heritage not found");
        }
        let slug;
        if (name) {
          slug = slugify(`${name}-${nanoid()}`, {
            remove: /[*+/~.()'"!:@]/g,
          }).toLowerCase();
        }

        if (name) heritage.name = name;
        if (image) heritage.image = image;
        if (slug) heritage.slug = slug;
        if (introduction) heritage.introduction = introduction;
        if (endlessDigitalArt) heritage.endlessDigitalArt = endlessDigitalArt;
        if (animatedVideo) heritage.animatedVideo = animatedVideo;
        if (vlogVideo) heritage.vlogVideo = vlogVideo;
        if (part1) heritage.part1 = part1;
        if (type_of_heritage) heritage.type_of_heritage = type_of_heritage;
        if (tag) heritage.tag = tag;
        if (state_culture_name)
          heritage.state_culture_name = state_culture_name;
        if (nearest_attractions) {
          heritage.nearest_attractions = nearest_attractions.map(
            (attraction) => ({
              heritage: attraction.heritage,
              distance: attraction.distance,
              entry_fee: attraction.entry_fee,
            })
          );
        }

        await heritage.save();

        return true;
      } catch (error) {
        console.error("Error updating heritage: ", error);
        throw new Error("Error updating heritage");
      }
    },

    deleteHeritage: async (_, { id }) => {
      try {
        const heritage = await Heritage.findById(id);

        if (!heritage) {
          throw new Error("Heritage not found");
        }

        await heritage.deleteOne();

        return true;
      } catch (error) {
        console.error("Error deleting heritage: ", error);
        throw new Error("Error deleting heritage");
      }
    },
  },
};

export default heritageResolvers;
