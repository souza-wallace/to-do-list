const tasksmodel = require("../models/tasksModel");

const getAll = async (request, response) => {
    const tasks =  await tasksmodel.getAll();

    return response.status(200).json(tasks);
};


const store = async (request, response) => {
    const task =  await tasksmodel.store(request.body);
    return response.status(201).json(task);
};

const update = async (request, response) => {
    const {id} = request.params;
    const [task] =  await tasksmodel.update(request.body, id);

    return response.status(200).json(task);
};

const destroy = async (request, response) => {
    const {id} = request.params;
    await tasksmodel.destroy(id);

    return response.status(200).json({message: `task ${id} was excluded!`});
};

module.exports = {
    getAll,
    store,
    destroy,
    update
};