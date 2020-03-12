$(document).ready(function(){
      $("#resultado").css("display", "none");
      $("#btnLimpiar").css("display", "none");
})

$('#calcularSalario').click(function(){
    $("#nombreEmpleado").prop('disabled', true);
    $("#horas").prop('disabled', true);
    $("#precio").prop('disabled', true);
    $("#resultado").css("display", "block");
    $("#btnLimpiar").css("display", "block");

    var nombre = $('#nombreEmpleado').val();
    var horas = parseInt($('#horas').val());
    var precio = parseInt($('#precio').val());

    if(horas > 0 && precio > 0){

      let salario = horas * precio;
      if (horas <= 35) {
        resolucion(nombre,salario);
      }else{
        salario  = (horas - 35) * (precio * 1.5) + precio * 35;
        if (salario <= 2000) {
          console.log("libre de impuestos");
          resolucion(nombre,salario);
        }else if (salario <= 2220) {
          let impuesto = (salario - 2000) * 0.2;
          resolucion(nombre,salario);
        }
          let impuesto = (salario - 2220) * 0.3 + (220 * 0.2);
          resolucion(nombre,salario);
      }
    }
})

function resolucion (nombre,salario){
  $('#resultado').append(
    `
    <div>
    <p>El salario del empleado <strong>`+ nombre +`</strong> despues de deducciónes es: <strong>`+ salario +`</strong></p>
    </div>
    `
  )

  $("#calcularSalario").css("display", "none");
  console.log("El salario es: " + salario)
}

$('#btnLimpiar').click(function(){

  $("#resultado").css("display", "none");
  $("#nombreEmpleado").prop('disabled', false);
  $("#nombreEmpleado").val('');
  $("#horas").prop('disabled', false);
  $("#horas").val('');
  $("#precio").prop('disabled', false);
  $("#precio").val('');

  $("#calcularSalario").css("display", "block");
  $("#resultado").css("display", "none");
  $("#btnLimpiar").css("display", "none");
})