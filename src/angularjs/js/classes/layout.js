var FormLayout = {
    templateUrl: 'js/templates/formTpl.html',
    controller: function($scope, $element, $attrs, $transclude, MUConfig) {
        var formName = $attrs['muForm'];
        $scope.muFormOptions = MUConfig.get(formName);
        $scope.muForm = {};

        var fields = $scope.muFormOptions.fields;
        for(var i = 0; i < fields.length; i++) {
            $scope.muForm[fields[i].name] = fields[i].defaultValue || '';
        }

        $scope.trs = new TableLayout($scope.muFormOptions).getTrs();

        $scope.updateForm = function() {
            $scope.muFormOptions.layoutType = 'T';
            $scope.trs = new TableLayout($scope.muFormOptions).getTrs();
//            alert($scope.trs.length);
            $scope.trs.push({"displayStyle":"10"});
        };
    }
};