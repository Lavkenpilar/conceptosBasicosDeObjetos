  //estructura básica de un objeto
  const persona = {
    // nombre:["Bob","Smith"],
     nombre:{   //espacio de nombre secundario (sub-namespace)
       pila:'Bob',
       apellido:'Smith'
     },
     edad: [32],
     genero:"masculino",
     intereses:["música", "esquí"],
     bio:function(){
         alert(
             `${this.nombre[0]} ${this.nombre[1]} tiene ${this.edad} años. Le gusta ${this.intereses[0]} y ${this.intereses[1]}.`
         )
     },
     saludo:function() {
         alert ("Hola, soy"+this.nombre[0]+".")
     }
    }
    // agregando un nuevo miembro y valor a un objeto
    const nombrePersonalizado = "altura"
    const valorPersonalizado = "1.75m"
    persona[nombrePersonalizado] = valorPersonalizado
    console.log (persona.altura)

 console.log (persona.saludo)
 console.log (persona.nombre.pila)
 
 // accediendo a los elementos de un arreglo a traves de []
 
 console.log (persona["intereses"])
 console.log(persona ["edad"])
 
 const text = document.querySelector("#ejemplo")
 console.log (text)
 text.innerHTML= "Hola, soy" + persona.nombre.apellido
 persona.bio()
 persona.saludo()
 
 // actualizando el valor de los miembros de un objeto
 persona.edad = 45
 persona ["nombre"]["apellido"] = "Cratchit"
 console.log (persona.edad)
 console.log (persona ["nombre"]["pila"])
 console.log (persona ["nombre"]["apellido"])
 
 // creando nuevos miembros al objeto
 persona ["ojos"] = "avellana"
 persona.despedida = function (){
    alert ("Adios a todos")
 }
console.log (persona ["ojos"])
persona.despedida()
 
 