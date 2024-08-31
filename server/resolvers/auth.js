import { comparePassword, hashPassword } from "./../helpers/auth.js";
import User from "./../models/user.js";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";
import bcrypt from "bcryptjs";

const authResolver = {
  Query: {
    currentUser: async (_, __, { req, userId }) => {
      try {
        const user = await User.findById(userId);

        if (!user) {
          throw new Error("No user found");
        }
        return user;
      } catch (err) {
        console.error(err);
        throw err;
      }
    },
  },
  Mutation: {
    register: async (_, { name, email, password, gender, phone }) => {
      const exist = await User.findOne({ email });
      if (exist) {
        throw new Error("Email is taken");
      }

      const hashedPassword = await hashPassword(password);

      const newUser = new User({
        name,
        email,
        password: hashedPassword,
        gender,
        phone,
      });
      await newUser.save();

      return { ok: true };
    },

    login: async (_, { email, password }) => {
      try {
        const user = await User.findOne({ email });

        if (!user) {
          return { error: "No user found" };
        }
        const match = await comparePassword(password, user.password);
        if (!match) {
          return { error: "Wrong password" };
        }
        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
          expiresIn: "6d",
        });
        user.password = undefined;
        return { token, user };
      } catch (err) {
        console.log(err);
        throw new Error("Error. Try again.");
      }
    },
    forgotPassword: async (_, { email }) => {
      try {
        const user = await User.findOne({ email });
        if (!user) return { error: "No User found" };

        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
          expiresIn: "180d",
        });

        var transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: process.env.EMAIL_ID,
            pass: process.env.EMAIL_PASSWORD,
          },
        });

        var mailOptions = {
          from: process.env.EMAIL_ID,
          to: email,
          subject: "Reset your password - Cultural Canvas",
          text: `Dear ${user.name},
      
            We received a request to reset your password for your Cultural Canvas account. To proceed with this request, please follow the instructions below:
            
              1. Click on the following link to reset your password:
              ${process.env.FRONTEND}/reset-password/${user.id}/${token}
            
              2. If you're unable to click on the link, please copy and paste it into your web browser's address bar.
            
              3. Once the link is opened, you will be directed to a page where you can create a new password for your account.
            
            If you did not request this password reset, please disregard this email. Your account is still secure, and no changes have been made.
            
            Thank you for using Cultural Canvas.
            
            Best regards,
            Cultural Canvas Team`,
        };

        await transporter.sendMail(mailOptions);
        return { ok: true };
      } catch (err) {
        console.error(err);
        throw new Error("Error. Try again.");
      }
    },
    resetPassword: async (_, { id, token, password }) => {
      try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (!decoded) {
          throw new Error("Invalid token");
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        await User.findByIdAndUpdate({ _id: id }, { password: hashedPassword });
        return { ok: true };
      } catch (err) {
        console.error(err);
        throw new Error("Error. Try again.");
      }
    },
  },
};

export default authResolver;
