$(document).ready(function(){
    const limiteTarefas = 8; // Defina aqui o limite de tarefas
    $('#button-form').click(function(e){
        e.preventDefault();
        let newTask = $('#task-text').val().trim(); // Obtém o valor do campo de texto e remove espaços em branco no início e no fim
        if ($('#tasks li').length < limiteTarefas) {
            if (newTask !== '') {
                $('#tasks').append('<li>' + newTask + '<button class="button-task-unchecked">X</button></li>');
                $('#task-text').val('');
            } else {
                alert('Por favor, preencha o campo com uma tarefa.');
            }
        } else {
            alert('Limite de tarefas alcançado.');
        }
    });


    $(document).on('click', '.button-task-unchecked', function(){
        $(this).css({
            'background-color': 'green',
            'color': 'white',
            'width': '40px',
            'height': '40px',
        });
        $(this).text('✓'); // Define o texto do botão como 'Concluído' ao clicar nele
        // Encontra o pai <li> e aplica o estilo de line-through
        $(this).parent('li').css('text-decoration', 'line-through');
    });
});