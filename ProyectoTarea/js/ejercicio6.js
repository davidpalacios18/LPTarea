$(document).ready(function(){
    $('#cantidad-producto').numeric();
    $('#precio-producto').numeric();
    $("#btnLimpiar").css("display", "none");
  })
  console.log("CANTIDAD|| " +"NOMBRE||  "+ "PRECIO||  "+  "SUBTOTAL|| "+"TOTAL" );
  var total = 0;
    $('#agregar-producto').click(function(){
       
        //$("#btnLimpiar").css("display", "block");
      
        var nombre = $('#nombre-producto').val();
        var cantidad = parseInt($('#cantidad-producto').val());
        var precio = parseInt($('#precio-producto').val());
        var unitario = cantidad*precio;
        total= total+unitario;

        $('#resultado').append(
          `
          <tr>
          <th scope="row">`+cantidad+`</th>
          <td>`+nombre+`</td>
          <td>`+precio+`</td>
          <td>`+unitario+`</td>
          <td>`+total+`</td>
        </tr>

          `
      )
        console.log( cantidad +"  ||    " + nombre+"  ||    " +precio+"   ||    " + unitario+ "    ||"+total);
        alert("Datos registrados con exito.");
        document.getElementById("formulario").reset();
        
        $("#nombre-producto").val('');
        $("#cantidad-producto").val('');
        $("#precio-pruducto").val('');


      })  



  

  