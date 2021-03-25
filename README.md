# Guess Game
  Um jogo de adivinhação de números primos.

## Regras
  O intervalo válido é de 1 a 20.000.  
  O computador é quem adivinha.  
  O usuário deve indicar pistas para que o computador chegue no número que o usuário pensou.    
  
  As pistas iniciais possíveis são as seguintes:  
    a) Indicar a soma dos dígitos. Exemplo: Se pensou em 113, deve-se fornecer 5 para essa resposta;  
    b) Indicar o resto da divisão por 7. Exemplo, se pensou em 113, fornecer 1;   
    c) Indicar o produto dos dígitos que compõem o número, não contando zeros à esquerda (se for 5, será 5*1, pois só temos esse dígito)  

  Elas podem ser aplicadas em qualquer ordem.  
  Em cada pista, o computador faz um chute, baseado nas informações que tem até o momento.  
  Também para cada chute, o usuário deve indicar se é menor, igual ou maior que o número pensado.  
