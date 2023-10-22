var inp=new Date("sep 17,2024  15:23:10");
var a=setInterval(function(){

    var today=new Date().getTime();
    var left=inp-today;
    var day=Math.floor(left/(1000*60*60*24));
    var hour=Math.floor((left%(1000*60*60*24))/(1000*60*60));
    var minutes=Math.floor((left%(1000*60*60))/(60*1000));
    var second=Math.floor((left%(1000*60))/(1000));

    document.getElementById("counts").innerHTML=day+"d "+hour+"h "+minutes+"m "+second+"s";

    if (left<0)
    {
    clearInterval(a)
    document.getElementById("counts").innerHTML="Time Over";
}
 },1000);
