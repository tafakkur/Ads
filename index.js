const express = require("express");
const path = require("path");
const fs = require("fs");

// app.js - simple Express app that serves files from the "serve" folder

const app = express();
const serveDir = path.join(__dirname, "serve");

// warn if serve folder doesn't exist
if (!fs.existsSync(serveDir)) {
	console.warn(`Warning: serve directory not found at ${serveDir}. Create the folder and add files to serve them.`);
}

// Serve static files from the "serve" directory
app.use(express.static(serveDir));

// Optional: simple 404 for anything that isn't a static file
app.use((req, res) => {
	console.log(`404 Not Found: ${req.originalUrl}`);
	res.status(404).send("Not Found");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`Express static server running on http://localhost:${PORT}/`);
	console.log(`Serving files from: ${serveDir}`);
});
