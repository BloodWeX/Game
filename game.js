
//Dev var//
let click = 0;
idjcounter = 0;
idj = idjcounter;

var setcore;
var h6=document.getElementById("h6");

function scorepersecon(){
    setcore=click;
    setTimeout(function() {
    setcore-=click; number=setcore*-1; gennumberconverter();if(number<0){number=0;}h6.innerText=(number)+":Coins per second";
    scorepersecon(); 
    }, 1000);
}
menukey="//check//";
function createmenukey(){
    Mkey=fireupgrade.level+" "+arcaneupgrade.level+" "+"PH-ice"+" "+earthupg.level+" "+menu.allspellsupglevel+" "+autoupg.level+
    ' \n'+ menu.m10X+" "+menu.mmlevel+" "+ "PH";
    breakmenukey();
}
function breakmenukey(){
     for (var i = 0; i < Mkey.length; i++) {   
        if (Mkey[i] == undefined || Mkey[i] == null) {
            Mkey[i] = 0; }   }
    fireupgrade.level=Mkey[0]; arcaneupgrade.level=Mkey[1]; "PHICE";
    earthupg.level=Mkey[3]; menu.allspellsupglevel=Mkey[4]; autoupg.level=Mkey[5]; 
    console.log(Mkey +" Length"+Mkey.length);
}
var playertoken="";
const space=' ';
//FINISHTOKE//
function createtoken(){
    playertoken=+' \n'+score+
    ' \n'+clicker.truestatus+
    ' \n'+prestige.truestatus+
    ' \n'+mana.truestatus+
    ' \n'+auto.truestatus+
    ' \n'+rage.level+" "+rage.player+" "+rage.cap
     
    //Menu encryption//
    +' \n'+fireupgrade.level+" "+autoupg.$+" "+Avar+" "+earthupg.level+" "+menu.allspellsupglevel+" "+autoupg.level;
    +' \n'+menu.upgr2c1+" "+menu.upgr2c1
    +' \n'+menu.upgr3c1+" "+menu.upgr3c2+" "+menu.upgr3c3+" "+menu.upgr3c4+" "+menu.upgr3c5+" "+menu.upgr3c16+
    //Spell encryption level//
    +' \n'+auto.level+" "+Avar+" "+earth.level+" "+arcane.level+" "+clicker+" "+fire.level+" "+ice.level+" "+mana.level+" "+rage.level
    ;
    localStorage.setItem("GS",JSON.stringify(playertoken));
    breaktoken();
}
function breaktoken(){
    breakplayertoken(playertoken, space);
}
function breakplayertoken(token, seperator){
    const tokensplit=token.split(seperator);
    var TokenState= JSON.parse(localStorage.getItem("GS"));
    console.log(tokensplit[0]+tokensplit[1]+ tokensplit[2]+ tokensplit[3]+ tokensplit[4]+ tokensplit[5] );
;
    console.log('original string:'+token);
    console.log("The array has "+tokensplit.length+" elements: "+ tokensplit.join(' / '));
message.innerText=tokensplit[2];
}
let score = 0;
let number=0;
let set="";


var lockpng = "../Logs/lock.png";

//Menu $:cost;, UPG:upgmenu;,//
const menu = {
    open:"upg, stats prestige ",
    return:document.getElementById("main"),
    fieldset:document.getElementById("hiddenwrap"),
    menutab:document.getElementById("menutab"),
    statstab:document.getElementById("statstab"),
    stats:document.getElementById("stats"), statTC:"",
    statstext:document.getElementById("statstext"),
    creditstab:document.getElementById("creditstab"),
    upgtab:document.getElementById("upgtab"),
    upgT:document.getElementById('upgradetable'),
    upgtext:document.getElementById("upgradetext"),
    prestigelocktab:document.getElementById("prestigelock"),
    prestigetab:document.getElementById("prestigetab"),
    prestiget:document.getElementById("prestigetable"),
    prestigetext:document.getElementById("prestigetabbtntext"),
    //ROW1//
    fireballxupg$:0,  earthquakeupg$:100000,
    arcupgdesc:document.getElementById("arcupgdesc"),arc$:document.getElementById("arcmenuprice"), arcimg:document.getElementById("arcautoupgimg"),

    earhquakeupgdesc:document.getElementById('earthquakeupgdesc'),
    allspells:document.getElementById("spellmultimenu"),
    spellmultiimg:document.getElementById("spellmultiimage"),
    spellmulti$:document.getElementById("spellmultiprice"),
    ach$: document.getElementById("pr1c6"),
    achdesc:document.getElementById("achelpdesc"),
    //row2//
    manab10:document.getElementById('pr2c1'),
    manaflow$:document.getElementById("manafprice"), manaflowimg:document.getElementById("manafimg"),
    manaflowdesc:document.getElementById("manafdesc"), manaflowtitle:document.getElementById("manaftitle"),
    dbzbusterimg:document.getElementById("dbzimg"),
    dzp:document.getElementById("dbzp"),
    dbzbusterdesc:document.getElementById("dbzdesc"),
    ragedesc:document.getElementById("24desc"),
    rageprice:document.getElementById("rageulprice"),
    rageimg:document.getElementById("rageunlock"),
    manamaxprice:document.getElementById('pr2c5'),
    manamaxdesc:document.getElementById("manamaxupgdesc"),
    shiftery$:420690000000,
    shiftlvl:0,
    
    //row 3//
    upgr3c1:document.getElementById("pr3c1"), r3c1img:document.getElementById("imgr3c1"),
    mugpr:document.getElementById("pr3c2"), manapriceimg:document.getElementById("imgr3c2"),
    mana$desc:document.getElementById("manareddesc"),
    upgr3c3:document.getElementById("pr3c3"), r3c3img:document.getElementById("imgr3c3"),
    rmana$:document.getElementById("ragemanaprice"), rmimg:document.getElementById("ragemanaimg"),
    rmdesc:document.getElementById("ragemanadesc"),
    upgr3c5:document.getElementById("pr3c5"), r3c5img:document.getElementById("imgr3c5"),
    d$:document.getElementById("dprice"), dimg:document.getElementById("dupeimg"),
    upgTab:0,
    statsTab:0,
    menuTab:0,
    prestigeTab:0,
    exitsTab:0,
}
const menugroup={
    dbz:"dbzbuster", dbzlvl:0, dbz$:40300000000000000,
}
const gem={
    gems:0,
    gemtimer:0,

}
const gemupgsheet={}
const prestige = {
    level:0, prog:0, req:1000, clickval:0,
    unlock$:0,
    totalPP:0,
    
    PPinc:3,
    PPmenu:"emptystring",
    multi:1,
    progcount: document.getElementById('prestigeprogress'),
    capcount: document.getElementById('prestigecap'),
    levelcount:document.getElementById("prestigelevelcount"),
    bar:document.getElementById('prestigebar'),
    overlay:document.getElementById("prestige"),
    pF:document.getElementById("Prestigeinload"),
    stat:document.getElementById("prestige_of"),
    Ybtn:document.getElementById("prestigeY"),
    Nbtn:document.getElementById("prestigeN"),
    unlocked:false,
    truestatus:"",
}
var prestigeboard=[
["0", "0","0", "0","0", "0" ],
["0", "0","0", "0","0", "0"],
["0", "0","0", "0","0", "0"],
["0", "0","0", "0","0", "0"]
];
const playerstats = {
    totalclicks: document.getElementById("tc#"),
    mcupg: document.getElementById("mcupg#"),
    multiplier: document.getElementById("multi#"),
    spellcount: document.getElementById("tcCast"),
    achievement: document.getElementById("ACH"),
    status:"",
}

var myVar;
var manatimer;

///scorecounters///

var message = document.getElementById('messages');
var messagetimer;


var p8 = document.getElementById('button8txt');
let p8val = 1000;

//up img ids//
var upGimg = document.getElementById('upgimg');


const player= {
    id:"stri",
    spellmulti:0,
    clickmulti:0,
}
const clicker={
    totalclicks:0,
    Ptc:0,
    level:1,
    multi:1,
    upg$:100,
    image:document.getElementById("clicker"),
    scorecounter:document.getElementById("scorecounter"),
    tcounter:document.getElementById("TCcounter"),
    multicounter:document.getElementById("multicounter"),
    p0:document.getElementById("button0txt"),
    truestatus:"",
}
var buyautos = document.getElementById('buyauto');
const auto ={
    level:0,   upg$:100,
    help:0, helperlvl:0, helper$:0, helpertotal:0,
    runcount:0,
    cc:document.getElementById('autocost'),
    levelcounter:document.getElementById("autolevelcounter"),
    count: document.getElementById('autoclickercount'),
    top:document.getElementById("autotop"),
    image: document.getElementById("buyauto"),
    btn:document.getElementById("autobutton"),
    master:document.getElementById("abvauto"),
    status:"basicbitch",
    truestatus:"",}
