const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

// Change this version to test CI/CD updates
const VERSION = "v1.0.0";

app.get("/", (req, res) => {
  res.send(`
    <h1>CI/CD Demo App - Render Update</h1>
    <p>Version: ${VERSION}</p>
    <p>Time: ${new Date()}</p>
  `);
});
app.get('/healthz', (req, res) => {
  res.send('OK');
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});