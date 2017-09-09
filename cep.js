$(document).ready(()=>{

  const validateEntry = function(e){
      //console.log(e.target.value);
      this.value = this.value.replace(/\D/g,"");
  }

  const getAddress = ()=> {

  }

  //MAPEANDO EVENTOS
  $("#cep")
    .on("input", validateEntry)
    .on("focusout", getAddress);

});
