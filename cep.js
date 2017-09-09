$(document).ready(()=>{

  const validateEntry = function(e){
      //console.log(e.target.value);
      this.value = this.value.replace(/\D/g,"");
      // this.value = this.value.replace(/^(\d{5})(\d)/,"$1-$2");
  }

  const getAddress = function(cep){
      $.ajax({
          url:`https://viacep.com.br/ws/${cep}/json/`,
          dataType: "json",
          error: getAddressError,
          success: getAddressSuccess
          // beforeSend,
          // complete
      });
  }

  const validateLength = function() {
      let cep = this.value;
      if(cep.length < 8){
        $(this).addClass("error").focus();
      }else{
        $(this).removeClass("error");
        getAddress(cep);
      }
  }

const getAddressSuccess = function(address){
  console.log("Sucesso");
}

const getAddressError = function(){
  console.log("O servidor retornou com um erro");
}
  //MAPEANDO EVENTOS
  $("#cep")
    .on("input", validateEntry)
    .on("focusout", validateLength);

});
