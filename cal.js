let GetG = document.getElementById("gpa");
let GetU = document.getElementById("Unit");
//let ValGInp = document.getElementsById('Unit');
let Run = document.getElementById('tess');
let out = document.getElementById('ms');
let sib = document.getElementById("gpa1");
let tr = document.getElementById("year");
let trr = document.getElementById("term");
let okGo = document.getElementById("justDo");
let oppo = document.getElementById("lil");
let iko = document.getElementById("trtr1")
let iko1 = document.getElementById("trtr2")
var pog;
var textfield;
var allG = 0;
var allU = 0;
var majorr;
var term;
var a1;
var a2;
var a3;
var a4;
var a5;
var a6;
var a7;
var a8;
var p1=0,p2=0,p3=0;
var l1=0,l2=0,l3=0;



function calculate(){
    //let num = Number(GetG.options[selectedIndex].value);
   // var q = x.options[x.selectedIndex].value;
   // let uni = Number(GetG.Value);
   //let outh ='';
    
  // let z3= Number(document.getElementById("sh").innerHTML=GetG.options[GetG.selectedIndex].value);
   //let z4 = Number(document.getElementById("qwe").innerHTML=GetU.options[GetG.selectedIndex].value);
   
   let z1 = Number(GetG.options[GetG.selectedIndex].value);
   let z2 = Number(GetU.options[GetU.selectedIndex].value);
   let y =Number(sib.value);
   let u =Number(tr.options[tr.selectedIndex].value);
   let k=Number(trr.options[trr.selectedIndex].value);
   let RealG = z1*z2;
     allG +=RealG;
     allU+=z2;
   
     pog = allG/allU;
   if((y>=261000&&y<262000)||(y>=269000&&y<=269999)){
   // let z3 = Number(GetG.options[GetG.selectedIndex].value);
   // let z4 = Number(GetU.options[GetU.selectedIndex].value);
    let fmG = z1*z2;
    
    p1+=fmG;
   
    l1+=z2;
    majorr=p1/l1;
   }
    if(u==1){
       if(k==1){
       // let z5 = Number(GetG.options[GetG.selectedIndex].value);
       // let z6 = Number(GetU.options[GetU.selectedIndex].value);
        let b1 = z1*z2;
       
        p2+=b1;
        
        l2+=z2;
        a1=p2/l2;
       }
       else {
        //let z7 = Number(GetG.options[GetG.selectedIndex].value);
       // let z8 = Number(GetU.options[GetU.selectedIndex].value);
        let b2 = z1*z2;
        
        p3+=b2;
        
        l3+=z2;
        a2=p3/l3;
       }
   }
    
    
   let span =  sib.value+"  "+"Year "+tr.value+" "+"Term "+trr.value+" GPA "+z1+" "+"Unit "+" "+z2+"\n";
   document.getElementById("alli").innerHTML+= span;
    
}
function tr11(){
    document.getElementById("a11").innerHTML=a1;
    
}
function tr12(){
    document.getElementById("a12").innerHTML=a2;
    
}
function RealOne(){
    document.getElementById("gr").innerHTML=pog;
}
function Major(){
    document.getElementById("ma").innerHTML=majorr;
}
if(Run){
    Run.addEventListener('click',calculate);

  }
 if(okGo){
    Run.addEventListener('click',RealOne);
  }
if(oppo){
    Run.addEventListener('click',Major);
}
if(iko){
    Run.addEventListener('click',tr11);
}
if(iko1){
    Run.addEventListener('click',tr12);
}