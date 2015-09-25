HeapOverflow.Views.TagsIndex = Backbone.View.extend({
	template: JST['tags/index'],

	initialize: function(options) {
		this.listenTo(this.collection, 'sync', this.render)
	},

	render: function() {
		var content = this.template();
		this.$el.html(content);
		return this;
	}
})