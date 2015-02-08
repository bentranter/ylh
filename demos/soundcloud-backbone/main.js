'use strict';

// Make a model for all the crap Soundcloud gives us
var Songs = Backbone.Model.extend();

// Make a collection to hold the data in
var SongsCollection = Backbone.Collection.extend({
	model: Songs,
	url: 'https://api.soundcloud.com/users/33748259/tracks.json?client_id=8ec20fb5cf443b6a8370954c522149c3' // Grab Keenan's songs, make no attempt to hide my client ID
});

// Setup a view
var SongsView = Backbone.View.extend({
	el: '#songs',
	template: _.template($('#songsTemplate').html()),
	initialize: function() {
		this.collection.fetch({reset: true});
		this.listenTo(this.collection, 'add', this.renderItem);
		this.listenTo(this.collection, 'reset', this.render);
	},
	render: function() {
		this.collection.each(function(model) {
			var songsTemplate = this.template(model.toJSON());
			this.$el.append(songsTemplate);
		}, this);
	},
	renderItem: function(song) {
		var songsTemplate = this.template(song.toJSON());
		this.$el.append(songsTemplate);
	}
});

var songsCollection = new SongsCollection();
var songsView = new SongsView({
	collection: songsCollection
});