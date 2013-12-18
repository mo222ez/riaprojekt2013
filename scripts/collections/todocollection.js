define(["backbone", "localStorage", "models/todo"], function (Backbone, LocalStorage, ToDo) {
	var ToDoCollection = Backbone.Collection.extend({
		model: ToDo,
		localStorage: new LocalStorage("ToDos")
	});

	return ToDoCollection;
});