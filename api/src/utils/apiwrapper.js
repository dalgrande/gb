module.exports.api = {
  getId: event => {
    const { id } = event.pathParameters;

    return id;
  },

  getBody: event => {
    const { body } = event;

    return body;
  },

  parseResponse: res => ({
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*', // Required for CORS support to work
    },
    body: JSON.stringify(res),
  }),

  handleError: error => {
    console.log(error);

    if (error.name === 'ValidationError') {
      return {
        statusCode: 400,
        body: JSON.stringify(`'[BadRequest] ${error.message}`),
      };
    }

    return {
      statusCode: 500,
      body: JSON.stringify(error.message),
    };
  },
};
