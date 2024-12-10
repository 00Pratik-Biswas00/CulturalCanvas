import { comparePassword, hashPassword } from "./../helpers/auth.js";
import User from "./../models/user.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { transporter } from "../config.js";

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
        const mailOptions = {
          from: process.env.EMAIL_ID,
          to: email,
          subject: "🔒 Your OTP for Password Reset - Cultural Canvas",
          html: `
            <!DOCTYPE html>
            <html lang="en">
            <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>Password Reset OTP</title>
            </head>
            <body style="font-family: 'Arial', sans-serif; line-height: 1.6; color: #3a3a3a; background-color: #f4f1e8; margin: 0; padding: 0;">
              <table cellpadding="0" cellspacing="0" border="0" width="100%" style="min-width: 100%; background-color: #f4f1e8;">
                <tr>
                  <td align="center" valign="top">
                    <table cellpadding="0" cellspacing="0" border="0" width="600" style="max-width: 600px; margin: 20px auto; background-color: #fff; border: 1px solid #d3c6a6; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.05);">
                      <tr>
                        <td style="padding: 40px 40px 30px;">
                          <table cellpadding="0" cellspacing="0" border="0" width="100%">
                            <tr>
                              <td align="center" style="padding-bottom: 30px;">
                                <img src="${
                                  process.env.LOGO_PATH
                                }" alt="Cultural Canvas Logo" width="150" style="max-width: 150px;">
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <h1 style="color: #8b4513; font-size: 28px; font-weight: bold; text-align: center; margin-bottom: 20px;">Password Reset OTP</h1>
                                <p style="font-size: 16px; color: #3a3a3a; text-align: center; margin-bottom: 30px;">"Secure your account with Cultural Canvas"</p>
                                <p style="font-size: 16px; color: #3a3a3a;">Dear ${
                                  user.name
                                },</p>
                                <p style="font-size: 16px; color: #3a3a3a;">Your OTP for password reset is:</p>
                                <table cellpadding="0" cellspacing="0" border="0" style="margin: 20px auto; background-color: #f9f5ea; border: 1px solid #d3c6a6; border-radius: 5px; width: 80%; text-align: center;">
                                  <tr>
                                    <td style="font-size: 24px; font-weight: bold; color: #8b4513; padding: 20px;">${otp}</td>
                                  </tr>
                                </table>
                                <p style="font-size: 16px; color: #3a3a3a;">This OTP is valid for the next <strong>10 minutes</strong>. Please use this code to reset your password.</p>
                                <p style="font-size: 16px; color: #3a3a3a;">If you did not request a password reset, please disregard this email.</p>
                                <p style="font-size: 16px; color: #3a3a3a;">Thank you for using Cultural Canvas.</p>
                                <p style="font-size: 16px; color: #3a3a3a; margin-bottom: 5px;">Warm regards,</p>
                                <p style="font-size: 18px; color: #8b4513; font-weight: bold;">The Cultural Canvas Team</p>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <td style="background-color: #f9f5ea; padding: 20px; border-top: 1px solid #d3c6a6; text-align: center;">
                          <p style="font-size: 14px; color: #6c6c6c; margin: 0;">© ${new Date().getFullYear()} Cultural Canvas. All Rights Reserved.</p>
                          <p style="font-size: 14px; color: #6c6c6c; margin: 0;">This email was sent to ${email}.</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </body>
            </html>
          `,
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
    updateProfile: async (
      _,
      { name, photo, phoneNumber, password, newPassword },
      { userId }
    ) => {
      if (!userId) {
        throw new Error("You must be logged in to update your profile.");
      }
      const user = await User.findById(userId);
      const updateData = {};
      if (name) {
        updateData.name = name;
      }
      if (phoneNumber) {
        updateData.phone = phoneNumber;
      }
      if (password) {
        const match = await comparePassword(password, user.password);
        if (match && newPassword) {
          const salt = await bcrypt.genSalt(10);
          updateData.password = await bcrypt.hash(newPassword, salt);
        }
      }
      if (photo) {
        updateData.photo = photo;
      }

      try {
        const updatedUser = await User.findByIdAndUpdate(userId, updateData, {
          new: true,
        });

        if (!updatedUser) {
          throw new Error("User not found");
        }

        return {
          ok: true,
          user: updatedUser,
          error: null,
        };
      } catch (error) {
        return {
          ok: false,
          user: null,
          error: error.message,
        };
      }
    },
  },
};

export default authResolver;
