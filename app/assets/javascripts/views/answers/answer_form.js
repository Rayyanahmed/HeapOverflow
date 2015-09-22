HeapOverflow.Views.AnswerForm = Backbone.View.extend({
	template: JST['answers/form'],

	events: {
		"click #answer-form": "submit"
	},

	initialize: function(options) {
		this.question = options.question
	},

	render: function() {
		var content = this.template({question: this.question});
		this.$el.html(content);
		return this;
	},

	submit: function (event) {
		event.preventDefault();
		var newAnswer = new HeapOverflow.Models.Answer();
		newAnswer.set("content", $("#answer_content").val())
		newAnswer.save({}, {
			success: function () {
				this.collection.add(newAnswer)
				Backbone.history.navigate("", {trigger: true})
			}
		})
	}
})