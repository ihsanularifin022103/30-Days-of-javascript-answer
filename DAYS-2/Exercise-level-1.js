// Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
var challenge = '30 Days Of JavaScript'

// Print the string on the browser console using console.log()
console.log(challenge) // result '30 Days Of JavaScript'

// Print the length of the string on the browser console using console.log()
var lengthChallenge = challenge.length
console.log(lengthChallenge) // result 21

// Change all the string characters to capital letters using toUpperCase() method
var toUpperCaseChallenge = challenge.toUpperCase()
console.log(toUpperCaseChallenge) // '30 DAYS OF JAVASCRIPT'

// Change all the string characters to lowercase letters using toLowerCase() method
var toLowerCaseChallenge = challenge.toLowerCase()
console.log(toLowerCaseChallenge)

// Cut (slice) out the first word of the string using substr() or substring() method
var sliceChallengeUseSubstring = challenge.substring(0,3) // result 30
console.log(sliceChallengeUseSubstring)

// Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
var sliceNextWord = challenge.substring(3)
console.log(sliceNextWord)

// Check if the string contains a word Script using includes() method
var includesWordScriptChallenge = challenge.includes('script')
console.log(includesWordScriptChallenge)

// Split the string into an array using split() method
var splitIntoArrayChallenge = challenge.split('')
console.log(splitIntoArrayChallenge)

// Split the string 30 Days Of JavaScript at the space using split() method
var splitSpaceIntoArrayChallenge = challenge.split(' ')
console.log(splitSpaceIntoArrayChallenge)

// 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
var challenge2 = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
var splitIntoArrayChallenge2 = challenge2.split(' ')

// Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
var replaceJavascriptIntoPython = challenge.replace('JavaScript','Python')
console.log(replaceJavascriptIntoPython)

// What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
var characterAtIndex15 = challenge.charAt(15)
console.log(characterAtIndex15)

// What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
var characterCodeOfJ = challenge.charCodeAt(11)
console.log(characterCodeOfJ)

// Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
var firstPosition = challenge.indexOf('30')
console.log(firstPosition)

// Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
var lastPosition = challenge.lastIndexOf(challenge.length-1)
console.log(lastPosition)

// Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
var text = 'You cannot end a sentence with because because because is a conjunction'
var firstPositionOccurrenceWord = text.indexOf('You')
console.log(firstPositionOccurrenceWord)

// Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
var lastPositionOccurrenceWord = text.lastIndexOf('conjunction')

// Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
var removeWhiteSpace = (' 30 Days Of JavaScript ').trim(' ')
console.log(' 30 Days Of JavaScript ')
console.log(removeWhiteSpace)

// Use startsWith() method with the string 30 Days Of JavaScript and make the result true
var startsWithTrue = challenge.startsWith('30')
console.log(startsWithTrue)

// Use endsWith() method with the string 30 Days Of JavaScript and make the result true
var endsWithTrue = challenge.toLowerCase().endsWith('javascript')
console.log(endsWithTrue)

// Use match() method to find all the a’s in 30 Days Of JavaScript
var findAllA = challenge.match(/a/gi)
console.log(findAllA)

// Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
var firstWord = '30 Days of'
var whitespace = ' '
var secondWord = 'Javascript'
var concatWord = firstWord.concat(whitespace,secondWord)
console.log(concatWord)

// Use repeat() method to print 30 Days Of JavaScript 2 times
var repeatChallenge = challenge.repeat(2)
console.log(repeatChallenge)