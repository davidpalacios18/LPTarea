$(document).ready(function(){
  $('#horas').numeric();
  $('#precio').numeric();
  $("#resultado").css("display", "none");
  $("#btnLimpiar").css("display", "none");
})

$('#calcularSalario').click(function(){
  $('#calcularSalario').css('display', "none");
  $("#nombreEmpleado").prop('disabled', true);
  $("#horas").prop('disabled', true);
  $("#precio").prop('disabled', true);
  $("#resultado").css("display", "block");
  $("#btnLimpiar").css("display", "block");

  var nombre = $('#nombreEmpleado').val();
  var horas = parseInt($('#horas').val());
  var precio = parseInt($('#precio').val());
  var impuesto = 0, salarioNeto = 0, horasExtra = 0;

  if(horas > 0 && precio > 0 && nombre != ''){

    let salario = horas * precio;
    if (horas <= 35) {
      $('#resultado').append(`
        <div id="mensaje">
          <p>El salario del empleado <strong>`+ nombre +`</strong> es: <strong>L. `+ salario +`</strong></p>
        </div>
        `);
        $("#calcularSalario").css("display", "none");
    }else{
      salario =  precio * 35;
      horasExtra = (horas - 35);
      salarioNeto = (precio * 1.5) * horasExtra + salario;
      if (salario <= 2000) {
        salarioImpuesto(nombre,salario,horasExtra,impuesto,salarioNeto);
      }else if (salario <= 2220) {
        let impuesto = (salario - 2000) * 0.2;
        salarioNeto -= impuesto;
        salarioImpuesto(nombre,salario,horasExtra,impuesto,salarioNeto);
      }else{
        let impuesto = (salario - 2220) * 0.3 + (220 * 0.2);
        salarioNeto -= impuesto;
        salarioImpuesto(nombre,salario,horasExtra,impuesto,salarioNeto);
      }
    }
  }else{
    $('#resultado').append(
      `
      <div id="mensaje">
        <p>Verifique que lo datos esten escritos correctamente.<br>
        Las horas trabajadas o el precio por hora trabajada no pueden ser menores o iguales a cero
        </p>
      </div>
      `
    )
  }
})

function salarioImpuesto (nombre,salario,horasExtra,impuesto,salarioNeto){
  $('#resultado').append(`
    <div id="mensaje">
      <p>Información de pago:</p>
      <ul style="color: gray ">
        <li>Salario: `+ salario +`</li>
        <li>Horas extra: `+ horasExtra +`</li>
        <li>impuestos: `+impuesto+`</li>
      </ul>
      <hr>
      <p>El salario del empleado <strong>`+ nombre +`</strong> despues de impuesto es: <strong>`+ salarioNeto +`</strong></p>
    </div>
    `);
    $("#calcularSalario").css("display", "none");
}

$('#btnLimpiar').click(function(){

  $("#resultado").css("display", "none");
  $("#nombreEmpleado").prop('disabled', false);
  $("#nombreEmpleado").val('');
  $("#horas").prop('disabled', false);
  $("#horas").val('');
  $("#precio").prop('disabled', false);
  $("#precio").val('');

  $("#calcularSalario").css("display", "");
  $("#resultado").css("display", "none");
  $("#mensaje").remove();
  $("#btnLimpiar").css("display", "none");
})
