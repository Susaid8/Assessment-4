const req = require('express/lib/request');
let fortunes = require('./db.json')
let globalId = 1

module.exports = {
    getCompliments: (req,res) => {
        const compliments = ['Gee, you are a smart cookie!',
        'Cool shirt!',
        'Your Javascript skills are stellar.',
        ];
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
        res.status(200).send(randomCompliment);
        },

    getRating: (req, res) => {
        const ratings = ['Sleepy', 'Alive', 'Leave me alone please, I havent had coffee yet', 'Ready to eat a horse'];
        let randomIndex = Math.floor(Math.random() * ratings.length);
        let randomRating = ratings[randomIndex];
        res.status(200).send(randomRating);
        },

    getFortunes: (req,res) => {
        const fortunes = ['A faithful friend is a strong defense.',
        'Success is going from failure to failure without loss of enthusiasm.',
        'Romance moves you in a new direction.',
        'Long life is in store for you.',
        'If you wish to see the best in others, show the best of yourself.']

        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];
        res.status(200).send(randomFortune);
         },

    deleteFortunes: (req, res) => {
        let index = fortunes.findIndex(elem => elem.id === +req.params.id)
        fortunes.splice(index, 1)
        res.status(200).send(fortunes)

        },

    createFortunes: (req, res) => {
        let { rating } = req.body
        let newFortune = {
        id: globalId,
        rating
        }

        fortunes.push(newFortune)
        res.status(200).send(fortunes)
        globalId++
        },

    updateFortunes: (req, res) => {
        let {id} = req.params
        let {type} = req.body
        let index = fortunes.findIndex(elem => +elem.id === +id)

        if (fortunes[index].rating === 100 && type === 'positive'){
        res.status(400).send('guess this fortune suits you')
        } else if (fortunes[index].rating === 0 && type === 'negative'){
        res.status(400).send('we will do better')
        } else if (type === 'positive') {
        fortunes[index].rating++
        res.status(200).send(fortunes)
        } else if (type === 'negative') {
        fortunes[index].rating--
        res.status(200).send(fortunes)
        } else {
        res.sendStatus(400)
        }
        }

        }
