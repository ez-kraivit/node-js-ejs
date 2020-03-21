module.exports = function (app) {
    var user = require('../controllers/user.controller');
    var out = require('../controllers/logout.controller');
    app.post('/login',user.login);
    app.post('/logout',out.logout);
}
