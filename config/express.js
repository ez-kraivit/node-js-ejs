var express = require('express');
const path = require('path');
var morgan = require('morgan');
var compression = require('compression');
var bodyParser = require('body-parser');
var sass = require('node-sass-middleware');
var validator = require('express-validator');


module.exports = function () {
    var app = express();
    if (process.env.NODE_ENV === 'development') {
        app.use(morgan('dev'));
    } else {
        app.use(compression);
    }
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());
    // ใส่ต่อจาก bodyParser ในการเรียกใช้งานหลังจากทำการส่งค่า
    app.use(validator());
 

    app.set('views', './app/views');
    app.set('view engine', 'ejs');
    app.set('view options', {delimiter: '?'});
    
    require('../app/routes/index.routes')(app);
    require('../app/routes/user.routes')(app);


    // src จะทำการค้นหาถ้าไม่มีเรียกใช้ folder sass
    app.use(sass({
        src: './sass',
        dest: '../sass',
        outputStyle: 'compressed',
        prefix: '/css',
        debug: true,
        indentedSyntax: true
    }));

    // ลำดับสำคัญ เอาไว้หลัง routing เพื่อความเร็ว
    var publicPath = path.join(__dirname, '../public');
    app.use(express.static(publicPath));

    return app;
};



