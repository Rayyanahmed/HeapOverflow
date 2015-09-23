HeapOverflow.Views.AnswerForm = Backbone.View.extend({
	template: JST['answers/form'],

	events: {
		"submit form": "submit"
	},

	render: function() {
		var content = this.template({question: this.model});
		this.$el.html(content);
		return this;
	},

	submit: function (event) {
		var view = this;
		event.preventDefault();
		
		var params = $(event.currentTarget).serializeJSON();
		var answer = new HeapOverflow.Models.Answer(params["answer"]);
		answer.save({}, {
			success: function() {
				view.model.answers().add(answer);
			}
		})
	}
})