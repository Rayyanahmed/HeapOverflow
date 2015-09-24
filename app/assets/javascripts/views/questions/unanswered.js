HeapOverflow.Views.Unanswered = Backbone.View.extend({
	template: JST['questions/index'],

	initialize: function() {
		this.listenTo(this.collection, 'sync', this.render)
	},

	render: function() {
		var content = this.template();
		this.collection.each(function(question) {
			
				var view = new HeapOverflow.Views.QuestionsIndexItem({model: question});
				this.$('ul.questions').append(view.render().$el)
			
		});


		return this;
	}
})