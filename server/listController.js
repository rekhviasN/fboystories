var Q = require('q');
var Story = require('./storyModel.js');

var getAllStories = Q.nbind(Story.find, Story);
var createStory = Q.nbind(Story.create, Story);

module.exports = {

	allStories: function(req,res,next){
		getAllStories({})
		  .then(function(stories){
		  	res.json(stories)
		  })
		  .fail(function(error){
		  	next(error);
		  });
	},

	postTo: function(req, res, next){
		if(req.body.story){
			var newStory = {
				story: req.body.story,
				upVotes: 0,
				date: new Date(),
				location: req.body.location
			}else{
				var newStory = { 
					story: "meoooww",
					upVotes: 0,
					date: new Date(),
					location: "wudduuup"
				}
			};
			createStory(newStory);
		}
		.fail(function(error){
			next(error);
		})
	}
}; 