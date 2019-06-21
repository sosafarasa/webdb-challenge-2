const db = require('../dbConfig');

module.exports = {
  find,
  findById,
  add,
  update,
  remove
};

function find() {
    return db('actions')
    .join('projects', 'actions.project_id', '=', 'projects.id')
    .select(
      { 'action id': 'actions.id' },
      'actions.action_description',
      'actions.action_notes',
      'actions.complete'
    );
}

function findById() {
    return db('actions')
    .where({ 'actions.project_id': id })
    .first()
    .join('projects', 'actions.project_id', '=', 'projects.id')
    .select(
        { 'action id': 'actions.id' },
        'actions.action_description',
        'actions.action_notes',
        'actions.complete'
    );
}

function add(action) {
    return db('actions')
    .insert(action, 'id')
    .then(([id]) => {
      return findById(id)
    });
}


function update() {
    return db('actions')
    .where({ id })
    .update(changes)
    .then(count => {
      if (count > 0) {
        return findById(id)
      } else {
        return null
      }
    });
}

function remove() {
    return db('actions')
    .where({ id })
    .del();
}