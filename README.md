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
  console.log ('We are done here!');
}
