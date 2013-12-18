define(["underscore", "handlebars", "text!templates/test.html", "backbone","localStorage", "backboneRelational"], function (_, Handlebars, TestTemplate, Backbone) {
	var AppView = Backbone.View.extend({
		el: "#content",
		template: Handlebars.compile(TestTemplate),

		initialize: function () {
			console.log("Up and running!");
			this.render();
		},

		render: function () {
			console.log("Render function");
			var greeting = "Hello World!";
			this.$el.html(this.template({greeting: greeting}));
			return this;
		}
	});

	return AppView;
});