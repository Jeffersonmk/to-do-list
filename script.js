$(document).ready(function(){
    $('#button-form').click(function(e){
        e.preventDefault();
        let newTask = $('#task-text').val().trim(); // Obtém o valor do campo de texto e remove espaços em branco no início e no fim
        if (newTask !== '') {
            $('#tasks').append('<li>' + newTask + '</li>');
            $('#newTask').val('');
        } else {
            alert('Por favor, preencha o campo com uma tarefa.');
        }
    });
});