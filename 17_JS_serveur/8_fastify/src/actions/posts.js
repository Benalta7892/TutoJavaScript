import { db } from "../database.js";
import { RecordNotFoundError } from "../errors/RecordNotFoundError.js";

export const listPosts = (req, res) => {
  const posts = db.prepare("SELECT * FROM posts").all();
  res.view("templates/index.ejs", {
    posts,
  });
};

export const showPost = (req, res) => {
  const post = db.prepare("SELECT * FROM posts WHERE id =  ?").get(req.params.id);
  if (post === undefined) {
    throw new RecordNotFoundError(`Impossible de trouver l'article avec l'id ${req.params.id}`);
  }
  return post;
};
