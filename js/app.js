var self, accion, memoria, pantalla;
var Calculadora = {
  init: function() {
    self=this;
    accion="NONE";
    memoria=0;
    pantalla = document.getElementById('display');
    pantalla.innerHTML = 0;
    var teclas = document.getElementsByClassName('tecla');
    for (var i = 0; i < teclas.length; i++) {
        teclas[i].addEventListener('click',this.listenClick);
    }
  },
  listenClick: function() {
    var pantalla = document.getElementById('display');
    var numeros = ["0","1","2","3","4","5","6","7","8","9","punto","on"];
    var id = this.id;
    if(numeros.indexOf(id) > -1){
      self.mostrar(id);
      return;
    }
    if(id=="igual"){
      self.calcular(accion,pantalla);
      return;
    }
    if(id=="mas"){
      accion="SUMAR";
    }
    if(id=="menos"){
      accion="RESTAR";
    }
    if(id=="por"){
      accion="MULTI";
    }
    if(id=="dividido"){
      accion="DIVIDIR";
    }
    if(id=="raiz"){
      self.raiz();
      return;
    }
    if(id=="sign"){
      self.agrSigno();
      return;
    }
    memoria = pantalla.innerHTML;
    pantalla.innerHTML = "";
  },
  sumar: function(a,b) {
    if(pantalla){
      var total = parseFloat(a) + parseFloat(b) + "";
      pantalla.innerHTML = (total.length>8)?total.slice(0,8):total;
      //accion="NONE"; Modo Veloz
    }else{
      alert("No se ha podido capturar el valor en pantalla");
    }
  },
  restar: function(a,b) {
    console.log(a,b);
    if(pantalla){
      var total = parseFloat(a) - parseFloat(b) + "";
      pantalla.innerHTML = (total.length>8)?total.slice(0,8):total;
      //accion="NONE"; Modo Veloz
    }else{
      alert("No se ha podido capturar el valor en pantalla");
    }
  },
  multiplicar: function(a,b) {
    if(pantalla){
      var total =  parseFloat(a) * parseFloat(b) + "";
      pantalla.innerHTML = (total.length>8)?total.slice(0,8):total;
      //accion="NONE"; Modo Veloz
    }else{
      alert("No se ha podido capturar el valor en pantalla");
    }
  },
  dividir: function(a,b) {
    if(pantalla){
      var total =  parseFloat(a) / parseFloat(b) + "";
      pantalla.innerHTML = (total.length>8)?total.slice(0,8):total;
      //accion="NONE"; Modo Veloz
    }else{
      alert("No se ha podido capturar el valor en pantalla");
    }
  },
  raiz: function(a){
    if(pantalla){
      var numero = parseFloat(pantalla.innerHTML);
      var total = 0;
      if(numero>0){
        total = Math.sqrt(numero)+"";
      }
      pantalla.innerHTML = (total.length>8)?total.slice(0,8):total;
      //accion="NONE"; Modo Veloz
    }else{
      alert("No se ha podido capturar el valor en pantalla");
    }
  },
  mostrar: function(valor){
    var actual = pantalla.innerHTML;
    if(valor=="on"){
      pantalla.innerHTML = 0;
      return;
    }
    if(valor=="punto"){
      valor=(actual.indexOf(".")>-1)?"":".";
    }else{
      actual=(actual=="0")?"":actual;
    }
    var total = actual + valor
    pantalla.innerHTML = (total.length>8)?total.slice(0,8):total;
  },
  calcular: function(accion,pantalla){
    var actual = pantalla.innerHTML;
    if(!memoria || memoria == ""){
      alert("Se ha utilizado un formato no valido.");
      return;
    }
    if(!actual || actual == ""){
      alert("Se ha utilizado un formato no valido.");
      return;
    }
    switch (accion) {
      case "SUMAR":
        this.sumar(memoria,actual);
        break;
      case "RESTAR":
        this.restar(memoria,actual);
        break;
      case "MULTI":
        this.multiplicar(memoria,actual);
        break;
      case "DIVIDIR":
        this.dividir(memoria,actual);
        break;
      default:

    }
  },
  agrSigno: function(){
    if(pantalla){
      var actual = pantalla.innerHTML;
      if(actual != "0"){
        console.log(actual);
        actual = (actual.indexOf("-")>-1)?actual.replace("-",""): "-"+actual;
        pantalla.innerHTML = actual;
      }
    }else{
      alert("No se ha podido capturar el valor en pantalla");
    }
  }
}


Calculadora.init();
