const Exception = (message, status = 500) => {
  return {
    message,
    status
  };
};

module.exports = Exception;
