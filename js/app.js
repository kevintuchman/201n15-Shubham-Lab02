'use strict';

var userName = prompt('What is your name?');//defining variable and assigning value to variable
console.log('user name -' + userName);//adding console log
//Displaying message
alert('Hello '+ userName + '.Lets play a game called GUESS WHAT?Are you ready');

//defining variable and assigning value to variable
var genreMovies = prompt('Do you think I like horror movies?');
//adding console log
console.log('Answer genre movies - ' + genreMovies);
//changing user answer to lower case
genreMovies = genreMovies.toLowerCase();
//initializing counter for score
var count = 0;
//validating user response to incremnet score
if(genreMovies === 'yes'||genreMovies === 'no'|| genreMovies === 'y'|| genreMovies === 'n'){
  alert('ok lets move on ' + userName);
  if(genreMovies === 'yes'||genreMovies === 'y'){
    //incrementing score
    count++;
  }

}
else{
  alert(userName + ' You dont take instructions very well.');

}
var favFood = prompt('Do you think I like spicy food?');
console.log('Answer fav food -' + favFood);
favFood = favFood.toLowerCase();
if(favFood === 'yes'||favFood === 'no'|| favFood === 'y'|| favFood === 'n'){
  alert('ok lets move on ' + userName);
  if(favFood === 'yes'||favFood === 'y'){
    count++;
  }
}
else {
  alert(userName + ' You are one stubborn human being.');
}

var favDrink = prompt('Do you think I like soda?')
console.log('Answer fav drink -' + favDrink);
favDrink = favDrink.toLowerCase();
if(favDrink=== 'yes'||favFood === 'no'|| favFood === 'y'|| favFood === 'n'){
  alert('ok lets move on ' + userName);
  if(favDrink=== 'yes'||favFood === 'y'){
    count++;
  }
}
else{
  alert(userName + ' I dont know what to do with you');
}

var favPet = prompt('Do you think I like dogs?')
console.log('Answer fav pet -' + favPet);
favPet = favPet.toLowerCase();
if(favPet=== 'yes'||favPet=== 'no'|| favPet === 'y'|| favPet === 'n'){
  alert('ok lets move on ' + userName);
  if(favPet=== 'yes'||favPet=== 'y'){
    count++
  }
}
else{
  alert(userName + ' I think you simply cant read');
}

var favPlace = prompt('Do you think I want to visit Antarctica?')
console.log('Answer fav place -' + favPlace);
favPlace = favPlace.toLowerCase();
if(favPlace=== 'yes'||favPlace=== 'no'|| favPlace === 'y'|| favPlace === 'n'){
  alert('ok lets move on ' + userName);
  if(favPlace=== 'yes'||favPlace=== 'y'){
    count++
  }
}
else{
  alert(userName + ' I have no hope for you');
}
alert(userName + ' your total score is '+ count +'/5');

//Checking count value to display message
if(count >=3){
  alert(userName + ' you passed')
}
else{
  alert(userName + ' you failed')
}

