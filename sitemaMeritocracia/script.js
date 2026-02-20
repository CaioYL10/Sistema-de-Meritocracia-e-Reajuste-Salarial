function inserir() {
            let nome = document.getElementById('nome').value.toLowerCase();
            let nomeFormatado = nome.charAt(0).toUpperCase() + nome.slice(1);
            let cargo = document.formulario.cargos.value;
            let salario = Number(document.getElementById('salario').value);
            let faltas = Number(document.getElementById('faltas').value);
            let atrasos = Number(document.getElementById('atrasos').value);

            if (nome == '' || cargo == 'selecione' || salario == '' || salario < 0 || faltas < 0 || atrasos < 0) {
                document.getElementById('resultado').innerHTML = 'Preencha as informações Corretamente!'
                } else {
                    if (atrasos == 0 && faltas == 0) {

                    switch (cargo) {
                        case 'aprendiz': document.getElementById('resultado').innerHTML = `O funcionário ${nomeFormatado}, no cargo de ${cargo}, não recebeu um aumento por ainda não estar apto!`;
                        alert (`${textoFuncionario}`)
                        break;

                        case 'analista': 
                            porcentagem = 0.1;
                            porcentagemTexto = porcentagem*100;
                            reajuste = salario + salario * porcentagem;
                        break;

                        case 'gerente': 
                            porcentagem = 0.15;
                            porcentagemTexto = porcentagem*100;
                            reajuste = salario + salario * porcentagem;
                        break;

                        case 'diretor': 
                            porcentagem = 0.2;
                            porcentagemTexto = porcentagem*100;
                            reajuste = salario + salario * porcentagem;
                        break;
                    }
                    document.getElementById('resultado').style.color='green'
                    document.getElementById('resultado').innerHTML = `✅ O funcionário ${nomeFormatado}, no cargo de ${cargo}, recebeu um aumento de ${porcentagemTexto}% em seu salario (R$${salario.toFixed(2)}) e à partir do próximo mês começa a receber R$${reajuste.toFixed(2)}!`;
                
                    } else {
                        document.getElementById('resultado').style.color='red'
                        document.getElementById('resultado').innerHTML = `O funcionário possui neste caso ${faltas} falta(s) e ${atrasos} atraso(s), verifique a situação com o RH.`;

                    }
                }
            
        }