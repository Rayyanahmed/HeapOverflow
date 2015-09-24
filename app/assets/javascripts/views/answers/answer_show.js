HeapOverflow.Views.AnswerShow = Backbone.View.extend({
	template: JST['answers/show'],

	events: {
		"click button.destroy-answer": "destroy"
	},

	initialize: function() {
		this.listenTo(this.model, 'sync', this.render)
		this.listenTo(this.model.comments(), 'sync', this.render)
		this.listenTo(this.model, 'sync add change:vote_count', this.render);
	},

	render: function() {
		var content = this.template({
			answer: this.model
		});
		this.$el.html(content);

		var voteForm = new HeapOverflow.Views.VoteForm({
			model: new HeapOverflow.Models.Vote({
				answer_id: this.model.id 
			}),
			collection: this.model.votes(),
			votableModel: this.model
		});

		this.$("div.voting").append(voteForm.render().$el);

		this.model.comments().each(function (comment) {
			var commentView = new HeapOverflow.Views.CommentShow({
				model: comment 
			});
			this.$("ul.answer-comments").append(commentView.render().$el)
		})

		var commentForm = new HeapOverflow.Views.CommentForm({model: this.model})
		this.$("div.comment-form").html(commentForm.render().$el)


		return this;
	},

	destroy: function () {
		this.model.destroy()
	}
})