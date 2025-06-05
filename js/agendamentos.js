document.addEventListener('DOMContentLoaded', function() {
    const agendamentos = JSON.parse(localStorage.getItem('agendamentos')) || [];
    const container = document.getElementById('lista-agendamentos');
    
    function renderAgendamentos(lista) {
        if (lista.length === 0) {
            container.innerHTML = '<p>Nenhum agendamento encontrado.</p>';
            return;
        }
        
        let html = `
            <table>
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Cliente</th>
                        <th>Serviço</th>
                        <th>Horário</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
        `;
        
        lista.forEach(ag => {
            html += `
                <tr>
                    <td>${ag.data}</td>
                    <td>${ag.nome}</td>
                    <td>${ag.servico}</td>
                    <td>${ag.horario}</td>
                    <td>R$ ${ag.preco.toFixed(2)}</td>
                </tr>
            `;
        });
        
        html += `</tbody></table>`;
        container.innerHTML = html;
    }
    
    // Filtros
    document.getElementById('btn-filter').addEventListener('click', function() {
        const dataFiltro = document.getElementById('filter-date').value;
        if (!dataFiltro) return;
        
        const filtrados = agendamentos.filter(ag => ag.data === dataFiltro);
        renderAgendamentos(filtrados);
    });
    
    document.getElementById('btn-clear').addEventListener('click', function() {
        document.getElementById('filter-date').value = '';
        renderAgendamentos(agendamentos);
    });
    
    // Renderiza todos inicialmente
    renderAgendamentos(agendamentos);
});