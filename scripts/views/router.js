define(["backbone", "Views/main", "collections/todocollection"], function (Backbone, MainView, ToDoCollection) {
	var Router = Backbone.Router.extend({
		routes: {
			"": "home",
			"done": "done"
		},

		initialize: function () {
			console.log("Router initialize");
			this.collection = new ToDoCollection();
			this.mainView = new MainView({collection: this.collection});
		},

		home: function () {
			console.log("Router home");
			//var mainView = new MainView({collection: this.collection});
		},

		done: function () {
			
		},

		changeView: function (view) {
			this.view && this.view.remove();
			this.view = view;
		}
	});

	return Router;
})