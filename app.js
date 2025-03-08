// require("dotenv").config();
// const express = require("express");
// const cors = require("cors");
// // const handleContactForm = require("./controllers/contactController")
// const contactRoutes = require("./routes/router");
// const app = express();
// const PORT = process.env.PORT || 5000;

// app.use(express.json());
// app.use(cors());
// app.use("/api", contactRoutes);

// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const contactRoutes = require("./routes/router");

const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send("Backend is working");
});

// Middleware
app.use(express.json()); // Allows Express to parse JSON requests
app.use(cors()); // Enables cross-origin requests

// Routes
app.use("/api", contactRoutes);

// Start server
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));


// const express = require("express");
// const app = express();

// // Define a route for "/"
// app.get("/", (req, res) => {
//     res.send("Backend is working!");
// });

// Start the server
// app.listen(5000, () => {
//     console.log("Server is running on port 5000");
// });