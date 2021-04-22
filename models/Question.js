const mongoose = require('../db/connection');
const QuestionSchema = new mongoose.Schema(
	{
	question: String,
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
		required: true,
	},
	answers: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Answers'
	  }]
	
},
{
		timestamps: true,
		id: false,
		toJSON: {
			virtuals: true,
		},
}







)
const Question = mongoose.model('Question', QuestionSchema);
module.exports = Question;
