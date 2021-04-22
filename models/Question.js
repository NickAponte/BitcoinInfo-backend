const mongoose = require('../db/connection');
const QuestionSchema = new mongoose.Schema({
	question: String,
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
		required: true,
	},
	
});
const Question = mongoose.model('Question', QuestionSchema);
module.exports = Question;
