# CONSIDERAÇÕES DESAFIO
Olá desenvolvedores! é um prazer estar me empenhando pra fazer este desafio. De antemão deixo claro que não sou especialista em backend, mas
estudei bastante e procurei oferecer o melhor de mim nesse tempo, utilizando das teconlogias que adquiri conhecimento. Seguem abaixo informações do projeto!
### FLUXOGRAMA DA SOLUÇÃO SUGESTIONADA:
![Desafio Digix](https://user-images.githubusercontent.com/52302137/85364870-1d9af000-b4f2-11ea-9e0b-fadbb9772b8e.png)
### DESCRIÇÃO DA SOLUÇÃO:

Como mostra o fluxograma, criei dois repositórios para duas API's que rodam em portas distintas. Por que 2 API's? Bom, pensei em um fluxo de trabalho com esse software
que pudesse continuar caso alguma parte dele precisasse parar para manutenção, portanto fiz uma API para cadastro e pontuação da família pretendente [(Link para o repositório da API de cadastramento e pontuação)](https://github.com/AI-Vlad/API_cadastroFamiliaDigix)
e uma API para contemplamento e monitoramento de contemplados [(Link para o repositório da API de contemplamento e monitoramento de contemplados)](https://github.com/AI-Vlad/API_contemplamentoDigix), se alimentando dos mesmo banco de dados (Para simular um database eu utilizei o MongoDB,
que estarei postando link para instalação logo abaixo. Para simular às requisições utilizei o software Imsomnia, que me exibe todas requisições que eu faço em formato JSON (link segue abaixo também).
Para visualizar os dados de forma mais estética e ordenar às família de acordo com suas pontuações eu utilizei à ferramenta DBcompass(MongoDB). Os códigos podem ser testados depois de instaladas todas dependências (seguem os nomes das mesmas abaixo) e rodado o comando nodemon src/index.js no terminal do seu editor de código.

### FERRAMENTAS UTILIZADAS:

#[MongoDB](https://www.mongodb.com/try/download/community)
#[Mongo DB compass](https://www.mongodb.com/products/compass)
#[Imsomnia](https://insomnia.rest/download/)

### DEPENDÊNCIAS:

Mongoose (para comunicação com MongoDB), Express e Body-Parser (analisa os dados codificados JSON, buffer, string e URL enviados usando a solicitação HTTP POST) 

Para instalá-las utilizei o comando npm add <nome-da-depência> no command shell do VScode.
### DEPENDÊNCIAS DO DESENVOLVEDOR:

Nodemon (Utilize esta depêndencia pra rodar o comando nodemon src/index.js pra não precisar ficar startando minhas API's toda hora, ele atualiza o código com Ctrl + S e starta denovo automaticamente).

### BRANCHES:

Criei 3 branches, são elas: Feature(para ir adicionando funcionalidades aos poucos), Development(teste de todas funcionalidades juntas) e Master (versão final), para que não houvese erro na hora da integração de código.

### TECNOLOGIAS UTILIZADAS:

Javascript e Nodejs.

## MUITO OBRIGADO!