const autoupg={
    level:0,
    upg$:600000,    
}
const mana = {
    level:0,upg$:0 , player: 0, max: 1000,
    regen:0, regentotal: 0,
    
    multilvl:0, spellmultiupg$:0, smv:1,
    baseupg:0, baseupg$:9999999,
    flow$:0,flowlvl:0,
    maxlvl:0, maxinc:100,maxupg$:0,
    PRlvl:0, reduction:0, PR$:0,
    duplicater:0,
    runcount:0,
    
    levelcounter:document.getElementById("manalevelcounter"),
    regencounter:document.getElementById("manaregencounter"),
    count: document.getElementById('playermanacount'),
    maxc: document.getElementById('manamaxcount'),
    image: document.getElementById("metergain"),
    btn:document.getElementById("manabutton"),
    master:document.getElementById("abvmana"),
    p2:document.getElementById("manaupgcost"),
    range:document.getElementById("manabar"),
    top:document.getElementById("manatop"),
    upgrade:"notready",
    status:"notready",
    truestatus:"",
}

const manaupgrade = {
    manaimg:"../Logs/mfireball.png",
    bmanaimg:"../Logs/mfireballblue.png",
    maxupglevel:0,
}

//RAGE//
var ragetimer;
 const rage = {   
     level:0, regen:0,
     player:0, cap:333,
     upg$:6000000000,
     mana$:100, reduction:0, re$:0, relvl:0,
     runcount:0,
     capcount:document.getElementById("ragecap"),
     runcounter:document.getElementById("rageruncounter"),
     cc:document.getElementById('rageupgcost'),
     mcc:document.getElementById('ragemanacost'),
     levelcounter:document.getElementById("ragelevelcounter"),
     count: document.getElementById('playerragecounter'),
     img: document.getElementById("rage"),
     top:document.getElementById("ragetop"),
     btn:document.getElementById("ragebutton"),
     master:document.getElementById("abvrage"),
     upgrade:"",
     status:"basicbitch",
     truestatus:"",
 }
 //Fireball//
const fire = {
    castcost:10,   
    upgradecost: 10,
    val: 5,
    level:0,
    castcounter:0,
    cc: document.getElementById('fireballcastcost'),
    image:document.getElementById("fireball"),
    btn: document.getElementById("fbbutton"),
    master: document.getElementById("abvfire"),
    p4:document.getElementById("button4txt"),
    counter:document.getElementById('firecounter'),
    levelcounter:document.getElementById('firelevel'),
                
    status:"basicbitch",
    cast:"notready",
    upgrade:"notready",
    truestatus:"",
}
const fireupgrade = {
    level:0,
    $: 7500,
    x1ballimg:"../Logs/x1fireball.png",
    x2ballimg:"../Logs/x2fireball.png",
    x3ballimg:"../Logs/x3fireball.png",
    x5ballimg:"../Logs/x5fireball.png",
    x7ballimg:"../Logs/x7fireball.png",
    mayhemballimg:"../Logs/mayhemfireball.png",
    description:document.getElementById('fireupgdesc'),
    title:document.getElementById('titler1c1'), 
    image: document.getElementById('tdr1c1'),
    price: document.getElementById('pr1c1'),
    
}

//ARCANE//
var arcaneautotimer = "";
const arcane = {
    level:0, val:1,
    cast$:1, upgrade$: 133, 
    auto:0, auto$:0,
    castcounter:0,
    cc:document.getElementById("arcanecastcost"),
    image:document.getElementById("arcaneball"),
    btn:document.getElementById("arcbutton"),
    master:document.getElementById("abvarc"),
    p6:document.getElementById("button6txt"),
    counter:document.getElementById('arccounter'),
    levelcounter:document.getElementById('arclevel'),

    arcane:"",    
    cast:"notready",
    upgrade:"notready",
    status:"basicbitch",
    truestatus:"",
   
}

//ICE//
var Iceball = document.getElementById('iceball');
var param3 = 1300; //iceball var//
var p3 = document.getElementById('button3txt');

const ice ={
    level:0,
    val:11,
    cast$:290,
    upg$:40000,
    castcounter:0,

    cc: document.getElementById('icecastcost'),
    image:document.getElementById("iceball"),
    btn: document.getElementById("icebutton"),
    master: document.getElementById("abvice"),
    p3:document.getElementById("button3txt"),
    counter:document.getElementById('icecounter'),
    levelcounter:document.getElementById('icelevel'),

    status:"basicbitch",
    cast:"notready",
    truestatus:"",
}

//EARTH//
var earthcd;
const earth ={
    level:0,
    val:1000,
    cast$:1000,
    upg$:787878,
    castcounter:0,
    cc: document.getElementById('earthcastcost'),
    image: document.getElementById("earthball"),
    btn: document.getElementById("earthbutton"),
    master: document.getElementById("abvearth"),
    p7:document.getElementById("button7txt"),
    counter:document.getElementById('earthcounter'),
    levelcounter:document.getElementById('earthlevel'),
     
    grow:"../Logs/earthgrow.png",    
    upgrade:"notready",       
    status:"basicbitch",
    cast:"notready",
    truestatus:"",
}
const earthupg ={
    level:0,
    upg$:100,
    magmin:1,
    magmax:9,
    maggen:0,
    upgdesc:document.getElementById("earthquakeugdesc"),
    magmincounter:document.getElementById("magmincounter"),
    price:document.getElementById("pr1c4"),
    master:document.getElementById("tdr1c4"),
}
//BARS//

var Pleveltext = document.getElementById('levelt');

var range = document.getElementById('myrange');

//sHORTHAND STRINGS//
var Avar = "Critical failure";
var nm = "No money, purchase failed";
var upgm= "Upgraed Maxed!!";

function save(){
    saveclick();
    saveprestige();
    savespellstate()

 
    console.log("Saved state");
}
function saveclick(){
localStorage.setItem("score",click); localStorage.setItem("tc",clicker.totalclicks);
}
function saveprestige(){
localStorage.setItem("Pstatus", JSON.stringify(prestige.truestatus));  console.log(localStorage.getItem("Pstatus").length)}
function savespellstate(){
    savemana();
}
function savemana(){
    localStorage.setItem("Mlevel",mana.level);
    localStorage.setItem("Mruncount",mana.runcount);
    localStorage.setItem("Mmax",mana.max);
    localStorage.setItem("Maxupglevel",mana.maxlvl);
}
function load(){
    loadprestige();
    loadclick();
    loadmana();
    console.log('Load state');
}
function loadclick(){
    click=localStorage.getItem("score");
    clicker.totalclicks=localStorage.getItem("tc");
}
function loadprestige(){
    prestige.level=tokenspilt[0]; prestige.req=tokenspilt[2];
    prestige.prog=tokenspilt[1]; updateprestigecounter();
}
function loadmana(){
    mana.level =tokenspilt[3]; mana.runcount= tokenspilt[4];
    mana.max=localStorage.getItem("Mmax"); mana.maxlvl=localStorage.getItem("Maxupglevel");
    updatemana();}
//DEV//
var scheat;
var cheat=1000000;
function pluscheat(){
    
    click+=cheat;
    cheat=cheat*2+cheat*(cheat+1);
    mana.player+=500;
    scheat=cheat;
    number=scheat; gennumberconverter(); p8.innerText=number+'💰';
    message.innerText = "Cheat used! +"+number;
   
    console.log('çheat used - 10000');
    levelup(levelupvar = 1000);
    incrementandset();
    incrementandsetmana();
    updatetext();
}
var levelupvar = 0;
function levelup(levelupvar) {
    prestige.prog += levelupvar;
    clicker.totalclicks+=levelupvar;
    clicker.Ptc+=levelupvar;
   
    
    if (prestige.prog >= prestige.req) {
        prestige.prog = prestige.req;
        prestige.boo = 1;
    }
    else {
        return;
    }document.getElementById("prestigebar").value = prestige.prog; updateprestigecounter();
}
//Main inc function, reg click, log score//
//incprestigebar//

function incrementandset(){
    
    click += clicker.level*(clicker.multi +1);
    click = Math.floor(click);
    updateclick();
}

function clickreset(){
    click=0;
    incrementandset();
}
function updateclick(){
    if(click==null){click=0;}

    clicker.upg$=Math.ceil(((clicker.level+1)*50)+(clicker.level*1.2));

    clicker.multi = prestige.level * 1.51;
    clicker.multi = Math.round(clicker.multi *100)/100;
    scorenumberconvertor();
    clicker.scorecounter.innerText=score+'💰';
    clicker.tcounter.innerText=clicker.totalclicks;
    clicker.multicounter.innerText=clicker.multi;
 number = clicker.upg$;  gennumberconverter(); clicker.p0.innerText= number;  
 BZbuster();
 clicker.truestatus=clicker.level+" "+clicker.upg$+" "+clicker.multi+" "+clicker.totalclicks;

}


