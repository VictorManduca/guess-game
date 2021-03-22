# Guess Game

## Rules
    - Implementar um jogo de adivinhação de números primos. O intervalo válido é de 1 a 20.000.
    - O computador é quem adivinha. O usuário deve indicar pistas para que o computador chegue no número que o usuário pensou.  
      Para facilitar para o usuário, ao iniciar a partida o aplicativo pode exibir a lista (em tabela, talvez) de todos os primos neste intervalo.  
      O usuário escolherá mentalmente e pressionará o botão "Prosseguir".

    As pistas iniciais possíveis são as seguintes:
    a) Indicar a soma dos dígitos. Exemplo: Se pensou em 113, deve-se fornecer 5 para essa resposta. 
    b) Indicar o resto da divisão por 7. Exemplo, se pensou em 113, fornecer 1; 
    c) Indicar o produto dos dígitos que compõem o número, não contando zeros à esquerda (se for 5, será 5 x 1, pois só temos esse dígito

    Elas podem ser aplicadas em qualquer ordem.  
    Em cada pista, o computador faz um chute, baseado nas informações que tem até o momento.  
    Também para cada chute, o usuário deve indicar se é menor, igual ou maior que o número pensado.  

    Caso não acerte nesses 3 passos, os chutes continuam, mas o usuário vai indicando se o número é maior ou menor que o chute.  

    Para isso, devem ficar aparentes para que o usuário possa escolher a opção para cada um.
    - Os chutes continuam até que o computador acerte o número pensado, e então termina o jogo.
    - O tempo necessário para acertar deve ser gravado na base de dados, assim como o número de chutes e o nome da pessoa que está jogando (deve ser pedido no início).
    - Se o jogador quiser jogar novamente, deve entrar com o nome novamente.
  
    Não há cadastro de pessoas.
    - Deve ser montado um ranking de jogadores com seus melhores placares, em que o critério será o tempo para acertar o número. 
    - O ranking deve ser exibido com a colocação, o tempo, nome do usuário, número de chutes e número adivinhado
    - Esse ranking também deve ser mantido em base.
