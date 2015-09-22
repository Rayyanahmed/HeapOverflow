HeapOverflow.Models.Answer = Backbone.Model.extend({
	urlRoot: '/api/answers',

		comments: function() {
		if (this._comments) {
			return this._comments;
		}
		this._comments = new HeapOverflow.Collections.Comments([], {answer: this});
		return this._comments;
		},

		parse: function(response) {
			if (response.comments) {
				this.comments().set(response.comments, {parse: true});
				delete response.comments;
			}
			return response
		}
})