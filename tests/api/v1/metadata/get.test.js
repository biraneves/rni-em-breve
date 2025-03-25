const metadataUrl = 'http://localhost:3000/api/v1/metadata';

test('get on api/v1/metadata should return status 200', async () => {
  const response = await fetch(metadataUrl);
  
  expect(response.status).toBe(200);
});