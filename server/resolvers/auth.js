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
        const otp = Math.floor(100000 + Math.random() * 900000).toString();
        const otpExpiry = Date.now() + 10 * 60 * 1000;
        user.otp = otp;
        user.otpExpiry = otpExpiry;
        await user.save();
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
          subject: "Your OTP for Password Reset - Cultural Canvas",
          text: `Dear ${user.name},
    
          Your OTP for password reset is: ${otp}
          
          This OTP is valid for the next 10 minutes. Please use this code to reset your password.
          
          If you did not request this password reset, please disregard this email.
    
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

    resetPassword: async (_, { otp, password }) => {
      try {
        const user = await User.findOne({ otp });
        if (!user || user.otp !== otp || user.otpExpiry < Date.now()) {
          return { ok: false, error: "Invalid or expired OTP" };
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        user.password = hashedPassword;
        user.otp = null;
        user.otpExpiry = null;
        await user.save();
        return { ok: true };
      } catch (err) {
        console.error(err);
        throw new Error("Error. Try again.");
      }
    },
  },
};

export default authResolver;
