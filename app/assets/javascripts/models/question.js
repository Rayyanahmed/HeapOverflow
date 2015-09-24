HeapOverflow.Models.Question = Backbone.Model.extend({
	urlRoot: '/api/questions',

	tags: function() {
		if (this._tags) {
			return this._tags;
		}
		this._tags = new HeapOverflow.Collections.Tags([], {question: this});
		return this._tags;
	},

	answers: function() {
		if (this._answers) {
			return this._answers;
		}
		this._answers = new HeapOverflow.Collections.Answers([], {question: this});
		return this._answers
	},

	votes: function() {
		if (this._votes) {
			return this._votes;
		}
		this._votes = new HeapOverflow.Collections.Votes([], {question: this});
		return this._votes;
	},

	incrementView: function() {
		var views = this.get('views');
		this.set('views', views + 1);
		this.save();
	},

	parse: function(response) {
		if (response.answers) {
			this.answers().set(response.answers, {parse: true});
			delete response.answers;
		}
		if (response.tags) {
			this.tags().set(response.tags, {parse: true});
			delete response.tags;
		}
		if (response.votes) {
			this.votes().set(response.votes, {parse: true})
			delete response.votes;
		}
		return response
	}
})