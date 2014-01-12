metauiServices.factory('MUDict', function() {
    return {
        getDict: function(dictId) {
            return dictList[dictId];
        },
        getDisplayName: function(dictId, value) {
            var list = dictList[dictId];
            if(list) {
                for(var i = 0; i < list.length; i++) {
                    if(list[i].value == value) {
                        return list[i].name;
                    }
                }
            }
            return null;
        }
    }
});