function updatetext(){
    updateprestigecounter();
    updateclick();
    updatemana();
    updateautoclicker();
    updatefirecounter();
    updateice();
    updatearth();

}
function updatemenu(){  updatestatmenutext(); 
     updatemenufireball(); updatemenuarcauto(); updatemenuearth(); updatemenuspellmulti(); updatemenuachelper();
    
    updatebase10(); updatemanaoverflow();  updatemenudbzbuster(); updatemenurul();  updatemenumanamax(); shiftupdate(); 

        updatemenumana$();     updatemenuragereduction();      updatemenuduper();
    }





//DEV, sep by **//


function selftestini(){
    selftest();
   
setTimeout(function(){
selftestini();
},1000); }

//Logs totalclickcount,score,prestigelvl,rage//
function selftest(){
    setstatus();
    updatetext();

console.log("Debug stats:"+'\n'+"Setstatus:Selftest: "+'\n'
+" :Clicker:= "+click+" "+clicker.truestatus+'\n'+
" :Autoclicker:="+ auto.truestatus
+'\n'+" :Multiplier ="+ clicker.multi+" AutoClvl =" +'\n'

+'\n'+":Spells:"+'\n'+
"Spellmultiplier "+player.spellmulti+'\n'+
" :Mana:= "+mana.truestatus+'\n'
+'\n'+" :Fireball:= "+fire.truestatus +'\n'
+'\n'+" :Arcane:="+ arcane.truestatus+'\n'
+'\n'+" :Ice:="+ice.truestatus+'\n'
+'\n'+" :Earth:="+earth.truestatus+'\n'
+'\n'+":Prestige= "+prestige.truestatus+'\n'

+'\n'+" :Rage=  relvl :"+rage.relvl);  
}
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(ndom() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}
function scorenumberconvertor(){
    if (click <=  99999){
        score=click;  }
    else if (click < 1000000){
        score=(click/1000).toFixed(2)+"K"; }
    else if (click < 1000000000){
        score=(click/1000000).toFixed(2)+"M"; }
    else if(click < 1000000000000){
        score=(click/1000000000).toFixed(2)+"B"; }
    else if(click < 100000000000000){
        score=(click/100000000000).toFixed(2)+"T";}
    else if(click < 10000000000000000){
        score=(click/10000000000000).toFixed(2)+"Qua";}
    else if(click < 1000000000000000000){
        score=(click/1000000000000000).toFixed(2)+"Qui";} 
    else if (click < 10000000000000000000) {
        score = (click / 10000000000000000).toFixed(2)+"Sex";}
    else if (click < 10000000000000000000000) {
        score = (click / 10000000000000000000).toFixed(2)+"Sep";}
    else if (click < 10000000000000000000000000) {
        score = (click / 10000000000000000000000).toFixed(2)+"Oct";}
    else if (click < 10000000000000000000000000000) {
        score = (click / 10000000000000000000000000).toFixed(2)+"Non";}
        else if (click < 10000000000000000000000000000000) {
            score = (click / 10000000000000000000000000000).toFixed(2)+"Dec";}
    else {score=click};}
function gennumberconverter(){
    if (number < 1e4){ number=number;}
    else if(number<0){number=0;}
    else if (number < 1e6){number=(number/1000).toFixed(1)+"K"; }
    else if (number < 1e9){number=(number/1000000).toFixed(1)+"M";}
    else if (number < 1e12){number=(number/1000000000).toFixed(1)+"B";}
    else if (number < 1e15){number=(number/1000000000000).toFixed(1)+"T";}
    else if (number < 1e18){number=(number/1000000000000000).toFixed(1)+"Qua";}
    else if (number < 1e21){number=(number/1000000000000000000).toFixed(1)+"Qui";}
    else if (number < 1e24){number=(number/1000000000000000000000).toFixed(1)+"Sex";}
    else if (number < 1e27){number=(number/1000000000000000000000000).toFixed(1)+"Oct";}
    else if(number < 1e400){number=(number/1000).toFixed(1)+"wow";}
    else{number=number;}
}

function setstatus() {
   //autoclicker//
   setstatusauto();
    //MANA//
   setstatusmana();
   //Rage//
   setstatusrage();
    //FIRE//
   setstatusfire();
   //ARC//
   setstatusarc();
   //ICE//
   setstatusice();
   //EARTH//
   setstatusearth();
   
} 
//##########################################################################//
//######################## CLICKER ######################################//
//###################################################################################//

function mainclick(){
    incrementandset();
    setstatus();
    selftest();
    updatetext(); 
    
}function upgradeclicker(){
    if  (click >= clicker.upg$){
        //upgrademc//
        clicker.level++;
        click-=clicker.upg$; 
        updateclick();
    }
}

//##########################################################################//
//######################## AUTO CLICKER ######################################//
//###################################################################################//

function buyauto(){
clicker.totalclicks++;
if (click < auto.upg$)  {
    alert('no coins');  idj++;
}
else  if (click > auto.upg$ && auto.level==0){
    auto.level++; click -= auto.upg$; 
    myVar = setInterval(autocps,1000);      
    console.log("buyautoupgrade");
    updateautoclicker(); updateclick(); levelup(); 
}
else  if (click > auto.upg$ && auto.level!=0){
    auto.level++;   click -= auto.upg$;     
    console.log("buyautoupgrade");

    updateclick();  updateautoclicker();  levelup(); 
}}

function setstatusauto(){
    updateautoclicker();
    if (auto.level!=0){
        auto.status="running";
        auto.image.style.opacity=1;
    }
    else if (auto.status=="basicbitch" && clicker.totalclicks>=1000){
        auto.status="unlocked";
        auto.master.style.opacity=0.9;
        auto.image.style.opacity=0.9;
    }
    else if (auto.status=="basicbitch"){
        auto.master.style.opacity=0;
    } }

function updateautoclicker(){
    auto.upg$ =Math.ceil((auto.level+1+103)*((auto.level+1)*(auto.level+1))*3.78) ;
    number = auto.upg$; gennumberconverter();  auto.cc.innerText=number;

  if(auto.helperlvl>0){auto.helpertotal=Math.floor(auto.level/auto.help);}
    if (click < auto.upg$){ auto.btn.style.opacity=0.7;}
    else if(click> auto.upg$){auto.btn.style.opacity=1;}
auto.top.innerText=(auto.helpertotal+auto.level)+'🖱';
auto.truestatus=" "+auto.level+" "+auto.upg$+" "+auto.helperlvl+" "+auto.helpertotal+
" "+auto.runcount ;
}

function autocps() {
    updateautoclicker();
    auto.runcount++;
    //if upg do//
    if(auto.helperlvl!=0 || mana.duplicater!=0){
    click+=1+((auto.level+auto.helpertotal)*(clicker.multi+1));}
    else{click+= auto.level;}
    updateclick();
}

//###############   MENU ##########//
// R1C6 - autoclick helper//
var autohelpimg=document.getElementById("autohelper");
function upgradeautohelper(){
    updatemenuachelper();
    if (click >= auto.helper$ &&auto.helperlvl<3){
        auto.helperlvl++;
    }
    else if(click<auto.helper$){alert(nm);}
 updatemenuachelper();}
var helpo="swim";
function updatemenuachelper(){
    if (auto.helperlvl==0){auto.help=0; helpo=10;}
   else if(auto.helperlvl==1){auto.help=10; helpo=5;}
   else if(auto.helperlvl==2){auto.help=5; helpo=2;}
   else if(auto.helperlvl==3){auto.help=2; helpo=2;}
    auto.helper$=(10000*(auto.helperlvl+1))*((auto.helperlvl+1)**(auto.helperlvl+1)*(10000*(auto.helperlvl+1)));
  
   if( auto.helperlvl<3){ menu.achdesc.innerText="For every "+helpo+" autoclick levels get 1 helper";
     number=auto.helper$;    gennumberconverter();  menu.ach$.innerText=number+ '💰';}
    else{menumaxer(menu.ach$, autohelpimg); menu.achdesc=" Every two AC levels get 1 helper";
}updateautoclicker();  }
//######################################################################################//
//#####################   MMMAAANNNAA     ###################//
//#########################################################//
//MANA//
function incrementandsetmana(){
    
        mana.player+=(mana.level+(mana.baseupg*10))*(mana.duplicater+1); mana.player=Math.floor(mana.player);
        
        mana.regentotal+=(mana.level+(mana.baseupg)*10)*(mana.duplicater+1) ;
        mana.runcount++;
        setstatusmana();
       mana.range.innerText="";
    if (mana.player >= mana.max){
        mana.player = mana.max;
        idj++;
        mana.range.style.color="white"; mana.range.style.webkitTextStroke="0.1vh black"
        mana.range.innerText="Mana is full, You should probably cast something"; 
    }   }
//***********************//
// Upgrade mana gain  needs work//
function mps() {
    if (manatimer!="setInterval(incrementandsetmana,1000)"){manatimer= setInterval(incrementandsetmana,1000);}
}

