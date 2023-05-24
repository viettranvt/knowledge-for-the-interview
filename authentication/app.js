const express = require("express");
require("dotenv").config;
const app = express();
const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
const expressSession = require("express-session");

// eslint-disable-next-line no-undef
const port = process.env.PORT || 3000;
// not suggest => should use redis store
const store = expressSession.MemoryStore();

app.use(express.json());
//setup session
app.use(
  expressSession({
    saveUninitialized: false,
    secret: "abc",
    cookie: {
      maxAge: 1000 * 60, // 60s
    },
    store,
  })
);
//setup passport
app.use(passport.initialize());
app.use(passport.session());

//mock
const user = {
  username: "abc",
  password: "12344",
};

passport.use(
  new localStrategy((username, password, done) => {
    if (username === user.username && password === user.password) {
      return done(null, {
        username,
        password,
        active: true,
      });
    }

    return done(new Error("failed"), null);
  })
);

// serializeUser
passport.serializeUser((user, done) => {
  done(null, user.username);
});
// serializeUser
passport.deserializeUser((username, done) => {
  if (username === user.username) {
    return done(null, {
      username,
      active: true,
    });
  }

  return done(new Error("failed"), null);
});

// eslint-disable-next-line no-unused-vars
app.get("/status", (req, res, next) => {
  res.status(200).json({
    msg: "oke",
  });
});

// eslint-disable-next-line no-unused-vars
app.get("/profile", (req, res, next) => {
  if (req.isAuthenticated()) {
    res.status(200).json({
      msg: "oke",
    });
  }

  res.status(500).json({
    msg: "failed",
  });
});

app.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/profile",
    failureRedirect: "/login",
  }),
  // eslint-disable-next-line no-unused-vars
  (req, res, next) => {
    try {
      res.status(200).json({
        msg: "login successfully",
      });
    } catch (error) {
      res.status(500).json({
        msg: "failed",
      });
    }
  }
);

app.listen(port, () => {
  console.log(`is Oke at ${port}`);
});
