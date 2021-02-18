function add(...args) {
    return args.reduce((x, y)=> x + y, 0);
}

function sub(x, y) {
    return (x - y);
}

class Point
{
    constructor(x, y)
    {
        this._x = x;
        this._y = y;
    }

    ToString()
    {
        return `[${this._x}, ${this._y}]`;
    }
}

exports.add = add;
exports.sub = sub;
exports.Point = Point;
