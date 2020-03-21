exports.login = function (req, res) {
    const registeredUsers = []
    console.log(req.body);
    console.log('NAME : ' + req.body.fname)
    console.log('EMAIL :' + req.body.email)
    // res.redirect('/',{loging:true});
    fname = req.body.fname
    email = req.body.email
    registeredUsers.push({ name: fname, email: email })
    console.table(registeredUsers)

    res.render('index',{
        'title': 'Hello World',
        'message': 'How are You',
        loging:true
    });

};
