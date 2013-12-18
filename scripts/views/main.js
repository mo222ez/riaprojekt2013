define(["underscore", "handlebars", "backbone", "views/newTodo", "views/list"], function (_, Handlebars, Backbone, NewTodoView, ListView) {
	var MainView = Backbone.View.extend({
		el: "#content",

		initialize: function () {
			console.log("Up and running!");
			this.render();
		},

		render: function () {
			console.log("Render function mainView");
			var greeting = "Hello World!";

			var newTodoView = new NewTodoView({collection: this.collection});
			newTodoView = newTodoView.render();

			var listView = new ListView({collection: this.collection});
			listView = listView.render();

			this.$el.append(newTodoView.el);
			this.$el.append(listView.el);
			return this;
		}
	});

	return MainView;
});