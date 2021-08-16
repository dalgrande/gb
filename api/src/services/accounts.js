const yup = require('yup');
const { api } = require('../utils/apiwrapper');
const { client: dwolla } = require('../providers/dwolla');

const FUNDING_SOURCE_URL = 'funding-sources';

const schema = yup.object({
  pathParameters: yup.object().shape({
    id: yup.string().required('ID of FundingSource is Required'),
  }),
});

module.exports.get = async event => {
  console.info(`Starting Request: ${event}`);

  try {
    await schema.validate(event);

    const fundingSourceId = api.getId(event);
    const { body } = await dwolla.get(`${FUNDING_SOURCE_URL}/${fundingSourceId}`);

    return api.parseResponse(body);
  } catch (error) {
    return api.handleError(error);
  }
};
