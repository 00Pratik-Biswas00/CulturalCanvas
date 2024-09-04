import Heritage from "../models/heritage.js";

const heritageResolvers = {
  Query: {
    getHeritages: async () => {
      try {
        const heritages = await Heritage.find();
        return heritages;
      } catch (error) {
        console.log("Error fetching heritages: ", error);
        throw new Error("Error fetching heritages");
      }
    },

    getHeritage: async (_, { id }) => {
      try {
        const heritage = await Heritage.findById(id);
        if (!heritage) {
          throw new Error("Heritage not found");
        }
        return heritage;
      } catch (error) {
        console.log("Error fetching heritage: ", error);
        throw new Error("Error fetching heritage");
      }
    },
  },

  Mutation: {
    createHeritage: async (
      _,
      {
        name,
        image,
        introduction,
        endlessDigitalArt,
        animatedVideo,
        vlogVideo,
        part1,
        part2,
        type_of_heritage,
        tag,
        police_helpline,
        women_helpline,
        child_helpline,
        fire_emergency,
        medical_emergency,
        state_culture_name,
        entry_fee,
      },
      { userId }
    ) => {
      try {
        const newHeritage = new Heritage({
          name,
          image,
          introduction,
          endlessDigitalArt,
          animatedVideo,
          vlogVideo,
          part1,
          part2,
          type_of_heritage,
          tag,
          police_helpline,
          women_helpline,
          child_helpline,
          fire_emergency,
          medical_emergency,
          state_culture_name,
          entry_fee,
          createdBy: userId, // Assuming you want to track who created the heritage
        });

        await newHeritage.save();

        return newHeritage;
      } catch (error) {
        console.log("Error creating heritage: ", error);
        throw new Error("Error creating heritage");
      }
    },

    updateHeritage: async (
      _,
      {
        id,
        name,
        image,
        introduction,
        endlessDigitalArt,
        animatedVideo,
        vlogVideo,
        part1,
        part2,
        type_of_heritage,
        tag,
        police_helpline,
        women_helpline,
        child_helpline,
        fire_emergency,
        medical_emergency,
        state_culture_name,
        entry_fee,
      }
    ) => {
      try {
        const heritage = await Heritage.findById(id);

        if (!heritage) {
          throw new Error("Heritage not found");
        }

        // Update fields
        if (name) heritage.name = name;
        if (image) heritage.image = image;
        if (introduction) heritage.introduction = introduction;
        if (endlessDigitalArt) heritage.endlessDigitalArt = endlessDigitalArt;
        if (animatedVideo) heritage.animatedVideo = animatedVideo;
        if (vlogVideo) heritage.vlogVideo = vlogVideo;
        if (part1) heritage.part1 = part1;
        if (part2) heritage.part2 = part2;
        if (type_of_heritage) heritage.type_of_heritage = type_of_heritage;
        if (tag) heritage.tag = tag;
        if (police_helpline) heritage.police_helpline = police_helpline;
        if (women_helpline) heritage.women_helpline = women_helpline;
        if (child_helpline) heritage.child_helpline = child_helpline;
        if (fire_emergency) heritage.fire_emergency = fire_emergency;
        if (medical_emergency) heritage.medical_emergency = medical_emergency;
        if (state_culture_name)
          heritage.state_culture_name = state_culture_name;
        if (entry_fee) heritage.entry_fee = entry_fee;

        const updatedHeritage = await heritage.save();

        return updatedHeritage;
      } catch (error) {
        console.log("Error updating heritage: ", error);
        throw new Error("Error updating heritage");
      }
    },

    deleteHeritage: async (_, { id }) => {
      try {
        const heritage = await Heritage.findById(id);

        if (!heritage) {
          throw new Error("Heritage not found");
        }

        await heritage.deleteOne();

        return "Heritage deleted successfully";
      } catch (error) {
        console.log("Error deleting heritage: ", error);
        throw new Error("Error deleting heritage");
      }
    },

    addState: async (_, { id, state_culture_name }) => {
      try {
        const heritage = await Heritage.findById(id);

        if (!heritage) {
          throw new Error("Heritage not found");
        }

        const newState = {
          name: state_culture_name.name,
          image: state_culture_name.image,
        };

        heritage.state_culture_name.push(newState);

        await heritage.save();

        return newState;
      } catch (error) {
        console.log("Error adding state: ", error);
        throw new Error("Error adding state");
      }
    },

    removeState: async (_, { stateId, heritageId }) => {
      try {
        const heritage = await Heritage.findById(heritageId);

        if (!heritage) {
          throw new Error("Heritage not found");
        }

        const stateIndex = heritage.state_culture_name.findIndex(
          (state) => state._id.toString() === stateId
        );

        if (stateIndex === -1) {
          throw new Error("State not found in heritage");
        }

        heritage.state_culture_name.splice(stateIndex, 1);

        const updatedHeritage = await heritage.save();

        return updatedHeritage;
      } catch (error) {
        console.log("Error removing state: ", error);
        throw new Error("Error removing state");
      }
    },
  },
};

export default heritageResolvers;
