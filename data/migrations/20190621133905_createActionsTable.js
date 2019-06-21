
exports.up = function(knex, Promise) {
    return knex.schema.createTable('actions', function(tbl) {
      tbl.increments().unique();
  
      tbl.string('action_description').notNullable();
  
      tbl.string('action_notes');
  
      tbl.boolean('complete').defaultTo(false);
  
      tbl
        .integer('project_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('project')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('actions');
  };
