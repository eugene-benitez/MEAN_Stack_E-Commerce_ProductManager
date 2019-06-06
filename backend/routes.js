const controllers = require('./controllers');
const path = require('path');
module.exports = app => {
    app
        .get('/api/objects', controllers.getAll)
        .get('/api/objects/:id', controllers.getOne)
        .post('/api/objects', controllers.addOne)
        .put('/api/objects/:id', controllers.updateOne)
        .delete('/api/objects/:id', controllers.deleteOne)
        .all("*", (req, res, next) => {
            res.sendFile(path.resolve("./public/dist/public/index.html"))
        })
};
