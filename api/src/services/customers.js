const yup = require('yup');
const { api } = require('../utils/apiwrapper');
const { client: dwolla } = require('../providers/dwolla');

const CUSTOMERS_URL = 'customers';

const schema = yup.object({
  pathParameters: yup.object().shape({
    id: yup.string().required('ID of Customer is Required'),
  }),
});

module.exports.get = async event => {
  console.info('Starting Request:', event);

  try {
    await schema.validate(event);

    const customerId = api.getId(event);
    const { body } = await dwolla.get(`${CUSTOMERS_URL}/${customerId}`);

    return api.parseResponse(body);
  } catch (error) {
    return api.handleError(error);
  }
};

module.exports.list = async event => {
  console.info('Starting Request:', event);

  try {
    const { body: { _embedded } } = await dwolla.get(CUSTOMERS_URL);

    return api.parseResponse(_embedded);
  } catch (error) {
    return api.handleError(error);
  }
};

module.exports.listCustomerFundingSources = async event => {
  console.info('Starting Request:', event);

  try {
    await schema.validate(event);

    const customerId = api.getId(event);
    const { body: { _embedded } } = await dwolla.get(`${CUSTOMERS_URL}/${customerId}/funding-sources`);

    return api.parseResponse(_embedded['funding-sources']);
  } catch (error) {
    return api.handleError(error);
  }
};
