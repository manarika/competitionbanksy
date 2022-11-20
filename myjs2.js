


var slide = new Array("1997-2002/1997.jpg", "1997-2002/1999.jpg", "1997-2002/2001.jpg", "1997-2002/2002.jpg","1997-2002/2002,3.jpg","1997-2002/2002,2.jpg");
var slide1= new Array("2003-2008/2003.jpg", "2003-2008/2003,3.jpg", "2003-2008/2003,2.jpg", "2003-2008/2004.jpg","2003-2008/2004,3.jpg","2003-2008/2004,2.jpg","2003-2008/2005.jpg","2003-2008/2005,1.png","2003-2008/2005,3.jpg","2003-2008/2006.jpg","2003-2008/2006,1.jpg","2003-2008/2007.jpg","2003-2008/2007,3.jpg","2003-2008/20072.jpg","2003-2008/2008.jpg","2003-2008/20082.jpg","2003-2008/20083.jpg");
var slid2=new Array("2009-2014/2009.jpg", "2009-2014/2009,2.jpg", "2009-2014/2010.jpg", "2009-2014/2010,3.jpg","2009-2014/2010,2.jpg","2009-2014/2011.jpg","2009-2014/2011,2.jpg","2009-2014/2011,3.jpg","2009-2014/2012.jpg","2009-2014/2013,2.jpg","2009-2014/2013.jpg","2009-2014/2014,2.jpg","2009-2014/2014,3.jpg","2009-2014/2014.jpg");
var slid3=new Array("2015-2018/2015.jpg", "2015-2018/2015,2.jpg", "2015-2018/2015,3.jpg", "2015-2018/2016.jpg","2015-2018/2018.jpg","2015-2018/2018,1.jpg","2015-2018/2018,2.jpg","2015-2018/2018,3.jpg","2015-2018/2018,4.jpg");
var numero = 0;

function ChangeSlide(sens) {
    numero = numero + sens;
    if (numero < 0)
        numero = slide.length - 1;
    if (numero > slide.length - 1)
        numero = 0;
    document.getElementById("slide").src = slide[numero];
}
setInterval("ChangeSlide(1)", 4000);
setInterval("ChangeSlide2(1)", 4000);
setInterval("ChangeSlide3(1)", 4000);
setInterval("ChangeSlide4(1)", 4000);
function ChangeSlide2(sens) {
    numero = numero + sens;
    if (numero < 0)
        numero = slide1.length - 1;
    if (numero > slide1.length - 1)
        numero = 0;
    document.getElementById("slide1").src = slide1[numero];
}
function ChangeSlide3(sens) {
    numero = numero + sens;
    if (numero < 0)
        numero = slid2.length - 1;
    if (numero > slid2.length - 1)
        numero = 0;
    document.getElementById("slide2").src = slid2[numero];
}
function ChangeSlide4(sens) {
    numero = numero + sens;
    if (numero < 0)
        numero = slid3.length - 1;
    if (numero > slid3.length - 1)
        numero = 0;
    document.getElementById("slide3").src = slid3[numero];
}