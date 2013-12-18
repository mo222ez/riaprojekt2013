define(["backbone", "Views/main", "collections/todocollection"], function (Backbone, MainView, ToDoCollection) {
	var Router = Backbone.Router.extend({
		routes: {
			"": "home"
		},

		initialize: function () {
			console.log("Router initialize");
			this.collection = new ToDoCollection();
		},

		home: function () {
			console.log("Router home");
			var mainView = new MainView({collection: this.collection});
		}
	});

	return Router;
})