metauiDirectives.directive('muView', ['MUConfig', function(MUConfig) {
    return {
        controller: function($scope, $element, $attrs, $transclude) {
            var viewId = $attrs['muView'];
            $scope.viewOption = MUConfig.getView(viewId);
            alert($scope.viewOption['layoutId']);
            $scope.layoutOption = MUConfig.getLayout($scope.viewOption['layoutId']);

        },
        template: '<div>{{layoutOption}}</div>'
    }
}]);