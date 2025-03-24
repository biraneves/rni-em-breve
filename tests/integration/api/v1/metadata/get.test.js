test('get to api/v1/metadata should return 200', async () => {
  const response = await fetch('http://localhost:3000/api/v1/metadata');

  expect(response.status).toBe(200);
});

test('get to api/v1/metadata should return website metadata', async () => {
  const response = await fetch('http://localhost:3000/api/v1/metadata');
  const responseBody = await response.json();

  expect(responseBody.title).toBe('Residência na Itália');
  expect(responseBody.language).toBe('pt-BR');
});