function upgrademana(){    
if (click >= mana.upg$ && mana.level==0){
    click-=mana.upg$;
    mana.level++;
    mana.image.src=manaupgrade.manaimg;
    mana.top.innerText="+"+mana.level;
    mps();
}
else if (click >= mana.upg$){
    click-=mana.upg$;
    mana.level++;
    incrementandsetmana();
    mana.top.innerText="+"+mana.level;
}
else if(click <=mana.upg$) {
    console.log(" Upgrade failed "+click+"/"+mana.upg$);
}else{
    console.log(Avar);  }}

function setstatusmana(){ 
        updatemana();
        manacostcheck();
    }  
function manacostcheck(){
    if (click < mana.upg$ && mana.level == 0 ){
        mana.master.style.opacity=0;   mana.upgrade="notready"; }
    else if(click<mana.upg$){
        mana.btn.style.opacity=0.7;}
    else if(click >= mana.upg$ ){
        mana.upgrade="ready";  mana.master.style.opacity=1;  mana.btn.style.opacity=1;      mana.image.style.opacity=1;}
    else if (click >= mana.upg$){
    mana.btn.style.opacity=1; mana.upgrade="ready"; }
}

function updatemana(){

   

    mana.truestatus=mana.level+" "+mana.upg$+" "+mana.player+" "+mana.max+
    mana.baseupg+" "+mana.maxlvl+" "+mana.PRlvl+" "+mana.duplicater+" "+mana.runcount+" "+ mana.regentotal;
   mana.reduction=(mana.PRlvl*10)+mana.PRlvl;
    mana.upg$=(((mana.level**mana.level)+1000/(mana.reduction+1))+1);
    updatemenumanamax(); updatemenuspellmulti(); updatebase10();
    number=mana.upg$;    gennumberconverter();  mana.p2.innerText=number;
    mana.regencounter.innerText=mana.regentotal;
    mana.levelcounter.innerText=mana.level;
    mana.range.style.width=(mana.player/mana.max*100).toFixed(2)+"%";
    mana.range.value=mana.player;
    mana.count.innerText=mana.player;
    mana.maxc.innerText=mana.max;
}
//########## MENU ################//
//row 1 item 5////button5 spell multi //
function upgmenuspellmulti(){
    if (click >=mana.spellmultiupg$){
        mana.multilvl++;;
        updatemenuspellmulti();
    }
    }
function updatemenuspellmulti(){
    
   mana.smv=(((mana.multilvl/10 +mana.smv)+mana.smv) /10);
    mana.smv.toFixed();    

    document.getElementById("spellmulticounter").innerText=player.spellmulti+1;
    mana.spellmultiupg$=(mana.multilvl+1)*1000000*(mana.multilvl+1);
    if(mana.multilvl<99){ number=mana.spellmultiupg$; gennumberconverter(); menu.spellmulti$.innerText=number+'💰';
        menu.allspells.innerText="Increae spell Ef. Current:"+(mana.smv*10).toFixed(1)+'\%'+" Next:"+Math.round((((mana.smv/10)+mana.smv*10) ).toFixed(2));} 
}



//row2 button1 manaregen +10;//
function menuplus10manaupg() {
    if (click >= mana.baseupg$ && mana.baseupg!=1){
        mana.baseupg=1;
        incrementandsetmana(); }
    else{
        alert(upgm);idj++;
}  }

// ROW 2 C @ ManaOverlflow//
//level1 overflow, lvl2, unlock with rage level5//
function unlockmanaoverflow(){
    if(click>=mana.flow$ &&mana.flowlvl<1){click-=mana.flow$ 
        mana.flowlvl++; menumaxer(menu.manaflow$,menu.manaflowimg);
    }
    else if(mana.flowlvl<2 &&click>=mana.flow$){click-=mana.flow$ 
        mana.flowlvl++;
    }
    updatemanaoverflow();
}
function setmanaflow(){
    
}
function updatemanaoverflow(){
if(mana.flowlvl==0){ 
 mana.flow$=(mana.flowlvl+1)**(mana.flowlvl+1)*10000000;
 number=mana.flow$; gennumberconverter();   menu.manaflow$.innerText=number;
 menu.manaflowdesc.innerText="Unlocks Mana overflow, Converting excess mana into 💰";
}
else if(mana.flowlvl==1&&rage.level<5){}
else if(mana.flowlvl==1&&rage.level>=5){
    mana.flow$=(mana.flowlvl+1)**(mana.flowlvl+1)*10000000000;
    number=mana.flow$; gennumberconverter();   menu.manaflow$.innerText=number;
    menu.manaflow$.backgroundColor="none"; menu.manaflow$.style.boxShadow="0";
  
}}
// row2 button 5 Max mana inc//
function menumaxmanainc(){
    if (click >= mana.maxupg$){
        click -= mana.maxupg$;
        mana.maxlvl++;
        updatemenumanamax();
        console.log("MANA MAX HAS BEEN UPGRADED new cap :"+mana.max);
        updatetext();  }
    else{
        console.log(nm);alert('nm');idj++;  }}

//Row 3 c3 Manacost reduction//

function menuupgmana$(){
    if(click>=mana.PR$ &&mana.PRlvl<9){
    mana.PRlvl++; click-=mana.PR$;updatemana(); updatemenumana$();
    }else if(click<=mana.PR$){alert(nm);}
    else{alert("Menu UPG MANA PRICE REDUCTION ERROR");}
    updatemenumana$();
}
function updatemenumana$(){
    mana.PR$=((((mana.PRlvl*1000)+1)*2*(mana.PRlvl+1))*1000000000)*mana.PRlvl*mana.reduction+(100000000000000000*((mana.PRlvl+1)**(mana.PRlvl+1)))+(100000000000000000000*(mana.PRlvl+1))*2;
number=mana.PR$;   gennumberconverter(); menu.mugpr.innerText=number+'💰';
menu.mana$desc.innerText="Decrease mana upgrade cost  Current:"+mana.reduction+'%'+" Next:"+(mana.reduction+11)+" Max:99";

if (mana.PRlvl==9){mana.reduction==99; menumaxer(menu.mugpr,menu.manapriceimg);
menu.mana$desc.innerText="Decreases Mana Upgrade cost by "+mana.reduction+'%'; }
}


//update menu mana max, base 10 and spell multi//
function updatemenumanamax(){  
        mana.max=mana.maxlvl*100+1000;
        mana.maxupg$=Math.ceil(2500*((mana.maxlvl+1)*2.3)*(mana.maxlvl+1));
        number = mana.maxupg$; gennumberconverter();  
        menu.manamaxprice.innerText=number +'💰';
        menu.manamaxdesc.innerText="Manamaximum"+'\n' + "Current:" +mana.max+'\n'+" New:"+(mana.max+mana.maxinc);
}

var base10img= document.getElementById("img21");
var base10price=document.getElementById("pr2c1");
function updatebase10(){
    if(mana.baseupg==0){ number=mana.baseupg$;gennumberconverter(); menu.manab10.innerText=number+'💰';}
else if(mana.baseupg==1){menumaxer(base10price,base10img);}
}

var dupe$=100e24;
function unlockduplicater(){
    if (click>= dupe$){
        click-=dupe$;
        menumaxer(menu.d$, menu.dimg); updatemenuduper();
    }
    else if(click<dupe$){alert(nm);}
    else{alert(upgm);} 
}
function updatemenuduper(){ 
  if(mana.duplicater=0){ number=dupe$; gennumberconverter(); menu.d$.innerText=number+'💰';}
}
  //##########################################################//
//######################  RAAGEE ############################//
//##########################################################//
function rps() {
    incrementandsetrage();
}
function incrementandsetrage() {
    rage.player += rage.level;
    rage.runcount++;
    if (rage.player >= rage.cap) { rage.player = rage.cap; }
    else if (rage.player == null) { rage.player = 0; rage.level = 0; }
    setstatusrage();
}
function startrage() { if (rage.level >= 1) { clearInterval(ragetimer); ragetimer = setInterval(rps, 5000); } setstatusrage(); }
function upgraderage() {
    if (click >= rage.upg$ && mana.player >= rage.mana$) {
        rage.level++;
        click -= rage.upg$; mana.max -= rage.mana$;

        setstatusrage();
    }
}
function setstatusrage() {
    updateragecounters();
    if (rage.level == 0) { rage.master.style.display = "none"; rage.btn.style.display = "none"; }
    else if (click >= rage.upg$ && mana.max >= rage.mana$) {
        rage.upgrade = "ready"; rage.btn.style.opacity = 1; rage.btn.style.display = "";
    }
}
function updateragecounters() {

    if (rage.level == 1) {
        rage.master.style.opacity = 1; rage.master.style.display = "";
        rage.upg$ = (rage.level + 1) * 1000000 * ((rage.level + 1) * (rage.level + 1)) * (rage.level + 1) * (10 * (rage.level + rage.level)); rage.img.style.display = "";
    }

    rage.top.innerText = '+' + rage.level;
    
    rage.mana$ = rage.level * 100 * (rage.level + rage.level) + (rage.level * 10)/(rage.reduction+1);
    rage.capcount.innertext = rage.cap;
    rage.count.innerText = rage.player;
    rage.levelcounter.innerText = rage.level;
    rage.runcounter.innerText = rage.runcount;
    number = rage.upg$; gennumberconverter(); rage.cc.innerText = number;
    rage.mcc.innerText = rage.mana$;
}
//######## MENU########//
// R2 C4 RAGE //
function unlockrage(){
    if (click>=rage.upg$ &&rage.level>1){
        rage.level=1; click-=rage.upg$;
       updatemenurul(); setstatusrage(); startrage();
    }
    else { alert(upgm);}
}
function updatemenurul(){
  if ( rage.level==0){ number= rage.upg$; gennumberconverter();  menu.rageprice.innerText=number+'💰';}
  else if (rage.level==1){menumaxer(menu.rageprice,menu.rageimg);}
}

