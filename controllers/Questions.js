const mongoose = require('../db/connection');
const express = require('express');
const Question = require('../models/Question');

const router = express.Router();

router.get('/', (req, res, next) => {
	Question.find({})
	.populate('user answers').then((record) => {
		res.json(record);
	})
	.catch(next);
	
});

router.get('/:id', (req, res) => {
	Question.findById({ _id: req.params.id })
		.populate('user')
		.then((record) => {
			res.json(record);
		});
});


router.put('/:id', (req, res, next) => {
	const id = req.params.id;
	const updatedQuestion = req.body;
	Question.findByIdAndUpdate(id, updatedQuestion, { new: true}).then((updateQuestion) => {
		res.json(updateQuestion);
	})
})

router.post('/', (req, res) => {
	Question.create(req.body).then((record) => {
		res.json(record);
	});
});


router.delete('/:id', (req, res) => {
	Question.findByIdAndDelete({ _id: req.params.id }).then((delRecord) => {
		res.json(delRecord);
	});
});

module.exports = router;
