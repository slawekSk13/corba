const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");
const app = express();
const PORT = 3210;

// Middleware
app.use(cors());
app.use(express.json());

// Load data files
const loadData = (filename) => {
  try {
    const data = fs.readFileSync(
      path.join(__dirname, "data/", filename),
      "utf8",
    );
    return JSON.parse(data);
  } catch (error) {
    console.error(`Error loading ${filename}:`, error);
    return [];
  }
};

// Define routes
app.get("/countries", (req, res) => {
  const data = loadData("countries.json");
  res.json(data);
});

app.get("/worldRegions", (req, res) => {
  const data = loadData("world-regions.json");
  res.json(data);
});

app.get("/yachts", (req, res) => {
  const data = loadData("yachts-extended.json");
  res.json(data);
});

app.get("/sailingAreas", (req, res) => {
  const data = loadData("sailing-areas.json");
  res.json(data);
});

app.get("/bases", (req, res) => {
  const data = loadData("bases.json");
  res.json(data);
});

app.get("/equipment", (req, res) => {
  const data = loadData("equipment.json");
  res.json(data);
});

app.get("/companies", (req, res) => {
  const data = loadData("companies.json");
  res.json(data);
});

app.get("/shipyards", (req, res) => {
  const data = loadData("shipyards.json");
  res.json(data);
});

app.get("/yachtTypes", (req, res) => {
  const data = loadData("yacht-types.json");
  res.json(data);
});

// Start server
app.listen(PORT, () => {
  console.log(`Mock server running on http://localhost:${PORT}`);
  console.log("Available endpoints:");
  console.log("/countries - List of countries");
  console.log("/worldRegions - List of world regions");
  console.log("/yachts - List of yachts (50+ entries)");
  console.log("/sailingAreas - List of sailing areas");
  console.log("/bases - List of bases");
  console.log("/equipment - List of equipment");
  console.log("/companies - List of companies");
  console.log("/shipyards - List of shipyards");
  console.log("/yachtTypes - List of yacht types");
});
