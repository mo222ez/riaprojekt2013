define(["backbone"], function (Backbone) {
	var ToDo = Backbone.Model.extend({
		defaults: {
			name: "",
			date: new Date(),
			done: false
		}
	});

	return ToDo;
})