## Considerations

Because `FileSessionStorage` relies on the file system, it should not be used in Edge workers, and instead only in NodeJS deployments.
