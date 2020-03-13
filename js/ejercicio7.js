$(document).ready(function(){
    $('#cantidad-numero').numeric();
    $("#btnLimpiar").css("display", "none");
  })
//FUNCION DEL PRIMER BOTON
$('#agregar-cantidad').click(function(){
    var cantidad = parseInt($('#cantidad-numero').val());
    $("#cantidad-numero").prop('disabled', true);
    $("#agregar-cantidad").remove();
    $('#mensajito').append(
        `
        <div id="valorX">
            <p> <strong>LOS VALORES DE LA SERIE SON:</strong></p>
        </div>
        ` ); 
    //LOGICA DE LA SERIE
    var serie=8;
    for (i = 0; i < cantidad; i++) {
        serie = serie + (i*5);
        console.log( serie );
        $('#resultado').append(
          `
          <div id="valorX">
              <p> <strong>`+ serie +`</strong></p>
          </div>
          ` ); 
        };
        //EXPRESION QUE DA EL VALOR SIGUIENTE
        serie= serie + (i*5);
        //LOGICA PARA DESPLEGAR EL INPUT DE LA SERIE Y EL BOTON VERIFICAR SERIE
        $('#verificador').append(
           `
               <form id=formulario-verificador>    
                   <div class="form-group">
                       <label for="input-verificar-numero" style="color: white;">¿Cual seria el siguiente valor de la Serie?</label>
                       <input id="input-verificar-numero" name="input-verificar-numero" type="text" class="form-control">
                   </div>
               </form>
               <div id="btn-cantidad">
                   <div class="form-group text-center">
                       <button id="verificar-serie" class="btn btn-success">Verificar Valor</button>
                   </div>
               </div>

           ` );
        $('#input-verificar-numero').numeric();
        
        

        //LOGICA DEL BOTON VERIFICAR SERIE
        $('#verificar-serie').click(function(){
            $("#verificar-serie").remove(); 
            $("#btnLimpiar").css("display", "block");
            var verificador = parseInt($('#input-verificar-numero').val());
            console.log(verificador);
            if (verificador == serie) {
                console.log("Correcto");
                $('#mensaje-final').append(
                    `
                    <div id="valorX">
                        <p> <strong>Correcto</strong></p>
                    </div>
                    ` ); 
                 $("#input-verificar-numero").prop('disabled', true);
                  

            }else{
                $('#mensaje-final').append(
                    `
                    <div id="valorX">
                        <p> <strong>Incorrecto, La Respuesta es:`+serie+`</strong></p>
                    </div>
                    ` );
                console.log("Incorrecto, el siguiente es:"+ serie);
                $("#input-verificar-numero").prop('disabled', true);
                
            }
        });
              
  }) 

  