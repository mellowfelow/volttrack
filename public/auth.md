# Auth.md

Site: VoltTrack (https://volttrack.com)
Type: Public ecommerce catalog (electric dirt bikes)

## Agent Registration
No authentication is required. All resources on this site are public and freely readable by agents.

## Public Resources
| Resource | URL |
|---|---|
| Product catalog | https://volttrack.com/shop/ |
| Brands | https://volttrack.com/brands/ |
| Buying guides | https://volttrack.com/guides/ |
| Blog | https://volttrack.com/blog/ |
| FAQ | https://volttrack.com/faq/ |
| Contact | https://volttrack.com/contact/ |
| llms.txt | https://volttrack.com/llms.txt |
| API Catalog | https://volttrack.com/.well-known/api-catalog |
| Agent Skills | https://volttrack.com/.well-known/agent-skills/index.json |
| MCP Server Card | https://volttrack.com/.well-known/mcp/server-card.json |

```json
{
  "agent_auth": {
    "register_uri": null,
    "identity_types_supported": ["none"],
    "credential_types_supported": ["none"],
    "notes": "No authentication required. All resources are public."
  }
}
```

## Ordering
Ordering is human-in-the-loop. Agents may browse and prepare an enquiry, but a human completes
every purchase via https://volttrack.com/contact/. No payment is captured on-site.

## Notice
Most vehicles are off-road / private-land use only and not street legal without specific federal/state certification. California: Vehicle Code Section 436.1 OHV registration applies.
