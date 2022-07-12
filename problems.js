
//Very Easy
 function min(a,b){
    if (a < b){
        return a;
    } else {
        return b;
    }
 }

 console.log(min(-45, 45));





 //Easy - was confused on arrays
 function Students(firstname, lastname, age){
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
 }


 var myClass = [
    new Student("Beverlyn", "Beringer", 19)
    new Student("Mariana", "Medina", 13),
    new Student("Alexis", "John", 2)
 ];





 //Medium
 var mos = prompt("Please enter a number: ");
 months();
 function months(mos)
     {
         switch (mos) {
         case 1:
             console.log("January");
             break;
         case 2:
             console.log("February");
             break;
         case 3:
             console.log("March");
             break;
         case 4:
             console.log("April");
             break;
         case 5:
             console.log("May");
             break;
         case 6:
             console.log("June");
         case 7:
             console.log("July");
         case 8:
             console.log("August");
             break;
         case 9:
             console.log("September");
         case 10:
             console.log("October");
         case 11:
             console.log("November");
             break;
         case 12:
             console.log("December");
              break;
         default:
             console.log("Error, Enter a valid number");
             break;
         }
     }

 
 //Hard
 //BMI = mass / height ^2 = mass / (height * height)
 var Tom = {
    name: 'Tom', 
    mass: '8g',
    height: '9in',
    calcBMI: function(){
      this.bmi = this.mass / Math.pow(this.height,2);
    }
  }
  
  Tom.calcBMI();
  console.log(Tom);
  
  var Jerry = {
    name: 'Jerry',
    mass: '45g',
    height: '10in',
    calcBMI: function(){
      this.bmi = this.mass / Math.pow(this.height,2);
    }
  }
  
  Jerry.calcBMI();
  console.log(Jerry);
  

  
  if(Tom.bmi > Jerry.bmi){
    console.log(Tom.name + ' has a higher BMI');
  }
  else  if (Tom.bmi < Jerry.bmi){
    console.log(Jerry.name + ' has a higher BMI');
  } else {
    console.log(Tom.name + ' and ' + Jerry.name + ' has the same BMI');
  }



