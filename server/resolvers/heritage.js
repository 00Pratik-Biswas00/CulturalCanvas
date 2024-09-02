import Heritage from "../models/heritage.js";
import cloudinary from "cloudinary";

// const uploadImageToCloudinary = async (filePath) => {
//   const result = await cloudinary.uploader.upload(filePath);
//   return {
//     url: result.secure_url,
//     public_id: result.public_id,
//   };
// };

const heritageResolvers = {
  Query: {
    getHeritages: async () => {
      try {
        return await Heritage.find();
      } catch (error) {
        throw new Error("Error fetching heritages");
      }
    },
    getHeritage: async (_, { id }) => {
      try {
        return await Heritage.findById(id);
      } catch (error) {
        throw new Error("Error fetching heritage");
      }
    },
  },
  //   Mutation: {
  //     createHeritage: async (_, { input }) => {
  //       try {
  //         // Upload the main image to Cloudinary
  //         // const imageUploadResult = await cloudinary.uploader.upload(
  //         //   input.image.url
  //         // );
  //         // const uploadedImage = {
  //         //   url: imageUploadResult.secure_url,
  //         //   public_id: imageUploadResult.public_id,
  //         // };

  //         // Upload the image for type_of_heritage
  //         // const heritageTypeImageUploadResult = await cloudinary.uploader.upload(
  //         //   input.type_of_heritage.image.url
  //         // );
  //         // const uploadedHeritageTypeImage = {
  //         //   url: heritageTypeImageUploadResult.secure_url,
  //         //   public_id: heritageTypeImageUploadResult.public_id,
  //         // };

  //         // Upload the image for state_culture_name
  //         // const stateCultureImageUploadResult = await cloudinary.uploader.upload(
  //         //   input.state_culture_name.image.url
  //         // );
  //         // const uploadedStateCultureImage = {
  //         //   url: stateCultureImageUploadResult.secure_url,
  //         //   public_id: stateCultureImageUploadResult.public_id,
  //         // };

  //         // Construct the new heritage object with the uploaded images
  //         const newHeritage = new Heritage({
  //           ...input,
  //         });

  //         // Save the heritage object to MongoDB
  //         const savedHeritage = await newHeritage.save();

  //         // Populate necessary fields and return the saved object
  //         return savedHeritage;
  //         // .populate({
  //         //   path: "state_culture_link",
  //         //   select: "name image",
  //         // })
  //         // .populate({
  //         //   path: "nearest_attraction",
  //         //   select: "name image entry_fee",
  //       } catch (error) {
  //         throw new Error("Error creating heritage: " + error.message);
  //       }
  //     },
  //   },
  // };
  Mutation: {
    createHeritage: async (_, { input, image }, { req }) => {
      try {
        const heritage = new Heritage({
          ...input,
          image,
        });

        const savedHeritage = await heritage.save();

        return savedHeritage;
      } catch (error) {
        throw new Error("Error creating heritage: " + error.message);
      }
    },

    updateHeritage: async (_, { id, input, image }, { req }) => {
      try {
        const heritage = await Heritage.findById(id);

        if (!heritage) {
          throw new Error("Heritage not found");
        }

        // Update fields
        if (input) {
          Object.assign(heritage, input);
        }
        if (image) {
          heritage.image = image;
        }

        const updatedHeritage = await heritage.save();

        return updatedHeritage;
      } catch (error) {
        throw new Error("Error updating heritage: " + error.message);
      }
    },

    deleteHeritage: async (_, { id }, { req }) => {
      try {
        const heritage = await Heritage.findById(id);

        if (!heritage) {
          throw new Error("Heritage not found");
        }

        await heritage.deleteOne();

        return {
          ok: true,
        };
      } catch (error) {
        throw new Error("Error deleting heritage: " + error.message);
      }
    },
  },
};
export default heritageResolvers;
