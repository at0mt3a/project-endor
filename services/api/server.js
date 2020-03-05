import express from "express";
import bodyParser from "body-parser";
import compression from "compression";
import cookieParser from "cookie-parser";
import { NotFoundError } from "./utils/errors";
import router from "./router";
import cors from "cors";

const app = express();
app.use(cors());
/*
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});

app.use((req, res, next) => {
  res.header("Content-Type", "application/vnd.api+json");
  next();
});
*/
app.set("trust proxy", true);

app.use(compression());

app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

router.setup(app);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error("Not Found");
  err.status = 404;
  return next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // if (req.app.get('env') === 'development') {
  res.locals.message = err.msg;
  res.locals.error = err;
  res.status(err.status);
  console.log(`SERVER.js ERROR HANDLER -- ${res.locals.error}`);
  return res.send(err);

  // return res.sendStatus(err.status || 500)
});

app.listen(process.env.port, () => {
  console.log(
    "[%s] Listening on http://localhost:%d",
    process.env.NODE_ENV,
    process.env.port
  );
});

module.exports = app;
