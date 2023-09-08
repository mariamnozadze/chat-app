const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");

const app = express();
//to parse JSON request bodies
app.use(express.json());
//to enable CORS
app.use(cors({ origin: true }));

// Define a POST route for authentication
app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  try {
    // Send a PUT request to an external API for user authentication
    const r = await axios.put(
      "https://api.chatengine.io/users/",
      { username: username, secret: username, first_name: username },
      { headers: { "private-key": "7d3b359d-da11-44cb-a6bb-4f835a97e614" } }
    );
    // Return the response from the external API
    return res.status(r.status).json(r.data);
  } catch (e) {
    // Handle errors 
    return res.status(e.response.status).json(e.response.data);
  }
});

app.listen(3001);
