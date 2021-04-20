const mongoose = require('../db/connection');
const QuestionSchema = new mongoose.Schema({
	name: String,
	question: String,

	// owner: {
	// 	type: mongoose.Schema.Types.ObjectId,
	// 	ref: 'User',
	// 	required: false,
	// },
});
const Question = mongoose.model('Question', QuestionSchema);
module.exports = Question;
