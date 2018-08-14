function exe_2(){
    var valor_ingresso, qtde_ingresso, despesa, lucro;
    var aux = "<table border=\"1\">";
    // gera tabela
    qtde_ingresso = 120;
    despesa = 200;
    aux = aux + "<tr> <th> Valor </th> <th> Qtde </th> <th> Lucro </th> </tr>";
    for(valor_ingresso = 5; valor_ingresso >=1 ; valor_ingresso = valor_ingresso - 0.50 ){
        aux = aux + "<tr>";
        lucro = (qtde_ingresso * valor_ingresso) - despesa;
        aux = aux + "<td> " + valor_ingresso + " </td> <td>" + qtde_ingresso + " </td><td> " +
            lucro + " </td>";
        qtde_ingresso = qtde_ingresso + 26;
        aux = aux + "</tr>";
    }
    aux = aux + "</table>";
    document.getElementById("saida").innerHTML = aux;
}

function exe_3() {
    var aux1, numpess;
    var a, b, c, d, e, v1, v2, tot1, tot2;

    numpess = 0;
    a = 0;
    b = 0;
    c = 0;
    d = 0;
    e = 0;

    while (numpess >= 0 && numpess <= 7 ){
        parseFloat(numpess = numpess + 1);
        aux1 = prompt("Digite a idade da " + numpess + "ª pessoa.");
        if (aux1 >= 0 && aux1 <= 15) {
            a = a + 1;
        }
            else if (aux1 > 15 && aux1 <= 30) {
                b = b + 1;
            }
                else if (aux1 > 31 && aux1 <= 45) {
                    c = c + 1;
                }
                    else if (aux1 > 46 && aux1 <= 60) {
                        d = d + 1;
                    }
                        else if (aux1 > 60) {
                            e = e + 1;
                        }
        else {
            alert("Digite uma idade válida");
        }
    }
    //regra de 3 para achar a porcentagem//
    v1 = a * 100;
    tot1 = v1 / 8;

    v2 = e * 100;
    tot2 = v2 / 8;

    document.getElementById("saida_2").innerHTML = "O nº de pessoas na faixa de 15 anos é :" + a + "</br>" +
        "O nº de pessoas na faixa de 16 a 30 anos é :" + b + "</br>" +
        "O nº de pessoas na faixa de 31 a 45 anos é :" + c + "</br>" +
        "O nº de pessoas na faixa de 46 a 60 anos é :" + d + "</br>" +
        "O nº de pessoas na faixa de 60 anos ou mais é :" + e + "</br>" +
        "A porcentagem de pessoas na faixa de 15 anos é :" + tot1 + "% </br>" +
        "A porcentagem de pessoas na faixa de 60  ou mais é :" + tot2 + "%";
}

function exe_4(){
    var n_11 = prompt("Digite o nº da tabuada desejada");
    var aux_4 = "<table border=\"1\">";
    aux_4 = aux_4 + "<tr> <th> A tabuada do numero " + n_11 + " é : </th> </tr>";
    var n_33 = 0;
    for (var n_22 = 1; n_22 < 11; n_22++) {
        n_33++;
        aux_4 = aux_4 + "<tr>";
        aux_4 = aux_4 + "<td>" + n_11 + " X " + n_33 + " = " + n_11 * n_33 + "</td>";
        aux_4 = aux_4 + "</tr>";
    }
    aux_4 = aux_4 + "</table>";
    document.getElementById("saida_3").innerHTML = aux_4;
}

function exe_5() {
    var sn, pn, tab;
    pn = 1;
    tab = 0;

    while (pn < 11){
        document.write("<font face = Courier size=5 color=000000> </br> A Tabuada do Nº " + pn + " é : </br> </br>");
        for(sn = 0; sn < 11; sn++){
            tab = pn + " X " + sn + " = " + pn * sn + "</br>";
            document.write("<font face = Courier size=4 color=000000>" + tab);
        }
        pn++;
    }
}

function exe_6(){
    var cont, vprazo, vvista, aux_6, preco, precotot, vprazodiv, arredondado;
    vprazo = 0;
    vvista = 0;
    cont = 0;
    preco = 0;
    precotot = 0;


    while (cont < 15){
        cont++;
        aux_6 = prompt("Digite o tipo de venda (VP - venda a prazo | VV - venda a vista)          Venda nº " + cont);
        preco = prompt("Digite o Valor do produto");
        precotot = parseInt(precotot) + parseInt(preco);

        if ( aux_6 === "VV" || aux_6 === "vv"){
            vvista = parseInt(vvista) + parseInt(preco);
        }
            else if(aux_6 === "VP" || aux_6 === "vp") {
                vprazo = parseInt(vprazo) + parseInt(preco);
            }
    }
    vprazodiv = vprazo / 3;
    arredondado = parseFloat(vprazodiv.toFixed(2));
    document.getElementById("saida_6").innerHTML = "O valor total das compras a vista é: " + vvista + "</br>" +
        "O valor total das compras a prazo é: " + vprazo + "</br>" +
        "O valor total das compras é: " + precotot + "</br> O valor da 1ª parcela das compras a prazo é: " + arredondado;
}

