---
language_code: {{ .Params.LanguageCode }}
default_taxonomy_id: {{ .Params.DefaultTaxonomyID | uuidv4 }}
publication_schedule: {{ .Params.PublicationSchedule }}
validation:
  - status: pending
    timestamp: {{ now }}
---

{{ .Content }}