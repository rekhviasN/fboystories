var list = require('/listController')

module.exports = function(app, express) {

	app.get('/', list.createdAt);
	app.post('/', list.postTo);
	app.get('/top', list.topPosts);
	
}