HeapOverflow.Views.TagShow = Backbone.View.extend({
	template: JST['tags/show'],

	initialize: function(options) {
		this.listenTo(this.model, 'sync', this.render)
		this.collection = this.model.questions()
		this.listenTo(this.collection, 'sync', this.render)
	},

	render: function () {
		var content = this.template({tag: this.model})
		this.$el.html(content);

		this.collection.each(function(question) {
			var view = new HeapOverflow.Views.QuestionsIndexItem({model: question})
			this.$('ul.questions').append(view.render().$el)
		});

	
		return this;
	}
})