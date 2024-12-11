import {
  AuthenticationError,
  UserInputError,
  ForbiddenError,
} from "apollo-server-express";
import Product from "../models/product.js";

const productResolvers = {
  Query: {
    getProducts: async () => {
      try {
        return await Product.find()
          .populate("seller")
          .populate("reviews.reviewer");
      } catch (error) {
        throw new Error("Error fetching products: " + error.message);
      }
    },

    getProduct: async (_, { id }) => {
      try {
        const product = await Product.findById(id)
          .populate("seller")
          .populate("reviews.reviewer");
        if (!product) throw new UserInputError("Product not found");
        return product;
      } catch (error) {
        throw new Error("Error fetching product: " + error.message);
      }
    },
  },

  Mutation: {
    createProduct: async (_, { input }, { userId }) => {
      // if (!userId) {
      //   throw new AuthenticationError(
      //     "You must be logged in as a seller to create a product."
      //   );
      // }

      try {
        const newProduct = new Product({
          ...input,
        });
        await newProduct.save();
        return true;
      } catch (error) {
        throw new Error("Error creating product: " + error.message);
      }
    },

    updateProduct: async (_, { id, input }, { userId }) => {
      if (!userId) {
        throw new AuthenticationError(
          "You must be logged in as a seller to update a product."
        );
      }

      try {
        const product = await Product.findById(id);
        if (!product) throw new Error("Product not found");

        if (product.seller.toString() !== userId) {
          throw new ForbiddenError("You can only update your own products.");
        }

        Object.assign(product, input);
        await product.save();
        return true;
      } catch (error) {
        throw new Error("Error updating product: " + error.message);
      }
    },

    deleteProduct: async (_, { id }, { userId }) => {
      if (!userId) {
        throw new AuthenticationError(
          "You must be logged in as a seller to delete a product."
        );
      }

      try {
        const product = await Product.findById(id);
        if (!product) throw new Error("Product not found");

        if (product.seller.toString() !== userId) {
          throw new ForbiddenError("You can only update your own products.");
        }

        await Product.findByIdAndDelete(id);
        return true;
      } catch (error) {
        throw new Error("Error deleting product: " + error.message);
      }
    },

    addReview: async (_, { id, review, rating }, { userId }) => {
      if (!userId) {
        throw new AuthenticationError("You must be logged in to add a review.");
      }

      try {
        const product = await Product.findById(id);
        if (!product) throw new Error("Product not found.");

        const newReview = {
          reviewer: userId,
          review,
          rating,
        };

        product.reviews.push(newReview);
        await product.save();

        return true;
      } catch (error) {
        throw new Error("Error adding review: " + error.message);
      }
    },
  },
};

export default productResolvers;
