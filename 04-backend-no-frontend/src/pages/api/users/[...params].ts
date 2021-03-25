import { NextApiRequest, NextApiResponse } from 'next'

export default (request: NextApiRequest, response: NextApiResponse) => {
  console.log(request.query);

  const users = [
    { id: 1, name: 'Rafael' },
    { id: 2, name: 'Cal' },
    { id: 2, name: 'Paula' },
  ];

  return response.json(users);
}