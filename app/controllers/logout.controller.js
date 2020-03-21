exports.logout = function (req, res) {
    res.render('index', {
        'title': 'See you again later',
        loging: false
    });
    
};