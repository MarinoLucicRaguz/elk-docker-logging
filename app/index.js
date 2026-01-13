const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log(
    JSON.stringify({
      level: "info",
      service: "demo-app",
      message: "Root endpoint accessed",
      timestamp: new Date().toISOString(),
    })
  );

  res.send("Hello from ELK logging demo");
});

app.get("/error", (req, res) => {
  console.log(
    JSON.stringify({
      level: "error",
      service: "demo-app",
      message: "Simulated error occurred",
      timestamp: new Date().toISOString(),
    })
  );

  res.status(500).send("Error occurred");
});

app.get("/auth", (req, res) => {
  console.log(
    JSON.stringify({
      level: "info",
      service: "auth-service",
      message: "Auth endpoint called",
      timestamp: new Date().toISOString(),
    })
  );

  res.send("Auth simulated request");
});

app.get("/payment", (req, res) => {
  console.log(
    JSON.stringify({
      level: "info",
      service: "payment-service",
      message: "Payment endpoint called",
      timestamp: new Date().toISOString(),
    })
  );

  res.send("Payment simulated request");
});

app.listen(3000, () => {
  console.log(
    JSON.stringify({
      level: "info",
      service: "demo-app",
      message: "Application started on port 3000",
      timestamp: new Date().toISOString(),
    })
  );
});
