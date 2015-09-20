window.HeapOverflow = {
	Models: {},
	Collections: {},
	Views: {},
	Routers: {},
	initialize: function() {
		var $rootEl = $("#main")
		new HeapOverflow.Routers.Router({
			$rootEl: $rootEl
		});
		Backbone.history.start();
	}
}

