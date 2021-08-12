class Square {
    private side:number;
    constructor(side:number) {
      this.side = side;
    }
    getArea():number{
      return this.side * this.side;
    }
  }
class Triangle {
      private base:number;
      private height:number;
      constructor(base:number,height:number) {
        this.base = base;
        this.height = height;
      }
      getArea():number{
        return (this.base * this.height) / 2;
        }
  }
class Circle {
    private radius:number;
    constructor(radius:number) {
      this.radius = radius;
    }
    getArea():number{
      return 3.14 * this.radius * this.radius;
    }
  }
class Rectangle {
    private side1:number;
    private side2:number;
    constructor(side1:number,side2:number) {
      this.side1 = side1;
      this.side2 = side2;
    }
    getArea():number{
      return this.side1 * this.side2;
    }
}

var fs = require("fs");
var readMe = fs.readFileSync("Shapes.txt", "utf8");
var myarr = readMe.split("\n");
var total_area = 0;
var prob=new Array();
for (var i = 0; i < myarr.length; i++) {
    var line_arr = myarr[i].split(" ");
    if (line_arr[0] == "Circle") {
        var rad=parseFloat(line_arr[1]);
        if(rad<0)
            prob.push("In line "+i+" of text file found radius "+rad+" of the circle that isn't allowed.");
        else{
            var cir = new Circle(rad);
            total_area += cir.getArea();
        }
    }
    else if (line_arr[0] == "Square") {
        var sd=parseFloat(line_arr[1]);
        if(sd<0){
            prob.push("In line "+i+" of text file found side "+sd+" of the square that isn't allowed.");
        }
        else{
            var sq = new Square(sd);
            total_area += sq.getArea();
        }
    }
    else if (line_arr[0] == "Triangle") {
        var bas=parseFloat(line_arr[1]);
        var hgt=parseFloat(line_arr[2]);
        if(bas<0 && hgt>=0)
            prob.push("In line "+i+" of text file found base "+bas+" of the triangle that isn't allowed.");
        else if(bas>=0 && hgt<0)
            prob.push("In line "+i+" of text file found height "+hgt+" of the triangle that isn't allowed.");
        else if(bas<0 && hgt<0)
            prob.push("In line "+i+" of text file found base and height "+bas+","+hgt+" respectively of the triangle that isn't allowed.");
        else{
            var tr = new Triangle(bas,hgt);
            total_area += tr.getArea();
        }
    }
    else if (line_arr[0] == "Rectangle") {
        var base1=parseFloat(line_arr[1]);
        var base2=parseFloat(line_arr[2]);
        if(base1<0&&base2>=0)
            prob.push("In line "+i+" of text file the first parameter of side "+base1+" of the rectangle isn't allowed value.");
        else if(base1>=0&&base2<0)
            prob.push("In line "+i+" of text file the second parameter of side "+base1+" of the rectangle isn't allowed value.");
        else if(base1<0&&base2<0)
            prob.push("In line "+i+" of text file the first and second parameters of side "+base1+" "+base2+"of the rectangle isn't allowed value.");
        else{
            var rec = new Rectangle(base1,base2);
            total_area += rec.getArea();
        }
    }
    else {
        prob.push('Passed as parameter "'+myarr[i]+'".This doesnt belong to the formal input txt parameters.');
    }
}
console.log(total_area);
console.log(prob);