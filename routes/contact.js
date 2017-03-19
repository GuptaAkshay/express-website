/**
 * Created by Sinner on 19-Mar-17.
 */
var express = require('express');
var nodemailer = require('nodemailer');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('contact', { title: 'Contact' });
});

router.post('/send', function(req, res, next) {
    var transporter = nodemailer.createTransport({

        service :'Gmail',
        auth : {
            user: 'akshgupta547@gmail.com',
            pass: 'Black_jack06'
        }
    });

    var mailOpt = {
        from:'John Doe <johndoe@outlook.com>',
        to:'akshgupta547@gmail.com',
        subject:'Website Submission',
        text:'You Have a new submission with following details ... Name: '+req.body.name + ' Email: '+req.body.email + ' Message: '+ req.body.message,
        html: '<p>You have got new submission with following details ...</p>' +
                '<ul>' +
                    '<li>Name :'+req.body.name+'</li>' +
                    '<li>Email :'+req.body.email+'</li>' +
                    '<li>Message :'+req.body.message+'</li>' +
                '</ul>'
    };
    transporter.sendMail(mailOpt, function (error, info) {
        if(error){
            console.log(error);
            res.redirect('/');
        }else{
            console.log('Message Sent: '+info.response);
            res.redirect('/');
        }
    })
});
module.exports = router;
