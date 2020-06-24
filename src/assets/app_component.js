

function validateinputs()
{
var first_name = document.getElementById('firstName').value;
var last_name = document.getElementById('lastName').value;
var user_name = document.getElementById('userName').value;
var password = document.getElementById('password').value;
var country = document.getElementById('country').value;


    alertmessage='';

if(password.length<8)

{

    alertmessage= alertmessage+ "Password Error : \t Password is too short. It should contain atleast 8 characters\n";


}

var strongpassword=0;
for(var i=0;i<password.length;i++)
{
    if( (password[i]>='a' && password[i]<='z') || (password[i]>='A' && password[i]<='Z'));
    else
    strongpassword=1;
}

if(strongpassword==0)
alertmessage = alertmessage+"\t\t\t\tYour password only contains alphabets.\n\t\t\t\t Use digits, symbols to make it more strong\n";

if(first_name[0].toUpperCase()!=first_name[0] || last_name[0].toUpperCase()!=last_name[0])
{
alertmessage= alertmessage+"Name Field Error :\t Your  name should start with a capital letter.\n";

}

if( (user_name==first_name) || (user_name== last_name) )
{
    alertmessage=alertmessage+"Username Field error :\tYour username cannot be same as your name\n";
}

errorcountry=0;
for(var i=0;i<country.length;i++)
{
    if((country[i]>='a' && country[i]<='z') || (country[i]>='A' && country[i]<='Z'));
    else
    {errorcountry=1;
        break;}
}

if(errorcountry==1)
{
    alertmessage=alertmessage+"Country Field error :\tThe name of a country can only contain alphabets.\n";
 
}
if(alertmessage!='')
{   
    alert(alertmessage);
     return false;
    
}

}
