$(document).ready(function(){
    $('#valorA').numeric();
    $('#valorB').numeric();
    $("#resultado").css("display", "none");
    $("#btnLimpiar").css("display", "none");
})

$('#calcularX').click(function(){
  $("#calcularX").css("display", "none");
  $('#valorA').prop('disabled', true);
  $('#valorB').prop('disabled', true);
  $("#resultado").css("display", "block");
  $("#btnLimpiar").css("display", "block");

  var valorA = $('#valorA').val()
  var valorB = $('#valorB').val()

  if (valorA != '' && valorB != '') {
    let a = parseInt(valorA);
    let b = parseInt(valorB);
    let x;
    if (a != 0) {
        x = ((-b)/a)
        $('#resultado').append(
            `
            <div id="valorX">
                <p>El valor de X es: <strong>`+ x +`</strong></p>
            </div>
            `
        )
        $("#calcularX").css("display", "none");
  
        console.log("El valor de x es: " + x)
    } else {
        $('#resultado').append(
            `
            <div id="valorX">
                <p>
                El valor de <strong>"a"</strong> no puede ser 0. División no definida</p>
            </div>
            `
        )
        $("#calcularX").css("display", "none");
        console.log("El valor no puede ser encontrado")
    }
  } else {
    $('#resultado').append(
        `
        <div id="valorX">
            <p>
            Verifique que lo datos esten escritos correctamente.<br>
            El valor de <strong>"a"</strong> no puede ser 0. División no definida</p>
        </div>
        `
    )
  }

});

$('#limpiar').click(function(){
    $("#resultado").css("display", "none");
    $('#valorA').val('');
    $('#valorB').val('');

    $('#valorA').prop('disabled', false);
    $('#valorB').prop('disabled', false);

    $("#calcularX").css("display", "");
    $("#valorX").remove();
    $("#btnLimpiar").css("display", "none");
});