// R3 C3 rage manacost//
function ragemanacostupg(){
 if(click>=rage.re$ && rage.relvl<9){
     click-=rage.re$; rage.relvl++; 
 }
 else if(click<=rage.re$){alert(nm); idj++;}
 else {alert(upgm);updatemenuragereduction(); } updatemenuragereduction();
}
var rm=menu.rmana$;
var rmimg=menu.rmimg;
function updatemenuragereduction(){
    rage.re$=(rage.relvl+1)*1543209*+800000*(1+rage.level);
    if (rage.relvl<9){ number=rage.re$; gennumberconverter(); menu.rmana$.innerText=number+'💰';}
    else if(rage.relvl>=9){ menumaxer(rm, rmimg); }
    
 
}
//######################################################################################//
//#####################   FFIIRREE     ###################//
//#########################################################//
/*cast - setstatus - counter - upgrade - mupgrade $check*/
function fireballcast(){
    setstatusfire();
    
    //check for cooldown and mana//
    if (fire.cast=="notready"){
    console.log(fire.status+'Fireball failed -timer-');idj++; }
    else if (fire.image.classList.contains("firecooldown") && mana.player <= fire.castcost ){
    console.log(fire.status +"!!!" + Avar);idj++; 
    }
    else if (mana.player>=fire.castcost && fire.cast=="ready" ){     
    mana.player-=fire.castcost;
    fire.castcounter++;
    fire.cast="notready";
    click += fire.val;
    fire.image.classList.add("firecooldown");
    console.log(fire.status+"fireballcast: "+" minus mana-"+fire.castcost+" +val- "+fire.val);
    //Waits a little then does://
    setTimeout(function(){
    message.innerText = fire.status+"Fireball 5s cooldown";    
    setstatus();
    updatetext();
    levelup();
    },50);
    setTimeout(function(){
        document.getElementById("fireball").classList.remove("firecooldown");   
        fire.cast="ready"; 
        message.innerText = fire.status+"Fireball Cooldown is over";
    },5000);}
   else {console.log('fireball failed -variable?-');return;}
}

function setstatusfire(){
    updatefirecounter();
    firecostcheck();
    if (clicker.totalclicks <=50) {
        fire.image.src="../Logs/lock.png";
        fire.master.style.opacity=0;
        //fireball not unlocked//
    } 
   else if (fire.status=="basicbitch" && clicker.totalclicks>=50 ){
        //fire unlock - runs once//
        fire.image.style.opacity=0.7;
        fire.master.style.opacity=0.7;
        fire.cc.innerText = fire.castcost;
        //alert('fireball has been unlocked');//
        fire.status="unlocked";
    }
    else if(fire.status=="unlocked" && mana.level != 0 ){
        fire.image.style.opacity=0.7;
        fire.master.style.opacity=1;
        fire.btn.style.opacity=1;
        fire.status="1x";
        fire.image.src=fireupgrade.x1ballimg;
    // alert('Mana has been unlocked, try casting a fireball');//
        //1st unlock//
    }   
     else if(!fire.image.classList.contains("firecooldown") && mana.player>= fire.castcost){
        fire.image.style.opacity=1;
        fire.cast="ready";
        message.innerText="Fireballready";
    }  
    else if(fire.image.classList.contains("firecooldown") || mana.player <= fire.castcost){
        fire.image.style.opacity=0.9;
        //absolutefalse//   
    } 
    else {
        console.log("failed to set fireball status"); } }

function updatefirecounter(){
    fire.truestatus="level: "+fire.level+" "+fire.cast+" val: "+fire.val+
    " cast#: "+fire.castcounter+" upg$: "+fire.upgradecost+" cast$: "+fire.castcost+
    " upg: "+fire.upgrade + " class: "+ fire.image.classList+" status: "+fire.status+'\n'+" src: " +fire.image.src ;
   
    fire.counter.innerText=fire.castcounter;
    fire.levelcounter.innerText=fire.level;
    number=fire.upgradecost; gennumberconverter(); fire.p4.innerText=number;
    fire.cc.innerText=fire.castcost; }
    
function fireballupgrade(){
    firecostcheck();
    if (fire.btn.style.opacity >=1 && click >= fire.upgradecost){
    click-=fire.upgradecost;
    fire.castcost*=1.23;
    fire.castcost = Math.round(fire.castcost);
    fire.val*=1.3;
    fire.val = Math.round(fire.val);
    fire.upgradecost*=1.3;
    fire.upgradecost = Math.round(fire.upgradecost);
    
    
    fire.level++;
    incrementandset();
    setstatusfire();
}
else {
    console.log("fireballupgfail: "+"click="+click+" :cost="+ fire.upgradecost);
    idj++;
}
}

//Checs click against upgreade cost//
function firecostcheck(){
    if (fire.castcounter==0 || mana.level == 0 ){
      
        fire.btn.style.display="none"; 
        fire.upgrade="notready";
    }
    else if (click < fire.upgradecost) {
        fire.btn.style.opacity=0.7;
        fire.upgrade="notready";
        
        fire.btn.style.display="inline-block";
    }
    else if (click >= fire.upgradecost){
    fire.btn.style.opacity=1;
    fire.upgrade="ready";
    fire.btn.style.display="inline-block";
}}

// Theres an Arc//
//####################################################################//
//#############      ARCANEBALL ie Manaball ############################//
//####################################################################//
function arcaneballcast(){
    mainclick();
    setstatusarc();
    
    if (arcane.status =="auto" && arcane.auto==1) {
        alert("starting arc auto");
        arcaneauto();   
    } 
    else if (arcane.image.classList.contains("arccooldown")) {
        console.log('Arcane failed -timer-');
        if(arcane.status=="run"){cancelarcaneauto();}    
    }
    else if (arcane.cast=="ready" && mana.player >= arcane.cast$){ 
        console.log("Arcanecast");
     click += arcane.val;
     click = Math.floor(click);
     levelup(levelvar=1); //Prestige increment//
     mana.player -= arcane.cast$;//fee//
     arcane.castcounter++;
     updatetext()
    arcane.image.classList.add("arccooldown");
     setTimeout(function(){
     message.innerText = "arcaneball - 1S Cooldown";
     },50);
     arcane.image.style.opacity = 0;
     setTimeout(function(){
         arcane.image.style.opacity=1;
         message.innerText = "Arcaneball can be used again";
         arcane.image.classList.remove("arccooldown");
     },1000);}
    else if (arcane.image.style.opacity < 1 && mana.player < arcane.cast$) {
        console.log('Arcane ' + Avar);
    }
    else if (mana.player < arcane.cast$) {
        console.log(' Arcane failure -no mana-');
        if(arcane.status=="run"){cancelarcaneauto();}    
    }
    else {
        console.log('failed Arcane -variable?-');
        return;    
    }
}
function setstatusarc(){
    arccostcheck();
    updatearccounter();
    
    if  ( mana.level ==0) {
     arcane.image.src="../Logs/lock.png";
     arcane.master.style.opacity=0;
        // arcaneball not unlocked//
    }
    else if (arcane.status=="basicbitch" && mana.level != 0 ){
     arcane.master.style.opacity=1;
    arcane.btn.style.display="none";
     arcane.image.style.opacity=0.7;
     arcane.cc.innerText = arcane.cast$;
     arcane.status="await";
 //   alert('Arcane has been unlocked, try casting ');//
        //1st unlock//
    }   
     else if (arcane.status=="await" && mana.player> arcane.cast$){
     arcane.image.style.opacity=1;
     arcane.status="";
     arcane.image.src=arcaneupgrade.arcaneimage;
     arcane.cast="ready";
    }
    else if (arcane.status=="run" && mana.player <= arcane.cast$){
        arcane.image.opacity=0.9;
        arcane.cast="notready";
           //auto cast off// 
       }  
    else if (arcane.image.classList.contains("arccooldown") || mana.player <= arcane.cast$){
     arcane.image.opacity=0.9;
     arcane.cast="notready";
        //absolutefalse either// 
    } 
    else if (!arcane.image.classList.contains("arccooldown") && mana.player >= arcane.cast$){
        //absolute true, no cd + mana//
        arcane.image.style.opacity=1;
        arcane.cast="ready";   
    }
     else {
        console.log("couldnt set arc status"); }}
    
    function arcaneballupgrade(){
        setstatusarc();
        if (arcane.btn.style.opacity >=1 && click >= arcane.upgrade$){
        click-=arcane.upgrade$;
        arcane.level++; 
        incrementandset();
    }
    else {
        console.log("Arcaneballupgfail: "+"click="+click+" :cost="+ arcane.upgrade$);
        idj++; }    }
