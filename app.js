var mainVector = [];
var allHeroes = ['imagenes/heroes/Aamon.png','imagenes/heroes/Akai.png','imagenes/heroes/Aldous.png','imagenes/heroes/Alice.png','imagenes/heroes/Alpha.png','imagenes/heroes/Alucard.png','imagenes/heroes/Angela.png','imagenes/heroes/Argus.png','imagenes/heroes/Atlas.png','imagenes/heroes/Aulus.png','imagenes/heroes/Aurora.png','imagenes/heroes/Badang.png','imagenes/heroes/Balmond.png','imagenes/heroes/Bane.png','imagenes/heroes/Barats.png','imagenes/heroes/Baxia.png','imagenes/heroes/Beatrix.png','imagenes/heroes/Belerick.png','imagenes/heroes/Benedetta.png','imagenes/heroes/Brody.png','imagenes/heroes/Bruno.png','imagenes/heroes/Carmilla.png','imagenes/heroes/Cecilion.png','imagenes/heroes/Change.png','imagenes/heroes/Chou.png','imagenes/heroes/Claude.png','imagenes/heroes/Clint.png','imagenes/heroes/Cyclops.png','imagenes/heroes/Diggie.png','imagenes/heroes/Dyrroth.png','imagenes/heroes/Edith.png','imagenes/heroes/Esmeralda.png','imagenes/heroes/Estes.png','imagenes/heroes/Eudora.png','imagenes/heroes/Fanny.png','imagenes/heroes/Faramis.png','imagenes/heroes/Floryn.png','imagenes/heroes/Franco.png','imagenes/heroes/Fredrinn.png','imagenes/heroes/Freya.png','imagenes/heroes/Gatotkaca.png','imagenes/heroes/Gloo.png','imagenes/heroes/Gord.png','imagenes/heroes/Granger.png','imagenes/heroes/Grock.png','imagenes/heroes/Guinevere.png','imagenes/heroes/Gusion.png','imagenes/heroes/Hanabi.png','imagenes/heroes/Hanzo.png','imagenes/heroes/Harith.png','imagenes/heroes/Harley.png','imagenes/heroes/Hayabusa.png','imagenes/heroes/Helcurt.png','imagenes/heroes/Hilda.png','imagenes/heroes/Hylos.png','imagenes/heroes/Irithel.png','imagenes/heroes/Jawhead.png','imagenes/heroes/Johnson.png','imagenes/heroes/Joy.png','imagenes/heroes/Julian.png','imagenes/heroes/Kadita.png','imagenes/heroes/Kagura.png','imagenes/heroes/Kaja.png','imagenes/heroes/Karina.png','imagenes/heroes/Karrie.png','imagenes/heroes/Khaleed.png','imagenes/heroes/Khufra.png','imagenes/heroes/Kimmy.png','imagenes/heroes/Lancelot.png','imagenes/heroes/Lapu_Lapu.png','imagenes/heroes/Layla.png','imagenes/heroes/Leomord.png','imagenes/heroes/Lesley.png','imagenes/heroes/Ling.png','imagenes/heroes/Lolita.png','imagenes/heroes/Lunox.png','imagenes/heroes/Luo_Yi.png','imagenes/heroes/Lylia.png','imagenes/heroes/Martis.png','imagenes/heroes/Masha.png','imagenes/heroes/Mathilda.png','imagenes/heroes/Melissa.png','imagenes/heroes/Minotaur.png','imagenes/heroes/Minsitthar.png','imagenes/heroes/Miya.png','imagenes/heroes/Moskov.png','imagenes/heroes/Nana.png','imagenes/heroes/Natalia.png','imagenes/heroes/Natan.png','imagenes/heroes/Odette.png','imagenes/heroes/Paquito.png','imagenes/heroes/Pharsa.png','imagenes/heroes/Phoveus.png','imagenes/heroes/Popol_and_Kupa.png','imagenes/heroes/Rafaela.png','imagenes/heroes/Roger.png','imagenes/heroes/Ruby.png','imagenes/heroes/Saber.png','imagenes/heroes/Selena.png','imagenes/heroes/Silvanna.png','imagenes/heroes/Sun.png','imagenes/heroes/Terizla.png','imagenes/heroes/Thamuz.png','imagenes/heroes/Tigreal.png','imagenes/heroes/Uranus.png','imagenes/heroes/Vale.png','imagenes/heroes/Valentina.png','imagenes/heroes/Valir.png','imagenes/heroes/Vexana.png','imagenes/heroes/Wanwan.png','imagenes/heroes/XBorg.png','imagenes/heroes/Xavier.png','imagenes/heroes/Yi_Sun_Shin.png','imagenes/heroes/Yin.png','imagenes/heroes/Yu_Zhong.png','imagenes/heroes/Yve.png','imagenes/heroes/Zhask.png','imagenes/heroes/Zilong.png'];
/*var tank = ['imagenes/heroes/Alice.png','imagenes/heroes/Tigreal.png','imagenes/heroes/Akai.png','imagenes/heroes/Franco.png','imagenes/heroes/Minotaur.png','imagenes/heroes/Lolita.png','imagenes/heroes/Ruby.png','imagenes/heroes/Johnson.png','imagenes/heroes/Hilda.png','imagenes/heroes/Gatotkaca.png','imagenes/heroes/Grock.png','imagenes/heroes/Hylos.png','imagenes/heroes/Uranus.png','imagenes/heroes/Belerick.png','imagenes/heroes/Khufra.png','imagenes/heroes/Esmeralda.png','imagenes/heroes/Baxia.png','imagenes/heroes/Atlas.png','imagenes/heroes/Barats.png','imagenes/heroes/Gloo.png','imagenes/heroes/Edith.png','imagenes/heroes/Fredrinn.png','imagenes/heroes/Masha.png'];
var fighter = ['imagenes/heroes/Balmond.png','imagenes/heroes/Alucard.png','imagenes/heroes/Bane.png','imagenes/heroes/Zilong.png','imagenes/heroes/Freya.png','imagenes/heroes/Chou.png','imagenes/heroes/Sun.png','imagenes/heroes/Alpha.png','imagenes/heroes/Ruby.png','imagenes/heroes/Hilda.png','imagenes/heroes/Lapu_Lapu.png','imagenes/heroes/Roger.png','imagenes/heroes/Gatotkaca.png','imagenes/heroes/Argus.png','imagenes/heroes/Martis.png','imagenes/heroes/Kaja.png','imagenes/heroes/Aldous.png','imagenes/heroes/Leomord.png','imagenes/heroes/Thamuz.png','imagenes/heroes/Minsitthar.png','imagenes/heroes/Badang.png','imagenes/heroes/Guinevere.png','imagenes/heroes/XBorg.png','imagenes/heroes/Dyrroth.png','imagenes/heroes/Silvanna.png','imagenes/heroes/Yu_Zhong.png','imagenes/heroes/Barats.png','imagenes/heroes/Paquito.png','imagenes/heroes/Phoveus.png','imagenes/heroes/Yin.png','imagenes/heroes/Julian.png','imagenes/heroes/Fredrinn.png','imagenes/heroes/Jawhead.png','imagenes/heroes/Terizla.png','imagenes/heroes/Masha.png','imagenes/heroes/Khaleed.png','imagenes/heroes/Aulus.png'];
var assassin = ['imagenes/heroes/Saber.png','imagenes/heroes/Alucard.png','imagenes/heroes/Zilong.png','imagenes/heroes/Fanny.png','imagenes/heroes/Yi_Sun_Shin.png','imagenes/heroes/Harley.png','imagenes/heroes/Lancelot.png','imagenes/heroes/Helcurt.png','imagenes/heroes/Lesley.png','imagenes/heroes/Gusion.png','imagenes/heroes/Selena.png','imagenes/heroes/Kadita.png','imagenes/heroes/Ling.png','imagenes/heroes/Benedetta.png','imagenes/heroes/Aamon.png','imagenes/heroes/Karina.png','imagenes/heroes/Hayabusa.png','imagenes/heroes/Natalia.png','imagenes/heroes/Hanzo.png','imagenes/heroes/Mathilda.png','imagenes/heroes/Joy.png'];
var mage = ['imagenes/heroes/Alice.png','imagenes/heroes/Nana.png','imagenes/heroes/Bane.png','imagenes/heroes/Eudora.png','imagenes/heroes/Gord.png','imagenes/heroes/Kagura.png','imagenes/heroes/Cyclops.png','imagenes/heroes/Aurora.png','imagenes/heroes/Vexana.png','imagenes/heroes/Harley.png','imagenes/heroes/Odette.png','imagenes/heroes/Valir.png','imagenes/heroes/Selena.png','imagenes/heroes/Vale.png','imagenes/heroes/Lunox.png','imagenes/heroes/Kimmy.png','imagenes/heroes/Harith.png','imagenes/heroes/Kadita.png','imagenes/heroes/Esmeralda.png','imagenes/heroes/Lylia.png','imagenes/heroes/Cecilion.png','imagenes/heroes/Luo_Yi.png','imagenes/heroes/Yve.png','imagenes/heroes/Valentina.png','imagenes/heroes/Xavier.png','imagenes/heroes/Julian.png','imagenes/heroes/Zhask.png','imagenes/heroes/Change.png','imagenes/heroes/Pharsa.png','imagenes/heroes/Faramis.png'];
var adc = ['imagenes/heroes/Miya.png','imagenes/heroes/Bruno.png','imagenes/heroes/Clint.png','imagenes/heroes/Layla.png','imagenes/heroes/Yi_Sun_Shin.png','imagenes/heroes/Roger.png','imagenes/heroes/Karrie.png','imagenes/heroes/Irithel.png','imagenes/heroes/Lesley.png','imagenes/heroes/Claude.png','imagenes/heroes/Kimmy.png','imagenes/heroes/Granger.png','imagenes/heroes/Wanwan.png','imagenes/heroes/Popol_and_Kupa.png','imagenes/heroes/Brody.png','imagenes/heroes/Beatrix.png','imagenes/heroes/Natan.png','imagenes/heroes/Edith.png','imagenes/heroes/Melissa.png','imagenes/heroes/Moskov.png','imagenes/heroes/Hanabi.png'];
var support = ['imagenes/heroes/Nana.png','imagenes/heroes/Tigreal.png','imagenes/heroes/Akai.png','imagenes/heroes/Franco.png','imagenes/heroes/Rafaela.png','imagenes/heroes/Minotaur.png','imagenes/heroes/Lolita.png','imagenes/heroes/Estes.png','imagenes/heroes/Diggie.png','imagenes/heroes/Angela.png','imagenes/heroes/Kaja.png','imagenes/heroes/Khufra.png','imagenes/heroes/Atlas.png','imagenes/heroes/Floryn.png','imagenes/heroes/Faramis.png','imagenes/heroes/Carmilla.png','imagenes/heroes/Mathilda.png'];*/
var gold = ['imagenes/heroes/Beatrix.png','imagenes/heroes/Brody.png','imagenes/heroes/Bruno.png','imagenes/heroes/Claude.png','imagenes/heroes/Clint.png','imagenes/heroes/Granger.png','imagenes/heroes/Hanabi.png','imagenes/heroes/Irithel.png','imagenes/heroes/Karrie.png','imagenes/heroes/Kimmy.png','imagenes/heroes/Layla.png','imagenes/heroes/Lesley.png','imagenes/heroes/Melissa.png','imagenes/heroes/Miya.png','imagenes/heroes/Moskov.png','imagenes/heroes/Natan.png','imagenes/heroes/Popol_and_Kupa.png','imagenes/heroes/Wanwan.png'];
var exp = ['imagenes/heroes/Aldous.png','imagenes/heroes/Alice.png','imagenes/heroes/Alpha.png','imagenes/heroes/Argus.png','imagenes/heroes/Aulus.png','imagenes/heroes/Badang.png','imagenes/heroes/Balmond.png','imagenes/heroes/Bane.png','imagenes/heroes/Barats.png','imagenes/heroes/Belerick.png','imagenes/heroes/Benedetta.png','imagenes/heroes/Carmilla.png','imagenes/heroes/Chou.png','imagenes/heroes/Dyrroth.png','imagenes/heroes/Edith.png','imagenes/heroes/Esmeralda.png','imagenes/heroes/Fredrinn.png','imagenes/heroes/Freya.png','imagenes/heroes/Gatotkaca.png','imagenes/heroes/Gloo.png','imagenes/heroes/Grock.png','imagenes/heroes/Guinevere.png','imagenes/heroes/Hilda.png','imagenes/heroes/Hylos.png','imagenes/heroes/Jawhead.png','imagenes/heroes/Joy.png','imagenes/heroes/Julian.png','imagenes/heroes/Kaja.png','imagenes/heroes/Khaleed.png','imagenes/heroes/Lapu_Lapu.png','imagenes/heroes/Leomord.png','imagenes/heroes/Martis.png','imagenes/heroes/Masha.png','imagenes/heroes/Minsitthar.png','imagenes/heroes/Paquito.png','imagenes/heroes/Phoveus.png','imagenes/heroes/Ruby.png','imagenes/heroes/Silvanna.png','imagenes/heroes/Sun.png','imagenes/heroes/Terizla.png','imagenes/heroes/Thamuz.png','imagenes/heroes/Uranus.png','imagenes/heroes/Valentina.png','imagenes/heroes/XBorg.png','imagenes/heroes/Yin.png','imagenes/heroes/Yu_Zhong.png','imagenes/heroes/Zilong.png'];
var mid = ['imagenes/heroes/Alice.png','imagenes/heroes/Aurora.png','imagenes/heroes/Cecilion.png','imagenes/heroes/Change.png','imagenes/heroes/Cyclops.png','imagenes/heroes/Eudora.png','imagenes/heroes/Faramis.png','imagenes/heroes/Gord.png','imagenes/heroes/Harith.png','imagenes/heroes/Harley.png','imagenes/heroes/Kadita.png','imagenes/heroes/Kagura.png','imagenes/heroes/Lunox.png','imagenes/heroes/Luo_Yi.png','imagenes/heroes/Lylia.png','imagenes/heroes/Mathilda.png','imagenes/heroes/Nana.png','imagenes/heroes/Odette.png','imagenes/heroes/Pharsa.png','imagenes/heroes/Vale.png','imagenes/heroes/Valentina.png','imagenes/heroes/Valir.png','imagenes/heroes/Vexana.png','imagenes/heroes/Xavier.png','imagenes/heroes/Yve.png','imagenes/heroes/Zhask.png'];
var jungle = ['imagenes/heroes/Aamon.png','imagenes/heroes/Akai.png','imagenes/heroes/Aldous.png','imagenes/heroes/Alpha.png','imagenes/heroes/Alucard.png','imagenes/heroes/Argus.png','imagenes/heroes/Aulus.png','imagenes/heroes/Balmond.png','imagenes/heroes/Bane.png','imagenes/heroes/Barats.png','imagenes/heroes/Baxia.png','imagenes/heroes/Benedetta.png','imagenes/heroes/Dyrroth.png','imagenes/heroes/Fanny.png','imagenes/heroes/Fredrinn.png','imagenes/heroes/Freya.png','imagenes/heroes/Granger.png','imagenes/heroes/Gusion.png','imagenes/heroes/Hanzo.png','imagenes/heroes/Harith.png','imagenes/heroes/Harley.png','imagenes/heroes/Hayabusa.png','imagenes/heroes/Helcurt.png','imagenes/heroes/Joy.png','imagenes/heroes/Julian.png','imagenes/heroes/Karina.png','imagenes/heroes/Kimmy.png','imagenes/heroes/Lancelot.png','imagenes/heroes/Lapu_Lapu.png','imagenes/heroes/Leomord.png','imagenes/heroes/Ling.png','imagenes/heroes/Martis.png','imagenes/heroes/Masha.png','imagenes/heroes/Natalia.png','imagenes/heroes/Natan.png','imagenes/heroes/Paquito.png','imagenes/heroes/Popol_and_Kupa.png','imagenes/heroes/Roger.png','imagenes/heroes/Saber.png','imagenes/heroes/Selena.png','imagenes/heroes/Silvanna.png','imagenes/heroes/Sun.png','imagenes/heroes/Thamuz.png','imagenes/heroes/XBorg.png','imagenes/heroes/Yi_Sun_Shin.png','imagenes/heroes/Yin.png','imagenes/heroes/Zilong.png'];
var roamer = ['imagenes/heroes/Akai.png','imagenes/heroes/Angela.png','imagenes/heroes/Atlas.png','imagenes/heroes/Aurora.png','imagenes/heroes/Baxia.png','imagenes/heroes/Belerick.png','imagenes/heroes/Carmilla.png','imagenes/heroes/Chou.png','imagenes/heroes/Diggie.png','imagenes/heroes/Edith.png','imagenes/heroes/Estes.png','imagenes/heroes/Faramis.png','imagenes/heroes/Floryn.png','imagenes/heroes/Franco.png','imagenes/heroes/Gatotkaca.png','imagenes/heroes/Gloo.png','imagenes/heroes/Grock.png','imagenes/heroes/Hilda.png','imagenes/heroes/Hylos.png','imagenes/heroes/Jawhead.png','imagenes/heroes/Johnson.png','imagenes/heroes/Kaja.png','imagenes/heroes/Khufra.png','imagenes/heroes/Lolita.png','imagenes/heroes/Mathilda.png','imagenes/heroes/Minotaur.png','imagenes/heroes/Minsitthar.png','imagenes/heroes/Nana.png','imagenes/heroes/Natalia.png','imagenes/heroes/Odette.png','imagenes/heroes/Ruby.png','imagenes/heroes/Selena.png','imagenes/heroes/Tigreal.png'];

var i = 0;
var timer;
       
function changeImage(){
    
    document.getElementById("slide").src=mainVector[i];

    if(i < mainVector.length - 1){i++;}
    else {i = 0;}

    clearTimeout(timer);
    timer = setTimeout("changeImage()", 50);
}
           
function stopShow(){
    clearTimeout(timer);
}  
           
function runShow() {
    changeImage();
}

var onoff = false;

function onlybtn() {
    if(onoff == false){
        runShow();
        onoff = true;
    }
    else{
        stopShow();
        onoff = false;
    }
}

var opt=0;
function rolSelector(opt){
    stopShow();
    switch(opt){
    case 1: 
        mainVector = allHeroes;
        break;
    case 2:
        mainVector = gold;
        break;
    case 3:
        mainVector = exp;
        break;
    case 4:
        mainVector = mid;
        break;
    case 5:
        mainVector = jungle;
        break;
    case 6:
        mainVector = roamer;
        break;
    }
}



window.onload = stopShow;
rolSelector(1);
