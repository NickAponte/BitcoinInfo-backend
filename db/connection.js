const mongoose = require('mongoose');
//var mongoose = require('./mongoconnection');
mongoose.Promise = Promise;
const mongoURI = process.env.DB_URL;
mongoose
	.connect(mongoURI, { useNewUrlParser: true })
	.then((conn) => {
		console.log(`connected to mongodb on ${conn.connections[0].name} db`);
	})
	.catch((err) => {
		console.error(err);
	});
module.exports = mongoose;