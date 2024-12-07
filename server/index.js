import express from "express";
import "dotenv/config";
import morgan from "morgan";
import cors from "cors";
import uploadRoutes from "./routes/upload.js";
import tripRoutes from "./routes/trip.js";
import userCount from "./routes/count.js";
import { createServer } from "http";
import { ApolloServer } from "apollo-server-express";
import { mergeTypeDefs, mergeResolvers } from "@graphql-tools/merge";
import authResolver from "./resolvers/auth.js";
import authTypeDefs from "./typedefs/auth.js";
import { authenticateUser } from "./middlewares/verify.js";
import heritageTypeDefs from "./typedefs/heritage.js";
import heritageResolvers from "./resolvers/heritage.js";
import courseTypeDefs from "./typedefs/course.js";
import courseResolvers from "./resolvers/course.js";
import religionResolvers from "./resolvers/religion.js";
import religionTypeDefs from "./typedefs/religion.js";
import languageResolvers from "./resolvers/language.js";
import languageTypeDefs from "./typedefs/language.js";
import connect from "./config.js";
import stateCultureResolvers from "./resolvers/stateculture.js";
import stateCultureTypeDefs from "./typedefs/stateculture.js";
import { festivalTypeDefs } from "./typedefs/festival.js";
import festivalResolvers from "./resolvers/festival.js";
import roleResolvers from "./resolvers/role.js";
import roleTypeDefs from "./typedefs/role.js";
import blogResolvers from "./resolvers/blog.js";
import blogTypeDefs from "./typedefs/blog.js";
import careertypeDefs from "./typedefs/career.js";
import careerResolvers from "./resolvers/career.js";

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

const typeDefs = mergeTypeDefs([
  authTypeDefs,
  heritageTypeDefs,
  courseTypeDefs,
  religionTypeDefs,
  languageTypeDefs,
  stateCultureTypeDefs,
  festivalTypeDefs,
  roleTypeDefs,
  blogTypeDefs,
  careertypeDefs,
]);
const resolvers = mergeResolvers([
  authResolver,
  heritageResolvers,
  courseResolvers,
  religionResolvers,
  languageResolvers,
  stateCultureResolvers,
  festivalResolvers,
  roleResolvers,
  blogResolvers,
  careerResolvers,
]);

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }) => {
    try {
      const authContext = await authenticateUser(req);
      const publicOperations = ["Login", "Register", "getCourses", "getCourse"];
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

connect();

app.use(express.json({ limit: "5mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use("/api", uploadRoutes);
app.use("/api", tripRoutes);
app.use("/api", userCount);

http.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(
    `graphql server is ready at http://localhost:${process.env.PORT}${apolloServer.graphqlPath}`
  );
});
