/*
1. Create a function named `calculateGrade` that takes a student's score as a parameter.

2. Use `switch` statement inside the function - 
   - Use a `switch` statement with the condition `true`.
   - Use `case` statements to check different score ranges and return the corresponding grade.

3. Declare and initialize the variable

4. Call the function and print the result


*/

function calculateGrade(score){
   switch(true){
      case ((score>=50)&&(score<=60)):
         return "You are Barely Passing. Your grade is 'E'"
         break;
      case ((score>=61)&&(score<=72)):
         return "You are in Border line. Your grade is D"
         break;
      case ((score>=73)&&(score<=79)):
         return "You are passing(Bottom). Your grade is C"
         break;
      case ((score>=80)&&(score<=86)):
         return "You are passing. Your grade is B"
         break;
      case ((score>=87)&&(score<=95)):
         return "You are passing. Your grade is A"
         break;
      case ((score>=96)&&(score<=100)):
         return "You are passing on Top. You grade is A+"
         break;
      default:
         return "You are failing. Keep trying hard"
   }

}

console.log(calculateGrade(10));