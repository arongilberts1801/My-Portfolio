let fname = document.getElementById("fname");
let lname = document.getElementById("lname");
let email = document.getElementById("email");
let subject = document.getElementById("subject");
let textarea = document.getElementById("textarea");
let phone =document.getElementById("phone");
let submit= document.getElementsByClassName("form-contact")[0];

submit.addEventListener("submit",(e)=>{
    e.preventDefault();
    console.log("clicked");
    

    // write html for proper format to be send in mail
    let ebody=`
    <b>Name: </b>${fname.value}&nbsp;${lname.value}
    <br>
    <b>Email: </b>${email.value}
    <br>
    <b>Phone: </b>${phone.value}
    <br>
    <b>Subject: </b>${subject.value}
    <br>
    <b>TextArea:- </b>${textarea.value}
 
`
    // email code here
    Email.send({
         SecureToken : "072cd0ac-4872-460f-96b5-b316bd0d52ec ",
        To : 'arongilberts1801@gmail.com',
        From : "arongilberts1801@gmail.com",
        Subject : "Testing email from" + email.value,
        Body : ebody
    }).then(
      message => alert(arongilberts)  
    ); 

});
