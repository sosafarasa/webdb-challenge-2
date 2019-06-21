const db = require('../dbConfig')

module.exports = {
    find,
    findById,
    add,
    update,
    remove
};

function find(){
    return db('projects')
}

function  findById(id){
    return db('projects').where({ id }).first()
}

function add(project){
    return db('projects').insert(project, 'id')
    .then( ([id]) => {
        return findById(id)
    })
}

function update(id, changes) {
    return db('projects')
    .where('id', id)
    .update(changes)
    .then(count => (count > 0 ? this.get(id) : null));
}

function remove(id) {
    return db('projects')
    .where('id', id)
    .del();
}
