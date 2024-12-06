import { transporter } from "../config.js";
import User from "../models/user.js";
import bcrypt from "bcryptjs";
import { AuthenticationError, ForbiddenError } from "apollo-server-express";
import path from "path";

const generateStrongPassword = () => {
  const allCharacters =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_+=<>?";
  let password = "";
  for (let i = 0; i < 8; i++) {
    password += allCharacters.charAt(
      Math.floor(Math.random() * allCharacters.length)
    );
  }
  return password;
};

const roleResolvers = {
  Query: {
    getAdmins: async () => {
      try {
        return await User.find({ role: "admin" });
      } catch (err) {
        throw new Error("Error fetching admins");
      }
    },
    getSellers: async () => {
      try {
        return await User.find({ role: "seller" });
      } catch (err) {
        throw new Error("Error fetching sellers");
      }
    },
    getUsers: async () => {
      try {
        return await User.find({ role: "user" });
      } catch (err) {
        throw new Error("Error fetching users");
      }
    },
  },
  Mutation: {
    deleteUser: async (_, { id }, { req, userId }) => {
      try {
        const currentUser = await User.findById(userId);
        if (!currentUser) {
          throw new AuthenticationError("You must be logged in.");
        }
        if (currentUser.role !== "admin" && currentUser.role !== "owner") {
          throw new ForbiddenError(
            "You do not have permission to perform this action."
          );
        }
        const userToDelete = await User.findById(id);
        if (!userToDelete) {
          throw new Error("User not found.");
        }
        if (userToDelete.role === "admin") {
          if (currentUser.role !== "owner") {
            throw new ForbiddenError(
              "Only the owner can delete admin accounts."
            );
          }
        } else if (
          userToDelete.role === "seller" ||
          userToDelete.role === "user"
        ) {
          if (currentUser.role !== "admin" && currentUser.role !== "owner") {
            throw new ForbiddenError(
              "Only admin or owner can delete seller or user accounts."
            );
          }
        } else {
          throw new Error("Invalid role.");
        }
        await User.findByIdAndDelete(id);
        return true;
      } catch (err) {
        console.error(err);
        throw new Error("Error deleting user: " + err.message);
      }
    },
    addAdmin: async (
      _,
      { name, email, gender, phone, newEmail },
      { req, userId }
    ) => {
      try {
        const currentUser = await User.findById(userId);
        if (!currentUser) {
          throw new AuthenticationError("You must be logged in.");
        }
        if (currentUser.role !== "owner") {
          throw new ForbiddenError("Only the owner can add admin accounts.");
        }
        const existingUser = await User.findOne({ email: newEmail });
        if (existingUser) {
          throw new Error("An account with this email already exists.");
        }
        const password = generateStrongPassword();
        const hashedPassword = await bcrypt.hash(password, 10);
        const newAdmin = new User({
          name,
          email: newEmail,
          password: hashedPassword,
          gender,
          phone,
          role: "admin",
        });
        await newAdmin.save();
        const mailOptions = {
          from: "Cultural Canvas <no-reply@culturalcanvas.com>",
          to: email,
          subject: "🎉 Welcome to the Cultural Canvas Admin Team!",
          html: `
            <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to Cultural Canvas</title>
</head>
<body style="font-family: 'Georgia', serif; line-height: 1.6; color: #3a3a3a; background-color: #f4f1e8; margin: 0; padding: 0;">
  <table cellpadding="0" cellspacing="0" border="0" width="100%" style="min-width: 100%; background-color: #f4f1e8;">
    <tr>
      <td align="center" valign="top">
        <table cellpadding="0" cellspacing="0" border="0" width="600" style="max-width: 600px; margin: 20px auto; background-color: #fff; border: 1px solid #d3c6a6; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.05);">
          <tr>
            <td style="padding: 40px 40px 30px;">
              <table cellpadding="0" cellspacing="0" border="0" width="100%">
                <tr>
                  <td align="center" style="padding-bottom: 30px;">
                    <img src=${
                      process.env.LOGO_PATH
                    } alt="Cultural Canvas Logo" width="150" style="max-width: 150px;">
                  </td>
                </tr>
                <tr>
                  <td>
                    <h1 style="color: #8b4513; font-size: 28px; font-weight: bold; text-align: center; margin-bottom: 20px; border-bottom: 2px solid #d3c6a6; padding-bottom: 10px;">Welcome to Cultural Canvas</h1>
                    <p style="font-size: 18px; color: #3a3a3a; text-align: center; font-style: italic;">"Preserving the past, inspiring the future"</p>
                    <h2 style="color: #8b4513; font-size: 24px; margin-top: 30px;">Congratulations ${name},</h2>
                    <p style="font-size: 16px; color: #3a3a3a;">We are thrilled to welcome you as a new Admin for <strong>Cultural Canvas</strong>! Your role is crucial in our mission to preserve and share our rich cultural heritage.</p>
                    <p style="font-size: 16px; color: #3a3a3a;">Your account has been set up with the following details:</p>
                    <table cellpadding="10" cellspacing="0" border="0" style="background-color: #f9f5ea; border-radius: 5px; margin: 20px 0;">
                      <tr>
                        <td><strong>Admin Email:</strong></td>
                        <td>${newEmail}</td>
                      </tr>
                      <tr>
                        <td><strong>Temporary Password:</strong></td>
                        <td>${password}</td>
                      </tr>
                    </table>
                    <p style="font-size: 16px; color: #3a3a3a;">For your security, please log in and update your password as soon as possible.</p>
                    <table cellpadding="0" cellspacing="0" border="0" width="100%">
                      <tr>
                        <td align="center" style="padding: 30px 0;">
                          <a href="${
                            process.env.FRONTEND
                          }/login" style="display: inline-block; padding: 12px 24px; color: #ffffff; background-color: #8b4513; text-decoration: none; border-radius: 5px; font-size: 18px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; transition: background-color 0.3s ease;">Log In Now</a>
                        </td>
                      </tr>
                    </table>
                    <p style="font-size: 16px; color: #3a3a3a;">If you have any questions, feel free to reply to this email or contact us directly.</p>
                    <p style="font-size: 16px; color: #3a3a3a;">Welcome to the team!</p>
                    <p style="font-size: 16px; color: #3a3a3a; margin-bottom: 5px;">Warm regards,</p>
                    <p style="font-size: 18px; color: #8b4513; font-weight: bold;">The Cultural Canvas Team</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="background-color: #f9f5ea; padding: 20px; border-top: 1px solid #d3c6a6; text-align: center;">
              <p style="font-size: 14px; color: #6c6c6c; margin: 0 0 10px;">© ${new Date().getFullYear()} Cultural Canvas. All Rights Reserved.</p>
              <p style="font-size: 14px; color: #6c6c6c; margin: 0;">Please do not share your login details with anyone.</p>
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

        return true;
      } catch (err) {
        console.error(err);
        throw new Error("Error adding admin: " + err.message);
      }
    },
  },
};

export default roleResolvers;
