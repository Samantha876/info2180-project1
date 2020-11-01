window.onload=function(){
    const button= document.querySelector("button");

    button.addEventListener("click",(e)=>{
    e.preventDefault();
    let msg=document.getElementsByClassName("message")[0];

    if (email.value===''){
        msg.innerHTML=('Please enter a valid email address');
    }else{
        let email= document.getElementById('email').value;
        msg.innerHTML= `Thank you! Your email address ${email} has been added to our mailing list.`;
        console.log("Form has been submitted");
    }    
})

}

