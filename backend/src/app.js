import express from "express";
import { nanoid } from "nanoid";
const app = express();
app.use(express.json());

const URLS = {};

const server = app.listen(8080, "127.0.0.1", () => {
  console.log("API Running...");
});

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
  const { url } = req.body;
  const redirectId = nanoid();
  URLS[redirectId] = url;
  const { address, port } = server.address();
  res.send({
    success: true,
    redirectUrl: `http://${address}:${port}/${redirectId}`,
  });
});

app.get("/:redirectId", (req, res) => {
  const { redirectId } = req.params;

  const redirectURL = URLS[redirectId];

  res.redirect(redirectURL);
});
