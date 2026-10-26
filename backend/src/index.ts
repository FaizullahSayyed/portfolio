import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Portfolio Backend is running ✅");
});

app.listen(3002, () => {
  console.log("Server is running on port 3002");        
}); 