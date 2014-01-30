metauiServices.factory('MUConfig', ['$http', function($http) {
    var formConfigCache = {};
    var metaCache = metaList;
    var viewCache = viewList;
    var propMap = new ObjMap();


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
        getMetaField: function(id) {
            for(var i = 0; i < metaCache.length; i++) {
                var fields = metaCache[i]['fields'];
                for(var j = 0; j < fields.length; j++) {
                    if(fields[j]['id'] == id) {
                        return fields[j];
                    }
                }
            }

            return null;
        },
        getView: function(viewId) {
            return Utils.getValue(viewCache, 'id', viewId);
        },
        getLayout: function(layoutId) {
            return Utils.getTreeValue(layoutList, 'id', layoutId);
        },
        getLayoutPropery: function(propId) {
            for(var i = 0; i < metaCache.length; i++) {
                var fields = metaCache[i]['fields'];
                for(var j = 0; j < fields.length; j++) {
                    if(fields[j]['id'] == id) {
                        return fields[j];
                    }
                }
            }
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