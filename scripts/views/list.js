define(["underscore", "handlebars", "text!templates/listTemplate.html", "backbone", "views/todo"], function (_, Handlebars, ListTemplate, Backbone, TodoView) {
	var ListView = Backbone.View.extend({
		tagName: "span id='todoList' class='list-group'",
		//el: "#todoList",
		//tagName: "ul",
		template: Handlebars.compile(ListTemplate),

		initialize: function () {
			//this.render();
			this.collection.fetch();
			this.listenTo(this.collection, "add", this.addOne);
		},

		render: function () {
			console.log("Render function ListView");
			//console.log(this.collection.models)
			

			//this.$el.html(this.template({todos: this.collection.models}));
			this.$el.html(this.template());
			this.collection.each(this.addOne, this);

			//console.log(this.el);
			return this;
		},

		addOne: function (todo) {
			var todoView = new TodoView({model: todo});

			this.$el.find("ul").append(todoView.render().el);
		}
	});

	return ListView;
});