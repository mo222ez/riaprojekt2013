define(["underscore", "handlebars", "text!templates/listTemplate.html", "backbone"], function (_, Handlebars, ListTemplate, Backbone) {
	var ListView = Backbone.View.extend({
		//
		template: Handlebars.compile(ListTemplate),

		initialize: function () {
			//this.render();
			this.collection.fetch();
		},

		render: function () {
			console.log("Render function NewTodoView");
			console.log(this.collection.models)
			this.$el.html(this.template({todos: this.collection.models}));
			console.log(this.el);
			return this;
		}
	});

	return ListView;
});