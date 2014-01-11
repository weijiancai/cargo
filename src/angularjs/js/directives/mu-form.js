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

            $scope.muForm = {};

            var fields = $scope.muFormOptions.fields;
            for(var i = 0; i < fields.length; i++) {
                $scope.muForm[fields[i].name] = fields[i].defaultValue || '';
                $scope.muForm.width = fields[i].width || 180;
                $scope.muForm.labalGap = fields[i].labelGap || 5;
                $scope.muForm.fieldGap = fields[i].fieldGap || 15;
            }

            $scope.trs = new TableLayout($scope.muFormOptions).getTrs();

            this.layout = function() {
                $scope.trs = new TableLayout($scope.muFormOptions).getTrs();
            }
        }
    };
});