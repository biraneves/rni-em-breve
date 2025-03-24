const metadata = (request, response) => {
  const title = 'Residência na Itália';
  const language = 'pt-BR';

  response.status(200).json({
    title,
    language,
  });
};

export default metadata;