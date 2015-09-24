HeapOverflow.Models.Answer = Backbone.Model.extend({
	urlRoot: '/api/answers',

		comments: function() {
		if (this._comments) {
			return this._comments;
		}
		this._comments = new HeapOverflow.Collections.Comments([], {answer: this});
		return this._comments;
		},

		votes: function() {
			if (this._votes) {
				return this._votes;
			}
			this._votes = new HeapOverflow.Collections.Votes([], {answer: this});
			return this._votes;
		},

		parse: function(response) {
			if (response.comments) {
				this.comments().set(response.comments, {parse: true});
				delete response.comments;
			}
			if (response.votes) {
				this.votes().set(response.votes, {parse: true})
				delete response.votes;
			}
			return response
		}
})