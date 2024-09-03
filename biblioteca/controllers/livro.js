const aluguel_controller = require("./aluguel.js")
const livros = [];
let nextId = 1;

const model = (livro, id = nextId++) => {
  if (
    livro.nome != "" &&
    livro.nome != undefined &&
    livro.aluguel_id != undefined &&
    aluguel_controller.show(livro.aluguel_id)
  ) {
    return {
      id,
      nome: livro.nome,
      aluguel_id: parseInt(livro.aluguel_id)
     } 
  }
}  

const store = (body) => {
  const novo = model(body);

  if (novo) {
    livros.push(novo);
    return 201;
  }

  return 400;
};

const index = () => livros;

const show = (id) => livros.find((el) => el.id == id);

const update = (id, body) => {
  const index =livro.findIndex((el) => el.id == id);
  const novo = model(body, parseInt(id));

  if (novo && index != -1) {
    livros[index] = novo;

    return 200;
  }

  return 400;
};

const destroy = (id) => {
  const index = livros.findIndex((el) => el.id == id);

  if (index != -1) {
    livros.splice(index, 1);
  }
};

module.exports = {
  store,
  index,
  show,
  update,
  destroy,
};
