import Language from "../models/language.js";
import slugify from "slugify";
import { nanoid } from "nanoid";

const languageResolvers = {
  Query: {
    getLanguages: async () => {
      try {
        const languages = await Language.find();

        return languages;
      } catch (error) {
        console.log("Error fetching languages: ", error);
        throw new Error("Error fetching languages");
      }
    },

    getLanguage: async (_, { slug }) => {
      try {
        const language = await Language.findOne({ slug: slug });
        if (!language) {
          throw new Error("Language not found");
        }
        return language;
      } catch (error) {
        console.log("Error fetching language: ", error);
        throw new Error("Error fetching language");
      }
    },
  },
  Mutation: {
    createLanguage: async (
      _,
      { name, image, description, content },
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
        const newLanguage = new Language({
          name,
          image,
          slug,
          description,
          content,
          createdBy: userId, // Assuming you want to track who created the heritage
        });

        await newLanguage.save();

        return newLanguage;
      } catch (error) {
        console.log("Error creating language: ", error.message);
        throw new Error("Error creating language");
      }
    },

    updateLanguage: async (_, { id, name, image, description, content }) => {
      try {
        const language = await Language.findById(id);

        if (!language) {
          throw new Error("Language not found");
        }
        let slug;
        if (name) {
          slug = slugify(`${name}-${nanoid()}`, {
            remove: /[*+/~.()'"!:@]/g,
          }).toLowerCase();
        }

        // Update fields
        if (name) language.name = name;
        if (image) language.image = image;
        if (slug) language.slug = slug;
        if (description) language.description = description;
        if (content) language.content = content;

        const updatedLanguage = await Language.save();

        return updatedLanguage;
      } catch (error) {
        console.log("Error updating language: ", error);
        throw new Error("Error updating language");
      }
    },

    deleteLanguage: async (_, { id }) => {
      try {
        const language = await Language.findById(id);

        if (!language) {
          throw new Error("language not found");
        }

        await language.deleteOne();

        return "language deleted successfully";
      } catch (error) {
        console.log("Error deleting language: ", error);
        throw new Error("Error deleting language");
      }
    },
  },
};

export default languageResolvers;
