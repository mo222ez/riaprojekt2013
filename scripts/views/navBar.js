define(["underscore", "handlebars", "backbone", "text!templates/navBarTemplate.html"], function (_, Handlebars, Backbone, NavBarTemplate) {
	var NavBarView = Backbone.View.extend({
		template: Handlebars.compile(NavBarTemplate),

		initialize: function () {
			this.setElement(this.template());
		},

		render: function () {
			console.log("Render function NavBarView");

			$(this.el).unbind();
			this.el = this.template();
			this.delegateEvents();

			this.$el.html(this.template());
			return this;
		}
	});

	return NavBarView;
});