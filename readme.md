<p>Título: API-node</p>

<p>Autor: Leonardo Araújo</p>

<p>A API foi criada com Node utilizando Express e MYSQL, para fins de estudo e conhecimento da ferramenta.</p>

<p>A API funciona da seguinte maneira:</p>

    A API é composta pelas quatro funções CRUD (create, read, update e delete),
    que são necessárias para o funcionamento da API.

    É uma API que guarda nomes e quantidade de produtos que são geradas a
    partir do Seed da ferramenta KNEX.js.

        Requisição GET : http://localhost:3333/
        // Lista todos os produtos do banco

        Requisição GET : http://localhost:3333/:id
        // Lista um produto do banco

        Requisição POST : http://localhost:3333/ passando name e amount.
        // Cria novo registro no banco

        Requisição PUT : http://localhost:3333/:id passando name e amount.
        // Atualiza registro existente

        Requisição DELETE : http://localhost:3333/:id
        // Deleta registro existente
    
    OBS: Caso name e amount não sejam informados, o retorno de requisições será:

        {
            "message": "Informe todos os dados corretamente!"
        }

<p>Como testar em sua máquina:</p>

    A estrutura de pastas da API é coposta possui arquivos de configuração que não podem ser versionados,
    como por exemplo: aqruivos package.json e o knexFile.js, que no caso é o arquivo de configuração com
    o banco de dados que o KNEX.js gera.

    Sendo assim, o projeto necessita das seguintes dependência para rodar:

        "body-parser": "^1.19.0",
        "express": "^4.17.1",
        "knex": "^0.21.5",
        "mysql": "^2.18.1",
        "nodemon": "^2.0.4"

    Para instalar as mesmas, você precisa do NPM configurado em sua máquina e então rode os comandos:

        npm install express --save
        npm install body-parser --save
        npm install knex --save
        npm install mysql --save
        npm install nodemon --global

        OBS: A flag --save é para salvar a dependência no seu package.json
            é a flag --global é para instalar globalmente em sua máquina,
            que ai você pode rodar "nodemon server.js" em vez de "npm nodemon server.js".

    Abaixo, alguns links de apoio no desenvolvimento da API com node:

        Express: https://medium.com/desenvolvimento-com-node-js/express-para-gerenciamento-de-rotas-no-node-js-10dc7600adb1
        Knex: https://www.youtube.com/watch?v=U7GjS3FuSkA&t=2443s

    Tendo ciência de tudo isso, vamos ao passo a passo:

        1. Clone o repositório em sua máquina e entre na pasta clonada/baixada. (Baixando o ZIP ou pelo GIT);
        2. Instale as dependências citadas acima dentro do diretório do projeto;
        3. Na sua conexão MYSQL, crie um banco chamado "node";
        4. Rode o comando "npx knex init", isso criará um arquivo na raiz do projeto e la você
        deve configurar o mesmo da seguinte forma:

            module.exports = {
                development: {
                    client: 'mysql',

                    connection: {
                        database: 'node',
                        user:     'seu usuário',
                        password: 'sua senha'
                    },

                    migrations: {
                        directory: `${__dirname}/src/app/database/migrations`
                    },

                    seeds: {
                        directory: `${__dirname}/src/app/database/seeds`
                    }
                }  
            };


        5. Agora você deve rodar o comando "npx knex migrate:latest" para a gerar a tabela no banco;
        6. Após isso, você deve rodar o comando "npx knex seed:run" para gerar os dados no banco;
        7. Por fim rode o comando "nodemon server.js" e pode começar a realizar as requisições;

        OBS: O navegador não realizar todos os tipos de requisições, sendo assim,
            te indico a utilizar o insômnia para testar as requisições. Segue link para download:
            https://insomnia.rest/download/