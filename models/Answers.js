const mongoose = require('../db/connection');
const AnswerSchema = new mongoose.Schema({
	answer: String,

	question: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Question',
		required: true,
	},
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
		required: false,
	},
	
});
const Answer = mongoose.model('Answer', AnswerSchema);
module.exports = Answer;
