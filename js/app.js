var self;
var accion;
var memoria;
var pantalla;
var Calculadora = {
  init: function() {
    self=this;
    accion="NONE";
    memoria=0;
    pantalla = document.getElementById('display');
    pantalla.innerHTML = 0;
    var teclas = document.getElementsByClassName('tecla');
    var numeros = ["0","1","2","3","4","5","6","7","8","9"];
    for (var i = 0; i < teclas.length; i++) {
        teclas[i].addEventListener('click',this.listenClick);
    }
  },
  listenClick: function() {
    var pantalla = document.getElementById('display');
    var numeros = ["0","1","2","3","4","5","6","7","8","9"];
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
    memoria = pantalla.innerHTML;
    pantalla.innerHTML = 0;
  },
  sumar: function(a,b) {
    console.log(a,b);
    if(pantalla){
      pantalla.innerHTML = parseInt(a) + parseInt(b);
    }else{
      alert("No se ha podido capturar el valor en pantalla");
    }
  },
  restar: function(a,b) {
    console.log(a,b);
    if(pantalla){
      pantalla.innerHTML = parseInt(a) - parseInt(b);
    }else{
      alert("No se ha podido capturar el valor en pantalla");
    }
  },
  multiplicar: function(a,b) {
    if(pantalla){
      pantalla.innerHTML = parseInt(a) * parseInt(b);
    }else{
      alert("No se ha podido capturar el valor en pantalla");
    }
  },
  division: function(a,b) {

  },
  mostrar: function(valor){
    var actual = pantalla.innerHTML;
    pantalla.innerHTML = parseInt(actual + valor);
  },
  calcular: function(accion,pantalla){
    var actual = pantalla.innerHTML;
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
      default:

    }
  }
}


Calculadora.init();