function exe_7(){
    var cont2, idade, altura, peso, idmaior, aux_7, media, cont21, cont22, tot2, v2, arredondado2;
    cont2 = 0;
    cont21 = 0;
    cont22 = 0;
    aux_7 = 0;
    idmaior = 0;

    while (cont2 < 5) {
        cont2++;
        idade = prompt("Digite a idade da " + cont2 + "ª pessoa.");
        altura = prompt("Digite a altura da " + cont2 + "ª pessoa.");
        peso = prompt("Digite o peso da " + cont2 + "ª pessoa.");

        if (idade >= 50){
            idmaior++;
        }

        if (idade >= 10 && idade <= 20){
            cont21++;
            aux_7 = parseInt(aux_7) + parseInt(altura);
        }

        if (peso < 40){
            cont22++;
        }

    }
    //regra de 3 para achar a porcentagem//
    v2 = cont22  * 100;
    tot2 = v2 / 5;

    media = aux_7 / cont21;
    arredondado2 = parseFloat(media.toFixed(2));

    document.getElementById("saida_7"). innerHTML = "A Quantidade de pessoas com idade superior a 50 anos é: " + idmaior + "</br>" +
        "A média da altura das pessoas com idade entre 10 e 20 anos é: " + arredondado2 + "</br>" +
        "A porcentagem de pessoas com o peso inferior a 40 Kg é: " + tot2;
}

function exe_8(){
    var cont3,cont31, idade2, altura2, peso2, olhos, cabelo, qtd, qtd2, med, media2, v3, qtdolhos, porolhos ,arredondado3, arredondado4;
    cont3 = 0;
    cont31 = 0;
    qtd = 0;
    qtd2 = 0;
    med = 0;
    qtdolhos = 0;

    while (cont3 < 6){
        cont3++;
        idade2 = prompt("Digite a idade da " + cont3 + "ª pessoa.");
        altura2 = prompt("Digite a altura da " + cont3 + "ª pessoa.");
        peso2 = prompt("Digite o peso da " + cont3 + "ª pessoa.");
        olhos = prompt("Digite a cor dos olhos da " + cont3 + "ª pessoa.");
        cabelo = prompt("Digite a cor do cabelo " + cont3 + "ª pessoa.");

        if (idade2 > 50 && peso2 < 60){
            qtd++;
        }

        if (altura2 < 1.5){
            cont31++;
            med = parseInt(med) + parseInt(idade2);
            if ( med = ""){
                media2 = 0;
            }
        }

        if (olhos === "A" || olhos === "a"){
            qtdolhos++
        }

        if (cabelo === "R" || cabelo === "r") {
            if (olhos !== "A" || olhos !== "a") {
                qtd2++;
            }
        }
    }

    //regra de 3 para achar a porcentagem//
    v3 = qtdolhos  * 100;
    porolhos = v3 / 6;
    arredondado4 = parseFloat(porolhos.toFixed(2));

    media2 = med / cont31;
    arredondado3 = parseFloat(media2.toFixed(2));


    document.getElementById("saida_8").innerHTML = "A quantidade de pessoas com idade superior a 50 anos e peso inferior a 60 Kg é: " + qtd + "</br>" +
        "A média das idades das pessoas com a altura inferior a 1,50 mts é: " + arredondado3 + "</br>" +
        "A porcentagem das pessoas com Olhos Azuis é: " + arredondado4 + "% </br>" +
        "A quantidade de pessoas ruivas que nao possuem olhos azuis é:" + qtd2;
}

