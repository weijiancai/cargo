metauiServices.factory('MUConfig', function() {
    return {
        get: function(name) {
            return muConfig[name];
        }
    }
});