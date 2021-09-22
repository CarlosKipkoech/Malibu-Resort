
 $(document).ready(function(){
     $(".portofolio").click(function(){
         $(".tog").toggle(2000);
         $(".togOut").toggle(2000);

     })

 })  
 
 function bookingForm(){

    //  function bookingFormFunction(){

        var name=document.getElementById('name').value;
        var email=document.getElementById('email').value;
        var message=document.getElementById('message').value;
    
        if (name !== "" && email !== "" && message !== ""){
            alert('Thank you ' + name + ' we have received your Booking Request. Check your email to confirm your Booking and proceed with payment.');
        } 
        
        else if(name !== "" || email !== "" || message !== ""){
            alert('Fill your details to proceed with Booking and dont forget to drop a comment ...This will help us serve u BETTER..!!!')
        }
     }

     document.getElementById("output").innerHTML = bookingFormFunction();

// };

