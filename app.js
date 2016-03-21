var watchTv = prompt ('Do you enjoy TV shows from your youth? yes or no?');
alert(watchTv.toUpperCase() + ' You do enjoy TV shows from your youth?');
console.log('enjoy TV shows? ' + watchTv);

var yourAge = prompt ('Are you over 18 years old? yes or no?');
alert(yourAge.toUpperCase() + ' You are over 18 ');
console.log('User is over 18 ' + yourAge);

var likeCartoons = prompt ('Do you enjoy cartoons? yes or no?');
alert(likeCartoons.toUpperCase() + ' Cartoons are the best! ');
console.log('enjoy cartoons? ' + likeCartoons);

var likeReality = prompt ('Do you like Reality TV? yes or no?');
alert(likeReality.toUpperCase() + ' You do know it is not reality, right? ');
console.log('like reality TV? ' + likeReality);

var likeSoapoperas = prompt ('Do you like soap operas? yes or no?');
if (likeSoapoperas.toUpperCase() === 'YES'){
  prompt('Do you know how they got that name? yes or no');
  console.log('Yes, user likes soap operas');
}
else{
  console.log ('We are done here!');}
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
