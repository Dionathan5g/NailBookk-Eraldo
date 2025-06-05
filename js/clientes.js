document.addEventListener('DOMContentLoaded', function() {
    const clientes = JSON.parse(localStorage.getItem('clientes')) || [];
    const container = document.getElementById('lista-clientes');
    
    if (clientes.length === 0) {
        container.innerHTML = '<p>Nenhum cliente cadastrado.</p>';
        return;
    }
    
    let html = `
        <table>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Telefone</th>
                    <th>Email</th>
                    <th>Total Agendamentos</th>
                </tr>
            </thead>
            <tbody>
    `;
    
    const agendamentos = JSON.parse(localStorage.getItem('agendamentos')) || [];
    
    clientes.forEach(cliente => {
        const total = agendamentos.filter(ag => ag.nome === cliente.nome).length;
        
        html += `
            <tr>
                <td>${cliente.nome}</td>
                <td>${cliente.telefone || 'Não informado'}</td>
                <td>${cliente.email || 'Não informado'}</td>
                <td>${total}</td>
            </tr>
        `;
    });
    
    html += `</tbody></table>`;
    container.innerHTML = html;
});