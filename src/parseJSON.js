// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
    var ch = ' ';
    var at = 0;
    var res;

    var next = function(c) {
        if (c && c !== ch) {
            console.log('error expected:' + c + 'but got:' + ch);
        }

        at += 1;
        ch = json.charAt(at);
        
        return ch;

    }

    var white = function() {
        while (ch && ch <= ' ') {
            next();
        }
    }

    var array = function() {
        var arr = [];

        if (ch === '[') {
            next('[');
            white();
            if (ch === ']') {
                next(']');
                white();
                return arr;
            }
            while (ch) {
                arr.push(value());
                white();
                if (ch === ']') {
                    next(']');
                    return arr;
                }
                next(',');
                white();
            }
        }
        return arr;
    }

    var number = function() {

        var value;
        var string = '';

        if (ch === '-') {
            string+= '-';
            next('-');
            
        }

        while (ch >= '0' && ch <= '9') {
            string += ch;
            next();
        }
        if (ch === '.') {
            string+= '.';
            while(next() && ch >= '0' && ch <= '9') {
                string += ch;
            }
      
        }
        value = +string;
        return value;
    }

    var string = function() {
        if (ch === '/"') {
            while(next()) {
                
            }
        } else {
            value += ch;
        }
    }

    var word = function() {
        switch(ch) {
            case 't':
                next('t');
                next('r');
                next('u');
                next('e');
                return true;
            case 'f':
                next('f');
                next('a');
                next('l');
                next('s');
                next('e');
                return false;
            case 'n':
                next('n');
                next('u');
                next('l');
                next('l');
                return null;
            default:
                console.log('error in word()')
                return undefined;
        }

    }

    var value = function() {
        white();
        switch (ch) {
        case '[':
            return array();
        case '-':
            return number();
        
        default:
            return (ch >= '0' && ch <= '9') 
            ? number()
            : word();
        }
    };
    
    ch = json[at];
    res = value();
    return res;
};
