import StateCulture from "../models/stateculture.js";
import slugify from "slugify";
import { nanoid } from "nanoid";

const stateCultureResolvers = {
  Query: {
    getStateCultures: async () => {
      try {
        const stateCultures = await StateCulture.find();
        return stateCultures;
      } catch (error) {
        console.log("Error fetching stateCultures: ", error);
        throw new Error("Error fetching stateCultures");
      }
    },
  },
  Mutation: {
    createStateCulture: async (
      _,
      { name, image, stateHistory },
      { userId }
    ) => {
      let slug;
      if (name && typeof name === "string") {
        slug = slugify(`${name}-${nanoid()}`, {
          remove: /[*+/~.()'"!:@]/g,
        }).toLowerCase();
      } else {
        throw new Error("Valid name is required to create a language");
      }
      try {
        const newStateCulture = new StateCulture({
          name,
          image,
          slug,
          stateHistory,
          createdBy: userId, // Assuming you want to track who created the heritage
        });

        await newStateCulture.save();

        return newStateCulture;
      } catch (error) {
        console.log("Error creating StateCulture: ", error.message);
        throw new Error("Error creating stateCulture");
      }
    },
    updateStateCulture: async (
      _,
      { id, name, image, stateHistory },
      { userId }
    ) => {
      try {
        const stateCulture = await StateCulture.findById(id);

        if (!stateCulture) {
          throw new Error("StateCulture not found");
        }

        let slug;
        if (name && typeof name === "string") {
          slug = slugify(`${name}-${nanoid()}`, {
            remove: /[*+/~.()'"!:@]/g,
          }).toLowerCase();
        }

        // Update the fields
        if (name) stateCulture.name = name;
        if (image) stateCulture.image = image;
        if (slug) stateCulture.slug = slug;
        if (stateHistory) stateCulture.stateHistory = stateHistory;

        const updatedStateCulture = await stateCulture.save();

        return updatedStateCulture;
      } catch (error) {
        console.log("Error updating StateCulture: ", error.message);
        throw new Error("Error updating stateCulture");
      }
    },
    deleteStateCulture: async (_, { id }, { userId }) => {
      try {
        const stateCulture = await StateCulture.findById(id);

        if (!stateCulture) {
          throw new Error("StateCulture not found");
        }

        await stateCulture.deleteOne();

        return "StateCulture deleted successfully";
      } catch (error) {
        console.log("Error deleting StateCulture: ", error.message);
        throw new Error("Error deleting stateCulture");
      }
    },
  },
};

export default stateCultureResolvers;
