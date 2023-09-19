import { server } from '../../../mocks/server';
import { rest } from 'msw';
import postTodo from '../postTodo';

describe('postTodo', () => {
    it('should return the posted todo item', async () => {
        const postedTodo = await postTodo('write tests')
        expect(postedTodo).toEqual({
            userId: 1,
            title: 'write tests',
            completed: false,
            id: 5,
        })
    })

    it('should throw an error if the response is not ok', async () => {
        server.use(
            rest.post('/todos', (req, res, ctx) => {
                return res(ctx.status(500))
            })
        )
        expect.assertions(1);
        try{ 
            await postTodo('write tests')
        } catch(err) {
            expect(err).toEqual(new Error('Something went wrong')) 
        }
    })
});