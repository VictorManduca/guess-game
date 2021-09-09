<h1 align="center">Guess Game :video_game:</h1>

## Regras :page_with_curl:
  O intervalo válido é de 1 a 20.000.  
  O computador é quem adivinha.  
  O usuário deve indicar pistas para que o computador chegue no número que o usuário pensou.    
  
  As pistas iniciais possíveis são as seguintes:  
    a) Indicar a soma dos dígitos. Exemplo: Se pensou em 113, deve-se fornecer 5 para essa resposta;  
    b) Indicar o resto da divisão por 7. Exemplo, se pensou em 113, fornecer 1;   
    c) Indicar o produto dos dígitos que compõem o número, não contando zeros à esquerda (se for 5, será 5*1, pois só temos esse dígito)  

## Instruções para rodar a aplicação :computer:

### Backend
  Basta ter o docker instalado e rodar o comando `make` dentro da pasta **server**
  E pronto! :smile:

### Frontend
  Basta entrar na pasta **client**, executar `npm i && npm run dev`  
  Depois disso, basta acessar no nevegador de sua escolha: `localhost:3000`
