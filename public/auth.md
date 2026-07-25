# Auth.md

Site: VoltTrack (https://volttrackhub.com)
Type: Public ecommerce catalog (electric dirt bikes)

## Agent Registration
No authentication is required. All resources on this site are public and freely readable by agents.

## Public Resources
| Resource | URL |
|---|---|
| Product catalog | https://volttrackhub.com/shop/ |
| Brands | https://volttrackhub.com/brands/ |
| Buying guides | https://volttrackhub.com/guides/ |
| Blog | https://volttrackhub.com/blog/ |
| FAQ | https://volttrackhub.com/faq/ |
| Contact | https://volttrackhub.com/contact/ |
| llms.txt | https://volttrackhub.com/llms.txt |
| API Catalog | https://volttrackhub.com/.well-known/api-catalog |
| Agent Skills | https://volttrackhub.com/.well-known/agent-skills/index.json |
| MCP Server Card | https://volttrackhub.com/.well-known/mcp/server-card.json |

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
every purchase via https://volttrackhub.com/contact/. No payment is captured on-site.

## Notice
Most vehicles are off-road / private-land use only and not street legal without specific federal/state certification. California: Vehicle Code Section 436.1 OHV registration applies.
