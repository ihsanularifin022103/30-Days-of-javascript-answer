// 'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.
var word = "Love is the best thing in this world. Some found their love and some are still looking for their love."
var countWordLove = word.match(/love/gi).length
console.log(countWordLove)

// Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
var word2 = 'You cannot end a sentence with because because because is a conjunction'
var countWordBecause = word2.match(/because/gi).length
console.log(countWordBecause)

// Clean the following text and find the most frequent word (hint, use replace and regular expressions).
//     const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
var sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
var cleanSentence = sentence.replace((/[^a-zA-Z0-9]/gi),'')
console.log(cleanSentence)


// Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
const word3 = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
var countIncome = Number(word3.match(/[0-9]+/g)[0])+Number(word3.match(/[0-9]+/g)[1])+Number(word3.match(/[0-9]+/g)[2])
console.log(countIncome)