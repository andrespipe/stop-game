const httpVerbsHelper = (controller) => async (req, res) => {
  const { method } = req;
  const isVerbPresent = !!controller[method];
  if (isVerbPresent) {
    try {
      await controller[method](req, res);
    } catch (error) {
      console.error(error);
      res.status(500).json(JSON.stringify(error));
      res.end();
    }
  } else {
    res.status(404).json(JSON.stringify({ error: 'Method not found' }));
    res.end();
  }
};

export default httpVerbsHelper;
