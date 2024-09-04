import Course from "../models/course.js";
import slugify from "slugify";
import { nanoid } from "nanoid";

const courseResolvers = {
  Query: {
    getCourses: async () => {
      try {
        const courses = await Course.find().populate("instructor");
        return courses;
      } catch (error) {
        console.log("Error fetching courses: ", error);
        throw new Error("Error fetching courses");
      }
    },

    getCourse: async (_, { slug }) => {
      try {
        const course = await Course.findOne({slug: slug}).populate("instructor");
        return course;
      } catch (error) {
        console.log("Error fetching courses: ", error);
        throw new Error("Error fetching course");
      }
    },
  },

  Mutation: {
    createCourse: async (
      _,
      { image, name, courseCategory, courseHistory, courseIntro, modules },
      { userId }
    ) => {
      let slug;
      if (name) {
        slug = slugify(`${name}-${nanoid()}`, {
          remove: /[*+/~.()'"!:@]/g,
        }).toLowerCase();
      }
      try {
        const newCourse = new Course({
          image,
          name,
          slug,
          courseCategory,
          courseHistory,
          courseIntro,
          modules,
          instructor: userId,
        });
        await newCourse.save();

        return newCourse;
      } catch (error) {
        console.log("Error creating course: ", error);
        throw new Error("Error creating course");
      }
    },

    updateCourse: async (
      _,
      { id, name, image, courseCategory, courseHistory, courseIntro }
    ) => {
      try {
        const course = await Course.findById(id);

        if (!course) {
          throw new Error("Course not found");
        }

        let slug;
        if (name) {
          slug = slugify(`${name}-${nanoid()}`, {
            remove: /[*+/~.()'"!:@]/g,
          }).toLowerCase();
        }

        course.name = name || course.name;
        course.slug = slug || course.slug;
        course.image = image || course.image;
        course.courseCategory = courseCategory || course.courseCategory;
        course.courseHistory = courseHistory || course.courseHistory;
        course.courseIntro = courseIntro || course.courseIntro;

        return course;
      } catch (error) {
        console.log("Error updating course: ", error);
        throw new Error("Error updating course");
      }
    },

    addCourseModule: async (_, { id, module }) => {
      try {
        const course = await Course.findById(id);

        if (!course) {
          throw new Error("Course does not exist");
        }

        const newModule = {
          name: module.name,
          description: module.description,
          image: module.image,
          video: module.video,
        };

        course.modules.push(newModule);

        await course.save();

        return newModule;
      } catch (error) {
        console.log("Error adding module: ", error);
        throw new Error("Error adding module");
      }
    },

    removeCourseModule: async (_, { courseId, moduleId }) => {
      try {
        const course = await Course.findById(courseId);

        if (!course) {
          throw new Error("Course does not exist");
        }

        const moduleIndex = course.modules.findIndex(
          (module) => module._id.toString() === moduleId
        );

        if (moduleIndex === -1) {
          throw new Error("Module does not exist in the course");
        }

        const removedModule = course.modules.splice(moduleIndex, 1)[0];

        await course.save();

        return removedModule;
      } catch (error) {
        console.log("Error removing module: ", error);
        throw new Error("Error removing module");
      }
    },

    deleteCourse: async (_, { id }) => {
      try {
        const deletedCourse = await Course.findByIdAndDelete(id);

        if (!deletedCourse) {
          console.log(`Course with ID ${id} not found.`);
          throw new Error("Course not found or already deleted.");
        }

        return "Course deleted successfully";
      } catch (error) {
        console.log("Error deleting course: ", error);
        throw new Error("Error deleting course");
      }
    },
  },
};

export default courseResolvers;
