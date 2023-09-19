import { server } from '../../../mocks/server';
import { rest } from 'msw';
import fetchTodo from '../fetchTodo';

describe('fetchTodo', () => {

    it('should return the correct numbers of todos', async () => {
        const todosArray = await fetchTodo();
        expect(todosArray.length).toBe(4);
    })

    it('should return an empty array with an error', async () => {
        server.use(
            rest.get('/todos', (req, res, ctx) => {
                return res(ctx.status(500))
            })
        )
        const todosArray = await fetchTodo();
        expect(todosArray.length).toBe(0);
    })
});