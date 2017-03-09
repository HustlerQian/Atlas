define(['knockout', 'jquery', 'text!./plp-manager.html', 'appConfig', 'd3'], function (ko, $, view, appConfig, d3) {
	function plpManager(params) {
		var self = this;
		self.appConfig = appConfig;
		self.sample = ko.observable('hello world');

		self.init = function () {
			console.log('hello world');
		}
				
		self.model = {
			name: 'model 1'
		};
	}

	var component = {
		viewModel: plpManager,
		template: view
	};

	ko.components.register('plp-manager', component);
	return component;
});