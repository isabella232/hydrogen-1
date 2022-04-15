import {
  CUSTOMER_ACCESS_TOKEN_COOKIE_NAME,
  CUSTOMER_ACCESS_TOKEN_COOKIE_EXPIRY,
  CUSTOMER_ACCESS_TOKEN_COOKIE_AUTO_RENEW,
} from './constants';

export async function setCustomerAccessToken(
  session,
  {accessToken, expiresAt, autoRenew = false},
) {
  await session.set(CUSTOMER_ACCESS_TOKEN_COOKIE_NAME, accessToken);
  await session.set(CUSTOMER_ACCESS_TOKEN_COOKIE_EXPIRY, expiresAt);

  const oldAutoRenew = session.get(CUSTOMER_ACCESS_TOKEN_COOKIE_AUTO_RENEW);
  if (oldAutoRenew !== autoRenew) {
    await session.set(CUSTOMER_ACCESS_TOKEN_COOKIE_AUTO_RENEW, autoRenew);
  }
}
