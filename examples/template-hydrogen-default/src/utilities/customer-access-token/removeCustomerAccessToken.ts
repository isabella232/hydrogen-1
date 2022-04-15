import {
  CUSTOMER_ACCESS_TOKEN_COOKIE_NAME,
  CUSTOMER_ACCESS_TOKEN_COOKIE_EXPIRY,
  CUSTOMER_ACCESS_TOKEN_COOKIE_AUTO_RENEW,
} from './constants';

export async function removeCustomerAccessToken(session) {
  await session.set(CUSTOMER_ACCESS_TOKEN_COOKIE_NAME, '');
  await session.set(CUSTOMER_ACCESS_TOKEN_COOKIE_EXPIRY, '');
  await session.set(CUSTOMER_ACCESS_TOKEN_COOKIE_AUTO_RENEW, '');
}
