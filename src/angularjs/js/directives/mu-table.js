metauiDirectives.directive('muTable', function() {
    return {
        transclude: true,
        /*scope: {muTableOptions: '@'},*/
        template: '{{mydata}}<div class="gridStyle" ng-grid="gridOptions" style="height: 500px;"></div>',
        controller: function($scope, $element, $attrs, $transclude) {
            var options = $scope.muTableOptions;
            $scope.mydata = [];
            $scope.colDefs = [];

            for(var i = 0; i < options.fields.length; i++) {
                var obj = {};
                obj.field = options.fields[i].name;
                obj.displayName = options.fields[i].displayName;
                $scope.colDefs.push(obj);
            }
            $scope.gridOptions = {
                data: 'mydata',
                columnDefs: 'colDefs'
            };

            $scope.addRow = function() {
//                $scope.colDefs.push({field:'test', displayName: '测试'});
//                $scope.mydata.push({colCount: '3', labelGap: '5'});
                var aobj = {};
                for(var i = 0; i < options.fields.length; i++) {
                    if(options.fields[i].name != 'layoutType')
                    aobj[options.fields[i].name] = '5';
                }
                /*obj.colCount = '5';
                obj.labelGap = '5';*/
                $scope.mydata.push(aobj);
            }
        }
    }
});