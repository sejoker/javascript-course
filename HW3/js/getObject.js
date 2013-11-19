function getObject(path, obj) {
    var getObjectRec = function (pathArray, o) {
        if (pathArray.length === 0) {
            return o;
        }
                    
        var propertyName = pathArray[0];
        if (o.hasOwnProperty(propertyName)) {
            pathArray.shift();
            return getObjectRec(pathArray, o[propertyName]);
        }

        return undefined;
    };
    
    if (typeof obj === "undefined" || obj === null) {
        return undefined;
    }
    
    if (typeof path === "undefined" || path === null) {
        return undefined;
    }

    return getObjectRec(path.split('.'), obj);
}