function exe_9(){
    var idade3, altura3, peso3, cont4, cont41, cont42, medidade, mediaidade, qtd4, v4, tot4, arredondado5;
    cont4 = 0;
    cont41 = 0;
    cont42 = 0;
    qtd4 = 0;
    medidade = 0;

    while (cont4 < 10) {
        cont4++;
        altura3 = prompt("Digite a altura da " + cont4 + "ª pessoa.");
        idade3 = prompt("Digite a idade da " + cont4 + "ª pessoa.");
        peso3 = prompt("Digite o peso da " + cont4 + "ª pessoa.");

        medidade = parseFloat(medidade) + parseFloat(idade3);

        if (peso3 > 90 && altura3 < 1.5){
            alert("1 if");
            cont41++;
        }
        if (altura3 > 1.9){
            qtd4++;
            alert("> 1,9");
            if (idade3 >= 10 && idade3 <= 30){
                alert("> 10 < 30 anos");
                cont42++;
            }
        }
    }

    v4 = cont42 * 100;
    tot4 = v4 / qtd4 ;

    arredondado5 = parseFloat(tot4.toFixed(2));

    mediaidade = medidade / 10;

    document.getElementById("saida_9").innerHTML = "A média da idade das pessoas é: " + mediaidade + "</br>" +
        "A quantidade de pessoas com peso superior a 90kg e altura e inferior a 1,5 mts : " + cont41 + "</br>" +
        "A Porcentagem de pessoas entre 10 e 30 anos entre as pessoas que medem mais de 1,9 mts: " + arredondado5;
}
function exe10() {
    var primo;
    var soma = 0;
    var soma2 = 0;
    //divide o número por 2 até o número - 1

    for (var conta = 0; conta < 10; conta++) {
        var numero = parseInt(prompt("Informe o número"));
        primo = true; //assumo que é primo

        if (numero > 1) {
            for (var i = 2; i < numero; i++) {

                if ((numero % i) == 0) {
                    primo = false;
                    break; //Sai do Loop
                }
            }
            if (primo == true) {
                soma = soma + numero;
            }
        }
        if (numero % 2 === 0) {
            soma2 = soma2 + numero;

        }
    }

    alert ("A soma dos números primos é de: " + soma);
    alert ("A soma dos números pares é de: " + soma2);

}

function exe11(){
    var preco2 = parseInt(prompt("Informe o preço do carro:  "));
    var condicao = parseInt(prompt("Informe a condição desejada: '1' - A Vista '2' - Parcelado"));

    if (condicao == 1) {
        var preco21 = preco2 - (preco2 / 20);
        alert ("O valor do carro a vista é de:R$" + preco21);
    }
    else if (condicao == 2) {
        var condicao2 = parseInt(prompt("Informe a quantidade de parcelas desejadas, podendo ser '6' '12' '18' '24' '30' '36' '42' '48' '54' e '60'"));
        if (condicao2 == 6) {
            var preco22 = preco2 + (preco2 * 0.03);
            var divide = preco22 / 6;
            alert ("O valor das prestações de seu carro será:R$" + divide);
        }
        else if (condicao2 == 12) {
            var preco23 = preco2 + (preco2 * 0.06);
            var divide2 = preco23 / 12;
            alert ("O valor das prestações de seu carro será:R$" + divide2);
        }
        else if (condicao2 == 18) {
            var preco24 = preco2 + (preco2 * 0.09);
            var divide3 = preco24 / 18;
            alert ("O valor das prestações de seu carro será:R$" + divide3);
        }
        else if (condicao2 == 24) {
            var preco25 = preco2 + (preco2 * 0.12);
            var divide4 = preco25 / 24;
            alert ("O valor das prestações de seu carro será:R$" + divide4);
        }
        else if (condicao2 == 30) {
            var preco26 = preco2 + (preco2 * 0.15);
            var divide5 = preco26 / 30;
            alert ("O valor das prestações de seu carro será:R$" + divide5);
        }
        else if (condicao2 == 36) {
            var preco27 = preco2 + (preco2 * 0.18);
            var divide6 = preco27 / 36;
            alert ("O valor das prestações de seu carro será:R$" + divide6);
        }
        else if (condicao2 == 42) {
            var preco28 = preco2 + (preco2 * 0.21);
            var divide7 = preco28 / 42;
            alert ("O valor das prestações de seu carro será:R$" + divide7);
        }
        else if (condicao2 == 48) {
            var preco29 = preco2 + (preco2 * 0.24);
            var divide8 = preco29 / 48;
            alert ("O valor das prestações de seu carro será:R$" + divide8);
        }
        else if (condicao2 == 54) {
            var preco210 = preco2 + (preco2 * 0.27);
            var divide9 = preco210 / 54;
            alert ("O valor das prestações de seu carro será:R$" + divide9);
        }
        else if (condicao2 == 60) {
            var preco211 = preco2 + (preco2 * 0.30);
            var divide10 = preco211 / 12;
            alert ("O valor das prestações de seu carro será:R$" + divide10);
        }
    }
}

