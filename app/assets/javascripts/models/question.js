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

	parse: function(response) {
		if (response.answers) {
			this.answers().set(response.answers, {parse: true});
			delete response.answers;
		}
		if (response.tags) {
			this.tags().set(response.tags, {parse: true});
			delete response.tags;
		}
		return response
	}
})