metauiDirectives.directive('muDict', ['MUDict', function(MUDict) {
    return {
        restrict: 'A'

    }
}]);

metauiDirectives.directive('muCurrentTime', function($timeout, $filter) {
    return function($scope, $element, $attrs) {
        var format = 'yyyy-MM-dd HH:mm:ss', timeoutId;

        function updateTime() {
            $element.text($filter('date')(new Date(), format));
        }

        $scope.$watch($attrs.muCurrentTime, function(value) {
            format = value;
            updateTime();
        });

        function updateLater() {
            timeoutId = $timeout(function() {
                updateTime();
                updateLater();
            }, 1000);
        }

        $element.bind('$destroy', function() {
           $timeout.cancel(timeoutId);
        });

        updateLater();
    }
});