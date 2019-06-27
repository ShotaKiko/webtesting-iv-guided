const db  = require ('../data/dbConfig.js')
const Hobbits = require('./hobbitsModel.js')

describe('the hobbits model', () => {
    afterEach( async () => {
        await db('hobbits').truncate()
    })
    describe('insert()', () => {
        it('should insert hobbits into db', async () => {
            //user our model functions NOT knex to db
            await Hobbits.insert({ name:"Sam" })
            await Hobbits.insert({ name:"Frodo" })
            
            //confirm with knex
            const hobbits = await db('hobbits')

            expect(hobbits).toHaveLength(2)
            expect(hobbits[0].name).toBe('Sam')
        })
    })



})