
exports.up = knex => {
  return knex.schema.createTable('products', table => {
    table.increments('id')
    table.text('name').notNullable()
    table.integer('amount').notNullable()

    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
  })
};

exports.down = knex => {
  return knex.schema.dropTable('products')
};
