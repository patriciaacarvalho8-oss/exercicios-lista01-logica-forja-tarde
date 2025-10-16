function media() {
    var med1 = parseFloat(document.getElementById("m1").value)
    var med2 = parseFloat(document.getElementById("m2").value)
    var med3 = parseFloat(document.getElementById("m3").value)
   
    var media = document.getElementById("resposta")
    var conta = (med1 + med2 + med3 ) / 3

    if(conta >= 7){
        media.textContent = conta.toFixed(2) + " - " + "APROVADO"
    }else{
        media.textContent = conta.toFixed(2) + " - " + "REPROVADO"
    }
}