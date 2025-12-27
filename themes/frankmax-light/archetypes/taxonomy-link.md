---
taxonomy_id: {{ .Params.TaxonomyID | uuidv4 }}
language_code: {{ .Params.LanguageCode }}
validation:
  - status: pending
    timestamp: {{ now }}
---

{{ .Content }}