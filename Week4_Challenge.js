//take the sen parameter being passed and return the longest 
//word in the string. 
//If there are two or more words that are the same length, 
//return the first word from the string with that length.
// Ignore punctuation and assume sen will not be empty.
// Words may also contain numbers

function LongestWord(sen) { 
    //Break Sentence into array elements
    let arr = [];
    //Use replace method and a regular expression to remove all special chars from the sentence.
    // the ^ negates the character class 
    // while a-zA-Z matches any character that is not upper or lowercase
    // the\s includes spaces 0-9 includes numerals
    let cleanedSen = sen.replace(/[^a-zA-Z0-9\s]/g, "");
    let longWord = "";
    arr = cleanedSen.split(" ");
    //iterate over array arr.
    for (let i=0; i < arr.length; i++){
        //If statement. longWord is initialized to have length=0.
        // It is then compared to each element in the array and if that element is longer
        // then longWord is set equal to that element.
        if(arr[i].length > longWord.length) {
            longWord = arr[i]
        }
    }
    return longWord; 
  
  }

  let test1 = "fun&!! time";
  let test2 = "I love dogs";

  console.log(`Test1: ${LongestWord(test1)}`);
  console.log(`Test2: ${LongestWord(test2)}`);
