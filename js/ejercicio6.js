$(document).ready(function(){
    $('#cantidad-producto').numeric();
    $('#precio-producto').numeric();
    $("#limpiar").css("display", "none");
    $("#cierre").css("display", "none");
})
  console.log("CANTIDAD|| " +"NOMBRE||  "+ "PRECIO||  "+  "SUBTOTAL|| "+"TOTAL" );
  var total = 0;

  
  
  $('#agregar-producto').click(function(){
    $("#cierre").css("display", "");
    var nom = $('#nombre-producto').val();
    var cant = $('#cantidad-producto').val();
    var prec = $('#precio-producto').val();
    console.log(nom)
    console.log(cant)
    console.log(prec)

    if (nom != '' && cant != '' && prec != '') {
      //$("#btnLimpiar").css("display", "block");
        
      let nombre = nom
      let cantidad = parseInt(cant);
      let precio = parseInt(prec);
      let unitario = cantidad*precio;
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
      
    } else {
      alert("Datos ingresados de forma incorrecta. Verifique que los campos esten llenos");
    }
    
  })  
 
  $('#cierre').click(function(){
    $('#mensajito').append(
      `
      <div id="valorX">
          <p> <strong>Su total a  pagar es:   `+total+`</strong></p>
      </div>
      ` ); 
      $("#agregar-producto").prop('disabled', true);
      $("#nombre-producto").prop('disabled', true);
      $("#cantidad-producto").prop('disabled', true);
      $("#precio-producto").prop('disabled', true);
      $("#cierre").prop('disabled', true);
     
      $("#limpiar").css("display", "");
  })  
  
  $('#limpiar').click(function(){
    location.reload();
  }) 


  

