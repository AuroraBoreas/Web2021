export function add(...args) {
    return args.reduce((x, y)=> x + y, 0);
}

export function sub(x, y) {
    return (x - y);
}

export class Point
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

export { add, sub, Point }
