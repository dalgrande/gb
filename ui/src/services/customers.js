import axios from 'axios';

//  TODO: Create context hook
export const getCustomers = async () => {
  try {
    const {
      data: { customers },
    } = await axios.get(`${process.env.REACT_APP_API_URL}/dev/customers`);

    return customers;
  } catch (err) {
    throw err.response;
  }
};
