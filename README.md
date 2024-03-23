# Cadastro e Listagem de Produtos - Estágio de Desenvolvimento na Oak Tecnologia

## Descrição

Este projeto consiste em um formulário para cadastrar produtos e uma listagem para visualizar esses produtos cadastrados. Os produtos são exibidos em uma tabela com as colunas de nome, valor, descrição e disponibilidade. Eles são ordenados por padrão pelo valor do produto, do menor para o maior. Ao cadastrar um novo produto, a listagem é automaticamente atualizada.

Este projeto foi desenvolvido como parte do processo de qualificação para o Estágio de Desenvolvimento na Oak Tecnologia.

## Instalação

- Clone o repositório em sua máquina local:

  ```bash
  git clone https://github.com/RGomes98/OakTechCadastroProdutos
  ```

- Navegue até o diretório do projeto:

  ```bash
  cd OakTechCadastroProdutos
  ```

- Abra o diretório no Visual Studio Code.

- Instale a extensão "Live Server" se ainda não estiver instalada. Você pode encontrá-la no Marketplace de Extensões do Visual Studio Code.

- Uma vez instalada a extensão, certifique-se de que o Live Server esteja configurado para usar a porta padrão 5500.

- Clique com o botão direito no arquivo index.html localizado no diretório raiz do projeto.

- Selecione "Abrir com Live Server" no menu de contexto.

## Execução do Programa

### Cadastro de Produtos

- Abra o navegador e vá para http://127.0.0.1:5500/ para acessar a aplicação.

- Preencha o formulário de cadastro com as informações do produto:

  - Nome do produto - campo de texto
  - Descrição do produto - campo de texto
  - Valor do produto - campo de valor
  - Disponível para venda - campo com 2 opções: sim / não

- Selecione a opção "Sim" ou "Não" para indicar se o produto está disponível para venda.

- Clique no botão "Cadastrar Novo Produto" para adicionar o produto à lista.

### Listagem de Produtos

- Após cadastrar um produto, a listagem será atualizada automaticamente.

- Os produtos são exibidos em uma tabela com as colunas de nome, valor, descrição e disponibilidade.

- Os produtos são ordenados pelo valor, do menor para o maior.

### Utilizando o Live Server

O Live Server é uma extensão do Visual Studio Code que permite visualizar as alterações em tempo real em uma página web enquanto você edita o código. Ele serve para facilitar o desenvolvimento e a visualização de aplicações web sem a necessidade de atualizar a página manualmente.

Certifique-se de ter o Live Server instalado e configurado conforme descrito na seção de instalação. Ele será automaticamente iniciado quando você selecionar "Abrir com Live Server" no arquivo index.html do projeto.
