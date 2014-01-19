define(["underscore", "handlebars", "backbone", "views/newTodo", "views/list", "views/navBar"], function (_, Handlebars, Backbone, NewTodoView, ListView, NavBarView) {
	var MainView = Backbone.View.extend({
		el: "#wrapper",

		initialize: function () {
			console.log("Up and running!");
			this.navBarView = new NavBarView();
			this.render();
		},

		render: function () {
			console.log("Render function mainView");
			var greeting = "Hello World!";

			//var navBarView = new NavBarView();
			var navBarViewHTML = this.navBarView.render();

			var listView = new ListView({collection: this.collection});
			listView = listView.render();

			var newTodoView = new NewTodoView({collection: this.collection});
			newTodoView = newTodoView.render();

			this.$el.append(navBarViewHTML.el);
			this.$el.append(listView.el);
			this.$el.append(newTodoView.el);
			return this;
		}
	});

	return MainView;
});