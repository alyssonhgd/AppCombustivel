# Aplicação App-Abastecimentos

Esse projeto foi implementado conforme as determinações do Projeto 4 da disciplina de topicos especiais(Apliaões Hibrídas).
O projeto é um aplicativo simples de acompanhamento dos abastecimentos diários e continuação da ultima aplicação feita em css e html.

![Adicionar abastecimento](./AppCombustivel.PNG = 100x)
![Acompanhar abastecimentos](./AppCombustivelAc.PNG = 100x)

## Regras da Aplicação
- Sua aplicação precisa conter pelo menos duas interfaces (telas ou páginas) construídas por meio de componentes React Native;

**A aplicação possui a tela de cadastro de abastecimento, onde possui 3 TextInputs e 3 botões. Possuí tambem a tela de acompanhamento de abastecimentos onde é listado todos os abastecimentos dentro de um scroollview com os dados nome do posto, litragem abastecida e o valor pago, na mesma tela um pocuo mais baixo e mostrado informações gerais, do quanto foi gato até o momento com todos os abastecimentos e quantos litros no total foram abastecidos.**

- Sua aplicação precisa manipular dados do usuário e esses dados precisam ser relevantes e de de tipos complexos.

**A aplicação manipula um array contendo os dados de nome do posto, litragem abastecida e os valores pagos.**

 - Por relevante, quero dizer que esses dados devem ser usados na aplicação e em mais de uma tela. Sem eles, a aplicação deveria perder o sentido. 

 **Os dados são relevantes pois são trabalhados nas duas telas criadas.**

- Por complexos, quero dizer que não basta criar uma ou outra informação de tipo primitivo (como o nome do usuário), mas tem que ser algo que varie de acordo com o uso da aplicação (por exemplo, uma lista).

**Foi criado um array com a listadeabastecimentos, sendo carregada em um flatlist que se encontra dentro do scrollview**

- Sua aplicação não será multiusuário. Assim, os dados que ela contiver serão apenas os dados do próprio usuário (e serão armazenados localmente no dispositivo do usuário).

**Os dados são salvos localmente no storage, e carregados da mesma forma.**

- Sua aplicação deve ser pensada como uma aplicação móvel, isto é, para execução em smartphones. Não será, portanto, uma aplicação para computadores. 

**A aplicação foi testa no dispositivos android, iphone e Browser Web, tendo apenas uma observação nas cores dos btões no dispositivo Ios não aparece.**

- Sua aplicação deve ser original e o trabalho é individual. Você não pode copiar a aplicação de outro aluno. Os trabalhos copiados não serão considerados na avaliação.

**A aplicação foi desenvolvida conforme o andamento das video-aulas do curso, inclusive é uma extensão da acplicação criada na entrega 2, onde foi desenvolvido uma pequena aplicação para mostrar ao usuario se valia a pena abastecer com gasolina ou alcool conforme os preços e consumos do veículo**

## Perguntas respondidas


-Componente estilo.js

**Nesse componente foram gerados partes dos estilos aplicados no 02 componentes criados. Obs:Alguns estilos foram aplicados diretamente nos atributos dos objetos do compoentes**

-Componente AddAbastecimento

**Esse componente foi gerado um view contendo os TextInputs e os botões onde eram salvos em localstorage os dados.**

-Componente ListaAbastecimentos

**Esse componente é onde é carregado do localstorage os dados apresentados na Flatlist e nas informações gerais**

-Componente App

**Esse componente é onde foi realizado as rotas do programa bem como a configuraçõo do Header.**


-A aplicação é original e não uma cópia da aplicação de um colega ou de uma aplicação já existente?

**A aplicação é original, mesmo tendo alternativas no playstore.**

-A aplicação tem pelo menos duas interfaces (telas) independentes?

**Sim ossui 2 telas.**

-A aplicação armazena e usa de forma relevante dados complexos do usuário?

**A aplicação salva e carrega os dados do localstore, bem como o array que é o ListaAbastecimentos contendo as propriedades de cada abastecimento.**

-A aplicação tem pelo menos dois componentes além do componente principal?

**Sim, já foram apresentados.**

-A aplicação tem um componente com rolagem?

**Sim possuí um ScrollView**

-A aplicação tem um campo de formulário que é devidamente tratado?

**Possui 3 TextInputs onde 1 aceita qualquer nome(string) e outros 3 que foi configurado para apresentar apenas o teclado numerico, tendo em vista ser entradas de números. a Aplicação possui uma função tambem queverificca as entradas dos TextInputs, se estiverem vazias é criado um alert avisando o usuario do erro.**

-A aplicação foi desenvolvida com o React Native?

**Sim, com classes e Hooks**

-O código da minha aplicação possui comentários explicando cada operação?

**Sim**
-A aplicação está funcionando corretamente?

**Sim**
-A aplicação está completa?

**Sim, podendo melhora-la futuramente.**
