HeapOverflow.Views.CommentForm = Backbone.View.extend({
	template: JST['comments/form'],

	events: {
		"submit form": "submit"
	},

	render: function() {
		var content = this.template({answer: this.model});
		this.$el.html(content);
		return this;
	},

	submit: function() {
		var view = this;
		event.preventDefault();

		var params = $(event.currentTarget).serializeJSON();
		var comment = new HeapOverflow.Models.Comment(params["comment"])
		comment.save({}, {
			success: function() {
				view.model.comments().add(comment)
			}
		})
	}
})