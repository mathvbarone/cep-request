$(document).ready(()=>{

  const validateEntry = function(e){
      //console.log(e.target.value);
      this.value = this.value.replace(/\D/g,"");
      this.value = this.value.replace(/^(\d{5})(\d)/,"$1-$2");
  }

  const validateLength = function() {
      let cep = this.value;
      if(cep.length < 8){
        $(this).addClass("error").focus();
      }else{
        $(this).removeClass("error");
      }
  }

  //MAPEANDO EVENTOS
  $("#cep")
    .on("input", validateEntry)
    .on("focusout", validateLength);

});
