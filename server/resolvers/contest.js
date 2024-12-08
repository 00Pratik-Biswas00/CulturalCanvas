import { Contest, Winner } from "./../models/contest.js";
import moment from "moment";
const contestResolvers = {
  Mutation: {
    addContest: async (_, { topic, date, time }) => {
      try {
        const formattedDate = moment(date, "DD-MM-YYYY");
        const week = formattedDate.week();
        const existingContest = await Contest.findOne({ week });
        if (existingContest) {
          throw new Error(`A contest for week ${week} already exists.`);
        }
        const newContest = new Contest({ topic, date, time, week });
        await newContest.save();
        return true;
      } catch (error) {
        throw new Error("Failed to add contest: " + error.message);
      }
    },
    addWinner: async (_, { name, socialMediaLink, rank, week }) => {
      try {
        const existingWinner = await Winner.findOne({ week, rank });
        if (existingWinner) {
          throw new Error(
            `A winner with rank ${rank} already exists for week ${week}.`
          );
        }
        const newWinner = new Winner({ name, socialMediaLink, rank, week });
        await newWinner.save();
        return true;
      } catch (error) {
        throw new Error("Failed to add winner: " + error.message);
      }
    },
  },
  Query: {
    currentContest: async () => {
      try {
        const currentWeek = moment().week();
        return await Contest.findOne({ week: currentWeek });
      } catch (error) {
        throw new Error(
          "Failed to fetch the current contest: " + error.message
        );
      }
    },
    winners: async (_, { week }) => {
      try {
        return await Winner.find({ week }).sort("rank");
      } catch (error) {
        throw new Error(
          `Failed to fetch winners for week ${week}: ${error.message}`
        );
      }
    },
  },
};

export default contestResolvers;
