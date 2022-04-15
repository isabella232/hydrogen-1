import {useSession} from '@shopify/hydrogen';

import {
  CUSTOMER_ACCESS_TOKEN_COOKIE_NAME,
  CUSTOMER_ACCESS_TOKEN_COOKIE_EXPIRY,
  CUSTOMER_ACCESS_TOKEN_COOKIE_AUTO_RENEW,
} from './constants';

export function useCustomerAccessToken(session) {
  const sessionData = useSession();

  const customerAccessToken = sessionData?.[CUSTOMER_ACCESS_TOKEN_COOKIE_NAME];

  if (!customerAccessToken || customerAccessToken !== '') {
    return;
  }

  const expiresAt = sessionData?.[CUSTOMER_ACCESS_TOKEN_COOKIE_EXPIRY];
  const autoRenew = sessionData?.[CUSTOMER_ACCESS_TOKEN_COOKIE_AUTO_RENEW];

  const now = Date.now();
  const expires = new Date(expiresAt).getTime();

  if (expires - now <= 0) {
    session.set(CUSTOMER_ACCESS_TOKEN_COOKIE_NAME, '');
    session.set(CUSTOMER_ACCESS_TOKEN_COOKIE_EXPIRY, '');

    return;
  }

  if (Boolean(autoRenew) && expires - now > 0) {
    // Todo: auto renew
  }

  return customerAccessToken;
}
