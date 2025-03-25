const metadata = async (request, response) => {
  await response.status(200).json({});
};

export default metadata;