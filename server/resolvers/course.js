import Course from "../models/course.js";
import slugify from "slugify";
import { nanoid } from "nanoid";

const courseResolvers = {
  Query: {
    getCourses: async () => {
      try {
        const courses = await Course.find();
        return courses;
      } catch (error) {
        console.log("Error fetching courses: ", error);
        throw new Error("Error fetching courses");
      }
    },

    getCourse: async (_, { slug }) => {
      try {
        const course = await Course.findOne({ slug: slug }).populate(
          "instructor"
        );
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
      {
        name,
        image,
        courseCategory,
        courseHistory,
        courseIntro,
        instructorName,
        instructorEmail,
        instructorImage,
        modules,
      }
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
          instructorName,
          instructorEmail,
          instructorImage,
          modules,
        });
        await newCourse.save();

        return { ok: true };
      } catch (error) {
        console.log("Error creating course: ", error);
        throw new Error("Error creating course", error);
      }
    },

    updateCourse: async (
      _,
      {
        id,
        name,
        image,
        courseCategory,
        courseHistory,
        courseIntro,
        instructorName,
        instructorEmail,
        instructorImage,
        modules,
      }
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
        course.instructorName = instructorName || course.instructorName;
        course.instructorEmail = instructorEmail || course.instructorEmail;
        course.instructorImage = instructorImage || course.instructorImage;
        course.modules = modules || course.modules;

        await course.save();

        return { ok: true };
      } catch (error) {
        console.log("Error updating course: ", error);
        throw new Error("Error updating course");
      }
    },

    rateCourse: async (_, { newRating }) => {
      try {
        const course = await Course.findById(id);

        if (!course) {
          throw new Error("Course not found");
        }

        course.averageRatings =
          (course.averageRatings * course.totalRatings + newRating) /
          (course.totalRatings + 1);
        course.totalRatings += 1;

        await course.save();

        return { ok: true };
      } catch (error) {
        console.log("Error rating the course: ", error);
        throw new Error("Error rating the course");
      }
    },

/*

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


*/

    deleteCourse: async (_, { id }) => {
      try {
        const deletedCourse = await Course.findByIdAndDelete(id);

        if (!deletedCourse) {
          console.log(`Course with ID ${id} not found.`);
          throw new Error("Course not found or already deleted.");
        }

        return { ok: true };
      } catch (error) {
        console.log("Error deleting course: ", error);
        throw new Error("Error deleting course");
      }
    },
  },
};

export default courseResolvers;
