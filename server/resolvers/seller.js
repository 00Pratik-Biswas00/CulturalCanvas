import Seller from "../models/seller.js";
import User from "../models/user.js";
import { deletePhoto, videoDelete } from "../routes/upload.js";

const sellerResolvers = {
  Query: {
    getSellers: async () => {
      try {
        return await User.find({ verified: true });
      } catch (err) {
        throw new Error("Error fetching sellers: " + err.message);
      }
    },

    getSeller: async (_, { id }) => {
      try {
        const seller = await Seller.findById(id);
        if (!seller) throw new Error("Seller not found");
        return seller;
      } catch (err) {
        throw new Error("Error fetching seller: " + err.message);
      }
    },

    getUnverifiedSellers: async () => {
      try {
        return await Seller.find({ verified: false });
      } catch (err) {
        throw new Error("Error fetching unverified sellers: " + err.message);
      }
    },
  },

  Mutation: {
    addSeller: async (_, { input }, { userId }) => {
      try {
        if (!userId) {
          throw new AuthenticationError(
            "You must be logged in to apply as a seller."
          );
        }

        const newSeller = new Seller({
          ...input,
        });

        await newSeller.save();
        return true;
      } catch (err) {
        throw new Error("Error creating seller: " + err.message);
      }
    },

    verifySeller: async (_, { id }, { userId }) => {
      try {
        const currentUser = await User.findById(userId);
        if (currentUser.role !== "admin") {
          throw new ForbiddenError("Only admins can verify sellers.");
        }

        const blog = await Seller.findByIdAndUpdate(
          id,
          { verified: true },
          { new: true }
        );
        return true;
      } catch (err) {
        throw new Error("Error verifying seller: " + err.message);
      }
    },

    deleteSeller: async (_, { id }, { userId }) => {
      try {
        const seller = await Seller.findById(id);
        const currentUser = await User.findById(userId);
        if (currentUser.role !== "admin") {
          throw new ForbiddenError("Only admin can delete sellers.");
        }

        if (!seller) throw new Error("Seller not found");

        if (seller.image && seller.image.public_id) {
          await deletePhoto(seller.image.public_id);
        }

        if (seller.itCertificate && seller.itCertificate.public_id) {
          await deletePhoto(seller.itCertificate.public_id);
        }
        if (seller.idProof && seller.idProof.public_id) {
          await deletePhoto(seller.idProof.public_id);
        }

        if (
          seller.background &&
          seller.background.Bucket &&
          seller.background.Key
        ) {
          videoDelete({
            Bucket: seller.background.Bucket,
            Key: seller.background.Key,
          });
        }

        await Seller.findByIdAndDelete(id);
        return true;
      } catch (err) {
        console.error("Error deleting seller:", err);
        throw new Error("Error deleting seller: " + err.message);
      }
    },
  },
};

export default sellerResolvers;
