import {CacheCustom} from '@shopify/hydrogen';

import AccountDetails from '../../components/AccountDetails.server';
import {useCustomerAccessToken} from '../../utilities/customer-access-token';

export default function Account({response}) {
  const customerAccessToken = useCustomerAccessToken(response.session);

  // disabled full page cache
  response.cache(
    CacheCustom({
      mode: 'no-store',
    }),
  );

  if (customerAccessToken) {
    return <AccountDetails customerAccessToken={customerAccessToken} />;
  } else {
    return response.redirect('/account/login');
  }
}
