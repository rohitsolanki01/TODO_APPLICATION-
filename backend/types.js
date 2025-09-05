const zod = require("zod");

const TodoValidations = zod.object({
    title : zod.string(),
    description : zod.string(),
    completed : zod.union([zod.boolean(), zod.string().transform(val => val === "true")]),
})


module.exports = {
    TodoValidations,
}