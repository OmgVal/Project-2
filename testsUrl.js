const db = require('./models')

//db.dino.sequelizeMethod()
const creaturesCRUD = async () => {
    try {
        // CREATE
        // const newCreature = await db.creatures.create({
        //     name: 'Nala',
        //     type: 'Lion'
        // }) 
        // console.log(newCreature)

        // //READ
        // const someCreatures = await db.creatures.findAll({
        //     where: {
        //         //can search for any field from the model
        //         type: 'Lion'
        //     }
        // })
        // console.log(someCreatures)
        //UPDATE
        // updates return the number of rows that were changed
        // db.model.update({what to change}, {where: {where clause}})
        // const nameChange = await db.creatures.update({ name: 'Kovu'}, {
        //     where: {
        //         name: 'Scar'
        //     }
        // })
        // console.log(nameChange)
        //DESTROY
        const lionDeleted = await db.creatures.destroy({
            where: {
                name: 'Kovu'
            }
        })
        console.log(lionDeleted)
    } catch(err) {
        console.warn(err)
    }
}
//dont forget to invoke
creaturesCRUD()