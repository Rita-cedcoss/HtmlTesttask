var Productitems=[{ ProductName:"iphone",ModelNumber:613,Price:16000, Availability:true},
{ ProductName:"widows",ModelNumber:64322,Price:19000, Availability:false},
{ ProductName:"Nokia",ModelNumber:62345,Price:5000, Availability:true},
{ ProductName:"redimi",ModelNumber:7654326,Price:12000, Availability:false}];
function ListDetails(args)
{
var text="<table id='tbl1'><tr><th>Product name</th><th>Model Number</th><th>Price</th><th>Availability</th></tr>";
    
if(args=="iPhone")
{

text+="<tr><td>"+Productitems[0].ProductName +"</td>"+ "<td>"+Productitems[0].ModelNumber+"</td>" + "<td>" +Productitems[0].Price+"</td><td>"+Productitems[0].Availability +"</td></tr>";
}
if(args=="windows")
{
text+="<tr><td>"+Productitems[1].ProductName +"</td>"+ "<td>"+Productitems[1].ModelNumber+"</td>" + "<td>" +Productitems[1].Price+"</td><td>"+Productitems[1].Availability +"</td></tr>";

}
if(args=="nokia")
{
text+="<tr><td>"+Productitems[2].ProductName +"</td>"+ "<td>"+Productitems[2].ModelNumber+"</td>" + "<td>" +Productitems[2].Price+ "</td><td>"+Productitems[2].Availability +"</td></tr>";
}
if(args=="redimi")
{

text+="<tr><td>"+Productitems[3].ProductName +"</td>"+ "<td>"+Productitems[3].ModelNumber+"</td>" + "<td>" +Productitems[3].Price+ "</td><td>"+Productitems[3].Availability +"</td></tr>";
}
text+="</table>";
document.getElementById('Divtable1').innerHTML=text;
}