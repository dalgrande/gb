import axios from 'axios';

//  TODO: Create account context hook
export const getCustomerAccounts = async id => {
  try {
    const { data } = await axios.get(
      `${process.env.REACT_APP_API_URL}/dev/customers/${id}/accounts`
    );
    return data;
  } catch (err) {
    throw err.response;
  }
};

export const getCustomerAccountDetail = async id => {
  try {
    const { data } = await axios.get(
      `${process.env.REACT_APP_API_URL}/dev/accounts/${id}`
    );
    return data;
  } catch (err) {
    throw err.response;
  }
};
