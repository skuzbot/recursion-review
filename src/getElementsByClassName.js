// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
    // your code here
    var nodes = nodes || document.body;
    var res = [];

    function getElemRecurs(classname, nodes, res) {
        if (nodes != undefined && nodes.classList != undefined) {
            if (nodes.classList.contains(className)) {
                res.push(nodes);
            }
        }

        for (var i = 0; i < nodes.childNodes.length; i++) {
            res = getElemRecurs(className, nodes.childNodes[i], res);
        }
        return res;
    }

    return getElemRecurs(className, document.body, res);

};
