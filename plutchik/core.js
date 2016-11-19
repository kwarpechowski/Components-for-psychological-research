var createPath = function(i, p1, p2) {
    if ( i < 3 || i > 6) {
        var p = "M"+ p1.x + " " + p1.y+ " L "+p2.x+" "+ p2.y;
    } else {
        var p = "M"+ p2.x + " " + p2.y+ " L "+p1.x+" "+ p1.y;
    }
    return p;
};


var getPosition = function(index, maxElements, move){
    if(!move) {
        move = 0;
    }
    var cw = maxElements / 4;
    return ((90 / cw) * (index - cw - 0.45) - move) * Math.PI / 180;
};
var createCoords = function(R, maxElements, move) {
    var tab = [];
    for(var i = 1; i<=maxElements; i++) {
        var position = getPosition(i, maxElements, move);
        tab.push({
            x:  centerPoint.x + Math.cos(position) * R,
            y:  centerPoint.y + Math.sin(position) * R
        });
    }
    return tab;
};

var createElement = function(opt) {
    var id = opt.line.id + opt.i;
    var a = document.createElementNS("http://www.w3.org/2000/svg", "a");
    a.setAttribute("href", "javascript:;");
    var el = document.createElementNS("http://www.w3.org/2000/svg", "path");
    el.setAttribute("d", opt.path);
    el.setAttribute("class", id);
    a.appendChild(el);

    var txt = document.createElementNS("http://www.w3.org/2000/svg", "text");
    var textPath = document.createElementNS("http://www.w3.org/2000/svg", "textPath");
    textPath.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href","#" +id);
    textPath.setAttribute("startOffset", "50%");
    var textNode = document.createTextNode(opt.line.labels[opt.i]);
    textPath.appendChild(textNode);
    txt.appendChild(textPath);
    a.appendChild(txt);

    var p = document.createElementNS("http://www.w3.org/2000/svg", "path");
    p.setAttribute("id", id);
    p.setAttribute("d", opt.textPath);

    defs.appendChild(p);
    svg.appendChild(a);
};