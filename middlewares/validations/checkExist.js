const checkExist = (Model) => {
    return async (req, res, next) => {
        const { id } = req.params;
        const model = await Model.findOne({ where: { id } });
        if (model) {
            next();
        } else {
            res.status(404).send(`Can't find model with id ${id}`);
        }
    }
}

module.exports = {
    checkExist
}