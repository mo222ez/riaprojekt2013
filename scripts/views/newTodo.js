define(["underscore", "handlebars", "text!templates/newTodo.html", "backbone", "models/todo"], function (_, Handlebars, NewTodo, Backbone, ToDo) {
	var NewTodoView = Backbone.View.extend({
		tagName: "div id='newTodo' class='panel-footer'",

		template: Handlebars.compile(NewTodo),

		events: {
			"submit form": "addTodo",
			"keyup #todoName": "checkInput",
			"keypress #todoName": "checkIfEnter"
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
			this.$el.find("#todoName").val("");
			//console.log(this.collection, todo);
			this.collection.create(todo);
		},

		checkInput: function (e) {
			var charCode = e.keyCode || e.which;
			var input = this.$el.find("#todoName").val().trim();

			if (input.length === 0) {
				this.$el.find("#addTodo").addClass("disabled");
				
				if (charCode == 13) {
					e.preventDefault();
					return;
				}
			}

			else {
				this.$el.find("#addTodo").removeClass("disabled");
				
			}
		},

		checkIfEnter: function (e) {
			var charCode = e.keyCoe || e.which;
			var input = this.$el.find("#todoName").val().trim();

			if (input.length === 0) {
				if (charCode == 13) {
					e.preventDefault();
					return;
				}
			}
		}
	});

	return NewTodoView;
});