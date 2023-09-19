import { server } from '../../../mocks/server';
import { rest } from 'msw';
import deleteTodo from '../deleteTodo';

const mockTodo = {
    "userId": 1,
    "title": "Hello! 👋",
    "completed": false,
    "id": 1
}
describe('deleteTodo', () => {
    it('should return the deleted todo item', async () => {
        const deleteItem = await deleteTodo(mockTodo)
        expect(deleteItem).toEqual({
            id: 1,
        })
    })

    it('should throw an error if the response is not ok', async () => {
        server.use(
            rest.delete('/todos/1', (req, res, ctx) => {
                return res(ctx.status(500))
            })
        )
        expect.assertions(1);
        try{ 
            await deleteTodo(mockTodo)
        } catch(err) {
            expect(err).toEqual(new Error('Something went wrong')) 
        }
    })
})