
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('products').del()
    .then(function () {
      // Inserts seed entries
      return knex('products').insert([
        { name: 'Arroz', amount: 1 },
        { name: 'Feijão', amount: 4 },
        { name: 'Açucar', amount: 2 }
      ]);
    });
};
