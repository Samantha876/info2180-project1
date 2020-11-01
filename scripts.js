const form=document.getElementsByClassName("form-group");

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let email= document.getElementbyTagName("input")[0].getAttribute("type");
    if (email.value==='' || name.value=== null){
        document.getElementsByClassName("message").innerHTML=('Please enter a valid email address');
    }else{
        document.getElementsByClassName("message").innerHTML= `Thank you! Your email address ${email} has been added to our mailing list.`;
        console.log("Form has been submitted");
    }    
})