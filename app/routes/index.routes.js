module.exports = function(app){
    var index = require('../controllers/index.controller');
    app.get('/',index.render);
};

// get , post , put , delete , all , route
