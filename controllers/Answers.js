const express = require('express');
const Answer = require('../models/Answers');

const router = express.Router();

router.get('/', (req, res) => {
	Answer.find({}).then((record) => {
		res.json(record);
	});
});

router.get('/:id', (req, res) => {
	Answer.findById({ _id: req.params.id })
		.populate('name', 'question')
		.then((record) => {
			res.json(record);
		});
});


router.put('/:id', (req, res, next) => {
	const id = req.params.id;
	const updatedAnswer = req.body;
	Answer.findByIdAndUpdate(id, updatedAnswer, { new: true}).then((update) => {
		res.json(update);
	})
})

router.post('/', (req, res) => {
	Answer.create(req.body).then((record) => {
		res.json(record);
	});
});


router.delete('/:id', (req, res) => {
	Answer.findByIdAndDelete({ _id: req.params.id }).then((delRecord) => {
		res.json(delRecord);
	});
});

module.exports = router;