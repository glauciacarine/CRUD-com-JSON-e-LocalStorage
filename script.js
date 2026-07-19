// Array que armazena os objetos no formato JSON
let livros = [];

// Ao carregar a página, recupera os dados do LocalStorage e lista na tela
window.onload = function () {
  carregarLivros();
  listarLivros();
};

// CREATE e UPDATE - Salva um novo livro ou atualiza um livro existente
function salvarLivro() {
  const id = document.getElementById("livroId").value;
  const titulo = document.getElementById("titulo").value.trim();
  const autor = document.getElementById("autor").value.trim();
  const ano = document.getElementById("ano").value;
  const genero = document.getElementById("genero").value.trim();

  if (titulo === "" || autor === "" || ano === "" || genero === "") {
    alert("Preencha todos os campos!");
    return;
  }

  const livro = {
    id: id ? Number(id) : Date.now(),
    titulo: titulo,
    autor: autor,
    ano: Number(ano),
    genero: genero
  };

  if (id) {
    atualizarLivro(livro);
  } else {
    criarLivro(livro);
  }

  salvarNoLocalStorage();
  listarLivros();
  limparFormulario();
}

// CREATE - Criar registro
function criarLivro(livro) {
  livros.push(livro);
}

// READ - Listar registros
function listarLivros() {
  const tabela = document.getElementById("tabelaLivros");
  tabela.innerHTML = "";

  if (livros.length === 0) {
    tabela.innerHTML = `
      <tr>
        <td colspan="6">Nenhum livro cadastrado.</td>
      </tr>
    `;
  } else {
    livros.forEach(function (livro) {
      const linha = document.createElement("tr");

      linha.innerHTML = `
        <td>${livro.id}</td>
        <td>${livro.titulo}</td>
        <td>${livro.autor}</td>
        <td>${livro.ano}</td>
        <td>${livro.genero}</td>
        <td>
          <button class="editar" onclick="editarLivro(${livro.id})">Editar</button>
          <button class="excluir" onclick="removerLivro(${livro.id})">Excluir</button>
        </td>
      `;

      tabela.appendChild(linha);
    });
  }

  mostrarJsonNaTela();
}

// UPDATE - Envia os dados do livro escolhido para o formulário
function editarLivro(id) {
  const livro = livros.find(function (item) {
    return item.id === id;
  });

  if (livro) {
    document.getElementById("livroId").value = livro.id;
    document.getElementById("titulo").value = livro.titulo;
    document.getElementById("autor").value = livro.autor;
    document.getElementById("ano").value = livro.ano;
    document.getElementById("genero").value = livro.genero;
  }
}

// UPDATE - Atualizar registro no array
function atualizarLivro(livroAtualizado) {
  livros = livros.map(function (livro) {
    if (livro.id === livroAtualizado.id) {
      return livroAtualizado;
    }

    return livro;
  });
}

// DELETE - Remover registro
function removerLivro(id) {
  const confirmar = confirm("Deseja realmente excluir este livro?");

  if (confirmar) {
    livros = livros.filter(function (livro) {
      return livro.id !== id;
    });

    salvarNoLocalStorage();
    listarLivros();
  }
}

// Salvar dados no LocalStorage usando JSON.stringify
function salvarNoLocalStorage() {
  localStorage.setItem("livros", JSON.stringify(livros));
}

// Recuperar dados do LocalStorage usando JSON.parse
function carregarLivros() {
  const dados = localStorage.getItem("livros");

  if (dados) {
    livros = JSON.parse(dados);
  } else {
    livros = [];
  }
}

// Limpar formulário
function limparFormulario() {
  document.getElementById("livroId").value = "";
  document.getElementById("titulo").value = "";
  document.getElementById("autor").value = "";
  document.getElementById("ano").value = "";
  document.getElementById("genero").value = "";
}

// Permitir visualizar os dados salvos em JSON na própria página
function mostrarJsonNaTela() {
  const areaJson = document.getElementById("dadosJson");
  areaJson.textContent = JSON.stringify(livros, null, 2);
}