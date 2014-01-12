metauiDirectives.directive('muForm', ['MUConfig', function (MUConfig) {
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

//            alert($element.attr('mu-Form'));
//            $scope.muFormOptions = $.extend(defaults, MUConfig.get($element.attr('mu-Form')));
            var formConfig = MUConfig.get($element.attr('mu-Form'));
            if(!formConfig) { // 没有Config时，创建一个
                formConfig = {};
            }

            $scope[$element.attr('mu-Form') + 'FormOption'] = $.extend(defaults, formConfig);

            var muFormOptions = $scope[$element.attr('mu-Form') + 'FormOption'];

            $scope.muForm = {};

            var fields = muFormOptions.fields;
            for(var i = 0; i < fields.length; i++) {
                $scope.muForm[fields[i].name] = fields[i].defaultValue || '';
                $scope.muForm.width = fields[i].width || 180;
                $scope.muForm.labalGap = fields[i].labelGap || 5;
                $scope.muForm.fieldGap = fields[i].fieldGap || 15;
            }

            $scope.trs = new TableLayout(muFormOptions).getTrs();

            this.layout = function() {
                $scope.trs = new TableLayout($scope.muFormOptions).getTrs();
            }

            $scope.getFormConfig = function() {
                return muFormOptions;
            }
        }
    };
}]);