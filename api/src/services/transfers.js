const yup = require('yup');
const { api } = require('../utils/apiwrapper');
const { client: dwolla } = require('../providers/dwolla');

const TRANSFERS_URL = 'transfers';

const schema = yup.object({
  body: yup.object().shape({
    _links: yup.object().required('Source and destination are required'),
    amount: yup.object().required('Amount is required'),
  }),
});

module.exports.post = async event => {
  console.info(`Starting Request: ${event}`);

  try {
    await schema.validate(event);

    const requestBody = api.getBody(event);
    const { body } = await dwolla.get(`${TRANSFERS_URL}`,requestBody);

    return api.parseResponse(body);
  } catch (error) {
    return api.handleError(error);
  }
};
