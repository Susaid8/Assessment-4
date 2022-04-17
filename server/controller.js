let fortunes = require('./db.json')

module.exports = {
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
    let { fortune, sound, imageURL } = req.body
    let newFortune = {
        fortune, 
        sound,
        imageURL
}
fortunes.push(newFortune)
        res.status(200).send(fortunes)
}
}
