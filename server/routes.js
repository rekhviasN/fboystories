var list = require('./listController.js')

module.exports = function(app, express) {

	app.get('/api/createdAt/', list.allStories);
	app.post('/api/postto/', list.postTo);
	app.post('/api/addVote/', list.updateVotes);
	
};