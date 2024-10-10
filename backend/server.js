const express = require("express");
const app = express();
const mongoose = require("mongoose");
const routesUrls = require("./routes/routes");
const cors = require("cors");

// Database connection
mongoose.connect("mongodb+srv://1032221036:123456()@cluster0.e6elg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})
.then(() => console.log("Database connected"))
.catch((error) => console.error("Database connection error:", error));

// Middleware
app.use(express.json());
app.use(cors());
app.use('/app', routesUrls);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack); // Log the error stack
    res.status(500).send('Something went wrong!'); // Generic error message
});

// Start server
const PORT = process.env.PORT || 3000; // Use environment variable for PORT
app.listen(PORT, () => console.log(`Server is up and running on port ${PORT}`));
