# Security

Report suspected credentials or vulnerabilities privately to [Amith Baiju E](mailto:amithbaijuedakkalathur@gmail.com). Do not include secret values or identifying customer records in a public issue.

This repository is a public presentation website. Commercial application source, database backups, signing keys, environment files and customer exports must remain private. Review image contents as well as source text before committing.

If a credential is exposed, revoke or rotate it at the provider first. Then coordinate history remediation. Removing a file from the latest commit does not revoke credentials or remove them from history and forks.

`.openai/hosting.json` contains a project identifier, not an API key. It is imported by the current Vite configuration. Hosting credentials must never be added to it.
