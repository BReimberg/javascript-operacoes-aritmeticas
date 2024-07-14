// Adiciona um ouvinte de evento ao formulário com o ID 'calcForm' que escuta o evento de 'submit'.
// Quando o formulário é enviado, a função anônima fornecida é executada.
document.getElementById('calcForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Os valores dos números inseridos
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);

    // Operações aritméticas
    const soma = num1 + num2;
    const produto = num1 * num2;
    const divisao = num1 / num2;
    const resto = num1 % num2;

    // Tabela dinâmica
    let tabela = `
        <table>
            <thead>
                <tr>
                    <th>Operação</th>
                    <th>Resultado</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Soma</td>
                    <td>${soma}</td>
                </tr>
                <tr>
                    <td>Produto</td>
                    <td>${produto}</td>
                </tr>
                <tr>
                    <td>Divisão</td>
                    <td>${divisao}</td>
                </tr>
                <tr>
                    <td>Resto da Divisão</td>
                    <td>${resto}</td>
                </tr>
            </tbody>
        </table>
    `;

    // Exibir a tabela no div de resultado
    document.getElementById('result').innerHTML = tabela;
});