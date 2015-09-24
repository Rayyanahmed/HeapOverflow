HeapOverflow.Views.TagsIndexItem = Backbone.View.extend({
	template: JST['tags/index_item'],

	tagName: 'li',

	initialize: function() {
		this.listenTo(this.model, 'sync', this.render)
	},

	render: function() {
		var content = this.template({tag: this.model});
		this.$el.html(content);
		return this;
	}
 
})