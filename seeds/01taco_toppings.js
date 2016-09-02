
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('taco_toppings').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('taco_toppings').insert({name: 'guac' , price_in_cents: 100 }),
        knex('taco_toppings').insert({name: 'pico' , price_in_cents: 50 }),
        knex('taco_toppings').insert({name: 'cheese', price_in_cents: 0})
      ]);
    });
};