function arccostcheck(){
    arcane.upgrade$=(arcane.level+1)*1000*(arcane.level+arcane.auto+1);
    if (arcane.castcounter == 0 || mana.level == 0 ){
        arcane.btn.style.opacity=0; 
        arcane.upgrade="notready";
        arcane.btn.style.display="none";
    }
    else if(click< arcane.upgrade$) { 
        arcane.btn.style.opacity=0.7; arcane.upgrade =="notready";
        arcane.btn.style.display="inline-block";}
    else if(click >= arcane.upgrade$ && mana.level>=1){
        arcane.upgrade="ready"; arcane.btn.style.display="inline-block";
        arcane.btn.style.opacity=1;
    }
}

function updatearccounter(){
    //update arc counters//
    arcane.truestatus=" level: "+arcane.level+" "+arcane.cast+" val: "+arcane.val+
    " cast#: "+arcane.castcounter+" upg$: "+arcane.upgrade$+" cast$: "+arcane.cast$+
    " upg: "+arcane.upgrade + " class: "+ arcane.image.classList+" status: "+arcane.status+'\n'+" src: "+arcane.image.src;
        arcane.counter.innerText=arcane.castcounter;
        arcane.levelcounter.innerText=arcane.status+arcane.level;
        arcane.cc.innerText=arcane.cast$; 
        number=arcane.upgrade$; gennumberconverter(); arcane.p6.innerText=number; 
}
//######## MENU #######//
// Button 2 arcauto//
function upgarcautocast(){
    if ( click >= arcane.auto$){
        click-=arcane.auto$;
    arcane.auto=1;    updatemenuarcauto();
   }
else {
    alert("no money");
    idj++; }
}

function arcaneauto(){

    //Checks for auto then runs cast till mana out//
    console.log("arcaneauto cycle");
    if(arcane.cast=="ready" && arcane.status=="auto"){    
    arcaneautotimer=setInterval(arcaneballcast, 1200);
    arcane.status="run";
    console.log("ärcaneautocast");
    }
    else {
        cancelarcaneauto();
        }
    }
    function cancelarcaneauto(){
        arcaneautotimer=clearInterval(arcaneautotimer);
        if(arcane.status="run"){arcane.status="auto";}
        console.log("ending auto cast");
    }

function updatemenuarcauto(){
    arcane.auto$=10e12;
    if (arcane.auto==1){
        menumaxer(menu.arc$,menu.arcimg);
    }
}
//##############################################################################################################################//
//                 iceball                    //
//###########################################################################################//
function iceballcast(){
    setstatusice()
    if (ice.image.classList.contains("icecooldown") || mana.player < ice.cast$) {
        console.log('Ice castfail' + Avar);idj++;
    } else if (ice.cast=="ready" && mana.player >= ice.cast$){ 
    ice.castcounter++;
    click += ice.val;
    mana.player-=ice.cast$;//fee//
    console.log("ice cast");
    updateclick();
    icecooldown();}
    else {
        console.log('failed ice cast -variable?-');
        return;   }}

function icecooldown(){
    
    ice.image.classList.add("icecooldown");
    setstatusice()
    setTimeout(function(){
     message.innerText = "Iceshower 10S - Cooldown";
     },60);
     
     setTimeout(function(){
         ice.image.classList.remove("icecooldown");
         updateice();
         message.innerText = "ice can be used again";
     },10000);
 }
function setstatusice(){
    updateice();
    icecostcheck();
   
     if(clicker.totalclicks>=1000 && ice.status=="basicbitch"){
         ice.status="";
         ice.master.style.opacity=0.9;
         //unlocked//
    }
     else if (ice.status=="basicbitch"){
        ice.cast="notready";
        ice.master.style.opacity=0;
    }
    else if (!ice.image.classList.contains("icecooldown") && mana.player>= ice.cast$){
        ice.image.style.opacity=1;
        ice.cast="ready";
    }
    else if (ice.image.classList.contains("icecooldown") || mana.player<= ice.cast$){
        ice.cast="notready";
        ice.image.style.opacity=0.9;
    }
}
function icecostcheck(){
    ice.btn.style.opacity=0; 
    if (ice.castcounter == 0 || mana.level == 0 ){
        ice.upgrade="notready";
        ice.btn.style.display="none";
    }
    else if(click< ice.upg$) { 
        ice.btn.style.opacity=0.7; ice.upgrade =="notready";
        ice.btn.style.display="inline-block";}
    else if(click >= ice.upg$ && mana.level>=1){
        ice.upgrade="ready"; ice.btn.style.display="inline-block";
        ice.btn.style.opacity=1;
    }
}
function upgradeice(){
    if (click>= ice.upg$){
        ice.level++
        click-=ice.upg$;
    }
}
function updateice(){
    ice.cast$=Math.round((290+ice.level+ice.level)*((ice.level+1)/2));
    ice.cc.innerText=ice.cast$;
    ice.upg$=(ice.level+1+ice.level)*49000;
    number=ice.upg$; gennumberconverter(); ice.p3.innerText=number; 


    ice.truestatus="Level: "+ice.level+" "+ice.cast+" Val: "+ice.val+
    " Cast#: "+ice.castcounter+" Upg$: "+ice.upg$+" cast$:"+ice.cast$+
    " upg: "+ice.upgrade+" Class: "+ice.image.classList+" status: "+ice.status+'\n'+" src: "+ice.image.src;

    
 number=ice.upg$; gennumberconverter();   ice.p3.innerText=number;   
}
//###################################//
//                EARTH SPELL         //
//###############################//

function earthcast(){
    mainclick();
    setstatusearth();
    if (mana.player >= earth.cast$ && earth.cast=="ready"){
        earth.castcounter++; earth.cast="notready";
      
        generatemagnitude(); 
        click+= earth.val * magnitude ;
        mana.player-= earth.cast$;  
        earthcooldown();
        incrementandset();
        console.log("earth cast +"+(earth.val*magnitude));
    }
    else if (earth.cast=="not ready" || earth.image.classList.contains("earthcooldown")) {
        console.log("Earth "+Avar);
        idj++;
    }
    else{
        console.log("earth cast failed ? variable"); }}
var magnitude;
function generatemagnitude(){ 
    magnitude=randomnum(1,9);
    console.log("mag +"+magnitude);}
function randomnum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);}
function earthcooldown(){
    earth.image.classList.add("earthcooldown");
    earth.image.src="../Logs/earthgrow.png";
    message.innerText="EARTH COOLDOWN";
    incrementandset();
    setstatusearth();
    levelup();
    console.log("Earth cast" +earth.maggen);
    setTimeout(function(){
        document.getElementById("earthball").classList.remove("earthcooldown");
        earth.cast="ready";
        message.innerText="Earth cast ready";
        earth.image.src="../Logs/fireballearthmirror.png";
    },10000);}
function setstatusearth(){
    updatearth();
    earthcostcheck();
  
     if (earth.status=="unlocked" && mana.player >= earth.cast$){
            earth.status="ready";
            earth.image.src="../Logs/fireballearthmirror.png";
            earth.master.style.opacity=1;
            earth.image.style.opacity=1;
        }
    else if (mana.player >= earth.cast$ && !earth.image.classList.contains("earthcooldown")){
        //Mana and NO CD//
        earth.cast="ready";
        earth.status="ready";
        earth.image.style.opacity=1;
        earth.master.style.opacity=1; }
     
    else if (earth.status=="basicbitch" && clicker.totalclicks >=1000){
        //Unlock//
        earth.master.style.opacity=0.7;
        earth.status="unlocked"; 
        earth.image.src= lockpng;}
    
    else if (earth.status=="basicbitch"){
        earth.master.style.opacity=0; } 

    else if (earth.image.classList.contains("earthcooldown") || mana.player<= earth.cast$){
        //absoulte false == AVAR//
        earth.image.style.opacity=0.9;
        earth.cast="notready"; }
    else{
        console.log("Earth failed to set status");
    } }
    function earthcostcheck(){
        earth.btn.style.opacity=0; 
        if (earth.castcounter == 0 || mana.level == 0 ){
            earth.upgrade="notready";
            earth.btn.style.display="none";  }
        else if(click< earth.upg$) { 
            earth.btn.style.opacity=0.7; earth.upgrade =="notready";
            earth.btn.style.display="inline-block";}
        else if(click >= earth.upg$ && mana.level>=1){
            earth.upgrade="ready"; earth.btn.style.display="inline-block";
            earth.btn.style.opacity=1;
        }
    }
