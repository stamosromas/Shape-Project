var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Shape = /** @class */ (function () {
    function Shape() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this.sides = args;
    }
    Shape.prototype.helpfun = function () {
        if (this.sides.length == 1)
            return this.sides[0] * this.sides[0];
        else if (this.sides.length == 2)
            return this.sides[0] * this.sides[1];
        else
            return;
    };
    return Shape;
}());
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(rad) {
        return _super.call(this, rad) || this;
    }
    Circle.prototype.getArea = function () {
        return 3.14 * this.helpfun();
    };
    return Circle;
}(Shape));
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(side) {
        return _super.call(this, side) || this;
    }
    Square.prototype.getArea = function () {
        return this.helpfun();
    };
    return Square;
}(Shape));
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(side1, side2) {
        return _super.call(this, side1, side2) || this;
    }
    Rectangle.prototype.getArea = function () {
        return this.helpfun();
    };
    return Rectangle;
}(Shape));
var Triangle = /** @class */ (function (_super) {
    __extends(Triangle, _super);
    function Triangle(base, height) {
        return _super.call(this, base, height) || this;
    }
    Triangle.prototype.getArea = function () {
        return this.helpfun() / 2;
    };
    return Triangle;
}(Shape));
function Shape_reader(file) {
    var fs = require("fs");
    var readMe = fs.readFileSync(file, "utf8");
    var myarr = readMe.split("\n");
    var total_area = 0;
    var prob = new Array();
    for (var i = 0; i < myarr.length; i++) {
        var line_arr = myarr[i].split(" ");
        if (line_arr[0] == "Circle") {
            var rad = parseFloat(line_arr[1]);
            if (rad < 0)
                prob.push("In line " + i + " of text file found radius " + rad + " of the circle that isn't allowed.");
            else {
                var cir = new Circle(rad);
                total_area += cir.getArea();
            }
        }
        else if (line_arr[0] == "Square") {
            var sd = parseFloat(line_arr[1]);
            if (sd < 0) {
                prob.push("In line " + i + " of text file found side " + sd + " of the square that isn't allowed.");
            }
            else {
                var sq = new Square(sd);
                total_area += sq.getArea();
            }
        }
        else if (line_arr[0] == "Triangle") {
            var bas = parseFloat(line_arr[1]);
            var hgt = parseFloat(line_arr[2]);
            if (bas < 0 && hgt >= 0)
                prob.push("In line " + i + " of text file found base " + bas + " of the triangle that isn't allowed.");
            else if (bas >= 0 && hgt < 0)
                prob.push("In line " + i + " of text file found height " + hgt + " of the triangle that isn't allowed.");
            else if (bas < 0 && hgt < 0)
                prob.push("In line " + i + " of text file found base and height " + bas + "," + hgt + " respectively of the triangle that isn't allowed.");
            else {
                var tr = new Triangle(bas, hgt);
                total_area += tr.getArea();
            }
        }
        else if (line_arr[0] == "Rectangle") {
            var base1 = parseFloat(line_arr[1]);
            var base2 = parseFloat(line_arr[2]);
            if (base1 < 0 && base2 >= 0)
                prob.push("In line " + i + " of text file the first parameter of side " + base1 + " of the rectangle isn't allowed value.");
            else if (base1 >= 0 && base2 < 0)
                prob.push("In line " + i + " of text file the second parameter of side " + base1 + " of the rectangle isn't allowed value.");
            else if (base1 < 0 && base2 < 0)
                prob.push("In line " + i + " of text file the first and second parameters of side " + base1 + " " + base2 + "of the rectangle isn't allowed value.");
            else {
                var rec = new Rectangle(base1, base2);
                total_area += rec.getArea();
            }
        }
        else {
            prob.push('Passed as parameter "' + myarr[i] + '".This doesnt belong to the formal input txt parameters.');
        }
    }
    console.log(total_area);
    console.log(prob);
}
Shape_reader("Shapes.txt");
