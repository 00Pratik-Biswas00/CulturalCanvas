import express from "express";
import "dotenv/config";
import morgan from "morgan";
import mongoose from "mongoose";
import cors from "cors";
import { createServer } from "http";
import { ApolloServer } from "apollo-server-express";
import { mergeTypeDefs, mergeResolvers } from "@graphql-tools/merge";
import authResolver from "./resolvers/auth.js";
import authTypeDefs from "./typedefs/auth.js";
import { authenticateUser } from "./middlewares/verify.js";

const customLoggingPlugin = {
  requestDidStart(requestContext) {
    return {
      willSendResponse(requestContext) {
        console.log("Response:", requestContext.response);
      },
    };
  },
};

const PORT = process.env.PORT || 5000;

const app = express();
const http = createServer(app);

app.use(
  cors({
    origin: [process.env.FRONTEND, "https://studio.apollographql.com"],
  })
);

const typeDefs = mergeTypeDefs([authTypeDefs]);
const resolvers = mergeResolvers([authResolver]);

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }) => {
    try {
      const authContext = await authenticateUser(req);
      const publicOperations = ["Login", "Register"];
      const operationName = req.body.operationName;
      if (!authContext && !publicOperations.includes(operationName)) {
        throw new Error("Unauthorized");
      }
      return { ...authContext, req };
    } catch (error) {
      if (error.message === "Unauthorized") {
        return { req, authError: error.message };
      }
      throw error;
    }
  },
  plugins: [customLoggingPlugin],
});

await apolloServer.start();

apolloServer.applyMiddleware({ app });

app.use(express.json({ limit: "5mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Server is running...");
});

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Database connected successfully.");
  })
  .catch((error) => {
    console.log("Error connecting to database: " + JSON.stringify(error));
    process.exit(1);
  });

http.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(
    `graphql server is ready at http://localhost:${process.env.PORT}${apolloServer.graphqlPath}`
  );
});
