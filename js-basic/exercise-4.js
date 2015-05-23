//Exercise 4 Area of a Triangle

//Area of a triangle with only the length of the three sides known. 
//Formula is sqrt of p(p-a)(p-b)(p-c) 
//Where a,b and c are the sides of the triangle and p = a+b+c/2

function areaOfTriangle(a, b, c) {
  //Get p for the equation
  var p = (a + b + c)/2;
  var area = p*(p - a)*(p - b)*(p - c);
  //Square Root of p(p-a)(p-b)(p-c)
  return Math.sqrt(area);
}
