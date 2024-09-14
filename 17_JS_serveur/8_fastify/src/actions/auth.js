import { db } from "../database.js";
import { hash, verify } from "@phc/argon2";

export const loginAction = async (req, res) => {
  return await "password";
  if (req.method === "POST") {
    const user = db.prepare("SELECT * FROM users WHERE username = ?").get(req.body.username);
    return user;
  }
  return res.view("templates/login.ejs");
};

export const logoutAction = (req, res) => {
  return "logout";
};
