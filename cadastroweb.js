<!doctype html>
<html lang="pt-br">
<head>
	<title></title>
  <meta charset="utf-8">
  <link rel="stylesheet" type="text/css" media="screen" href="">
  <style type="text/css"></style> 
  <style>
    body { font: 15pt Arial; }
    button { font-size: 12pt; padding: 30px; }
</style> 
<h1>SEJA BEM VINDO AO CADASTRO WEB!</h1>
    <button onclick="clicou()">ENTRE NA SUA PAGINA WEB!</button>  
<script>
 function clicou() {
            window.alert('CADASTRO OK!')
        }
    function pessoa(tipo){
      if(tipo=="fisica"){
      document.getElementById("fisica").style.display = "inline";
      document.getElementById("juridica").style.display = "none";
      }else if(tipo=="juridica"){
      document.getElementById("fisica").style.display = "none";
      document.getElementById("juridica").style.display = "inline";

      }

    }

  </script>

<script type="text/javascript">
      function MascaraCNPJ(cnpj){
        if(mascaraInteiro(cnpj)==false){
                event.returnValue = false;
        }       
        return formataCampo(cnpj, '00.000.000/0000-00', event);
      }

      function ValidarCNPJ(ObjCnpj){
        var cnpj = ObjCnpj.value;
        var valida = new Array(6,5,4,3,2,9,8,7,6,5,4,3,2);
        var dig1= new Number;
        var dig2= new Number;

        exp = /\.|\-|\//g
        cnpj = cnpj.toString().replace( exp, "" ); 
        var digito = new Number(eval(cnpj.charAt(12)+cnpj.charAt(13)));

        for(i = 0; i<valida.length; i++){
                dig1 += (i>0? (cnpj.charAt(i-1)*valida[i]):0);  
                dig2 += cnpj.charAt(i)*valida[i];       
        }
        dig1 = (((dig1%11)<2)? 0:(11-(dig1%11)));
        dig2 = (((dig2%11)<2)? 0:(11-(dig2%11)));

        if(((dig1*10)+dig2) != digito)  
                alert('CNPJ Inválido!');
      }                        
        function MascaraCeppj(ceppj){
            if(mascaraInteiro(ceppj)==false){
            event.returnValue = false;
            }       
            return formataCampo(ceppj, '00.000-000', event);
        }

        function ValidaCeppj(ceppj){
            exp = /\d{2}\.\d{3}\-\d{3}/
            if(!exp.test(ceppj.value))
            alert('Numero de Cep Inválido!');               
        }
          function MascaraCPF(cpf){
              if(mascaraInteiro(cpf)==false){
              event.returnValue = false;
              }       
              return formataCampo(cpf, '000.000.000-00', event);
          }
          function ValidarCPF(Objcpf){
              var cpf = Objcpf.value;
              exp = /\.|\-/g
              cpf = cpf.toString().replace( exp, "" ); 
              var digitoDigitado = eval(cpf.charAt(9)+cpf.charAt(10));
              var soma1=0, soma2=0;
              var vlr =11;

              for(i=0;i<9;i++){
                soma1+=eval(cpf.charAt(i)*(vlr-1));
                soma2+=eval(cpf.charAt(i)*vlr);
                vlr--;
              }       
                soma1 = (((soma1*10)%11)==10 ? 0:((soma1*10)%11));
                soma2=(((soma2+(2*soma1))*10)%11);

                var digitoGerado=(soma1*10)+soma2;
                if(digitoGerado!=digitoDigitado)        
                alert('CPF Invalido!');         
          }
          function MascaraData(data){
              if(mascaraInteiro(data)==false){
              event.returnValue = false;
              }       
              return formataCampo(data, '00/00/0000', event);
          }
          function ValidaData(data){
              exp = /\d{2}\/\d{2}\/\d{4}/
              if(!exp.test(data.value))
              alert('Data Invalida!');                        
          }                              
        function MascaraCep(Cep){
            if(mascaraInteiro(Cep)==false){
            event.returnValue = false;
            }       
            return formataCampo(Cep, '00.000-000', event);
        }
        function ValidaCep(Cep){
            exp = /\d{2}\.\d{3}\-\d{3}/
            if(!exp.test(Cep.value))
            alert('Numero de Cep Inválido!');               
        }
          function mascaraInteiro(){
              if (event.keyCode < 48 || event.keyCode > 57){
              event.returnValue = false;
              return false;
              }
              return true;
          }
          function formataCampo(campo, Mascara, evento) { 
              var boleanoMascara; 

              var Digitato = evento.keyCode;
              exp = /\-|\.|\/|\(|\)| /g
              campoSoNumeros = campo.value.toString().replace( exp, "" ); 

              var posicaoCampo = 0;    
              var NovoValorCampo="";
              var TamanhoMascara = campoSoNumeros.length;; 

            if (Digitato != 8) { // backspace 
                for(i=0; i<= TamanhoMascara; i++) { 
                        boleanoMascara  = ((Mascara.charAt(i) == "-") || (Mascara.charAt(i) == ".")
                                                                || (Mascara.charAt(i) == "/")) 
                        boleanoMascara  = boleanoMascara || ((Mascara.charAt(i) == "(") 
                                                                || (Mascara.charAt(i) == ")") || (Mascara.charAt(i) == " ")) 
                        if (boleanoMascara) { 
                                NovoValorCampo += Mascara.charAt(i); 
                                  TamanhoMascara++;
                        }else { 
                                NovoValorCampo += campoSoNumeros.charAt(posicaoCampo); 
                                posicaoCampo++; 
                          }              
                  }      
                campo.value = NovoValorCampo;
                  return true; 
              }else { 
                return true; 
            }
          }