function exe12() {
    var primo;
    var cont5 = 0;
    //divide o nnúmero por 2 até o número - 1

    for (var conta = 0; conta < 10; conta++) {
        var numero = parseInt(prompt("Informe o número"));
        primo = true; //assumo que é primo

        if (numero > 1) {
            for (var i = 2; i < numero; i++) {

                if ((numero % i) == 0) {
                    primo = false;
                    break; //Sai do Loop
                }
            }
            if (primo == true) {
                cont5++
            }
        }
    }

    alert ("A quantidade de  números primos é de: " + cont5);


}

function exe13() {
    var acm = 0;
    var acm2 = 0;
    var acm3 = 0;
    var acm4 = 0;
    var cont6 = 0;
    var cont7 = 0;
    var cont8 = 0;
    var cont9 = 0;

    for (var controle = 1; controle <= 15; controle++) {
        var idade = (prompt("Informe tua Idade"));
        var peso = (prompt("Informe teu peso"));

        if ((idade >= 1) && (idade <= 10)) {
            acm = parseInt(acm) + parseInt(peso);
            cont6++
        }
        else if ((idade >= 11) && (idade <= 20)) {
            acm2 = parseInt(acm2) + parseInt(peso);
            cont7++
        }
        else if ((idade >= 21) && (idade <= 30)) {
            acm3 = parseInt(acm3) + parseInt(peso);
            cont8++
        }
        else if (idade >= 31) {
            acm4 = parseInt(acm4) + parseInt(peso);
            cont9++
        }
        else {
            alert("Nenhum valor valido informado");
        }
    }

    var media1 = parseInt(acm) / parseInt(cont6);
    var media2 = parseInt(acm2) / parseInt(cont7);
    var media3 = parseInt(acm3) / parseInt(cont8);
    var media4 = parseInt(acm4) / parseInt(cont9);

    alert("A média de peso das pessoas entre 1 e 10 anos é de: " + media1);
    alert("A média de peso das pessoas entre 11 e 20 anos é de: " + media2);
    alert("A média de peso das pessoas entre 21 e 30 anos é de: " + media3);
    alert("A média de peso das pessoas com idade igual ou maior a de 31 anos é de: " + media4);

}

function exe14() {
    var cont10 = 0;
    var cont11 = 0;
    var cont12 = 0;
    var acumula = 0;
    var acumula2 = 0;
    var acumula3 = 0;
    var controle2;

    for (controle2 = 1; controle2 <= 15; controle2++) {
        var id = prompt("Informe tua idade");
        var opniao = prompt("Informe a sua opnião sobre o filme 1 - Regular 2 - Bom 3 - Ótimo");

        if (opniao == 1) {
            acumula = parseInt(acumula) + parseInt(id);
            cont10++
        }
        else if (opniao == 2) {
            acumula2 = parseInt(acumula2) + parseInt(id);
            cont11++
        }
        else if (opniao == 3) {
            acumula3 = parseInt(acumula3) + parseInt(id);
            cont12++
        }
        else {
            alert("Número Invalido");
        }
    }
    var todos = parseInt(cont10) + parseInt(cont11) + parseInt(cont12);
    var porcentagem = (parseInt(acumula2) * parseInt(todos)) / 100;
    var med = parseInt(acumula3) / parseInt(cont12);

    alert("A média de idades das pessoas que responderam ótimo é de: " + med);
    alert("A quantidade de pessoas que responderam regular é de: " + cont10);
    alert("A porcentagem de pessoas que responderam Bom é de: " + porcentagem);

}

function exe15() {
    var controle3;
    var S = 0;
    var N = 0;
    var MS = 0;
    var FS = 0;
    var MN = 0;
    var FN = 0;
    var cont13 = 0;


    for (controle3 = 1; controle3 <= 5; controle3++) {
        var sexo = (prompt("Digite seu Sexo ('M' = Masculino e 'F' = Feminino"));
        var pes = (prompt("Você gostou do produto? ('S' para Sim e 'N' para Não"));

        if (pes == "S") {
            S++;
            if (sexo == "M") {
                MS++;
                cont13++

            }
            else if (sexo == "F") {
                FS++;
            }
        }
        else if (pes == "N") {
            N++;
            if (sexo == "M") {
                MN++;
                cont13++
            }
            else if (sexo == "F") {
                FN++;
            }
        }
    }
    var v1 = (cont13)*100;
    var v2 = MN / v1;

    alert("A quantidade de pessoas que responderam Sim é: " + S);
    alert("A quantidade de pessoas que responderam Não é: " + N);
    alert("O número de mulheres que responderam Sim é: " + FS);
    alert("A porcentagem de homens que responderam não é: " + v2);

}