// import cluster from "cluster";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./api-document.json";
import app from "./app";
import connectMongo from "./dbConnect/connectMongo";
import ErrorHandleMiddleware from "./src/middlewares/ErrorHandleMiddleware";
import RouteNotFoundMiddleware from "./src/middlewares/RouteNotFoundMiddleware";
import routeConfiguration from "./src/routes";

const port = process.env.PORT || 3000;

// Define your development and production hosts
const development = `${DEV_URL}`;
const production = `${PROD_URL}`;

// Determine the environment
const environment = process.env.APP_ENV || "development";

// Update the host based on the environment
if (environment === "development") {
  swaggerDocument.host = development;
} else if (environment === "production") {
  swaggerDocument.host = production;
}

// Set up Swagger UI
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get("/api/v1", (req, res) => {
  console.log("I am here");
  res.json({
    message: "Welcome to the node production starter server",
    version: "1.0.0",
    author: "Uzzal Kumar Roy",
    contact: {
      phone: "+8801319630372 / +8801788134303",
      email: "uzzalroy.acm@gmail.com",
      website: "https://uzzaldev.com",
    },
  });
});

// database connection
const connectWithRetry = async () => {
  try {
    await connectMongo();
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    setTimeout(connectWithRetry, 5000);
  }
};
connectWithRetry();

// router configuration
routeConfiguration(app);
app.use(RouteNotFoundMiddleware);
app.use(ErrorHandleMiddleware);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
