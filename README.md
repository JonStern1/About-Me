<!DOCTYPE html>
<html>
  <head>
    <title>Code 201 Lab 2</title>
  </head>
  <body>
    <h2>Education</h2>
    <ul>
      <li>J.D.- University of San Francisco School of Law, 2000</li>
      <li>B.A. Political Science - Washington State University, 1992</li>
      <li>Diploma - West Seattle High School, 1988</li>
      <li>Survived - South Shore Middle School, 1994</li>
      <li>Leaned to play with others - Lafayette Elementary, 1991</li>
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

<script src ="/Users/jnjstern/cf/201/About-Me/app.js" type="text/javascript"></script>
  </body>
</html>

var numberTries = 0;
var guess = 4;
var guess = prompt ('We are now going to play a number guessing game. What is my favorite number? The number is between 1 and 20. You have 4 guesses. Ready? Guess!');
while (numberTries < 4){
  if(guess < 4){
    console.log('Sorry, your guess is too low');
    guess = prompt ('guess again');
    numberTries++;
  }
else if(guess > 4){
  console.log('Sorry, your guess is too high');
  guess = prompt ('guess again');
  numberTries++;
}
else if(guess === 4){
  console.log('Right on! 4 is my favorite number');
  break;
}
else{
  console.log('Please input a number.');
  guess = prompt ('guess again');
  numberTries++;
}
}
if (numberTries >= 4){
  console.log('Sorry. You are out of guesses. Better luck next time.');
}
