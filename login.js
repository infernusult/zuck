console.log("freckin 'ell m8, tha thang be workin doe");

var correctUserID = "raj.saketh@sahs.com";
var correctPass = "hodchem123";

function convertHash()
{

}
String.prototype.hashCode = function() {
    var hash = 0, i, chr;
    if (correctUserID.length === 0) return hash;
    for (i = 0; i < correctUserID.length; i++) {
      chr   = correctUserID.charCodeAt(i);
      hash  = ((hash << 5) - hash) + chr;
      hash |= 0; // Convert to 32bit int
    }
    return hash;
  };

  

//   var x = String.prototype.hashCode
  console.log(String.prototype.hashCode());

var Btn = document.getElementById("submitBtn");
Btn.onclick = function credCheck ()
{
    console.log("Button Clicked");
    var emailID = document.getElementById("emailID").value;
    var password = document.getElementById("passID").value;
    
    if (emailID === correctUserID)
    {
        // console.log(correctUserID, emailID);
        // console.log(password, correctPass);
        if(password === correctPass)
        {
            window.location.href = "file:///home/ayman/Documents/Stuff/Documents/School_Docs/C5_Computer_Science-HL/IA/Solution/HTML/home.html";
        }

    }

    alert("Email or Password incorrect.");
}