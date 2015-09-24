HeapOverflow.Views.VoteShow = Backbone.View.extend({
	template: JST['votes/show'],

	render: function() {
		var content = this.template({ vote: this.model })
		this.$el.html(content);
		return this;
	}
})