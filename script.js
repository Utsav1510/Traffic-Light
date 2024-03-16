
var myinterval=0
var i=0
// function display(){
          
//   if (i<3){
//     console.log(i)
  
//   console.log(rb[i]);
//   rb[2].checked=false
//   rb[i].click()
//         if (i>0){
//           rb[i-1].checked=false
//           }
//           i++;
// }
// else{
//   i=0
// }

// }





////// Display Alternatively ///////////////////



function display(){
  if (i < 2) {
    console.log(i);
    console.log(rb[i]);
    rb[2].checked = false;
    rb[i].click();
    if (i > 0) {
        rb[i - 1].checked = false;
    }
    i++;
} else if (i === 2) {
    console.log(i);
    console.log(rb[i]);
    rb[2].checked = false;
    rb[i].click();
    rb[i - 1].checked = false;
    i = 0;
}
}



function myFunction(event) {
  
    var ele=event.target.id

    ///// deselect all

    rb=document.getElementsByClassName("radio")
    
      for (let i=0;i<3;i++){
      
          console.log("all")
          rb[i].checked=false;
        }
        
  ///////////// Alternative ///////////

    if(event.target.value=="alt"){

      
      rb=document.getElementsByClassName("radio")
      
        myinterval=setInterval(
          
         display
  
       ,1100) 
       console.log("myinterval"+myinterval)

    }

    /////// Select All //////////////////////////////
    else if(event.target.value=="all"){
      clearInterval(myinterval)
      i=0
      
      
    
        rb=document.getElementsByClassName("radio")
        for (let i=0;i<3;i++){
        
            console.log("all")
            rb[i].click()
            
          }
    
        }
        

  ////  Select only one /////
        else{
          clearInterval(myinterval)
          i=0
        
        
          document.getElementById(event.target.value).click()
        console.log(event.target.id)
        
      console.log(document.getElementById(event.target.value))
        document.getElementById(event.target.id).click()

        }

  }

  // stop the cycle

  function stop(event){

      clearInterval(myinterval)

    console.log("terminated")

    
  }
function clearall(){
  f=document.getElementsByTagName("input")
  console.log(f)
  for(let i=0;i<f.length;i++){
      f[i].checked=false;
  }
}