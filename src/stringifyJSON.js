// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
    // your code goes here
    if (obj === null) {
        return 'null';
    }
    if (typeof obj === 'function' && typeof obj === undefined)
    {
        return undefined; // '{}';
    }
    if (typeof obj === 'number' || typeof obj === 'boolean') {
        return '' + obj;
    }
    if (typeof obj === 'string') {
        return '"' + obj + '"';
    }
    if (Array.isArray(obj)) {

        var res;
        var res = '[';
        var removeComma = false;
        for (var i = 0; i < obj.length; i++) {
            res += stringifyJSON(obj[i]);
            res += ",";
            removeComma = true;
        }
        if (removeComma)
            res = res.slice(0, res.length - 1);
        res += ']';
        return res;
    }
    if (typeof obj === 'object') {

        var res;
        var res = '{';
        var removeComma = false;

        for (var key in obj ) {
            if(obj[key] !== undefined && typeof obj[key] !== 'function') {
                res += '"' + key + '"' + ":";
                res += stringifyJSON(obj[key]);
                res += ",";
                removeComma = true;
            }
        }

        if (removeComma)
            res = res.slice(0, res.length - 1);
        res += '}';
        return res;  
    }

};
