const mongoose = require('../db/connection');

const userSchema = new mongoose.Schema(
	{
		userName: {
			type: String,
			 required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
		id: false,
		toJSON: {
			virtuals: true,
		
			transform: (_doc, ret) => {
				delete ret.password;
				return ret;
			},
		},
	}
);

module.exports = mongoose.model('User', userSchema);