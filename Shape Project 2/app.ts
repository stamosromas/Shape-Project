class Shape {
    private sides;
    constructor(...args: number[]){
        this.sides=args;
    }
    helpfun(){
        if(this.sides.length==1)
            return this.sides[0]*this.sides[0];
        else if(this.sides.length==2)
            return this.sides[0]*this.sides[1];
        else return;
    }
}
class Circle extends Shape {
    constructor(rad:number){
        super(rad);
    }
    getArea(){
        return 3.14*this.helpfun();
    }
}
class Square extends Shape {
    constructor(side:number){
        super(side);
    }
    getArea(){
        return this.helpfun();
    }
}
class Rectangle extends Shape {
    constructor(side1:number,side2:number){
        super(side1,side2);
    }
    getArea(){
        return this.helpfun();
    }
}
class Triangle extends Shape {
    constructor(base:number,height:number){
        super(base,height);
    }
    getArea(){
        return this.helpfun()/2;
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