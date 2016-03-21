var questionsArray = ['Do you enjoy TV shows from your youth?', 'Are you over 18 years old?','Do you enjoy cartoons?', 'Do you like Reality TV?', 'Do you like soap operas?','Do you like Game of Trones?'];

var pTagOne = document.getElementById('ans-one');
function watchTvQ() {
  var watchTv = confirm(questionsArray[0]);
  console.log('enjoy TV shows? ' + watchTv);
  pTagOne.textContent = 'Do you enjoy TV shows from your youth? ' + watchTv;
}
watchTvQ();

var pTagTwo = document.getElementById('ans-two');
function yourAgeQ() {
  var yourAge = confirm (questionsArray[1]);
  pTagTwo.textContent = 'You are over 18 ' + yourAge;
  console.log('User is over 18 ' + yourAge);
}
yourAgeQ();

var pTagThree = document.getElementById('ans-three');
function likeCartoons() {
  var likeCartoons = confirm (questionsArray[2]);
  pTagThree.textContent = 'Cartoons are the best! ' + likeCartoons;
  console.log('enjoy cartoons? ' + likeCartoons);
}
likeCartoons();

var pTagFour = document.getElementById('ans-four');
function likeReality() {
  var likeReality = confirm (questionsArray[3]);
  pTagFour.textContent = 'You do know it is not reality, right? ' + likeReality;
  console.log('like reality TV? ' + likeReality);
}
likeReality();

var pTagFive = document.getElementById('ans-five');
function likeSoapoperas() {
  var likeSoapoperas = confirm (questionsArray[4]);
  pTagFive.textContent = 'How did they get that name? ' + likeSoapoperas;
  console.log('like soap operas? ' + likeSoapoperas);
}
likeSoapoperas();

var pTagSix = document.getElementById('ans-six');
function likeGameOfThrones() {
  var likeGameOfThrones = confirm (questionsArray[5]);
  pTagFive.textContent = 'Game of Thrones is a great show, but the books are better! ' + likeGameOfThrones;
  console.log('like Game of Thrones? ' + likeGameOfThrones);
}
likeGameOfThrones();
