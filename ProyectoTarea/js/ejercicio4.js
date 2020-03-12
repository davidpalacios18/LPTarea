$(document).ready(function(){
      $("#resultado").css("display", "none");
      $("#btnLimpiar").css("display", "none");
})

$('#evaluarDia').click(function(){
  $("#numero").prop('disabled', true);
  $("#resultado").css("display", "block");
  $("#btnLimpiar").css("display", "block");

  var numero = parseInt($('#numero').val());
  console.log(numero);
  switch (numero) {
    case 1:
    console.log("Hola");
      $('#resultado').append(`
        <div>
          <p>El dia es : <strong>Lunes</strong> .</p>
        </div>
        `);
      break;
    case 2:
      $('#resultado').append(`
        <div>
          <p>El dia es : <strong>Martes</strong> .</p>
        </div>
        `)
      break;
    case 3:
      $('#resultado').append(`
        <div>
          <p>El dia es : <strong>Miercoles</strong> .</p>
        </div>
        `)
      break;
    case 4:
      $('#resultado').append(`
        <div>
          <p>El dia es : <strong>Jueves</strong> .</p>
        </div>
        `)
      break;
    case 5:
      $('#resultado').append(`
        <div>
          <p>El dia es : <strong>Viernes</strong> .</p>
        </div>
        `)
      break;
    case 6:
      $('#resultado').append(`
        <div>
          <p>El dia es : <strong>Sábado</strong> .</p>
        </div>
        `)
      break;
    case 7:
      $('#resultado').append(`
        <div>
          <p>El dia es : <strong>Domingo</strong> .</p>
        </div>
        `)
      break;
    default:
      $('#resultado').append(`
        <div>
          <p>No existe ese día de la semana .</p>
        </div>
        `)
  }
})

$('#btnLimpiar').click(function(){

  $("#resultado").css("display", "none");
  $("#numero").prop('disabled', false);
  $("#numero").val('');

  $("#evaluarDia").css("display", "block");
  $("#resultado").css("display", "none");
  $("#btnLimpiar").css("display", "none");
})
