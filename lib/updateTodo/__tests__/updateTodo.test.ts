import { server } from '../../../mocks/server'
import { rest } from 'msw'
import updateTodo from '../updateTodo'

const mockTodo = {
    "userId": 1,
    "title": "Hello! 👋",
    "completed": false,
    "id": 1
}

describe('updateTodo', () => {
    it('should return the updated todo item', async () => {
        const updatedTodo = await updateTodo(mockTodo)
        expect(updatedTodo).toEqual({
            userId: 1,
            title: "Hello! 👋",
            completed: true,
            id: 1,
        })
    })

    it('should throw an error if the response is not ok', async () => {
        server.use(
            rest.put('/todos/1', (req, res, ctx) => {
                return res(ctx.status(500))
            })
        )
        expect.assertions(1);
        try{ 
            await updateTodo(mockTodo)
        } catch(err) {
            expect(err).toEqual(new Error('Something went wrong')) 
        }
    })
});