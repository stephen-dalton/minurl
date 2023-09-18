import express from "express";
import { nanoid } from "nanoid";
const app = express();
app.use(express.json());

const URLS = {};

/**
 * Add Express Configuration for CORS Support.
 */
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.get("/", (req, res) => {
  res.send({ hi: "hello" });
});

app.post("/shorten", (req, res) => {
  console.log(req.body);

  const { url } = req.body;
  const redirectID = nanoid();

  URLS[redirectID] = url;

  console.log(JSON.stringify(URLS, null, 2));
  res.send({ success: true, redirectID });
});

app.get("/:redirectId", (req, res) => {
  const { redirectId } = req.params;

  const redirectURL = URLS[redirectId];

  res.redirect(redirectURL);
});

app.listen(8080, () => {
  console.log("API Running...");
});
