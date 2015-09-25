HeapOverflow.Routers.Router = Backbone.Router.extend({
	routes: {
		'': 'questionsIndex',
		'questions/new': 'questionNew',
		'questions/unanswered': 'unanswered',
		'questions/:id': 'questionShow',
		'tags': 'tagsIndex',
		'tags/:id': 'tagShow'
	},

	initialize: function(options) {
		this.$rootEl = options.$rootEl
		this.questions = new HeapOverflow.Collections.Questions();
		this.tags = new HeapOverflow.Collections.Tags();
	},

	tagsIndex: function() {
		
	},

	tagShow: function(id) {
		var tag = this.tags.getOrFetch(id);
		var view = new HeapOverflow.Views.TagShow({
			model: tag
		});
		this._swapView(view)
	},

	questionsIndex: function () {
		this.questions.fetch()
		var indexView = new HeapOverflow.Views.QuestionsIndex({
			collection: this.questions,
		});
		this._swapView(indexView)
	},

	unanswered: function () {
		this.questions.fetch();
		var view = new HeapOverflow.Views.Unanswered({
			collection: this.questions 
		});
		this._swapView(view)
	},

	questionNew: function() {
		// this.questions.fetch()
		var view = new HeapOverflow.Views.QuestionForm({
			collection: this.questions
		})
		this._swapView(view)
	},

	questionShow: function(id) {
		var question = this.questions.getOrFetch(id);
		var view = new HeapOverflow.Views.QuestionShow({
			model: question 
		});
		this._swapView(view);
	},

	_swapView: function(view) {
		if (this.currentView) {
			this.currentView.remove();
		}
		this.$rootEl.html(view.render().$el);
		this.currentView = view;
	}
})