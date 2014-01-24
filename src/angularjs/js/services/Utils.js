/**
 * 对象Map，使用JS中的Object构造的Map对象
 *
 * @constructor
 */
function ObjMap() {
    var obj = {};
    var keys = [];

    /**
     * 将key，value放入对象Map中
     *
     * @param key
     * @param value
     */
    this.push = function(key, value) {
        keys.push(key);
        obj[key] = value;
    };

    /**
     * 根据key值，获得对象map中对应的value值
     *
     * @param key
     * @returns {*}
     */
    this.get = function(key) {
        return obj[key];
    };

    /**
     * 获得对象map中的所有key值
     *
     * @returns {Array}
     */
    this.keys = function() {
        return keys;
    };

    /**
     * 获得对象map中的所有value值
     *
     * @returns {Array}
     */
    this.values = function() {
        var list = [];
        for(var i = 0; i < keys.length; i++) {
            list.push(obj[keys[i]]);
        }

        return list;
    };
}


var Utils = {
    getValue : function(array, key, value) {
        for(var i = 0; i < array.length; i++) {
            if(array[i][key] == value) {
                return array[i];
            }
        }
        return null;
    },
    getTreeValue : function(tree, key, value) {
        for(var i = 0; i < tree.length; i++) {
            if(tree[i][key] == value) {
                return tree[i];
            } else if(tree[i]['children']) {
                this.getTreeValue(tree[i]['children'], key, value);
            }
        }

        return null;
    }

}