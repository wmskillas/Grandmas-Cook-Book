const express = require("express");
const PORT = process.env.PORT || 3001;

const app = express();
app.listen(PORT, () => {
  console.log("Testing 123, is this on?");
});

app.get("/express_backend", (req, res) => {
  res.send({ express: "YOUR EXPRESS BACKEND IS CONNECTED TO REACT" });
});
