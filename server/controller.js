let fortunes = require('./db.json')

module.exports = {
    getFortunes: (req,res) => {
        res.status(200).send(fortunes)
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
