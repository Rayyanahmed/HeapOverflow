HeapOverflow.Collections.Questions = Backbone.Collection.extend({
	url: "/api/questions",
	model: HeapOverflow.Models.Question,

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