function updatearth(){
    earth.truestatus=" level: "+earth.level+" "+earth.cast+" val: "+earth.val+
    " cast#: "+earth.castcounter+" upg$: "+earth.upg$+" cast$: "+earth.cast$+
    " upg: "+earth.upgrade + " class: "+ earth.image.classList+" status: "+earth.status+'\n'+" src: "+earth.image.src;
   
    earth.counter.innerText=earth.castcounter;
    earth.levelcounter.innerText=earth.level;
    earth.cc.innerText=earth.cast$;
    number=earth.upg$; gennumberconverter(); earth.p7.innerText=number;
}
//Rage meter//

function ragemeter(){
    if (mana.player >= 10000 && click >= 20000 ){
        mana.player-=10000;
        click -=10000;
        startrage();
        console.log('rage has started');}
    else{
        console.log('norage');
    }

function startrage(){
    rage++;
       
    setTimeout(function(){
    
        startrage();
    },1000);}
}



//################################################################//
//MENU UPGRADES//
function menumaxer(price, img){
    img.style.boxShadow=" 2px 17px 28px gold";
    price.innerText="Upgrade maxed!!";
    price.style.webkitTextStroke="1px gold"; price.style.backgroundColor="whitesmoke";
} 
//Button 1 fireball multi//
function menufireballupgrade(){
        if (click < fireupgrade.$){
        alert("Cant upgrade fireball"); idj++;  }  
    else if(click >=fireupgrade.$ && fireupgrade.level ==0){
        fireupgrade.level++;  
        click -=fireupgrade.$;
        fireupgrade.$=7500; fire.castcost+=10; fire.val*=2;   
        updatemenufireball(); 
        console.log('fireball has been upgraded');
}
    else if(click>=fireupgrade.$ && fireupgrade.level ==1){
        fireupgrade.level++;
        click -=fireupgrade.$;
        fireupgrade.$=40000 ;   fire.castcost+10;    fire.val*=1.55;
        console.log('fireball has been upgraded');
        updatemenufireball();
    }
    else if(click>=fireupgrade.$ && fireupgrade.level ==2){
        click -= fireupgrade.$;
        fireupgrade.$=100000;  fire.castcost*2;  fire.val*=1.66;
        fireupgrade.level++;
        console.log('fireball has been upgraded');
        updatemenufireball();
    }
    else if(click>=fireupgrade.$ && fireupgrade.level ==3){
        click -=fireupgrade.$;
        fireupgrade.$=500000;  fire.castcost*3; fire.val*=1.33;
        fireupgrade.level++;
        console.log('fireball has been upgraded');
        updatemenufireball();
    }
    else if(click>=fireupgrade.$ && fireupgrade.level ==4){
        click -=fireupgrade.$;
        fireupgrade.$=900000;   fire.castcost*3;  fire.val*=1.33; fireupgrade.level="max";
        fireupgrade.level="max";
        console.log('fireball has been upgraded');
        updatemenufireball();
    }  }

        function updatemenufireball(){
            
        if (fireupgrade.level == 0){
        fireupgrade.title.innerText="FireSplit (x2)";
        fireupgrade.image.src=fireupgrade.x2ballimg;
        fireupgrade.price.innerText=fireupgrade.$;
        fireupgrade.description.innerText="Your fire splits and deals twice as much damage"+'\n'+"(Slight "+" increase)";
        fire.status="1x";
    } 
        else if (fireupgrade.level==1){
            fireupgrade.title.innerText="Firetrio (x3)";
            fireupgrade.image.src=fireupgrade.x3ballimg;
            fireupgrade.price.innerText=fireupgrade.$;
            fireupgrade.description.innerText="Your fire splits and deals Thrice! as much damage"+'\n'+"(Slight mana castcost increase)"; 
            fire.image.src=fireupgrade.x2ballimg; 
            fire.status="2x";
            
    } else if (fireupgrade.level==2){
        fireupgrade.title.innerText="FireShower (x5)";
        fireupgrade.image.src=fireupgrade.x5ballimg;
        fireupgrade.price.innerText=fireupgrade.$;
        fireupgrade.description.innerText="Your fire now has a total of 5orbs and deals 5x as much damage"+'\n'+"(Moderate mana castcost increase)"; 
        fire.image.src=fireupgrade.x3ballimg; 
        fire.status="3x";}
    else if ( fireupgrade.level == 3){
        fireupgrade.title.innerText="FireStorm (x7)";
        fireupgrade.image.src=fireupgrade.x7ballimg;
        fireupgrade.price.innerText=fireupgrade.$;
        fireupgrade.description.innerText="Your fire becomes uncortrollable  and casts 7 orbs at once!"+'\n'+"(Moderate mana castcost increase)"; 
        fire.image.src=fireupgrade.x5ballimg; 
        fire.status="5x";}
    else if ( fireupgrade.level == 4){
        fireupgrade.title.innerText="Fire Mayhem";
        fireupgrade.image.src=fireupgrade.mayhemballimg;
        fireupgrade.price.innerText=fireupgrade.$;
        fireupgrade.description.innerText="All control is lost, Fireball casts between 9 and 19 orbs an will decide to cast itself for free occasionally"+'\n'+"(Moderate mana castcost increase)"; 
        fire.image.src=fireupgrade.x7ballimg; 
        fire.status="7x";
    }else if ( fireupgrade.level == "max"){
            fireupgrade.title.innerText="Fire King";
            fire.image.src=fireupgrade.mayhemballimg;
            menumaxer(fireupgrade.price, fireupgrade.image);
            fireupgrade.description.innerText="Max upgrade!"+'\n'+"Enjoy the chaos"; 
            fire.image.src=fireupgrade.mayhemballimg; 
            fire.status="m"; }
     }

//button3 Ice shield//

//Button 4 EarthUPG//
function menuearthupg(){
    if (click >= earthupg.upg$ && earthupg.level==0){
        earth.level++;
        earthupg.magmin++;
        updatemenuearth();
    }
}
function updatemenuearth(){
        earth.upg$=earth.level*15+100;
        earthupg.magmincounter.innerText=earthupg.magmin;
        earthupg.price.innerText=earth.upg$;}



//Menu Upgrades Unlisted//

//Row 2 C3 - Chest buster//
var unlock23$=4000000000;
function unlockdbzbuster(){
    if (click>=menugroup.dbz$ && menugroup.dbzlvl<1){
        click-=menugroup.dbz$; menugroup.dbzlvl++;
    }
    else if (click<= menugroup.dbz$){alert(nm);}
    else{alert(upgm);}
    updatemenudbzbuster();
}
function updatemenudbzbuster(){
    if(menugroup.dbzlvl<1){
    number=menugroup.dbz$; gennumberconverter(); menu.dzp.innerText=number+'💰';
}   else if(menugroup.dbzlvl>=1 && menugroup.dbz$!="MAX"){
    menumaxer(menu.dbzprice,menu.dbzbusterimg); menugroup.dbz$="MAX";
}
}
//row 2 c6 - SHIFTERY//
var shiftprice=document.getElementById("pr2c6");
var shiftimg=document.getElementById("shiftimg");
function upgshiftery(){
    if (click >= menu.shiftery$){
        
        menu.shiftlvl=1;StartShift();
    } 
    shiftupdate();
}

function shiftupdate(){

    if(menu.shiftlvl==0){}
    else if (menu.shiftlvl==1){menumaxer(shiftprice, shiftimg); }
}

//#########################################//
//Prestige//
function ULprestige(){
    if (click>=prestige.unlock$){
        click-=prestige.unlock$;
        prestige.unlocked==true; flipprestigetab();
    }
    else{alert(nm);}
}

function instprestige() {
    levelup(prestige.req);
}


//P inc +1, Multiplier x Plevel //
function Prestige() {
    if (prestige.prog >= prestige.req && prestige.boo == "1") {
        //..Level UP prestige//
        prestige.unlocked =false; prestige.prog = 0; prestige.level++;
        prestige.multi+=prestige.clickval;

         updateprestigecounter();
        console.log(clicker.multi + ' level = ' + prestige.level + '. user has prestiged');
    }
    else {
        console.log(prestige.level + 'insufficient for prestige');
    }
}
function updateprestigecounter(){
    if(prestige.unlocked==false){prestige.unlock$=(prestige.level+1)*(prestige.level+1)*(prestige.level+1)*1000000000*(prestige.level+prestige.level+1)
    number=prestige.unlock$; gennumberconverter(); menu.prestigelocktab.innerText="Unlock"+'\n'+number+au; menu.prestigelocktab.style.display="";}
    if (prestige.level == null) {prestige.level = 0; }
    if(prestige.prog==undefined){prestige.prog=0;}
    prestige.unlock$=(prestige.level+1)*10000*(prestige.level+1)**(prestige.level+1);


        menu.prestigetext.innerText="Prestige"+'\n'+prestige.unlock$;
            prestige.req = ((prestige.level+1)*1057*(prestige.level+1)*(prestige.level+1));
            prestige.clickval=Math.round(clicker.Ptc/(prestige.level+1)/1000);
           
            prestige.pF.innerText="Prestiging increases base click value by:"+(14+prestige.clickval);
            prestige.levelcount.innerText = prestige.level; prestige.progcount.innerText = prestige.prog;
            prestige.bar.value = prestige.prog; BZbuster(); prestige.bar.style.width=result+"%"; 
            prestige.bar.max = prestige.req;
            prestige.capcount.innerText = prestige.req; prestige.multi = Math.round((prestige.level + 1) * 0.14) / 100;
            //prestige TAB//
            prestige.stat.innerText = prestige.prog + "/" + prestige.req; document.getElementById("bannerlevel").innerText = prestige.level;
            if (prestige.prog >= prestige.req) { prestige.boo == 1; prestige.prog==prestige.req; 
      flashprestige(); ; }
            else if (prestige.prog<prestige.req) { prestige.boo == 0; }

    //True//
                prestige.truestatus=prestige.level+" "+prestige.prog+" "+prestige.req+" "+prestige.totalPP+" "+prestige.PPinc+" "+prestige.PPmenu;
    }
