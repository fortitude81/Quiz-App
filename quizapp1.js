//quiz begins, no answers correct
var correct = 0;

// ask questions
var answer1 = prompt('What is the 2nd planet from the sun?');
if ( answer1() == "Venus" ) {
	correct += 1;
}

var answer2 = prompt('What continent is the least populated?');
if ( answer2() == "Antarctica" ){
	correct += 1;
}

var answer3 = prompt('What animal rhymes with fog?');
if ( answer3() == "dog"){
	correct += 1;
}

var answer4 = prompt('What vigilante is known as The Dark Knight');
if (answer4() = "Batman"){
	correct +=1;
}

var answer5 = prompt('In what continent is France?');
if (answer5() = "Europe"){
	correct +=1;
}

//output results
document.write("<p>You got " + correct + " out of 5 questions correct.<p>");
