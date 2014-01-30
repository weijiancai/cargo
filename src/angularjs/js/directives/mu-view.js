metauiDirectives.directive('muView', ['MUConfig', '$compile', function(MUConfig, $compile) {
    return {
        controller: function($scope, $element, $attrs, $transclude) {
            var viewId = $attrs['muView'];
            $scope.viewOption = MUConfig.getView(viewId);
//            alert($scope.viewOption['layoutId']);
            $scope.layoutOption = MUConfig.getLayout($scope.viewOption['layoutId']);

            for(var i = 0; i < $scope.viewOption['configs'].length; i++) {
                var config = $scope.viewOption['configs'][i];
                config.metaField = MUConfig.getMetaField(config['metaFieldId']);
                config.propId = ;
            }

        },
        /*template: '<div>{{layoutOption}}</div>',*/
        link: function ( scope, element, attrs ) {
            var layoutName = scope['layoutOption']['name'];
            var template = layoutMapping[layoutName];

            element.html('').append($compile(template)(scope));
        }
    }
}]);