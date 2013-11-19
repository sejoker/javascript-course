function deepCopy(obj) {
    var deepCopyRec = function (source, dest) {
        var propNames = Object.getOwnPropertyNames(source),
            i, value, child;
        for (i = 0; i < propNames.length; i += 1) {
            value = source[propNames[i]];
            if (typeof  value !== "object" || value === null) {
                dest[propNames[i]] = value;
            } else {
                child = deepCopyRec(value, {});
                dest[propNames[i]] = child;
            }
        }

        return dest;
    };

    if (typeof obj !== "object" || obj === null) {
        return obj;
    }
    
    return deepCopyRec(obj, {});
}