const express = require('express');
const User = require('../models/Users');

const router = express.Router();

router.get('/', (req, res) => {
	User.find({}).then((record) => {
		res.json(record);
	});
});

router.get('/:id', (req, res) => {
	User.findById({ _id: req.params.id })
		.populate( 'userName')
		.then((record) => {
			res.json(record);
		});
});


// router.put('/:id', (req, res, next) => {
// 	const id = req.params.id;
// 	const updatedQuestion = req.body;
// 	Question.findByIdAndUpdate(id, updatedQuestion, { new: true}).then((updateQuestion) => {
// 		res.json(updateQuestion);
// 	})
// })

router.post('/', (req, res) => {
	User.create(req.body).then((record) => {
		res.json(record);
	});
});


router.delete('/:id', (req, res) => {
	User.findByIdAndDelete({ _id: req.params.id }).then((delRecord) => {
		res.json(delRecord);
	});
});

module.exports = router;