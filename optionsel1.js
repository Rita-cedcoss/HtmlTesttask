var arrfrom=["option1","option2","option3","option4"]
var selectFrom=document.getElementById('selFrom');
var selTo=[];
var selectTo=document.getElementById('selTo');
for(i=0;i<arrfrom.length;i++)
{
    var opt = arrfrom[i];
    var select1 = document.createElement("option");
    select1.textContent = opt;
    selectFrom.appendChild(select1);
}
function Optionitem()
{
   for (var j=0;j<arrfrom.length;j++)
     {
          if(selectFrom.options[j].selected)
          {
            var x = selectFrom.options[j].index;
            
             var temp = arrfrom.splice(x,1);
             selTo.push(temp[0]);
              selectFrom.remove(x);
              
              j--;
             
          }

     }
     for(i=0;i<selTo.length;i++)
{
   
    var select2 = document.createElement("option");
    select2.textContent = selTo[i];
    selectTo.appendChild(select2);
}
     
}

