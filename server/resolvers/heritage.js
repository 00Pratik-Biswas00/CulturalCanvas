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

    getHeritage: async (parent, { slug }, { models }) => {
      try {
        console.log("Fetching heritage for slug:", slug);

        const heritage = await Heritage.findOne({ slug });
        // .populate({
        //   path: "nearest_attractions",
        //   select: "name image distance entry_fee slug",
        // })
        // .exec();

        console.log("Heritage found:", heritage);

        if (!heritage) {
          throw new Error("Heritage not found");
        }

        return heritage;
      } catch (error) {
        console.error("Error fetching heritage data:", error);
        throw new Error("Error fetching heritage data");
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
        helpline_numbers,
        state_culture_name,
        entry_fee,
        distance,
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
          helpline_numbers,
          state_culture_name,
          entry_fee,
          distance,
          createdBy: userId, // Assuming you want to track who created the heritage
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
        helpline_numbers,
        state_culture_name,
        entry_fee,
        distance,
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
        if (helpline_numbers) heritage.helpline_numbers = helpline_numbers;
        if (state_culture_name)
          heritage.state_culture_name = state_culture_name;
        if (entry_fee) heritage.entry_fee = entry_fee;
        if (distance) heritage.distance = distance;

        const updatedHeritage = await heritage.save();

        return updatedHeritage;
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

        return "Heritage deleted successfully";
      } catch (error) {
        console.error("Error deleting heritage: ", error);
        throw new Error("Error deleting heritage");
      }
    },
  },
};

export default heritageResolvers;
