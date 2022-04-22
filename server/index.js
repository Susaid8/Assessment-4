const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.



const {getCompliments, getFortunes, getRating, createFortunes, updateFortunes, deleteFortunes} = require('./controller.js')
app.get(`/api/compliments`, getCompliments)
app.get(`/api/rating`, getRating)
app.get(`/api/fortunes`, getFortunes)
app.post(`/api/fortunes`, createFortunes)
app.put(`/api/fortunes/:id`, updateFortunes)
app.delete(`/api/fortunes/:id`, deleteFortunes)


app.listen(4000, () => console.log("Server running on 4000"));


