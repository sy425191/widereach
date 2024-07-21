import Router from "express";

const authRouter = Router();

authRouter.post("/login", (req, res) => {
  res.send("Login");
});

authRouter.post("/register", (req, res) => {
  res.send("Register");
});

authRouter.post("/reset", (req, res) => {
  res.send("Reset");
});



export default authRouter;
