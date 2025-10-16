function escreva(){

   var nome = document.getElementById("nome").value 
    var descricao = document.getElementById("descricao").value 
    var idade = parseFloat(document.getElementById("idade").value) 
    var genero = document.getElementById("genero").value 
    var hobby = document.getElementById("hobby").value 

    var printNome = document.getElementById("printNome")
    var printDescricao = document.getElementById("printDescricao")
    var printIdade = document.getElementById("printIdade")
    var printGenero = document.getElementById("printGenero")
    var printHobby = document.getElementById("printHobby")

    printNome.textContent = nome
    printDescricao.textContent = descricao
    printIdade.textContent = idade
    printGenero.textContent = genero
    printHobby.textContent = hobby
}