</script>

</head>
<body>  
        <nav>
          <ul>

	       	<li>
	           <a href="Cadastro.html">
			                   Voltar
	           </a>
            </li>
        </nav>


<div class="conteudo">
    <h3> 
      PARA ACESSAR A PAGINA:
      DIGITE AQUI INFORMAÇÕES SOBRE VOCÊ OU DA SUA EMPRESA: </h3>


<form name="form1">
  <div class="form-group">
          <p>
           <label class="radio-inline col-sm-4"><input type="radio" name="optradio" value="juridica" onclick="pessoa(this.value);">Pessoa Juridica</label>
            <label class="radio-inline col-sm-4"><input type="radio" name="optradio" value="fisica" onclick="pessoa(this.value);">Pessoa Fisica</label>
          </p>
  </div>

        <div id="juridica" style="display:none;">
          
          <div class="form-group">
            <label class="control-label col-sm-2" for="Nomeempresa">Nome Empresa: *</label>
            <div class="col-sm-8">
              <input type="text" class="form-control" id="Nomeempresa" required name="Nomeempresa">
            </div>
          </div>
          
           <div class="form-group">
            <label class="control-label col-sm-2" for="Cnpj">CNPJ: *</label>
            <div class="col-sm-3">
              <input type="text" name="cnpj" onKeyPress="MascaraCNPJ(form1.cnpj);" maxlength="18" onBlur="ValidarCNPJ(form1.cnpj);">
            </div>

            <label class="control-label col-sm-2 " for="Endpj">Endereço: * </label>
            <div class="col-sm-3">
              <input type="text" class="form-control Endpj" id="Endpj" name="Endpj" required>
            </div>

            <label class="control-label col-sm-2 " for="ceppj">Cep: * </label>
            <div class="col-sm-3">
             <input type="text" name="ceppj" onKeyPress="MascaraCeppj(form1.ceppj);" maxlength="10" onBlur="ValidaCeppj(form1.ceppj)"> 
            </div>

            <label class="control-label col-sm-2 " for="Telpj">Tel: * </label>
            <div class="col-sm-3">
              <input type="text" name="telpj" onKeyPress="MascaraTelefone(form1.telpj);" maxlength="14"  onBlur="ValidaTelefone(form1.telpj);">
            </div>

            <label class="control-label col-sm-2 " for="Telpj">Email: * </label>
            <div class="col-sm-3">
              <input type="text" class="form-control Emailpj" id="Emailpj" name="Emailpj" required>
            </div>

            <label class="control-label col-sm-2 " for="Telpj">Confirme Email: * </label>
            <div class="col-sm-3">
              <input type="text" class="form-control Emailpj" id="Emailpj" name="Emailpj" required>
            </div>


        </div>
        </div> 

          <div id="fisica" style="display:none;">
          <div class="form-group">
            <label class="control-label col-sm-2" for="NomePF">Nome: *</label>
            <div class="col-sm-8">
              <input type="text" class="form-control" id="NomePF" required name="NomePF">
            </div>
          </div>

          <div class="form-group">
            <label class="control-label col-sm-2" for="NomePF">N° Matrícula: *</label>
            <div class="col-sm-8">
              <input type="text" class="form-control" id="NMatriculaPF" required name="NMatriculaPF">
            </div>
          </div>
          
           <div class="form-group">
            <label class="control-label col-sm-2" for="CPF">CPF: *</label>
            <div class="col-sm-3">
              <input type="text" name="cpf" onBlur="ValidarCPF(form1.cpf);" onKeyPress="MascaraCPF(form1.cpf);" maxlength="14">
            </div>

            <label class="control-label col-sm-2 " for="Data">Data Nascimento: * </label>
            <div class="col-sm-3">
              <input type="text" name="data" onKeyPress="MascaraData(form1.data);" maxlength="10" onBlur= "ValidaDataform1.data);">
            </div>

            <label class="control-label col-sm-2 " for="End">Endereço: * </label>
            <div class="col-sm-3">
              <input type="text" class="form-control End" id="Endpf" name="End" required>
            </div>

            <label class="control-label col-sm-2 " for="cep">Cep: * </label>
            <div class="col-sm-3">
              <input type="text" name="cep" onKeyPress="MascaraCep(form1.cep);" maxlength="10" onBlur="ValidaCep(form1.cep)">
            </div>

            <label class="control-label col-sm-2 " for="Telpf">Telefone: * </label>
            <div class="col-sm-3">
              <input type="text" name="tel" onKeyPress="MascaraTelefone(form1.tel);" maxlength="14"  onBlur="ValidaTelefone(form1.tel);">
            </div>

            <label class="control-label col-sm-2 " for="Email">Email: * </label>
            <div class="col-sm-3">
              <input type="text" class="form-control Email" id="Email" name="Email" required>
            </div>

            <label class="control-label col-sm-2 " for="Email">Confirme Email: * </label>
            <div class="col-sm-3">
              <input type="text" class="form-control Email" id="Email" name="Email" required>
            </div>


          </div>
          </div>

  </form>
</body>

</html>

# Renato Barbosa
