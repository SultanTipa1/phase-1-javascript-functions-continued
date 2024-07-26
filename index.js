// code your solution here
function razzle(){
    console.log("you've been razzled!");
}
razzle();

function razzle(lawyer = "Billy", Target = "'em"){
    console.log(`${lawyer} razzle-dazzle ${target}!`);
}
razzle();
razzle("Methuselah", "T'challah");

function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}
console.log(saturdayFun("go to the park"));  // Output: "This Saturday, I want to go to the park!"
console.log(saturdayFun());                 // Output: "This Saturday, I want to roller-skate!"

// (functio(){
//     console.log("Yet more razzling");
// });

// f(){
//     console.log("Yet more razzling");
// }

// const button = document.getElementById("button");
// button.addEventListener("click", function (){
//     console.log("Yet more razzling");
// });

// const fn = function () {
//     console.log("Yet more razzling");
// };

function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
};
console.log(mondayWork("work from home"));  // Output: "This Monday, I will work from home."
console.log(mondayWork());                 // Output: "This Monday, I will go to the office."


(function(baseNumber){
    return baseNuymber + 3;
})(2);

(function(baseNumber){
    return baseNumber +3;
})(2);

function outer(greeting, msg = "Its a fine day to learn"){
    const innerFunction = function(name, lang ="python"){
        return `${greeting},${name},${msg},${lang}`;
    };
    return innerFunction("student", "Javascript");
}
outer("Hello");

function outer(greeting, msg = "Its a fine day to learn"){
    const innerFunction = function(name, lang ="python"){
        return `${greeting},${name},${msg},${lang}`;
    };
    return innerFunction;
}
outer("Hello")("student", "Javascript");

function outer(greeting,msg ="Its a fine day to learn"){
    return function (name,lang ="python"){
        return`${greeting},${msg},${name},${lang}`;
    };
}
outer("Hello")("student", "Javascript");

// function(name, lang="python"){
//     return `Hello, ${name}! It,s a fine day to learn ${lang}`
// }

const array = (function(thingsToAdd){
    const base = 3;
    return[
        function(){
            return base + thingsToAdd;
        },
        function(){
            return base;
        },
    ];
})(2);
array[0];
array[1];

array[0]();

function demoChain(name){
    const part1 = "hi";
    return function(){
        const part2 ="there";
        return function(){
            console.log(`${part1.toUpperCase()} ${part2} ${name}`);
        };
    };
}

demoChain("Dr Stephen Strange")()();

// function saturdayFun(activity="roller skates"){
//     return `This saturday,i want to${activity}`;
// }
// console.log(saturdayFun("go to park"));
// console.log(saturdayFun());

// function mondayWork(activity ="go to the office"){
//     return `This monday, i will ${activity}.`;
// }
// console.log(mondayWork("work from home"));
// console.log(mondayWork());

// function wrapAdjective(flair = "*") {
//     return function(adjective = "special") {
//         return `You are ${flair}${adjective}${flair}!`;
//     };
// }

// // Example usage:
// const encouragingPromptFunction = wrapAdjective("!!!");
// console.log(encouragingPromptFunction("a dedicated programmer"));  // Output: "You are !!!a dedicated programmer!!!"

// const defaultPromptFunction = wrapAdjective();
// console.log(defaultPromptFunction("amazing"));  // Output: "You are *amazing*"
// console.log(defaultPromptFunction());           // Output: "You are *special*"

function wrapAdjective(flair = "*") {
    return function(adjective = "special") {
        return `You are ${flair}${adjective}${flair}!`;
    };
}

// Example usage with '*':
const highlightWithStars = wrapAdjective("*");
console.log(highlightWithStars("amazing"));  // Output: "You are *amazing*"
console.log(highlightWithStars());           // Output: "You are *special*"

// Example usage with '||':
const highlightWithBars = wrapAdjective("||");
console.log(highlightWithBars("a dedicated programmer"));  // Output: "You are ||a dedicated programmer||"
console.log(highlightWithBars());                          // Output: "You are ||special||"

// Example usage with '!!!':
const encouragingPromptFunction = wrapAdjective("!!!");
console.log(encouragingPromptFunction("a dedicated programmer"));  // Output: "You are !!!a dedicated programmer!!!"

const defaultPromptFunction = wrapAdjective();
console.log(defaultPromptFunction("amazing"));  // Output: "You are *amazing*"
console.log(defaultPromptFunction());           // Output: "You are *special*"

