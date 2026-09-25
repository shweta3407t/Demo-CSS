


// console.log("hello shweta");
// const name="shweta";
// const age=24;
// const pi = 3.14;
// let  year="ty";
// const isFollow=true;

// const student = {
//     name: "shweta" ,
//     age : 24,
//     subject : "IT" ,
//     year : "ty"
// }

// student.name="ankita";
// student.age=33;

// const name="payal";
// name="ppppp";




// const product = {
//     name :  "Ball Pen",
//     rating : 4, 
//     isDeal : true ,
//     offer:  5   ,
//     price : 270

// }



// const profile ={
//     name : "shweta" ,
//     ifFollow : true ,
//     post : 123,
//     following : 654,
//     followers : 4343,
//     email : "shweta@email.com",
//     bio : "student learning java script"
// }

 


/////////////consitional operators

// let a = 5;
// let b =  5;

// if( a % b  == 0){
//     console.log("even");
// }else{
//     console.log("odd")
// }


 



// const age=35;

// const result = age <= 18  ? "teenager" : "adult " ;
// console.log(result);
 

// if(age < 18){
//     console.log("teenager")
// }else if(age <60){
//     console.log("adult")
// }else if(age >60){
//     console.log("old");
// }





 
// let  marks = 33;
// let score;
// if( marks >=90 &&  marks <=100){
//     score="A"
// }else if (  marks >=70 &&  marks<=89){
//    score="B"
// }else if (  marks >=60 &&  marks<=69){
//     score="C"
// }else if (  marks >=50 &&  marks<=59){
//     score="D"
// }else if (  marks >=0 &&  marks<=49){
    
//     score="F"
// }
// console.log(score);


/////////////////////////////loops and string


// ////initialization / stoping condition / updation
// for(let i=0 ; i<=5  ; i++){
//     console.log(i);
// }

// let sum=0;
// for(let i = 0 ; i <=100 ; i++){
//     sum+=i;
// }
// console.log(sum);
    

// ///initializer
// let i=0;
// while(i<=5){///stoping condition
//     console.log(i);
//     i++;////update
// }




// let j=1;
// do{
//  console.log(j);
// j++
// }while(j <= 5);



// //for of loop
// let name="shweta";
// for(let i of name){

//     console.log(i);
// }




// //for in loop
// let student={
//     name : "shweta",
//     age : 22 ,
//     standard : "ty",
//     experience : "fresher"
// }
// for(let key in student){

//     console.log("key : "  , key  , " value : " , student[key] );
// }




// for(let i=1 ; i <=100 ; i++){
//     if(i % 2 !== 0 ){
//         console.log(i);
//     }
// }





// console.log("number  gussing game");
// let  randomNumber= 5;
// let userNumber=prompt(" guess the  number : ");

// let count=0;
// while( userNumber != randomNumber){
//     if(userNumber <  randomNumber){
//         userNumber=prompt("to small guess more big number");
//     }else if( userNumber > randomNumber){
//         userNumber =prompt("to big guess small number");
//     } 

// }
// console.log("   congratulation you won  , correct guess is " , randomNumber)



// ////leteral string
//  let student= {
//     name : "shweta"
//  };
// console.log(name);  
//  //embed expression in string--->string interpolation
//  let output = `my  \t name \n  is ${student.name}`;  ///n  /t escate character
// console.log(  output);





// let str="shweta shweta prajapati";
// //  let newStr=str.toUpperCase;

// //  let newStr=str.toLocaleLowerCase;

// //  let newStr=str.trim;

// //  let newStr=str.slice(0 , 4);

// //   let newStr=str.concat("prajapati");

// //  let newStr=str.replace("shweta" ,"ankita");

// //   let newStr=str.replaceAll("shweta" ,"ankita");

// //  let newStr=str.charAt(2);

//  let newStr=str.charAt(2);

// console.log(str);
// console.log(newStr);



 


// ////Question
// let fullName=prompt("enter your full name");
// let newName="@"+ fullName + fullName.length;

// console.log(newName);






// //////Array
// let companies= ["google" , "jpMorgan" ,"amazon"];
// let newCompany=[];


// //loop in array
// for(let i =0 ; i<length-1 ; i++){
//     console.log(i);
// }


// for(let company in companies){
//      newCompany+=company;
// }


// for(let element of companies){
//     console.log(element.toUpperCase);
// }



// companies[2]="microsoft";
// console.log(heros[2]);//can change string value in array

// console.log(companies);
// console.log(newCompany);

// let info=["shweta" , 22 , "prajapati"] //can store data of multiple type but not preferable







// /////Question
// let marks=[32 ,33,44,55,65,44,44,34,54 , 32,32 , 5,4]
// let sum=0;
// for(let mark in marks){
//     sum += mark;
     
// }
// let avg=sum/marks.length;
// console.log("average os al student is " + avg);







// ////Question
// let price=[250 , 645 , 300 , 900 , 50];
// let valueAfterDiscount=[];
// let offer;
// for(let i =0 ; i<price.length ; i++){

//     offer=i/10;
//     price[i]-=offer

//     valueAfterDiscount.push(price[i]);

//     console.log( `value after discount ${price[i]}`);

// }






// let num=[];
//  for(let i =0 ; i<=10 ; i++){
//     num.push(i);
//  } 

//  console.log(num)

//  let deletedValueFromEnd = num.pop();
//  console.log(deletedValueFromEnd);
 
 let hero=["sk" , "srk" , "ak"];
 let herions=["deepika" ,"shraddha"];

 console.log( hero.concat(herions));


console.log(hero.unshift("ankita"));




