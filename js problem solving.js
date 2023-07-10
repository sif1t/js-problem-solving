    
//1.How many vowels are there in a sentence?
const vowel= [ "a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
function sifat (sentence){
   let count =0;
   const letters = Array.from(sentence); 
   letters.forEach (function (ariyan){
     if (vowel.includes (ariyan)){
       count++ ;
     }
   });
   return count;
}
console.log(sifat("My name is sifat")); 

//2.How can I get duplicate numbers out of an array?


const numbers =[1,4,5,5,6,7,6,2,10,4,10];
 const sifat = numbers.filter(function(value,index,array){
   return array.indexOf(value) !== index
 });
 console.log (sifat);


boolen
 let x = false;
let y = new Boolean(false);
console.log (x==y);

if 
let age= 28;

if (age > 18){
  console.log ("you are young");
}else if (age == 18){
  console.log ("you are adult");
} else if (age > 18 && age < 30){
  console.log ("you are masuid");
}else{
  console.log ("you are old");

}
//3.Counting numbers from 1 to 10
let i =5;
for(let i =0; i < 10; i++){
  console.log (i)
}
console.log ("this is", i);

//4.How many times is the word sifat used in the sentence below? The first time sifat is found in how many number positions
const sentence ="Lorem sifat ipsum dolor sit amet consectetur sifat adipisicing sifat  elit Eveniet odio sifat.";
const matches = sentence.match(/sifat/gi);
const alina = matches ? matches.length : 0;
console.log (alina);
let position = sentence.search(/sifats/i);
 position = position >= 0 ? position : "not found !";
 console.log (position);

//5.How to find the largest string from any one and show the index number
function longeststring (names){
  let longesword = '';
  for (name of names){
    if(name.length > longesword.length){
      longesword = name;
    }
  }
  return [longesword, names.indexof(longesword)];
 }
 console.log (longeststring (['arifeen sifat', 'lern with sifat', 'ariyan', 'akash']));