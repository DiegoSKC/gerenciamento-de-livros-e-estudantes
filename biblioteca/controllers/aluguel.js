const livro_controller = require("./livro.js")
const estudante_controller = require("./estudante.js")
const alugueis = [];
let nextId = 1;

const model = (aluguel, id = nextId++) => {
  if (
    aluguel.dataAluguel != "" &&
    aluguel.dataAluguel != undefined &&
    aluguel.dataDevolucao != "" && 
    aluguel.dataDevolucao != undefined &&
    aluguel.livro_id != undefined &&
    livro_controller.show(aluguel.livro_id) &&
    aluguel.estudante_id != undefined &&
    estudante_controller.show(aluguel.estudante_id)
  ) {
    return {
      id,
      dataAluguel: aluguel.dataAluguel,
      dataDevolucao: aluguel.dataDevolucao,
      livro_id: parseInt(aluguel.livro_id),
      estudante_id: parseInt(aluguel.estudante_id)
    } 
  }
}  
const store = (body) => {
  const novo = model(body);

  if (novo) {
    alugueis.push(novo);
    return 201;
  }

  return 400;
};

const index = () => alugueis;

const show = (id) => alugueis.find((el) => el.id == id);

const update = (id, body) => {
  const index =alugueis.findIndex((el) => el.id == id);
  const novo = model(body, parseInt(id));

  if (novo && index != -1) {
    alugueis[index] = novo;

    return 200;
  }

  return 400;
};

const destroy = (id) => {
  const index = alugueis.findIndex((el) => el.id == id);

  if (index != -1) {
    alugueis.splice(index, 1);
  }
};

module.exports = {
  store,
  index,
  show,
  update,
  destroy,
};

