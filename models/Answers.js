const mongoose = require('../db/connection');
const AnswerSchema = new mongoose.Schema({
	name: String,
	answer: String,

	question: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Question',
		required: true,
	},
});
const Answer = mongoose.model('Answer', AnswerSchema);
module.exports = Answer;
