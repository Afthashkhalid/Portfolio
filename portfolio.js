// function sendMail() {
//     var params = {
//         name: document.getElementById("name").value ,
//         email: document.getElementById("email").value ,
//         message: document.getElementById("message").value ,
//     }; 
//     const serviceID="service_rnig5ul";
//     const templateID="template_wyyrr2p"

//   emailjs
//     .send(serviceID,templateID,params)
//     .then((res) =>{
//         document.getElementById("name").value = "";
//         document.getElementById("email").value = "";
//         document.getElementById("message").value = "";
//         console.log(res);
//         alert("your message sent succesfully");
//      })
//     .catch((err) => console.log(err));
// }

function sendMail() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    
    if (name === "" || email === "" || message === "") {
        alert("Please fill out all fields before submitting.");
        return;
    }

    var params = {
        name: name,
        email: email,
        message: message,
    };
    const serviceId="service_rnig5ul";
const templateId="template_wyyrr2p"

emailjs.send(serviceId,templateId, params)
.then(
    res => {
        document.getElementById("name").value="";
        document.getElementById("email").value="";
        document.getElementById("message").value="";

        console.log(res);
        alert("your message sent successfully")
    }
)
.catch(err=>console.log("error",err))
;
}




var sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right="0";
}
function closemenu(){
    sidemenu.style.right="-200px";
}