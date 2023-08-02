const connection = require('./connection');

const getAll = async () => {
    const [tasks] = await connection.execute('SELECT * FROM task');
    return tasks;
};

const store = async (data) => {
    const currentDate = new Date(Date.now());

    const { name } = data;
    const query = 'INSERT INTO task(name, status, created_At) VALUES(?,?,?)';
    const [store] =  await connection.execute(query, [data.name, 'pendente', currentDate]);
    return {insertedId: store.insertId};
};

const update = async (data, id) => {
    const {name, status} = data;

    const task =  await connection.execute('UPDATE task SET name = ?, status = ? WHERE id = ?', [name, status, id]);
    return task;
 };

const destroy = async (id) => {
   const task =  await connection.execute('DELETE FROM task where id = ?', [id]);
   return task;
};

module.exports = {
    getAll,
    store,
    destroy,
    update
};