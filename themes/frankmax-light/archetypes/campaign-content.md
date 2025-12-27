---
content_type: {{ .Params.ContentTypeReferences | uuidv4 }}
campaign_id: {{ .Params.CampaignID | uuidv4 }}
validation:
  - status: pending
    timestamp: {{ now }}
---

{{ .Content }}