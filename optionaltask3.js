
 var order=[{fname:"",email:"",phone:"",address:"",city:"",postcode:"",province:"",
 producti1:"",producti2:"",producti3:"",dilivery:""}];

var valid=true;
function Placeorder()
{
   
    var uname=document.getElementById('name').value;
    
    var umail=document.getElementById('email').value;
    
    var Phone=document.getElementById('phone').value;
   
    var postcode=document.getElementById('postcode').value;
    
    var address=document.getElementById('address').value;
   
    var city=document.getElementById('city').value;
   
    var province=document.getElementById('province').value;
    
    var product1=document.getElementById('product1').value;
    
    var product2=document.getElementById('product2').value;
   
    var product3=document.getElementById('product3').value;
   
    var diltime=document.getElementById('diltime').value;
    

    var letters = /^([A-Z][^\s]*)/;
    var emailCheck= /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var phonecheck=/^[789][0-9]{9}$/;
    var postcodecheck=/^[0-9]{6}$/;
   
    
    if(!((uname.match(letters))))
    {
        document.getElementById('message1').innerHTML="Please Enter valid Name";
        valid = false; 
    }
    else
    {
        document.getElementById("message1").innerHTML = "";
    }
   
    if(!(umail.match(emailCheck)))
    {
        document.getElementById('message2').innerHTML="Please Enter valid email";
           valid=false;
    }
    else
    {
        document.getElementById("message2").innerHTML = "";
    }
   if(!(Phone.match(phonecheck)))
     {
        document.getElementById('message3').innerHTML="Please Enter valid phone";
    valid=false;
     }
     else
     {
        document.getElementById("message3").innerHTML = "";
     }
  if(!(postcode.match(postcodecheck)))
     {
        document.getElementById('message4').innerHTML="Please Enter valid post code";
           valid= false;
     }
     else
     {
        document.getElementById("message4").innerHTML = "";
     }
     
     if(valid==true)
     {


         
        document.getElementById('Divbottom').style.display="block";

    order[0].fname=uname;
    order[0].email=umail; 
  console.log(order[0].email);
    order[0].phone=Phone;
    order[0].address=address;
    order[0].city=city;
    order[0].postcode=postcode;
    order[0].province=province;
    order[0].producti1=product1;
    order[0].producti2=product2;
    order[0].producti3=product3;
    order[0].dilivery=diltime;
    console.log(order);
    
    document.getElementById('namea').innerHTML=order[0].fname;
    document.getElementById('emaila').innerHTML=order[0].email;
    document.getElementById('phonea').innerHTML=order[0].phone;
    document.getElementById('addressa').innerHTML=order[0].address;
    document.getElementById('product1a').innerHTML=order[0].producti1;
    document.getElementById('product2b').innerHTML=order[0].producti2;
    document.getElementById('product3c').innerHTML=order[0].producti3;
      
    var pprice1= product1*10;
     document.getElementById('producta').innerHTML="$"+pprice1;
     var pprice2= product2*20;
     document.getElementById('productb').innerHTML="$"+pprice2;
     var pprice3= product3*30;
     document.getElementById('productc').innerHTML="$"+pprice3;
     var ship=20; 
     var subtotal=pprice1+ pprice2+pprice3+ship;

     document.getElementById('subtotal').innerHTML="$"+subtotal;
      var taxes=subtotal*3/100;
      document.getElementById('tax').innerHTML="$"+taxes;
      total=subtotal+taxes;
      document.getElementById('total').innerHTML="$"+total;
    }
      

}