//! ye aik sad array ,it's simple array 
//! jab hamain array ki length janni ho to use kren gy 
//! months.length ka 


// kuch zarori point jo yaad rakhny hain 
// 1- array new array return kr rha ya wahi change kr rha hai 

//! Methods That Return a New Array
//? map(), filter(), concat(), slice(), flat(), flatMap()

//! Methods That Do Not Return a New Array
//? sort(), reverse(), push(), pop(), shift(), unshift(), forEach(), some(), every(), indexOf(), splice() (modifies the array in place)



//! 1-method .length 
let months = ["jan","feb", "april" ,"may" , "june" ,"july"]
console.log(months.length) // 6

//! 2 method toString()

// jab pure array ko string main convert krna ho 
// full array to convert in string
console.log(months.toString())


//! 3 method at()

// ye bhi [1] ki tarah kaam krta hai lekin farq hai ye ky hum at() ka use krky -1 pr bhi value check kr skty hain aur wo hamain last index pr mojod value dega isi tarah jab hum -2 pr dekhen tu wo secend last pr mojod value dega lekin ye [] hamain undefined return kre ga 

// let newmonth = months[2]
// let newmonth1 = months.at(2)
// console.log(newmonth) // april
// console.log(newmonth1) // april

//! diffrence between at() and []
let newmonth = months[-1]
let newmonth1 = months.at(-1)
console.log(newmonth) // undefined
console.log(newmonth1) // july


//! 4 method join()
//! pure array ko string main badal deta hai aur ap usky har element kuch bhi add kr skty hain 


console.log(months.join(" + ")) // output jan + feb + april + may + june + july


//! 5 method pop()
//? delete last Element in array 
months.pop()
console.log(months) // output ["jan","feb", "april" ,"may" "june",]


//! 6 method push()
//? The push() method adds a new element to an array (at the end) array ky akhir main aik new element add krta hai

months.push("August")
console.log(months) // output ["jan","feb", "april" ,"may" ,"june","August"]

//! 7 method shift()
//? The shift() method removes the first element from an array and returns that removed element. array ky pehle element remove kr deta hai

console.log(months.shift()) // output jan
console.log(months) // output [ 'feb', 'april', 'may', 'june', 'August' ]

//! 8 method unshift()
//? The unshift() method adds one or more elements to the beginning of an array and returns,ye aik aur elemnt ko add kr deta hai array ky Start main 

let classMate = ["Ayan","Waqar","Izzah","amna","manal"]
console.log(classMate.unshift("Ihtiram"))
console.log(classMate) // output ["Ihtiram", "Ayan", "Waqar","Izzah","amna","manal"]

//! 9 method concat()
//? The concat() method is used to merge two or more arrays. ye multiple array ko aik kr deta hai 

let merge = classMate.concat(months)
console.log(merge); 
// output [
//     'Ihtiram', 'Ayan',
//     'Waqar',   'Izzah',
//     'amna',    'manal',
//     'feb',     'april',
//     'may',     'june',
//     'August'
//   ]

//! 10 method slice()
//? The slice() method returns a shallow copy of a portion of an array into a new array
//? array ky ek hissa ko copy krta hai aur usko aik new array main store krta hai
//? is niche wale example ko samjhty hain slice(1,4) mtlb jo index number 1 sy lekr 4 tak ky element utha lo aur new array bana do is main 4 index include nhi hoga 

let slice = classMate.slice(1, 4)
console.log(slice); // output ["Ayan", "Waqar", "Izzah"]


//! 11 method splice()
//? The splice() method adds or removes elements from an array. ye array ky ek hissa ko add krta hai ya remove krta hai
//? is example main splice(1,0 , "sheryar") ka mtlb aik include kro aur 0 remove mtlb kuch bhi remove nhi kro aur include krna hai "sheryar" ko



classMate.splice(1,0,"Sheryar")
console.log(classMate); 

//  output [
//     'Ihtiram', 'sheryar',
//     'Ayan',    'Waqar',
//     'Izzah',   'amna',
//     'manal'
//   ]


