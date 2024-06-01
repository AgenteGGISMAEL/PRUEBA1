function Persona(nombre) {
    this.nombre = nombre;
  }
  
  Persona.prototype.saludar = function() {
    return 'Hola, mi nombre es ' + this.nombre;
  }
  
  var juan = new Persona('José');
  console.log(juan.saludar()); // 'Hola, mi nombre es José'
  console.log(juan.__proto__); // { saludar: [Function], constructor: [Function: Persona] }


  //Hecho por el estudiante Ismael Freire// marca de agua
  