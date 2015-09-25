HeapOverflow.Collections.Questions = Backbone.Collection.extend({
	url: "/api/questions",
	model: HeapOverflow.Models.Question,

	comparator: function(question) {
		return -Date.parse(question.get('created_at'))
	},

	order_by_date: function() {
		this.comparator = this._order_by_date
		this.sort();
	},

	_order_by_date: function(question) {
		return -Date.parse(question.get('created_at'))
	},

	order_by_vote: function() {
		this.comparator = this._order_by_vote;
		this.sort();
	},

	order_by_views: function() {
		this.comparator = this._order_by_views;
		this.sort();
	},

	order_by_answers: function() {
		this.comparator = this._order_by_answers;
		this.sort()
	},

	_order_by_answers: function(question1, question2) {
		if (question1.get('answer_count') < question2.get('answer_count')) {
			return 1;
		}
		if (question1.get('answer_count') === question2.get('answer_count')) {
			return 1;
		}
		if (question1.get('answer_count') >= question2.get('answer_count')) {
			return -1;
		}
	},
 
	_order_by_views: function(question1, question2) {
		if (question1.get('views') < question2.get('views')) {
			return 1;
		}
		if (question1.get('views') === question2.get('views')) {
			return 1;
		}
		if (question1.get('views') >= question2.get('views')) {
			return -1;
		}
	},

	_order_by_vote: function(question1, question2) {
		if (question1.get('vote_count') < question2.get('vote_count')) {
			return 1;
		}
		if (question1.get('vote_count') === question2.get('vote_count')) {
			return 1;
		}
		if (question1.get('vote_count') >= question2.get('vote_count')) {
			return -1;
		}
	},

	getOrFetch: function (id) {
		var questions = this;

		var question;
		if (!(question = this.get(id))) {
			question = new HeapOverflow.Models.Question({ id: id });
			question.fetch({
				success: function () { questions.add(question) }
			});
		}
		return question;
	}
});