const calculateTemp=()=>{
const inputtemp=document.getElementById('temp').value;
const tempselect=document.getElementById('temp_type');
const valuetemp=temp_type.options[tempselect.selectedIndex].value;
const celTofah=(cel)=>{
    let fahrenheit=((cel*9/5)+32).toFixed(1);
    return fahrenheit;
}
const fahTocel=(fah)=>{
let celcius=((fah-32)*5/9).toFixed(1);
return celcius;
}
if(valuetemp=='cel'){
   document.getElementById('result').innerHTML=celTofah(inputtemp)+'&#176;Fahrenheit';

}
else{
    document.getElementById('result').innerHTML=fahTocel(inputtemp)+'&#176; Celcius'
}
}