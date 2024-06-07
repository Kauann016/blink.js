//Aplicação da funcionalidade do Js
document.querySelectorAll('button').forEach(
    button => {
       button.addEventListener('click', () => {
        document.body.className = button.id
       })
    

})