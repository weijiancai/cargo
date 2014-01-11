
// Declare app level module which depends on filters, and services
var metauiDirectives = angular.module('metaui.directives', []);
var metauiServices = angular.module('metaui.services', []);

// initialization of services into the main module
angular.module('metaui', ['metaui.directives', 'metaui.services', 'ngGrid']);