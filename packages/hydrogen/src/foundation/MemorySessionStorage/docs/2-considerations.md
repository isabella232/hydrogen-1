## Considerations

- You can store as much data as you want in the session (more than the 4kb cookie limit). However, when you close the Hydrogen server, all session data will be lost.
- If you're running Hydrogen in an Edge worker that frequently shuts down and has cold starts, then your session data will be very volatile.
