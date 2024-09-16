import { compare } from "bcrypt";
import { TryCatch } from "../middlewares/error.js";
import { User } from "../models/user.js";
import { cookieOptions, sendToken } from "../utils/features.js";
import { ErrorHandler } from "../utils/utility.js";

// Create a new user and save it to the database and save in cookie
const newUser = async (req, res) => {
  const { name, username, password } = req.body;

  console.log("Hello:", req.body);

  const user = await User.create({
    name,
    username,
    password,
  });

  sendToken(res, user, 201, "User Created!");
};

// Login user and save token in cookie
const login = TryCatch(async (req, res, next) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username }).select("+password"); // .select('+password') means select and give the password filed also, we need to select the password field manually because in User model we write password: { select: false };

  if (!user) return next(new ErrorHandler("Invalid Username or Password", 404));

  const isPasswordMatched = await compare(password, user.password);

  if (!isPasswordMatched)
    return next(new ErrorHandler("Invalid Username or Password", 404));

  sendToken(res, user, 200, `Welcome Back, ${user.name}!`);
});

const getMyProfile = TryCatch(async (req, res) => {
  console.log("get profile");
  const user = await User.findById(req.userId);

  res.status(200).json({
    success: true,
    user,
  });
});

const logout = TryCatch(async (req, res) => {
  const options = {
    ...cookieOptions,
    maxAge: 0,
    expires: new Date(0),
    path: "/",
  };
  const token = "xxx";
  console.log(options);
  return res.status(200).clearCookie("access-token", options).json({
    success: true,
    message: "Logged out successfully",
    options,
    token,
  });
});

export { getMyProfile, login, logout, newUser };
