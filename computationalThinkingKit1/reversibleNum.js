// Precondition: Input is a positive integer.
// Post-condition: Sum of digits of input number is outputted.
// in Ex9 to Ex15, change the name of the following function properly
function problem_12() {
  
   /* this statement defines an object reference to the 
      html element having an ID "output".
     Every time you want to output something, use outputObj */
   var outputObj = document.getElementById("output");
 
   // this statement receives some data and parses it to integer
   var a = parseInt(prompt("Please enter a number: ", ""));
  
   /* this statement add some message to our output Object
      you would need to change the message to be appropriate in Ex10 to E15*/
   outputObj.innerHTML = "number: " + a + "<br><br> equal to its reverse?: ";
 
   // translate the rest of your flowcharts to js here:
   var reverse = 0;
   var temp=a;
   
   do {
      reverse = reverse*10;
      reverse = reverse + temp%10;
      temp = (temp-temp%10)/10;
    } while (temp != 0);

    if (a==reverse){
    outputObj.innerHTML=outputObj.innerHTML+"yes";
    }

    else {
    outputObj.innerHTML=outputObj.innerHTML+"no";
    }


 
 
 
 
 
 
   
   
   
   
   //the following statements inform the user that the program ended
   //and disable the button
   outputObj.innerHTML = outputObj.innerHTML + "<br><br>" + "program ended";
   document.getElementsByTagName("button")[0].setAttribute("disabled","true");
 }