HeapOverflow.Views.QuestionsIndexItem = Backbone.View.extend({
	template: JST['questions/index_item'],


	initialize: function() {
		this.listenTo(this.model, 'sync', this.render)
		this.listenTo(this.model.tags(), 'sync', this.render)
	},

	render: function() {
		var content = this.template({question: this.model});
		this.$el.html(content);

		this.model.tags().each(function(tag) {
			var view = new HeapOverflow.Views.TagsIndexItem({model: tag})
			this.$("ul.question-tags").append(view.render().$el)
		}.bind(this))
		
		return this;
	}
 
})