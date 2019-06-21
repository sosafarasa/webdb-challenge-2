
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("actions")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("actions").insert([
        {
          id: 1,
          action_description: "action description",
          action_notes: "the action notes",
          project_id: 1
        },
        {
          id: 2,
          action_description: "another action description",
          action_notes: "the action notes",
          project_id: 1
        }
      ]);
    });
};
