$(document).ready(function(){
  $('#horas').numeric();
  $('#precio').numeric();
  $("#resultado").css("display", "none");
  $("#btnLimpiar").css("display", "none");
})

$('#calcularSalario').click(function(){
  $("#calcularSalario").css("display", "none");
  $("#nombreEmpleado").prop('disabled', true);
  $("#horas").prop('disabled', true);
  $("#precio").prop('disabled', true);
  $("#resultado").css("display", "block");
  $("#btnLimpiar").css("display", "block");

  var nombre = $('#nombreEmpleado').val();
  var horas = parseInt($('#horas').val());
  var precio = parseInt($('#precio').val());
  console.log(nombre);

  if(horas > 0 && precio > 0 && nombre != ''){
    let salario = (horas * precio);
    let seguroSocial = salario * 0.05;
    let pension = salario * 0.1;
    let deducciones = (seguroSocial + pension);
    let salarioNeto;

    salarioNeto = salario - deducciones;
  
    $('#resultado').append(
      `
        <div id="mensaje">
          <p>Información de pago:</p>
          <ul style="color: gray ">
            <li>Salario: `+ salario +`</li>
            <li>Seguro Social: `+seguroSocial+`</li>
            <li>Pensión: `+pension+`</li>
            <li>Deducciones: `+deducciones+`</li>
          </ul>
          <hr>
          <p>El salario del empleado <strong>`+ nombre +`</strong> despues de deducciónes es: <strong>`+ salarioNeto +`</strong></p>
        </div>
        `
    )
  
    $("#calcularSalario").css("display", "none");
    console.log("El salario es: " + salario)
  
  }else{
    $('#resultado').append(
      `
      <div id="mensaje">
        <p>Verifique que lo datos esten escritos correctamente.<br>
        Las horas trabajadas o el precio por hora trabajada no pueden ser cero
        </p>
      </div>
      `
    )
  }
})


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
