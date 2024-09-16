import Festival from "../models/festival.js";
import slugify from "slugify";
import { nanoid } from "nanoid";

const festivalResolvers = {
  Query: {
    getFestivals: async () => {
      try {
        return await Festival.find();
      } catch (error) {
        throw new Error("Error fetching festivals");
      }
    },
    getFestivalsByDate: async (_, { date }) => {
      try {
        return await Festival.find({ date });
      } catch (error) {
        throw new Error("Error fetching festivals by date");
      }
    },
    getFestivalBySlug: async (_, { slug }) => {
      try {
        return await Festival.findOne({ slug });
      } catch (error) {
        throw new Error("Festival not found");
      }
    },
  },

  Mutation: {
    createFestival: async (
      _,
      { name, date, image, city, state, lat, lng, detail }
    ) => {
      try {
        let slug = slugify(`${name}-${nanoid()}`, {
          remove: /[*+/~.()'"!:@]/g,
        }).toLowerCase();

        const newFestival = new Festival({
          name,
          slug,
          date,
          image,
          location: {
            city,
            state,
            lat,
            lng,
          },
          detail,
        });

        await newFestival.save();
        return newFestival;
      } catch (error) {
        throw new Error("Error creating festival");
      }
    },

    updateFestival: async (
      _,
      { id, name, date, image, city, state, lat, lng, detail }
    ) => {
      try {
        const festival = await Festival.findById(id);
        if (!festival) throw new Error("Festival not found");

        let slug;
        if (name) {
          slug = slugify(`${name}-${nanoid()}`, {
            remove: /[*+/~.()'"!:@]/g,
          }).toLowerCase();
        }

        festival.name = name || festival.name;
        festival.date = date || festival.date;
        festival.slug = slug || festival.slug;
        festival.image = image || festival.image;
        festival.location = {
          city: city || festival.location.city,
          state: state || festival.location.state,
          lat: lat || festival.location.lat,
          lng: lng || festival.location.lng,
        };
        festival.detail = detail || festival.detail;

        await festival.save();
        return festival;
      } catch (error) {
        throw new Error("Error updating festival");
      }
    },

    deleteFestival: async (_, { id }) => {
      try {
        const festival = await Festival.findByIdAndDelete(id);
        if (!festival) throw new Error("Festival not found");
        return { ok: true };
      } catch (error) {
        throw new Error("Error deleting festival");
      }
    },
  },
};

export default festivalResolvers;
