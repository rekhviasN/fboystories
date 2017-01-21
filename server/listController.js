var Q = require('q');
var Story = require('./storyModel.js');

var getAllStories = Q.nbind(Story.find, Story);
var createStory = Q.nbind(Story.create, Story);
var updateVote = Q.nbind(Story.findByIdAndUpdate, Story)

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

	postTo: function(req, res){
		var newStory;

		if(req.body.story){
			newStory = {
				story: req.body.story,
				upVotes: 0,
				location: "nyc"
			};
		}
		 createStory(newStory);
			res.send("good job!");
		},

	updateVotes: function(req, res){
		if(req.body.id){
			console.log('REQ DOT BODY: ',req.body.id)
			updateVote(req.body.id, { }, function(err, doc){
				console.log('INSIDE: ', doc);
				doc.upVotes++;
				doc.save();
			});
			}
		
		res.send("nice!");
	}
		
};
