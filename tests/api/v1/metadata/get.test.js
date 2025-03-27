const metadataUrl = 'http://localhost:3000/api/v1/metadata';

test('get on api/v1/metadata should return status 200', async () => {
  const response = await fetch(metadataUrl);
  
  expect(response.status).toBe(200);
});

test('get on api/v1/metadata should return website metadata', async () => {
  const response = await fetch(metadataUrl);
  const data = await response.json();

  expect(data.language).toBe('pt-BR');
  expect(data.title).toBe('Residência na Itália');
  expect(data.description).toBe('Realize o Sonho da Cidadania Italiana com Autonomia e Suporte Especializado');
});