const express = require('express');
const router = express.Router();
const Form = require('../modal/form');

router.post('/form', async (req, res) => {
    console.log(req.body);
    try {
        const form = new Form(req.body); 
        await form.save();
        res.status(201).send("Form data saved successfully");
    } catch (error) {
        res.status(400).send(error);
    }
});

module.exports = router;