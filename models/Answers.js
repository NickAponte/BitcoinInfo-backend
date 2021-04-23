const mongoose = require('../db/connection');
const AnswerSchema = new mongoose.Schema({
	answer: String,
	userName: String,
	question: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Question',
		required: true,
	},
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
		required: true,

	}
},
{
	timestamps: true,
	id: false,
	toJSON: {
		virtuals: true,
	},
}


);
const Answer = mongoose.model('Answer', AnswerSchema);
module.exports = Answer;
