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
		
		var params = $(event.currentTarget).serializeJSON()["question"]
		var newQuestion = new HeapOverflow.Models.Question(params)
		newQuestion.save({}, {
			success: function() {
				Backbone.history.navigate("", {trigger: true})
			}
		})
	}
})