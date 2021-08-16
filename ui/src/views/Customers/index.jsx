import React, { useState } from 'react';
import {
  Card,
  Avatar,
  ResourceList,
  ResourceItem,
  TextStyle,
  Page,
} from '@shopify/polaris';

import Loading from 'components/Loading';
import { getCustomers } from 'services/customers';
import CustomerDetail from 'views/Customers/CustomerDetail';

function CustomersView() {
  const [customers, setCustomers] = useState([]);
  const [customerDetail, setCustomerDetail] = useState();
  const [loading, setLoading] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  React.useEffect(() => {
    const fetchCustomers = async () => {
      setLoading(true);
      const newCustomers = await getCustomers();
      setCustomers(newCustomers || []);
      setLoading(false);
    };

    fetchCustomers();
  }, []);

  function handleShowCustomerDetail(item) {
    setCustomerDetail(item);
    if (customerDetail && item.id !== customerDetail.id) {
      setShowDetails(true);
    } else {
      setShowDetails(prevstate => !prevstate);
    }
  }

  return (
    <Page title="Customers">
      <Card>
        {loading ? (
          <Loading />
        ) : (
          <ResourceList
            resourceName={{ singular: 'customer', plural: 'customers' }}
            items={customers}
            renderItem={item => {
              const { id, email, firstName, lastName } = item;
              const media = <Avatar customer size="medium" name={firstName} />;

              return (
                <ResourceItem
                  onClick={() => handleShowCustomerDetail(item)}
                  id={id}
                  media={media}
                  accessibilityLabel={`View details for ${firstName}`}
                >
                  <h3>
                    <TextStyle variation="strong">
                      Name: {firstName} {lastName}
                    </TextStyle>
                  </h3>
                  <TextStyle variation="strong">Email: {email}</TextStyle>
                </ResourceItem>
              );
            }}
            loading={false}
          />
        )}
      </Card>
      <Card>{showDetails && <CustomerDetail customer={customerDetail} />}</Card>
    </Page>
  );
}

export default CustomersView;
