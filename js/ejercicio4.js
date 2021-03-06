$(document).ready(function(){
  $('#numero').numeric();
  $("#resultado").css("display", "none");
  $("#btnLimpiar").css("display", "none");
})

$('#evaluarDia').click(function(){
  $('#evaluarDia').css('display', "none");
  $("#numero").prop('disabled', true);
  $("#resultado").css("display", "block");
  $("#btnLimpiar").css("display", "block");

  var numero = parseInt($('#numero').val());
  console.log(numero);
  switch (numero) {
    case 1:
    console.log("Hola");
      $('#resultado').append(`
        <div id="mensaje">
          <p>El dia es : <strong>Lunes</strong> .</p>
        </div>
        `);
      break;
    case 2:
      $('#resultado').append(`
        <div id="mensaje">
          <p>El dia es : <strong>Martes</strong> .</p>
        </div>
        `)
      break;
    case 3:
      $('#resultado').append(`
        <div id="mensaje">
          <p>El dia es : <strong>Miércoles</strong> .</p>
        </div>
        `)
      break;
    case 4:
      $('#resultado').append(`
        <div id="mensaje">
          <p>El dia es : <strong>Jueves</strong> .</p>
        </div>
        `)
      break;
    case 5:
      $('#resultado').append(`
        <div id="mensaje">
          <p>El dia es : <strong>Viernes</strong> .</p>
        </div>
        `)
      break;
    case 6:
      $('#resultado').append(`
        <div id="mensaje">
          <p>El dia es : <strong>Sábado</strong> .</p>
        </div>
        `)
      break;
    case 7:
      $('#resultado').append(`
        <div id="mensaje">
          <p>El dia es : <strong>Domingo</strong> .</p>
        </div>
        `)
      break;
    default:
      $('#resultado').append(`
        <div id="mensaje">
          <p>No existe ese día de la semana .</p>
        </div>
        `)
  }
})

$('#btnLimpiar').click(function(){
  $("#resultado").css("display", "none");
  $("#numero").prop('disabled', false);
  $("#numero").val('');

  $("#evaluarDia").css("display", "");
  $("#resultado").css("display", "none");
  $("#mensaje").remove();
  $("#btnLimpiar").css("display", "none");
})
