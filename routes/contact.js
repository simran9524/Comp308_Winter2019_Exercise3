let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// create a reference to the contact model
let contact = require('../models/favouriteThings');

/* GET contact list page - READ */
router.get('/', (req, res, next) => {
    contact.find((err, contactList) => {
        
        if(err) {
            return console.error(err);
        }
        else {
            console.log(contactList);
            
            res.render('contacts/index', {
                title: 'Favourite Things List',
                contactList: contactList
            });
            
        }
    })
});


module.exports = router;