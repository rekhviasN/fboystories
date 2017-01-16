var list = require('/listController')

module.exports = function(app, express) {

	app.get('/api/createdAt', list.createdAt);
	app.post('/api/postTo', list.postTo);
	app.get('/api/createdAt', list.topPosts);
	
}