HeapOverflow.Views.QuestionForm = Backbone.View.extend({
	template: JST['questions/form'],

	events: {
		"submit form": "submit"
	},

	render: function() {
		var content = this.template();
		this.$el.html(content);
		return this;
	},

	submit: function (event) {
		event.preventDefault();
		var newQuestion = new HeapOverflow.Models.Question();
		newQuestion.set("title", $("#question_title").val())
		newQuestion.set("content", $("#question_content").val())
		newQuestion.save({}, {
			success: function () {
				this.collection.add(newQuestion)
				Backbone.history.navigate("", {trigger: true})
			}
		})
	}
})