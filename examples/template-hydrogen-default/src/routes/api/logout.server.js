import {removeCustomerAccessToken} from '../../utilities/customer-access-token';

export async function api(request, {session}) {
  await removeCustomerAccessToken(session);

  return new Response(null, {
    headers: {
      Location: '/',
    },
    status: 301,
  });
}
