console.log('holo, checking console:-|');

function sum(firstNumber, secondNumber) {
  var twoNumbers = firstNumber + secondNumber;
  console.log('The sum of ' + firstNumber + ' and ' + secondNumber + ' is ' + twoNumbers);
}

function multiply(a, b) {
  var productNumbers = a * b;
  console.log('The product of ' + a + ' and ' + b + ' is ' + productNumbers);
}

function sumAndMultiply(c , d, e){
  var sumThreeNumbers = c + d + e;
    // console.log('The sum of ' + firstNumber + ' and ' + secondNumber + ' is ' + twoNumbers); {
  var productThreeNumbers = c * d * e;
    // console.log('The product of ' + a + ' and ' + b + ' is ' + productNumbers);

  console.log(c + ' and ' + d + ' and ' + e + ' sum to' + sumThreeNumbers);
  console.log('The numbers ' + c + ' and ' + d + ' and ' + e + ' have a product of ' + productThreeNumbers);
  return[sumThreeNumbers, productThreeNumbers];
}

function sumArray(array) {
  var array1 = array;
  var sum = 0;
  for (i = 0; i < array1.length; i++) {
    sum = sum + array1[i];
  }
  console.table(array);
  console.log(array + ' was passed in as an array of numbers, and ' + sum + ' is their sum.');
}

function multiplyArray(anArray) {
  var array2 = anArray;
  var product = 0;
  for (i = 0; i < array2.length; i++) {
    product = product * array2[i];
  }
  console.table(anArray);
  console.log('The numbers ' + ' anArray have a product of ' + product);
}

<!DOCTYPE html>
<html>
  <head>
  </head>
  <body>
  <h2>Education</h2>
    <ul>
      <li>J.D.- University of San Francisco School of Law, 2000</li>
      <li>B.A. Political Science - Washington State University, 1992</li>
      <li>Diploma - West Seattle High School, 1988</li>
      <li>Survived - South Shore Middle School, 1984</li>
      <li>Leaned to play with others - Lafayette Elementary, 1981</li>
    </ul>
    <h1>Welcome to your favorite TV show generator!</h1>
      <p>This is meant as a joke. Hopefully it isn't too offensive:-)</p>
      <p>'Do you enjoy TV shows from your youth?'</p>
      <p>'What is your age?'</p>
      <p>'Do you enjoy cartoons?</p>
      <p>'Do you like Reality TV?'</p>
      <p>'Do you like soap operas?'</p>
      <p>'Do you know how they got that name?'</p>;
    <h2>Top 10 List - Favorite Ski Resorts (that I have skied at)</h2>
    <ol>
      <li>Whistler Blackcomb</li>
      <li>Squaw Valley</li>
      <li>Heavenly</li>
      <li>Sun Peaks</li>
      <li>Mission Ridge</li>
      <li>Crystal Mountain</li>
      <li>Silver Mountain</li>
      <li>Kirkwood</li>
      <li>Red Mountain</li>
      <li>Schweitzer</li>
    </ol>
      <script src ="/Users/jnjstern/cf/201/lab4/app.js" type="text/javascript"></script>
  </body>
</html>
