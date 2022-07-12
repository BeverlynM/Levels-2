
//Very Easy
 function min(a,b){
    if (a < b){
        return a;
    } else {
        return b;
    }
 }

 console.log(min(-6, 45));





//  //Easy - was confused on arrays
//  function Students(firstname, lastname, age){
//     this.firstname = firstname;
//     this.lastname = lastname;
//     this.age = age;
//  }


//  var myClass = [
//     new Student("Beverlyn", "Beringer", 19),
//     new Student("Mariana", "Medina", 13),
//     new Student("Alexis", "John", 2)
//  ];


 var students = [
    {
    firstName: 'Bev',
    lastName: 'Beringer',
    age: 19
    },
    {
    firstName: 'Mariana',
    lastName: 'Medina',
    age: 13
    },
    {
    firstName: 'Alexis',
    lastName: 'Quiroa',
    age: 2
    }
    ];
    
    for (var i = 0; i < students.length; i++) {
    console.log('Hello, my name is ' + students[i].firstName + ' ' + students[i].lastName + ' and I am ' + students[i].age + ' years old');
    }




 //Medium
 const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
 
 function takeInput() {
   const inputNumber = prompt("Enter a number (1-12): ");
   if (inputNumber < 1 || inputNumber > 12) {
    alert("Its an invalid number!!");
  }

   
   else {
    console.log(inputNumber,"-", months[inputNumber - 1]);
  }
   // input again
  takeInput();
 }

 
 //Hard
 //BMI = mass / height ^2 = mass / (height * height)
 var Tom = [ 9, 8];
 var Jerry = [ 10, 45];
 var t_bmi = Tom[1] / (Tom[0] * Tom[0]);
 var j_bmi = Jerry[1] / (Jerry[0] * Jerry[0]);
 var answer = false;
 if (t_bmi > j_bmi) {
   answer = true;
 }
 console.log(`Is Tom's BMI higher than Jerry's? ${answer}`)