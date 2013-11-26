require.config({
	urlArgs: "bust=" +  (new Date()).getTime(),

	paths: {
		"jquery": "vendor/jquery/jquery",
		"underscore": "vendor/underscore-amd/underscore",
		"backbone": "vendor/backbone-amd/backbone",
		"text": "vendor/requirejs/text",
		"handlebars": "vendor/handlebars/handlebars-v1.1.2",
		"localStorage": "vendor/backbone.localStorage/backbone.localStorage",
		"backboneRelational": "vendor/backbone-relational/backbone-relational"
	},

	shim: {
		"handlebars": {
			exports: 'Handlebars'
		},
		"backboneRelational": ["backbone", "underscore"]
	}
});

require(["views/appview"], function (AppView) {
	new AppView;
});