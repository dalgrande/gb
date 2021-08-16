import React, { useState } from 'react';
import { Card, List } from '@shopify/polaris';
import Loading from 'components/Loading';
import { getCustomerAccounts } from 'services/accounts';

export default function CustomerDetail({ customer }) {
  const [loading, setLoading] = useState(false);
  const [customersAccounts, setCustomersAccounts] = useState([]);

  React.useEffect(() => {
    const fetchCustomerAccounts = async () => {
      setLoading(true);
      const newCustomerAccounts = await getCustomerAccounts(customer?.id);
      setCustomersAccounts(newCustomerAccounts || []);
      setLoading(false);
    };

    fetchCustomerAccounts();
  }, [customer.id]);

  return (
    <Card title={`${customer.firstName} ${customer.lastName}`}>
      <Card.Section title="Details:">
        <List>
          <List.Item>Status: {customer.status}</List.Item>
          <List.Item>Id: {customer.id}</List.Item>
          <List.Item>Email: {customer.email}</List.Item>
          <List.Item>Type: {customer.type}</List.Item>
          <List.Item>Created at: {Date(customer.created)}</List.Item>
          <Card.Section title="Customer Accounts:">
            {loading ? (
              <Loading />
            ) : (
              <List>
                {customersAccounts.length > 0
                  ? customersAccounts.map(account => (
                      <List.Item key={account.id}>{account.name}</List.Item>
                    ))
                  : 'No accounts found.'}
              </List>
            )}
          </Card.Section>
        </List>
      </Card.Section>
    </Card>
  );
}
