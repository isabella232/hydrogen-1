<!-- This file is generated from source code in the Shopify/hydrogen repo. Edit the files in /packages/hydrogen/src/foundation/useServerState and run 'yarn generate-docs' at the root of this repo. For more information, refer to https://github.com/Shopify/shopify-dev/blob/main/content/internal/operations/reference-docs/hydrogen.md. -->

The `useSession` hook reads session data in server components.

## Example code

{% codeblock file, filename: 'component.server.jsx' %}

```jsx
import {useSession} from '@shopify/hydrogen';
export default function ServerComponent() {
  const {countryCode} = useSession();
  return <div>The country code: {countryCode}</div>;
}
```

{% endcodeblock %}

## Return value

The `useSession` hook returns all data within the current session. The return type is an object with key value pairs.

## Considerations

- You can't use the `useSession` hook in client components. If your client components need access to session data, then get the data within server components and explicitly pass the data to client components.

      > Caution:
      > Sessions typically contain privileged data. Avoid passing all session data to the client.

- Don't update session data within server or client components. Instead, [update session data within API routes](/custom-storefronts/hydrogen/framework/sessions#reading-and-updating-session-data).
- The `useSession` hook will suspend when its called. The length of the suspense depends on where the session data is stored.

## Related components

- [`Cookie`](/api/hydrogen/components/framework/cookie)
- [`FileSessionStorage`](/api/hydrogen/components/framework/filesessionstorage)
- [`CookieSessionStorage`](/api/hydrogen/components/framework/cookiesessionstorage)
- [`MemorySessionStorage`](/api/hydrogen/components/framework/memorysessionstorage)
