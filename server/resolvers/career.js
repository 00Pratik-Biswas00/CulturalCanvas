import { Admin, Teacher } from "./../models/career.js";

const careerResolvers = {
  Query: {
    admins: async () => await Admin.find(),
    teachers: async () => await Teacher.find(),
    admin: async (_, { id }) => await Admin.findById(id),
    teacher: async (_, { id }) => await Teacher.findById(id),
  },
  Mutation: {
    createAdmin: async (_, { input }) => {
      const admin = new Admin(input);
      await admin.save();
      return true;
    },
    createTeacher: async (_, { input }) => {
      const teacher = new Teacher(input);
      await teacher.save();
      return true;
    },
  },
};

export default careerResolvers;

