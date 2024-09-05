import Religion from "../models/religion";
import slugify from "slugify";
import { nanoid } from "nanoid";

const religionResolvers = {
  Query: {
    getReligions: async () => {
      try {
        const religions = await Religion.find();
        return religions;
      } catch (error) {
        console.log("Error fetching religions: ", error);
        throw new Error("Error fetching religions");
      }
    },

    getReligion: async (_, { slug }) => {
      try {
        const religion = await Religion.findOne({ slug: slug });
        if (!religion) {
          throw new Error("Religion not found");
        }
        return religion;
      } catch (error) {
        console.log("Error fetching religion: ", error);
        throw new Error("Error fetching religion");
      }
    },
  },

  Mutation: {
    createReligion: async (
      _,
      {
        name,
        image,
        introduction,
        description,
        overview,
        history,
        regions,
        practices,
        core_beliefs,
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
        const newReligion = new Religion({
          name,
          image,
          slug,
          introduction,
          description,
          overview,
          history,
          regions,
          practices,
          core_beliefs,
          createdBy: userId, // Assuming you want to track who created the heritage
        });

        await newReligion.save();

        return newReligion;
      } catch (error) {
        console.log("Error creating religion: ", error);
        throw new Error("Error creating religion");
      }
    },

    updateReligion: async (
      _,
      {
        id,
        name,
        image,
        introduction,
        description,
        overview,
        history,
        regions,
        practices,
        core_beliefs,
      }
    ) => {
      try {
        const religion = await Religion.findById(id);

        if (!religion) {
          throw new Error("Religion not found");
        }
        let slug;
        if (name) {
          slug = slugify(`${name}-${nanoid()}`, {
            remove: /[*+/~.()'"!:@]/g,
          }).toLowerCase();
        }

        // Update fields
        if (name) religion.name = name;
        if (image) religion.image = image;
        if (slug) religion.slug = slug;
        if (introduction) religion.introduction = introduction;
        if (description) religion.description = description;
        if (overview) religion.overview = overview;
        if (history) religion.history = history;
        if (regions) religion.regions = regions;
        if (practices) religion.practices = practices;
        if (core_beliefs) religion.core_beliefs = core_beliefs;

        const updatedReligion = await religion.save();

        return updatedReligion;
      } catch (error) {
        console.log("Error updating religion: ", error);
        throw new Error("Error updating religion");
      }
    },

    deleteReligion: async (_, { id }) => {
      try {
        const religion = await Religion.findById(id);

        if (!religion) {
          throw new Error("Religion not found");
        }

        await religion.deleteOne();

        return "Religion deleted successfully";
      } catch (error) {
        console.log("Error deleting Religion: ", error);
        throw new Error("Error deleting Religion");
      }
    },
  },
};
