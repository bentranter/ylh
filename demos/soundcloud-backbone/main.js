'use strict';

// Make a model for all the crap Soundcloud gives us, and the profile info
var Songs = Backbone.Model.extend();
var Profile = Backbone.Model.extend();

// Make a collection to hold the data in
var SongsCollection = Backbone.Collection.extend({
	model: Songs,
	url: 'https://api.soundcloud.com/users/33748259/tracks.json?client_id=8ec20fb5cf443b6a8370954c522149c3' // Grab Keenan's songs, make no attempt to hide my client ID
});

// The user's profile info
var ProfileInfo = Backbone.Collection.extend({
	model: Profile,
	url: 'https://api.soundcloud.com/users/33748259?client_id=8ec20fb5cf443b6a8370954c522149c3'
});

var ProfileView = Backbone.View.extend({
	el: '#profile',
	template: _.template($('#profileTemplate').html()),
	initialize: function() {
		this.collection.fetch({ reset: true });
		this.listenTo(this.collection, 'reset', this.render);
	},
	render: function() {
		this.collection.each(function(model) {
			var profileTemplate = this.template(model.toJSON());
			this.$el.append(profileTemplate);
		}, this);
	}
});

var profileInfo = new ProfileInfo();
var profileView = new ProfileView({
	collection: profileInfo
});

var songIsPlaying = $('.song');

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
	},
	events: {
		'click .songs': 'clicked'
	},
	clicked: function(e) {
		e.preventDefault();
		songIsPlaying.removeClass('white bg-dark-gray');

		// Get audio source from element
		var id = $(e.currentTarget).data('id');
		var song = this.collection.get(id);
		var audioSource = song.get('stream_url');

		// Set audio source of shitty player up top on click
		var audio = document.getElementById('music');
		audio.src = audioSource + '?client_id=8ec20fb5cf443b6a8370954c522149c3';

		// Add some CSS to change the background of that div
		// You can do this with a closure but a global works I guess
		songIsPlaying = $(e.currentTarget);
		songIsPlaying.addClass('white bg-dark-gray');
	}
});

var songsCollection = new SongsCollection();
var songsView = new SongsView({
	collection: songsCollection
});

/**
 * Basically what we need to do is create a Backbone model
 * for the audio player, and `player.get()` the first track
 * onLoad, and then `player.set()` whichever track is
 * clicked after that. We'll also need to define a route for
 * each song, so you can send someone a specific song. So
 * you actually might need to set the route onLoad and onClick,
 * and then get the params from the URL to set the song
 * whenever theres a change.
 */