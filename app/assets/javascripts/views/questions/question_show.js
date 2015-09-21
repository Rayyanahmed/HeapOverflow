HeapOverflow.Views.QuestionShow = Backbone.View.extend({

	template: JST['questions/show'],

	initialize: function() {
		console.log("how many times will this view get rendered?")
		this.listenTo(this.model, 'sync', this.render);
		this.listenTo(this.model.answers(), "sync", this.render);
	},

	render: function() {
		var content = this.template({question: this.model});
		this.$el.html(content);

		this.model.answers().each(function (answer) {
			var answerView = new HeapOverflow.Views.AnswerShow({
				model: answer 
			});
			this.$("ul.question-show-answers").append(answerView.render().$el);

		})

		var answerForm = new HeapOverflow.Views.AnswerForm({collection: this.model.answers()})
		this.$("div.answer-form").html(answerForm.render().$el)
		return this;
	}
})