const Object = require('./models');

module.exports = {

    getAll: (req, res) => {
        Object.find()
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },

    addOne: (req, res) => {
        const newProduct = req.body;
        Object.create(newProduct)
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },

    getOne: (req, res) => {
        const { id } = req.params;
        Object.findOne({ _id: id })
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },

    updateOne: (req, res) => {
        const { id } = req.params;
        const data = req.body;
        Object.update({ _id: id }, data,
            { runValidators: true })
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },

    deleteOne: (req, res) => {
        const { id } = req.params;
        Object.findByIdAndRemove({ _id: id })
            .then(data => req.json(data))
            .catch(err => res.json(err));
    },

    increaseVote: (req, res) => {
        const { authorID } = req.params;
        Object.update(
            { _id: authorID, "quotes._id": req.params.quoteID },
            { $inc: { "quotes.$.votes": 1 } })
            .then(data => req.json(data))
            .catch(err => res.json(err));
    },

    decreaseVote: (req, res) => {
        const { authorID, quoteID } = req.params;
        Object.update({ _id: authorID, "quotes._id": quoteID },
            { $inc: { "quotes.$.votes": -1 } })
            .then(data => req.json(data))
            .catch(err => res.json(err));
    },

    removeQuote: (req, res) => {
        const { authorID, quoteID } = req.params;
        Object.update({ _id: authorID },
            { $pull: { "quotes": { "_id": quoteID } } })
            .then(data => req.json(data))
            .catch(err => res.json(err));
    },

    createQuote: (req, res) => {
        const { authorID } = req.params;
        const newQuote = req.body;
        Object.updateOne({ _id: authorID },
            { $push: { "quotes": newQuote } })
            .then(data => req.json(data))
            .catch(err => res.json(err));
    },

}