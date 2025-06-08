// Capacidades que tienen las funciones al igual que otros objetos

// 1. Pasar funciones como argumentos -> callback

function a () {}
function b (a) {}
b(a)

// 2. Retornar funciones

function a () {
  function b () {}
  return b
}

// 3. Asignar funciones a variables -> Expresionn de funcion

const a = function () {}

// 4. Tener propiedades y mÃ©todos

function a () {}
const obj = {}
a.call(obj)

// 5. Anidar funciones -> Nested functions

function a () {
  function b () {
    function c () {
    
    }
    c()
  }
  b()
}
a()

// 6. ¿Es posible almacenar funciones en objetos?

const rocket = {
  name: 'Falcon 9',
  launchMessage: function launchMessage () {
    console.log('ðŸ”¥')
  }
}

rocket.launchMessage()