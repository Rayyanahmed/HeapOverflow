HeapOverflow.Views.AnswerShow = Backbone.View.extend({
	template: JST['answers/show'],

	events: {
		"click button.destroy": "destroy"
	},

	render: function() {
		var content = this.template({
			answer: this.model
		});
		this.$el.html(content);
		return this;
	},

	destroy: function () {
		this.model.destroy()
	}
})