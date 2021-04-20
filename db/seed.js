const questions = require('./questions.json');
const Question = require('../models/Question');


Question.deleteMany({})
	.then(() => {
		return Question.insertMany(questions);
	})
	.catch(console.error)
	.finally(() => {
		process.exit();
	});

// Prospect.deleteMany({})
// 	.then(() => {
// 		return Prospect.insertMany(prospects);
// 	})
// 	.catch(console.error)
// 	.finally(() => {
// 		process.exit();
// 	});