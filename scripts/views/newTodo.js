define(["underscore", "handlebars", "text!templates/newTodo.html", "backbone", "models/todo"], function (_, Handlebars, NewTodo, Backbone, ToDo) {
	var NewTodoView = Backbone.View.extend({
		//
		template: Handlebars.compile(NewTodo),

		events: {
			"submit form": "addTodo"
		},

		initialize: function () {
			//this.render();
		},

		render: function () {
			console.log("Render function NewTodoView");
			this.$el.html(this.template());
			return this;
		},

		addTodo: function (e) {
			e.preventDefault();
			console.log("NewTodoView addTodo");

			var todo = new ToDo({name: this.$el.find("#todoName").val().trim()});
			console.log(this.collection, todo);
			this.collection.create(todo);
		}
	});

	return NewTodoView;
});