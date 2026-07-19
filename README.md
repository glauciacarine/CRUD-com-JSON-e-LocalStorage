# CRUD com JSON e LocalStorage

## Tema escolhido
Livro

## Objetivo
Desenvolver uma aplicação de CRUD utilizando JavaScript, JSON, arrays e LocalStorage.

## Arquivos do projeto
- `index.html`: estrutura da página.
- `style.css`: estilos visuais da aplicação.
- `script.js`: funções do CRUD e integração com LocalStorage.
- `print-localstorage-exemplo.png`: exemplo de visualização dos dados JSON no LocalStorage do navegador.

## Funcionalidades implementadas
- Criar registros de livros.
- Listar registros cadastrados.
- Atualizar informações existentes.
- Remover registros.
- Salvar e recuperar dados usando o LocalStorage.
- Visualizar os dados salvos em formato JSON na tela.

## Como executar
1. Extraia o arquivo ZIP.
2. Abra o arquivo `index.html` no navegador.
3. Cadastre alguns livros.
4. Atualize a página e confirme que os dados continuam salvos.
5. Abra o DevTools do navegador e confira a chave `livros` em Local Storage.

## Onde encontrar o LocalStorage no navegador
1. Clique com o botão direito na página e selecione **Inspecionar**.
2. Acesse a aba **Application** ou **Aplicativo**.
3. No menu lateral, clique em **Local Storage**.
4. Selecione o endereço da página.
5. A chave `livros` deverá aparecer com os dados em JSON.

## Critérios atendidos
- Criar registros: função `criarLivro()`.
- Listar registros: função `listarLivros()`.
- Atualizar registros: funções `editarLivro()` e `atualizarLivro()`.
- Remover registros: função `removerLivro()`.
- Armazenamento no LocalStorage: funções `salvarNoLocalStorage()` e `carregarLivros()`.
- Uso de JSON: `JSON.stringify()` e `JSON.parse()`.
- Uso de array: variável `livros = []`.