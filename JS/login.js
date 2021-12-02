
// Data that will be stored in database
var correctUserID = `\u007f\u0080s=\u0081um~Jq|lqfw1lbr`;
var correctPass = `<:8sjlffph`;

// Function to encrypt strings
function plsEncrypt(str)
{
    let encoded = "";

    for (let i = 0; i < str.length; i++) 
{
    let cc = str[i].charCodeAt(0);

    let convValue = cc + i;

    if (convValue > 255)
    {
        convValue -= 256;
    }
    encoded += String.fromCharCode(convValue);
}

    let newstr = "";

    for (let j = encoded.length - 1; j >= 0; j--)
    {
        let revChar = encoded.charAt(j);
        newstr += revChar;
    }
    encoded = newstr;

    return encoded;
}

// Decrypt that shit
function plsDecrypt (str)
{
    let decoded = "";
    let newstr = "";

    for (let j = str.length - 1; j >= 0; j--)
    {
        let revChar = str.charAt(j);
        newstr += revChar;
    }

    str = newstr;

    for (let i = 0; i < str.length; i++)
    {
        let cc = str[i].charCodeAt(0);
    
        let convValue = cc - i;

        if (convValue < 0)
        {
            convValue = 256 - convValue;
        }

        decoded += String.fromCharCode(convValue);
    }

    return decoded;
}

// Onclick button event for login
var Btn = document.getElementById("submitBtn");
Btn.onclick = function credCheck ()
{
    console.log("Button Clicked");
    var emailID = document.getElementById("emailID").value;
    var password = document.getElementById("passID").value;
    
    let encryptedUID = plsEncrypt(emailID);
    let encryptedPID = plsEncrypt(password);

    if (encryptedEID === correctUserID){
        if(encryptedPID === correctPass){
            window.location.href = "file:///home/ayman/Documents/Stuff/Documents/School_Docs/C5_Computer_Science-HL/IA/Solution/HTML/home.html";
        }

    }

    alert("Email or Password incorrect.");
}