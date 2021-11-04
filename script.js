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