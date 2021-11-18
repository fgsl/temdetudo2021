function definirLayout()
{
    var body = document.getElementsByTagName('body')[0];
    var header = document.createElement('header');
    body.insertBefore(header, body.firstChild);
    var h1 = document.createElement('h1');
    header.appendChild(h1);
    h1.setAttribute('id','n01');
    h1.innerHTML = 'LOJAS TEM DE TUDO';

    var footer = document.createElement('footer');
    body.appendChild(footer);
    var anchor = document.createElement('a');
    footer.appendChild(anchor);
    anchor.setAttribute('href','index.html');
    anchor.innerHTML = 'Voltar às Lojas Temdetudo';
}


// Esta função não é realmente necessária, porque existe o atributo autofocus na tag input
function focarCPF() {
    inputCPF = document.getElementById("CPF");
    inputCPF.focus();
}

function mudarRodape() {
    var rodape = `
<h1>MicroHard
Sistemas
Comerciais</h1>
<a href="index.html">Voltar às Lojas Temdetudo</a>
`;
    document.getElementById('footer').innerHTML = rodape;
}

function carregarProdutos()
{
    var tbody = document.getElementById("tabela_produtos_corpo");
    var produtos = [
        ['Playstation 5','15.000,00','10'],
        ['Nintendo Switch','2.000,00','5'],
        ['Cadeira Gamer Rosa - Travel Max','50.000,00','2'],
    ]
    var totalGeral = 0;

    n = produtos.length;
    for (var i=0; i<n; i++) {
        var tr = document.createElement('tr');
        tbody.appendChild(tr);
        var td = document.createElement('td');
        tr.appendChild(td);
        td.innerHTML = i;
        var td = document.createElement('td');
        tr.appendChild(td);
        td.innerHTML = produtos[i][0];
        var td = document.createElement('td');
        tr.appendChild(td);    
        td.innerHTML = produtos[i][1];
        td.setAttribute("preco", td.innerHTML);
        td.setAttribute("id", "preco");
        var td = document.createElement('td');
        td.innerHTML = produtos[i][2];
        tr.appendChild(td);
        td.setAttribute("quantidade", td.innerHTML);
        td.setAttribute("id", "quantidade");
        var td = document.createElement('td');
        var preco =  document.getElementById('preco').getAttribute('preco');
        preco.replace(".","").replace(",",".")
        var quantidade =  document.getElementById('quantidade').getAttribute('quantidade');
        var total = parseFloat(preco) * parseInt(quantidade); 
        var td = document.createElement('td');        
        tr.appendChild(td);
        td.innerHTML = total;
        totalGeral += total;
    }
    document.getElementById("total").innerHTML = totalGeral;
}