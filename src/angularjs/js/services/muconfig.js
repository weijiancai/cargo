metauiServices.factory('MUConfig', ['$http', function($http) {
    var formConfigCache = {};
    var metaCache = metaList;

    return {
        get: function(name) {
            var config = muConfig[name];
            if(!config) {
               config =  muConfig[name] = {fields: []};
            }
            return config;
        },
        getFormConfig: function(name) {
            return formConfigCache[name];
        },
        /**
         * 根据名称查找元数据
         *
         * @param name
         * @returns {*}
         */
        getMeta: function(name) {
            /*if(metaCache.length == 0) {
                $http.get("test/meta.json").success(function(data) {
                    metaCache = data;
                    return _getMeta(name);
                });
            }*/

            return _getMeta(name);
        },
        getView: function(viewId) {
            return viewList
        }
    };

    function _getMeta(name) {
        for(var i = 0; i < metaCache.length; i++) {
            if(metaCache[i]['name'] == name) {
                return metaCache[i];
            }
        }

        return null;
    }
}]);