const errorHandler = async (err, req, res, next) => {
  return res.status(500).json({ message: "Internal server error" });
};

module.exports = errorHandler;
