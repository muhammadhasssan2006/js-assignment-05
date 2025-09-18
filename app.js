// ------------------------Chapter 21-25-------------------------------------

// Question:01:-

// var firstName = prompt("Enter your first Name");
// var lastName = prompt("Enter your last Name");
// var fullName = firstName+ " " +lastName;

// alert("Welcome to my website Mr/Ms "+fullName);



// Question:02:-

// var phoneName = prompt("Enter your favourite phone name");
// var length = phoneName.length;

// document.write("<h2> My favourite phone is: ",phoneName,"</h2>");
// document.write("<h2> Lenght of string:",length);

// Question:03:-

// var str = "Pakistani";

// var indexNum =str.indexOf("n");

// document.write("String: ",str,"<br>");
// document.write("Index of 'n': ",indexNum);

// Question:04:-

// var str = "Hello World";
// var lastIndex = str.lastIndexOf("l");
// document.write("String: ",str,"<br>");
// document.write("Last index of 'l': ",lastIndex);

// Question:05:-

// var str = "Pakistani";

// var charIndex = str.charAt(3);
// document.write("String: ",str,"<br>");
// document.write("Character at index 3: ",charIndex)

// Question:06:-

// var firstName = prompt("Enter your first Name");
// var lastName = prompt("Enter your last Name");
// var fullName = firstName+ " " +lastName;

// alert("Welcome to my website Mr/Ms "+fullName);

// Question:07:-

// var cityName = "Hyderabad";
// var replaceWord = cityName.replace("Hyder","Islam");

// document.write("City: ",cityName,"<br>");
// document.write("After replacement: ",replaceWord)

// Question:08:-

// var message = "Ali and sami are bestfriends. They play cricket and football together.";

// var replaceWord = message.replaceAll("and" , "&");
// document.write("Message: <br>",message,"<br>");
// document.write("Message after replacement: <br>",replaceWord);

// Question:09:-

// var str = "472";
// document.write("Value: ",str,"<br>");
// document.write("Type: ",typeof str,"<br>");

// var num = +str;
// document.write("Value: ",num,"<br>");
// document.write("Type: ",typeof num,"<br>");

// Question:10:-

// var userInput = prompt("Enter any  word to convert it into capital");

// var capital = userInput.toUpperCase();

// document.write("User input: ",userInput,"<br>");
// document.write("Upper case: ",capital);

// Question:11:-

// var userInput = prompt("Enter any  word to convert it into title case");

// var titleCase = userInput.slice(0,1).toUpperCase();
// var remainInput = userInput.slice(1,);

// document.write("User input: ",userInput,"<br>");
// document.write("Tittle case: ",titleCase+remainInput);

// Question:12:-

// var num = 35.36;
// var str = num.toString().replace(".","");

// document.write("Number: ",num,"<br>")
// document.write("Result: ",str)

// Question:13:-

// var userName = prompt("Enter your user name");

// for(var i = 0; i < userName.length;i++){
//     var charcode = userName.charCodeAt(i);

//     if(charcode === 33 || charcode === 44 || charcode === 46 || charcode === 64){
//         alert("Invalid username! Please avoid using [!, . , @]");
//         userName = prompt("Enter a valid username without [!, . , @]:");
//         i = -1;


//     }

// }
// document.write("Your valid username is: " + userName);

// Question:14:-


// var bakeryItems = ["cake","applepie","cookies","chips","patties"];

// var UserInput = prompt("Welcome to Khan's Bakery. What do you want to order sir/ma'am?");

// var matchFound = "no";

// for (var i = 0; i < bakeryItems.length; i++) {
//     if (UserInput.toLowerCase() === bakeryItems[i].toLowerCase()) { 
//         matchFound = "yes";
//         document.write(bakeryItems[i], "is available at index ", i , " in our bakery");
//         break; 
//     }
// }

// if (matchFound === "no") {
//     document.write(UserInput, "is not available in our bakery");
// }

// Question:16:-

// var university = "University of karachi";

// var arr = university.split("");

// document.write(arr);


// Question:17:-

// method-1

// var userInput = prompt("Enter any word");

// var lastChar = userInput.charAt(userInput.length-1);
// document.write("Last Character: ",lastChar)

// method-2


// var userInput = prompt("Enter any word");

// var lastChar = userInput.slice(-1);
// document.write("Last Character: ",lastChar)

// Question:18:-


// var text = "The quick brown fox jumps ove lazy the dog. ";

// var lowerCase = text.toLowerCase();
// var count = 0;

// for(var i = 0 ; i <text.length;i++){
//     if (lowerCase.slice(i,i+3) === "the")
//         count++
// }
// document.write("Number of occurrences of 'the': " + count);












