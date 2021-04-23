const express = require('express');
const Answer = require('../models/Answers');
const Question = require('../models/Question');
const User = require('../models/Users');

const router = express.Router();

router.get('/', (req, res) => {
	Answer.find({})
	.populate('user').then((record) => {
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

router.post('/', (req, res, next) => {
	console.log(req.body)

	const answerData = req.body;
	// get the Question id from the body
	const questionId = answerData.question;
	const userId = answerData.user;
	
	console.log("1")

	User.findById(userId)
	.then(user => {
		answerData.user = user;
	})
	console.log("2")
	// find the question by its id
	Question.findById(questionId)
    .then(question => {
		console.log("3")
      // add answer to question
      question.answers.push(answerData);
	  console.log("4")
      // save question
	  returnRes = question.save();
	  console.log("5")
      return returnRes;
    })
	// send responsne back to client
    .then(question => res.status(201).json({question : question}))
    .catch(next)
	/*
	Answer.create(req.body).then((record) => {
		res.json(record);
	});
	*/
});


router.delete('/:id', (req, res) => {
	Answer.findByIdAndDelete({ _id: req.params.id }).then((delRecord) => {
		res.json(delRecord);
	});
});

module.exports = router;