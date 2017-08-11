exports.isAsset = function(path) {
    var pieces = path.split("/");
    if (pieces.length === 0) return false;
    var last = pieces[pieces.length-1]
    if (pieces.indexOf('api') !== -1 || pieces.indexOf('?') !== -1) 
        return true;
    else if (last.indexOf('.') !== -1) 
        return true;
    else return false;
}