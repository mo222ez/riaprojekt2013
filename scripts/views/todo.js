define(["underscore", "handlebars", "text!templates/todoTemplate.html", "text!templates/editTodoTemplate.html", "backbone"], function (_, Handlebars, TodoTemplate, EditTodoTemplate, Backbone) {
	var TodoView = Backbone.View.extend({
		tagName: "li class='list-group-item'",
		template: Handlebars.compile(TodoTemplate),
		editTemplate: Handlebars.compile(EditTodoTemplate),
		editMode: false,

		initialize: function () {
			this.listenTo(this.model, "destroy", this.removeTodo);
			this.listenTo(this.model, "change", this.render);
		},

		events: {
			"keyup .todoNameEditField": "checkInput",
			"keypress .todoNameEditField": "checkIfEnter",
			"click .delete" : "deleteTodo",
			"click .edit": "toggleEdit",
			"click .cancelEdit": "toggleEdit",
			"click .saveEdit": "editTodo"
		},

		render: function () {
			this.$el.html(this.template(this.model));
			return this;
		},

		deleteTodo: function () {
			this.model.destroy();
		},

		removeTodo: function () {
			this.$el.remove();
		},

		toggleEdit: function () {
			this.editMode = !this.editMode;

			if (this.editMode) {
				this.$el.html(this.editTemplate(this.model));
				this.$el.find(".todoNameEditField").focus();
			}

			else {
				this.$el.html(this.template(this.model));
			}
		},

		editTodo: function (e) {
			var editName = this.$el.find(".todoNameEditField").val().trim();
			this.model.set("name", editName);
			this.model.save();
			this.toggleEdit();
		},

		checkInput: function (e) {
			var charCode = e.keyCode || e.which;
			var input = this.$el.find(".todoNameEditField").val().trim();

			if (charCode === 27) {
				this.toggleEdit();
			}

			if (input.length === 0) {
				this.$el.find(".saveEdit").addClass("disabled");
				
				if (charCode == 13) {
					return;
				}
			}

			else {
				this.$el.find(".saveEdit").removeClass("disabled");
				
			}
		},

		checkIfEnter: function (e) {
			var charCode = e.keyCoe || e.which;
			var input = this.$el.find(".todoNameEditField").val().trim();

			if (charCode == 13) {
				if (input.length === 0) {
					return;
				}

				else {
					this.editTodo();
				}
			}
		}

	});

	return TodoView;
});