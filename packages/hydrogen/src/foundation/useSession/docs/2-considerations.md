## Considerations

- You can't use the `useSession` hook in client components. If your client components need access to session data, then get the data within server components and explicitly pass the data to client components.

      > Caution:
      > Sessions typically contain privileged data. Avoid passing all session data to the client.

- Don't update session data within server or client components. Instead, [update session data within API routes](/custom-storefronts/hydrogen/framework/sessions#reading-and-updating-session-data).
- The `useSession` hook will suspend when its called. The length of the suspense depends on where the session data is stored.
