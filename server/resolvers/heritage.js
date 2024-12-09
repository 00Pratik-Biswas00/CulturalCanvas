import Heritage from "../models/heritage.js";
import slugify from "slugify";
import { nanoid } from "nanoid";

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

        // Find heritage by slug
        const heritage = await Heritage.findOne({ slug: slug });
        // Uncomment and adjust if you need to populate related fields
        // .populate({
        //   path: "nearest_attractions",
        //   select: "name image distance entry_fee slug",
        // })
        // .exec();

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
        // Format nearest attractions
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
          createdBy: userId, // Tracking who created the heritage
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

        // Update fields
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
