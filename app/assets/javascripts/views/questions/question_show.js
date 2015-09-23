HeapOverflow.Views.QuestionShow = Backbone.View.extend({

	template: JST['questions/show'],

	initialize: function() {
		this.listenTo(this.model, 'sync', this.render);
		this.listenTo(this.model.answers(), "sync add remove", this.render);
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

		var answerForm = new HeapOverflow.Views.AnswerForm({model: this.model})
		this.$("div.answer-form").html(answerForm.render().$el)
		return this;
	}
})