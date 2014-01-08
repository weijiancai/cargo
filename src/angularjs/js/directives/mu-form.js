metauiDirectives.directive('muForm', function () {
    return {
        transclude: true,
        templateUrl: 'js/templates/formTpl.html',
        controller: function($scope, $element, $attrs, $transclude) {
            var defaults = {
                colCount: 3,
                labelGap: 5,
                fieldGap: 15,
                layoutType: 'T', // 0 TABLE布局， 1 流式布局
                fields: []
            };

            $scope.muFormOptions = $.extend(defaults, $scope.muFormOptions);
            $scope.trs = new TableLayout($scope.muFormOptions).getTrs();
            $scope.muForm = {};

            var fields = $scope.muFormOptions;
            for(var i = 0; i < fields.length; i++) {
                muForm[fields[i].name] = fields[i].defaultValue || '';
            }
        }
    };
});