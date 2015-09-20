HeapOverflow.Routers.Router = Backbone.Router.extend({
	routes: {
		'': 'questionsIndex',
		'questions/new': 'questionNew',
		'questions/:id': 'questionShow'
	},

	initialize: function(options) {
		this.$rootEl = options.$rootEl
	},

	questionsIndex: function () {
		var questions = new HeapOverflow.Collections.Questions();
		questions.fetch()
		var indexView = new HeapOverflow.Views.QuestionsIndex({
			collection: questions 
		});
		this._swapView(indexView)
	},

	_swapView: function(view) {
		if (this.currentView) {
			this.currentView.remove();
		}
		this.$rootEl.html(view.render().$el);
		this.currentView = view;
	}
})