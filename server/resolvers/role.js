import { transporter } from "../config.js";
import User from "../models/user.js";
import bcrypt from "bcryptjs";
import { AuthenticationError, ForbiddenError } from "apollo-server-express";

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
            <html>
              <head>
                <style>
                  body {
                    font-family: Arial, sans-serif;
                    line-height: 1.6;
                    color: #333333;
                    background-color: #f9f9f9;
                    padding: 0;
                    margin: 0;
                  }
                  .email-container {
                    max-width: 600px;
                    margin: 20px auto;
                    background: #ffffff;
                    border: 1px solid #eaeaea;
                    border-radius: 8px;
                    padding: 20px;
                  }
                  h2 {
                    color: #4caf50;
                  }
                  p {
                    font-size: 16px;
                  }
                  ul {
                    padding-left: 20px;
                  }
                  li {
                    margin-bottom: 8px;
                  }
                  .footer {
                    margin-top: 20px;
                    font-size: 14px;
                    color: #555555;
                    text-align: center;
                  }
                  .cta-button {
                    display: inline-block;
                    margin-top: 15px;
                    padding: 10px 20px;
                    color: #ffffff;
                    background-color: #4caf50;
                    text-decoration: none;
                    border-radius: 5px;
                    font-size: 16px;
                  }
                  .cta-button:hover {
                    background-color: #45a049;
                  }
                </style>
              </head>
              <body>
                <div class="email-container">
                  <h2>Congratulations ${name},</h2>
                  <p>We are thrilled to welcome you as a new Admin for <strong>Cultural Canvas</strong>!</p>
                  <p>Your account has been set up with the following details:</p>
                  <ul>
                    <li><strong>Admin Email:</strong> ${newEmail}</li>
                    <li><strong>Temporary Password:</strong> ${password}</li>
                  </ul>
                  <p>For your security, please log in and update your password as soon as possible.</p>
                  <a href=${
                    process.env.FRONTEND
                  }/login" class="cta-button">Log In Now</a>
                  <p>If you have any questions, feel free to reply to this email or contact us directly.</p>
                  <p>Welcome to the team!</p>
                  <p>Warm regards,</p>
                  <p><strong>The Cultural Canvas Team</strong></p>
                  <div class="footer">
                    <p>&copy; ${new Date().getFullYear()} Cultural Canvas. All Rights Reserved.</p>
                    <p>Please do not share your login details with anyone.</p>
                  </div>
                </div>
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
