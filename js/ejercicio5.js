$(document).ready(function(){
      $("#resultado").css("display", "none");
      $("#btnLimpiar").css("display", "none");
})

$('#evaluarLetra').click(function(){
  $('#evaluarLetra').css('display', "none");
  $("#letra").prop('disabled', true);
  $("#resultado").css("display", "block");
  $("#btnLimpiar").css("display", "block");

  var letra = $('#letra').val();

  if (letra == 'a' || letra == 'e' || letra == 'i' || letra == 'o' || letra == 'u') {
    $('#resultado').append(`
      <div id="mensaje">
        <p>La vocal que ingresaste es: <strong>"`+ letra +`"</strong> y es minuscula .</p>
      </div>
      `)
  }else if (letra == 'A' || letra == 'E' || letra == 'I' || letra == 'O' || letra == 'U') {
    $('#resultado').append(`
      <div id="mensaje">
        <p>La vocal que ingresaste es: <strong>"`+ letra +`"</strong> y es mayuscula .</p>
      </div>
      `)
  }else{
    $('#resultado').append(`
      <div id="mensaje">
        <p>La letra que ingresaste no es una vocal .</p>
      </div>
      `)
  }

})

$('#btnLimpiar').click(function(){

  $("#resultado").css("display", "none");
  $("#letra").prop('disabled', false);
  $("#letra").val('');

  $("#evaluarLetra").css("display", "");
  $("#resultado").css("display", "none");
  $("#mensaje").remove();
  $("#btnLimpiar").css("display", "none");
})
