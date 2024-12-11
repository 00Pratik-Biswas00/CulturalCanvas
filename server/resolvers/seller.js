import Seller from "../models/seller.js";
import User from "../models/user.js";

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

        if (seller.video && seller.video.Bucket && seller.video.Key) {
          videoDelete({ Bucket: blog.video.Bucket, Key: blog.video.Key });
        }

        await Blog.findByIdAndDelete(id);
        return true;
      } catch (err) {
        console.error("Error deleting blog:", err);
        throw new Error("Error deleting blog: " + err.message);
      }
    },
  },
};
