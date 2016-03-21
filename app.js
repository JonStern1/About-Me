var questionsArray = ['Do you enjoy TV shows from your youth?', 'Are you over 18 years old?','Do you enjoy cartoons?', 'Do you like Reality TV?', 'Do you like soap operas?','Do you like Game of Trones?'];

function watchTV() {
  var watchTv = confirm(questionsArray[0]);
  alert('Do you enjoy TV shows from your youth?' + watchTv);
  console.log('enjoy TV shows? ' + watchTv);
}
watchTv();

function yourAge() {
  var yourAge = confirm (questionsArray[1]);
  alert ('You are over 18 ' + yourAge);
  console.log('User is over 18 ' + yourAge);
}

function likeCartoons() {
  var likeCartoons = confirm (questionsArray[2]);
  alert ('Cartoons are the best! ' + likeCartoons);
  console.log('enjoy cartoons? ' + likeCartoons);
}

function likeReality() {
  var likeReality = confirm (questionsArray[3]);
  alert ('You do know it is not reality, right? ' + likeReality);
  console.log('like reality TV? ' + likeReality);
}

function likeSoapoperas() {
  var likeSoapoperas = confirm (qestionsArray[4]);
  alert ('How did they get that name? ' + likeSoapoperas);
  console.log('like soap operas? ' + likeSoapoperas);
}

function likeGameOfThrones() {
  var likeGameOfThrones = confirm (questionsArray[5]);
  alert ('Game of Thrones is a great show, but the books are better! ' + likeGameOfThrones);
  console.log('like Game of Thrones? ' + likeGameOfThrones);
}
