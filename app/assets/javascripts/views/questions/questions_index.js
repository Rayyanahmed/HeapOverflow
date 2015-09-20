HeapOverflow.Views.QuestionsIndex = Backbone.View.extend({
	template: JST['questions/index'],

	initialize: function() {
		this.listenTo(this.collection, 'sync', this.render)
	},

	render: function () {
		var content = this.template()
		this.$el.html(content);

		this.collection.each(function(question) {
			var view = new HeapOverflow.Views.QuestionsIndexItem({model: question})
			this.$('ul.questions-index').append(view.render().$el)
		}.bind(this));
		return this;
	}
})