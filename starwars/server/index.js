//INPORT
const express = require('express');
const axios = require('axios');
const app = express();
const cors = require('cors');

const PORT = 8000;

//MIDDLEWARE
app.use(express.json());
app.use(cors());


//ENDPOINTS
app.get('/planets', (req, res) => {
    console.log(req.query);
    //req.params have to be strings, parse into numbers
    //req.query have to be strings, parse into numbers
    //req.body

        axios
            .get("https://swapi.dev/api/planets")
            .then((res2) => {

                const planetList = res2.data.results
                console.log(planetList);
                return res.status(200).send(planetList);
            })
            .catch((err) => {
                console.log(err);
            });

    console.log('Getting all the planets!');
});

// app.post("/planets/:newPlanetName", (req, res) => {
//     console.log(req.params)
// })

app.post("/planets", (req, res) => {
    console.log(req.body);

    res.sendStatus(200);
});


//APP LISTEN-GETS SERVER LISTENING CONTINUALLY, KEEPS NODE RUNNING
app.listen(PORT, () => {
    console.log(`Server up and running on ${PORT}`)
});