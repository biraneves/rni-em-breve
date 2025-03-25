const metadata = async (request, response) => {
  const language = 'pt-BR';
  const title = 'Residência na Itália';
  const description = 'Realize o Sonho da Cidadania Italiana com Autonomia e Suporte Especializado';

  await response.status(200).json({
    language,
    title,
    description,
  });
};

export default metadata;