// ##### Introduction #####
//
// The below assignment will require NO functions, except for the challenge banner function in number 1.
//
// Instead, our focus is going to be on console.logging the characters at certain indices of strings.
//



// ##### Challenges #####

// 1.
//
// Write a function that takes in a parameter and prints the string below, with the given paramter place of the $ symbol.
// 
// ###### Challenge $ #####
//
// Call it before EVERY challenge below!
//
// Even though we'll USUALLY be calling this function with a number indicating the challenge we're on, THIS TIME call it with the parameter 'Banner Function Works!'. You should see the below result:
//
// ###### Challenge Banner Function Works! #####
function banner (num) {console.log ('###'+ ' Challenge' + num + '###' )}

banner ('Banner Function Works!')

// 2.
//
// Console out the numbers from 1-20, but only if they're divisible by 3.

// Use `if` and a modulus operation.
for(let num=1;num<=20;num ++){

if (num % 3 ===0) {console.log(num)}
}

// 3.
//
// Same problem as #2, but no `if`s, `mods`, or `but`s (and no, `but` is not a JavaScript tool). There may be more ways to solve this problem without `if` or `%` (there usually are in JavaScript!), but if you did it the way we did, you should run the loop 6 times with console log per loop iteration.
banner(' Banner of the Bruce type ')
let num=0

while (num<=20) {console.log(num)
num = num + 3 
}



// 4.
//
// Console out the numbers from 1-20. BACKWARDS.
banner (' Bruce Banner to an arm wrestling competition ')

for (let num=20;num>=1;num --) {console.log (num)}


// 5.
//
// For the string 'Boy howdy am I good at this!', console out the letters
// individually.

banner(' Bruce Banner to a jumping contest')
str= 'Boy howdy am I good at this'

for(let i=0;i<str.length;i++)
{console.log(str[i])}



// 6.
//
// For the string, 'And getting better every day.', starting with the second
// character, print out every third character.
banner(' Bruce Banner to a boxing contest')
str2= 'And getting better every day'

for(let i=2;i<str2.length;i=i+3){
console.log(str2[i])
}

// 7. 
//
// For the string 'Am I the best?', console out the letters individually, AND
// UPPERCASED.
banner (' Bruce Banner to a wrestling contest')

str3='Am I the best?'

for(let i=0;i<str3.length;i=i+1 ){
console.log(str3[i].toUpperCase())
}




// 8.
//
// For the string 'Whoa, I am the best!', console out the letters individually,
// but also capitalize the letters in the third word.
banner (' Bruce banner to a science contest')

let str8= 'Whoa, I am the best!'

// for(let i=0;i<str8.length;i=i+1 ){
//     console.log(str8[i].toUpperCase())
//     }
    
for (i=0; i<str8.length; i++  ) {
    if ( i > 6 && i < 10  ) {
      console.log(str8[i].toUpperCase());
    } else {
      console.log(str8[i]);
    }
  }
// 9.
//
// For the string 'I am become death, destroyer of worlds.', console out the letters
//  individually, but backwards. That is, the first console log should be
// `.`, followed by `s`, followed by `d`, and so on.
banner('Bruce Banner to a Gamma Radiation contest')

str9= 'I am become death, destroyer of worlds.'

for (i=str9.length;i>=0; i--){
console.log (str9[i])
}
// 10.
//
const names = 'Colin|Mesuara|Denis|Wilson|Michael|Patrick|DeAundre|Jumary|Marc|Bogdan|Sharod|David|LaToddra|Carlos';
banner('Bruce Banner to all you can smash contest')

for (i=0;i<names.length; i++){

    if(names[i]==='|') {
        console.log('Here today is');

    }
    else {console.log(names[i]);}
    }


// Console out the individual letters of each person in class today, which are
// in the string above. Every time you start a new name (including the first
// one!), console out the string: 'Here today is:'.

// You'll know you're at a new person's name when you hit the pipe character.

// Don't print the pipes!


// 11.
//
// There is no 11. Celebrate! You did it!
