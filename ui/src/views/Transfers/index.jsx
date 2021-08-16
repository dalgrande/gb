import React, { useState, useEffect } from 'react';
import {
  Page,
  Card,
  FormLayout,
  Select,
  TextField,
  Button,
} from '@shopify/polaris';
import { getCustomers } from 'services/customers';
import {
  getCustomerAccounts,
  getCustomerAccountDetail,
} from 'services/accounts';
import { Container } from './styles';

export default function TransfersView() {
  const [selectedCustomerSender, setSelectedCustomerSender] = useState();

  const [
    selectedCustomerSenderAccount,
    setSelectedCustomerSenderAccount,
  ] = useState();
  const [selectedCustomerReceiver, setSelectedCustomerReceiver] = useState();
  const [
    selectedCustomerReceiverAccount,
    setSelectedCustomerReceiverAccount,
  ] = useState();
  const [amount, setAmount] = useState('');
  const [customers, setCustomers] = useState();

  const [senderAccounts, setSenderAccounts] = useState();
  const [receiverAccounts, setReceiverAccounts] = useState();

  const [accountSenderDetail, setAccountSenderDetail] = useState();
  const [accountReceiverDetail, setAccountReceiverDetail] = useState();

  console.log(accountReceiverDetail);
  console.log(accountSenderDetail);

  const handleGetCustomers = async () => {
    const newCustomers = await getCustomers();
    const customerOptions = newCustomers.map(customer => {
      const customerData = {
        label: customer.firstName,
        value: customer.id,
      };
      return customerData;
    });
    setCustomers(customerOptions);
    return customerOptions;
  };

  const handleGetSenderCustomerAccounts = async id => {
    const newAccounts = await getCustomerAccounts(id);
    const accountOptions = newAccounts.map(account => {
      const accountData = {
        label: account.name,
        value: account.id,
      };
      return accountData;
    });
    setSenderAccounts(accountOptions);
    return accountOptions;
  };

  const handleGetReceiverCustomerAccounts = async id => {
    const newAccounts = await getCustomerAccounts(id);
    const accountOptions = newAccounts.map(account => {
      const accountData = {
        label: account.name,
        value: account.id,
      };
      return accountData;
    });
    setReceiverAccounts(accountOptions);
    return accountOptions;
  };

  const handleGetCustomerSenderAccountDetail = async id => {
    const newAccountDetails = await getCustomerAccountDetail(id);
    setAccountSenderDetail(newAccountDetails);
  };
  const handleGetCustomerReceiverAccountDetail = async id => {
    const newAccountDetails = await getCustomerAccountDetail(id);
    setAccountReceiverDetail(newAccountDetails);
  };

  const handleChangeCustomerSenderAccount = value => {
    setSelectedCustomerSenderAccount(value);
    handleGetCustomerSenderAccountDetail(value);
  };

  const handleChangeCustomerReceiverAccount = value => {
    setSelectedCustomerReceiverAccount(value);
    handleGetCustomerReceiverAccountDetail(value);
  };

  const handleChangeCustomerSender = value => {
    setSelectedCustomerSender(value);
    handleGetSenderCustomerAccounts(value);
  };

  const handleChangeCustomerReceiver = value => {
    setSelectedCustomerReceiver(value);
    handleGetReceiverCustomerAccounts(value);
  };

  const handleChangeAmount = value => {
    setAmount(value);
  };

  useEffect(() => {
    async function fetchCustomerData() {
      await handleGetCustomers().then(customerData => {
        handleGetSenderCustomerAccounts(customerData[0]?.value)
          .then(accountOptions => {
            handleGetCustomerSenderAccountDetail(accountOptions[0]?.value);
          })
          .then(
            handleGetReceiverCustomerAccounts(customerData[0]?.value).then(
              accountOptions => {
                handleGetCustomerReceiverAccountDetail(
                  accountOptions[0]?.value
                );
              }
            )
          );
      });
    }
    fetchCustomerData();
  }, []);

  return (
    <Page title="Transfers">
      <Card>
        <div style={{ padding: '10px' }}>
          <FormLayout>
            <Container>
              <Select
                label="Sender"
                options={customers}
                onChange={value => handleChangeCustomerSender(value)}
                value={selectedCustomerSender}
              />
              <Select
                label="Sender Account"
                options={senderAccounts}
                onChange={value => handleChangeCustomerSenderAccount(value)}
                value={selectedCustomerSenderAccount}
              />
              <TextField
                label="Amount"
                value={amount}
                onChange={value => handleChangeAmount(value)}
              />
              <Select
                label="Receiver"
                options={customers}
                onChange={value => handleChangeCustomerReceiver(value)}
                value={selectedCustomerReceiver}
              />
              <Select
                label="Receiver Account"
                options={receiverAccounts}
                onChange={value => handleChangeCustomerReceiverAccount(value)}
                value={selectedCustomerReceiverAccount}
              />
            </Container>
            <div>
              Available balance: {accountSenderDetail?.balance?.currency}{' '}
              {accountSenderDetail?.balance?.value}
            </div>
          </FormLayout>
        </div>
        <Button fullWidth>Send</Button>
      </Card>
    </Page>
  );
}
