

$.getJSON("http://api.openweathermap.org/data/2.5/forecast?q=delhi&appid=1589b57c1cdc84a5a4077441f1077e1d&units=metric",function(data){
    console.log(data);
    var icon ="http://openweathermap.org/img/w/"+data.weather[0].icon+".png";
    
    $('.icon').attr('src',icon);

});