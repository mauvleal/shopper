### Olá! Eu sou o Mauricio Leal 🖐️<br/>
Sou formando em Administração e estou em transição de carreira, atualmente estudando Desenvolbimento Web na Trybe <br/><br>

Este é o projeto que criei para o processo seletivo na Shopper, empresa que me identifiquei pela oportunidade de carreira e aprendizado.
<br/>

### Tecnologias usadas no projeto

Backend
- NodeJs com Express;
- Cors para integração com o front;
- MySQL BD;


Front End
- ReactJs;
- react-router-dom;
- Axios para integração com o Backend;

### Sobre o Projeto

- Desenvolver um sistema para atualização de preços e-commerce
- Desenvolver front e back integrados

<br/>

# INSTRUÇÕES PARA RODAR O PROJETO

## 1 

- Crie uma pasta de sua preferencia abra-a com o terminal

comando para clonar o repositorio: 

```
git clone git@github.com:mauvleal/shopper.git
```
_____
## 2
- Acesse a pasta backend pelo terminal:

```
cd shopper/backend
```

- instale os pacotes com o :
```
npm install
```
- Crie uma imagem do mysqle nodejs com o Docker Compose, para rodar e criar o banco:
```
docker-compose up -D 
```
- Inicialize o Back da Aplicação
```
npm start   ou   npm run dev
```
_____
## 3
- Entre no frontend com o backend rodando em segundo plano (preferencialmente outro Terminal)
-   Abra outro terminal na pasta do projeto e entre na pasta do frontend
```
cd shopper/frontend
```
- Instale as dependencias do projeto e inicialize aplicação
```
npm i && npm start
```

_____
## 4
- Caso a Api frontend não tenha inicializado automaticamente, abra o navegador:

```
localhost:3000
```
_____
## 5
- Abrirá a aplicação para acesso aos produtos, ou pequisa por ID

- Alteração por arquivo CSV adicionado
_____
## Atualizações nas quais trabalharei em breve

- Adicionar regras de validação
- Implementar atualizaçao de produtos em massa
- Adicionar css

<br>