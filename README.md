<!DOCTYPE html>
<html>
  <head>
    <title>Code 201 Lab 2</title>
  </head>
  <body>
    <h1>Welcome to your favorite TV show generator!</h1>
    <p>This is meant as a joke. Hopefully it isn't too offensive:-)</p>

    <p>'Do you enjoy TV shows from your youth?'</p>

    <p>'What is your age?'</p>

    <p>'Do you enjoy cartoons?</p>

    <p>'Do you like Reality TV?'</p>

    <p>'Do you like soap operas?'</p>

    <p>'Which drama do you enjoy? CSI? Law and Order? Starski & Hutch? Something else?'</p>;
<script src ="/Users/jnjstern/cf/201/About-Me/app.js" type="text/javascript"></script>
  </body>
</html>


var watchTv = confirm('Do you enjoy TV shows from your youth?');
alert('Do you enjoy TV shows from your youth?' + watchTv);
console.log('enjoy TV shows? ' + watchTv);

var yourAge = prompt ('What is your age');
alert ('Your age is ' + yourAge);
console.log('age is ' + yourAge);

var likeCartoons = confirm ('Do you enjoy cartoons?');
alert ('Cartoons are the best! ' + likeCartoons);
console.log('enjoy cartoons? ' + likeCartoons);

var likeReality = confirm ('Do you like Reality TV?');
alert ('You do know it is not reality, right? ' + likeReality);
console.log('like reality TV? ' + likeReality);

var likeSoapoperas = confirm ('Do you like soap operas?');
alert ('How did they get that name? ' + likeSoapoperas);
console.log('like soap operas? ' + likeSoapoperas);

var likeDrama = prompt ('Which drama do you enjoy? CSI? Law and Order? Starski & Hutch? Something else?');
alert (likeDrama + ' is a great show!');
console.log('like drama? ' + likeDrama);
