document.getElementById('form-agendamento').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const agendamento = {
        nome: document.getElementById('nome').value,
        servico: document.getElementById('servico').value,
        preco: parseFloat(document.getElementById('preco').value.replace('R$ ', '')),
        horario: document.getElementById('horario').value,
        data: document.getElementById('data').value,
        id: Date.now()
    };

    // Salva no LocalStorage
    let agendamentos = JSON.parse(localStorage.getItem('agendamentos')) || [];
    agendamentos.push(agendamento);
    localStorage.setItem('agendamentos', JSON.stringify(agendamentos));
    
    // Salva cliente se não existir
    let clientes = JSON.parse(localStorage.getItem('clientes')) || [];
    if (!clientes.some(c => c.nome === agendamento.nome)) {
        clientes.push({
            nome: agendamento.nome,
            telefone: '',
            email: ''
        });
        localStorage.setItem('clientes', JSON.stringify(clientes));
    }
    
    alert('Agendamento salvo com sucesso!');
    window.location.href = 'agendamentos.html';
});