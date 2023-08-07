// mocks/handlers.js
import { rest } from 'msw';

export const handlers = [
  rest.get('https://api.dictionaryapi.dev/api/v2/entries/en/:word', (req, res, ctx) => {
    const { word } = req.params;
    if (word === 'dog') {
      return res(
        ctx.json([
          {
            meanings: [
              {
                definitions: [
                  { definition: 'Definition 1' },
                  { definition: 'Definition 2' },
                ],
              },
            ],
          },
        ])
      );
    } else {
      return res(
        ctx.status(404),
        ctx.json({ message: 'Word not found' })
      );
    }
  }),
];
