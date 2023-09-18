$( document ).ready(function() { 
  
  console.log( "ready!" );
  
  //click the button
  
 $('#btnUserName').click(function() {
  console.log("button clicked")
  let userInput = $('#userText').val()
  console.log(userInput);
  let greeting;
  greeting = "Hi, there, " + userInput + "! What's up?"

  
  $('#something').text(greeting);


  const animal = ['Alligator', 'Bull', 'Crow', 'Dragon', 'Elephant', 'Fox', 'Goat', 'Hawk', 'Jaguar', 'Lizard', 'Monkey', 'Otter', 'Panda', 'Rabbit', 'Rhino', 'Snake', 'Turtle', 'Whale'];  
  const randomElement = animal[Math.floor(Math.random() * animal.length)];  
  console.log(randomElement);
  let spiritAnimal;
  spiritAnimal = "Your spirit animal is: " + randomElement + "!"
  $('#spiritAnimal').text(spiritAnimal) ;

  nameLength = getStringLength(userInput);
  nameMsg = "The Length of your name is: ";
  $('#nameFact').append(nameMsg + nameLength + " letters, "); 

  function getStringLength(stringVal){
    var stringLength = stringVal.length; 
   return stringLength;   
  }


  vowelsInName = getVowels(userInput);

  $('#nameFact').append(vowelsInName + " vowel(s) & ");

  function getVowels(str) {
    var v = str.match(/[aeiou]/gi);
    return v === null ? 0 : v.length;
  }

  consInName = getConsonants(userInput);
  
  $('#nameFact').append(consInName + " consonant(s) !");

  function getConsonants(str) {
    var c = str.match(/[bcdfghjklmnpqrstvwxyz]/gi);
    return c === null ? 0 : c.length;
  }

  
});

});


