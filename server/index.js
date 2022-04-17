const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.


const {
  getFortunes,
  deleteFortunes,
  createFortunes,
  updateFortunes
  
} = require('./controller.js')


  app.get('/api/fortune', (req,res) =>{

  const fortunes = ['A faithful friend is a strong defense.',
  'Success is going from failure to failure without loss of enthusiasm.',
  'Romance moves you in a new direction.',
  'Long life is in store for you.',
  'If you wish to see the best in others, show the best of yourself.'
  ]

  })

app.listen(4000, () => console.log("Server running on 4000"));

const fortuneBaseUrl = '/api/fortunes'
app.get(`/api/fortunes`, getFortunes)
app.delete(`/api/fortunes`, deleteFortunes)
app.post(`/api/fortunes`, postFortunes)
app.put(`/api/fortunes`, putFortunes)



