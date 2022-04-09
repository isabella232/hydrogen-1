import {renderHydrogen, MemorySessionStorage} from '@shopify/hydrogen';
export default renderHydrogen(App, {
  routes,
  shopifyConfig,
  session: MemorySessionStorage('__session', {
    path: '/',
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 60 * 60 * 24 * 30,
  }),
});
