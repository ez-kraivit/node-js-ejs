exports.render = function(req,res){
    // res.send('Hello world');
    res.render('index',{
        'title': 'Hello World',
        'message': 'How are You',
        loging:false
    });
};
