HeapOverflow.Views.QuestionsIndex = Backbone.View.extend({
	template: JST['questions/index'],

	initialize: function() {
		this.listenTo(this.collection, 'sync', this.render)
	},

	events: {
		'click li.newest': function(event) {
			this.renderByCreatedAt(event)
		},
		'click li.votes': function(event) {
			this.sortByVotes(event)
		},
		'click li.frequent': function(event) {
			this.sortByViews(event)
		},

		'click li.most-answered': function(event) {
			this.sortByAnswerCount(event)
		},

	},

	sortByViews: function(event) {
		event.preventDefault();
		this.$('ul.questions').empty();
		this.collection.order_by_views();
		this.sortingNow = true;
		this.collection.fetch({
			data: { sort: this.sortingNow },
			success: function(response) {
				this.renderSort();
			}.bind(this)
		})
	},

	sortByAnswerCount: function(event) {
		event.preventDefault();
		this.$('ul.questions').empty();
		this.collection.order_by_answers();
		this.sortingNow = true;
		this.collection.fetch({
			data: { sort: this.sortingNow },
			success: function(response) {
				this.renderSort();
			}.bind(this)
		})
	},

	sortByVotes: function(event) {
		event.preventDefault();
		this.$('ul.questions').empty()
		this.collection.order_by_vote();
		this.sortingNow = true;
		this.collection.fetch({
			data: { sort: this.sortingNow },
			success: function(response) {
				this.renderSort();
			}.bind(this)
		})
	},

	renderByCreatedAt: function(event) {
		event.preventDefault();
		this.$("ul.questions").empty()
		this.collection.order_by_date();
		this.sortingNow = null;
		this.collection.fetch({
			data: { sort: this.sortingNow},
			success: function(response) {
				this.renderSort();
			}.bind(this)
		})
	},

	  renderSort: function() {
    	for (var j = 0; j < this.collection.length; j++) {
        var questionIndexView = new HeapOverflow.Views.QuestionsIndexItem({model: this.collection.at(j)});
        this.$("ul.questions").append(questionIndexView.render().$el);
    }
  },

	render: function () {
		var content = this.template()
		this.$el.html(content);

		this.collection.each(function(question) {
			var view = new HeapOverflow.Views.QuestionsIndexItem({model: question})
			this.$('ul.questions').append(view.render().$el)
		});

	
		return this;
	}
})