var pflash;
function startflash(){
    pflash=setInterval(flashprestige, 1000);
}
function flashprestige() {
    console.log("flashprrestige");
    if(prestige.boo==1 && prestige.bar.style.backgroundColor!="goldenrod"){
          prestige.bar.style.boxShadow="gold 2px 2px 6px"; prestige.bar.style.backgroundColor="goldenrod"; prestige.bar.border="2px dashed gold";
          prestige.overlay.style.boxShadow="0 10px 20px #ffd700, 0 6px 6px #daa520 ";
          prestige.overlay.style.backgroundColor="#ffd70055";
        }
    else if(prestige.bar.style.backgroundColor=="goldenrod" &&prestige.boo==1){
    prestige.bar.style.boxShadow="4px 4px 8px goldenrod"; prestige.bar.style.backgroundColor="gold";
    prestige.overlay.style.boxShadow="0 6px 10px #daa520, 0 10px 15px #ffd700 ";
    prestige.overlay.style.backgroundColor="#ffd70055";
}

else if(prestige.boo==0){
    prestige.bar.style.boxShadow=""; prestige.bar.style.backgroundColor=""; clearInterval(pflash);
    prestige.overlay.style.boxShadow="5px 10px 18px red ";
}
}

 function prestigeboardinc(id,price, oard){
    prestigeboard[id]++;
    click-=price; oard
    localStorage.setItem("boardstate", JSON.stringify(prestigeboard));
    var storedboard=JSON.parse(localStorage.getItem("boardstate"));
    console.log(storedboard);
    }

   //##############################################################################//
//stat Card move//
var card = document.getElementById("card");
var cardbutton = document.getElementById("cardbutton");
var cardwrap=document.getElementById("cardwrap");
function movecard(){
    if (cardbutton.style.opacity =="0.9"){
    
    cardbutton.style.float="left";
    cardwrap.style.backgroundColor="#00000000";
    card.style.border="0"; card.style.display="none";
    cardbutton.style.transform="rotate(-90deg)";cardbutton.style.height="10vh";
    cardbutton.style.width="10vh";
    cardbutton.style.opacity=1;
    }
    else {
       cardwrap.style.left="1vw"; card.style.opacity=1;  cardwrap.style.backgroundColor="#faf";  card.style.border="ridge 2px aqua "; card.style.display="contents";
        cardbutton.style.opacity=0.9;  cardbutton.style.height="5vh";  cardbutton.style.width="5vh"; cardbutton.style.transform="rotate(90deg)"; cardbutton.style.float="right";
          }
    }     
var boo;
function openmenu(){
    closemenu();menu.fieldset.style.display="block";
    menu.fieldset.style.opacity=1;
    menu.fieldset.style.zIndex=1;
    menu.return.style.opacity=0;
    menu.return.style.zIndex=0;
    updatemenu();
}
//Open UOGRADES//
function flipupgtab() {
clicker.totalclicks++;
if (menu.open!="upg"){
   
    menu.upgTab++;
    Resetmenufield();
    upgtabactive(); 
    
    console.log('Open Upgrade menu');
}
else {closemenu(); console.log('closefrom upg');}  }
//Open STATS//
function flipstatstab(){
if (menu.stats.style.opacity <= 0){
    menu.statsTab++;
    Resetmenufield();
    statstabactive();
    console.log('Open Stats');
}
else { closemenu(); menu.exitsTab++; console.log('close from stats');} }
//Open PRESTIGE//
function flipprestigelocktab(){
    
}
function flipprestigetab(){
    if (menu.prestiget.style.opacity<=0 &&prestige.unlocked==true){
        menu.prestigeTab++;
        Resetmenufield();
        prestigetabactive(); 
        console.log('Open Prestige');     
    }
    else if(prestige.unlocked==false){
        Resetmenufield();
    }
    else{closemenu();console.log("menu close from stats");}}

function Resetmenufield(){
   closemenu();  openmenu();
}
function closemenu(){
    menu.exits++;
    menu.fieldset.style.opacity=0;
    menu.fieldset.style.zIndex=-1;
    menu.fieldset.style.display="none";
    menu.return.style.opacity=1;
    menu.return.style.zIndex=1; 
    menu.open="";
    console.log("Closeall");
    setstatus();
    closealltabs(); 
}
function closealltabs(){ 
    closeprestige();
    closeupgrades();
    closestats();
}

function closeprestige(){ menu.prestigetab.classList.remove("selected");
   menu.prestiget.style.display="none";
    menu.prestiget.style.zIndex=0; menu.prestiget.style.opacity=0;
      }
function closeupgrades(){ menu.upgtab.classList.remove("selected");
    menu.upgT.style.display="none"
    menu.upgT.style.opacity=0;  menu.upgT.style.zIndex=0;
    menu.upgtab.style.boxShadow="0";}
function closestats(){ menu.statstab.classList.remove("selected");

    menu.stats.style.opacity=0;
    menu.stats.style.zindex=0;
    menu.stats.style.display="none";
}
function upgtabactive(){ menu.upgtab.classList.add("selected");
    menu.open="upg"; 
    menu.upgT.style.display="inline-block"; 
    menu.upgT.style.opacity = 1; menu.upgT.style.zIndex = 1;
}
function statstabactive(){ menu.statstab.classList.add("selected");
    menu.open="stats";
    menu.stats.style.display="inline";
    menu.stats.style.opacity = 1;   menu.stats.style.zIndex = 1;
}
function prestigelocktabactive(){
    menu.prestigelockTab.classList.add("selected");
    menu.prestige
}
function prestigetabactive(){menu.prestigetab.classList.add("selected");
    menu.open="prestige"; 
    menu.prestiget.style.display="contents";
    menu.prestiget.style.zIndex = 20; menu.prestiget.style.opacity = 1;
}

function updateprestigemenutext(){
   
    if(prestige.unlocked==true){
    menu.prestigetext.style.display=none;
    }
    else if(prestige.unlocked==false){
        menu
    }
}
function updatestatmenutext(){
    menu.statTC.innerText="Total Spells cast:"+mana.level+" ";
}

var pd;
var p =0;
function BZbuster(){  
   //SHUFFLES Background//
    difference(prestige.prog,prestige.req);
    //IF ready//
    if (result <= 1){menu.return.style.backgroundImage="url(../im1.png)";}
    // if less than 30%//
    else if (result <= 30){menu.return.style.backgroundImage="url(../400400.png)";}
   //if less than 60%//
    else if (result <= 60){menu.return.style.backgroundImage="url(../s1.jpg)";}
    // under 100% //
    else if (result <= 99){menu.return.style.backgroundImage="url(../s1.jpg)";}
    else if(result >= 100){menu.return.style.backgroundImage="url(../bg.jpg)";

  }
 console.log(result+" BBZ diff");}

function difference(a, b){
        result=((a/b)*100).toFixed(2);
    }

var h1=document.getElementById("h1");
ht= "headtitle"; h0="ht"; ti=document.getElementById("title");
function showtitle(){
    if(h1.classList==ht){ ti.style.display="none";
        h1.classList.add(h0);h1.classList.remove(ht);
     }
    else{ ti.style.display="";
        h1.classList.add(ht);h1.classList.remove(h0);}
}

// Jumper game.//
/*var character = 
document.getElementById("character"); 
var block = document.getElementById("block");
function jump () {
    if(character.classList != "animate"){
    character.classList.add("animate");
    } 
}*/
//ifdead alert//
/*var checkDead = setInterval(function(){
    
    var characterTop =
    parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockLeft =
    parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if (blockLeft<20 && blockLeft>0 && characterTop>=180){
        block.style.animation = "none";
        block.style.display = "none";
        alert("    Insertion = True , Victory = False. Maybe you like penis up the bum, to each their own...");
        
    }  },10);
*///}