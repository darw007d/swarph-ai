# Deployment

The full deployment runbook (DNS records, TLS issuance, server topology) is
maintained **internally** — it carries infrastructure details that don't belong
in a public repository. `nginx-swarph-ai.conf` is the public-safe nginx template.

To deploy a copy of this static site: serve `web/` behind any web server with a
valid TLS certificate for your domain. No build step.
