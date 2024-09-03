const estudantes = [];
let nextId = 1;

const model = (estudante, id = nextId++) => {
  if (estudante.nome != undefined && estudante.nome != "") {
    return {
      id,
      nome: estudante.nome,
    };
  }
};

const store = (body) => {
  const novo = model(body);

  if (novo) {
    estudantes.push(novo);
    return 201;
  }

  return 400;
};

const index = () => estudantes;

const show = (id) => estudantes.find((el) => el.id == id);

const update = (id, body) => {
  const index =estudantes.findIndex((el) => el.id == id);
  const novo = model(body, parseInt(id));

  if (novo && index != -1) {
    estudantes[index] = novo;

    return 200;
  }

  return 400;
};

const destroy = (id) => {
  const index = estudantes.findIndex((el) => el.id == id);

  if (index != -1) {
    estudantes.splice(index, 1);
  }
};

module.exports = {
  store,
  index,
  show,
  update,
  destroy,
};