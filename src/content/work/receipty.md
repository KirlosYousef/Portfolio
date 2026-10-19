---
title: 'Receipty — Evaluated LLM Extraction & RAG'
shortTitle: 'Receipty'
order: 2
tracks: ['ai', 'backend']
priority:
  general: 3
  ai: 2
eyebrow: 'Independent project · LLM systems'
role: 'Creator & AI Application Engineer'
period: '2026'
platforms: ['API', 'Backend']
summary: 'A FastAPI receipt pipeline that treats model output as untrusted data, measures extraction quality, and grounds answers in indexed source receipts.'
contribution: 'Built the extraction, validation, retrieval, grounded-answer, evaluation, and CI paths end to end.'
image: '/images/apps/Receipty.png'
imageAlt: 'Receipty app artwork showing a structured receipt inside a blue frame'
accent: '#67e8c2'
technologies:
  [
    'Python',
    'FastAPI',
    'Pydantic',
    'PostgreSQL',
    'pgvector',
    'LangGraph',
    'MCP',
    'OpenRouter',
    'Docker',
    'GitHub Actions',
  ]
outcomes:
  - value: 'p95 3.4 s'
    label: 'extraction latency, ~$0.0005 per receipt'
  - value: '60/60'
    label: 'receipt, total, and date checks'
  - value: '69 queries'
    label: 'labelled retrieval suite'
  - value: '178 tests'
    label: '80% branch coverage gate'
challenges:
  - 'Prevent a vision model from silently turning uncertain receipt fields into confident application data.'
  - 'Compare retrieval strategies on labelled questions without confusing search quality with answer quality.'
  - 'Keep evaluation results reproducible across prompt, model, code, latency, token, and cost changes.'
decisions:
  - 'Constrained extraction with strict JSON schemas, Pydantic validation, locale-aware parsing, and explicit success, review, and failure outcomes.'
  - 'Combined keyword and pgvector retrieval with lexical reranking, source citations, and a deliberate not-found response.'
  - 'Recorded prompt and commit hashes with model settings and operational measurements, then enforced deterministic quality checks in CI.'
links:
  - label: 'View source on GitHub'
    url: 'https://github.com/KirlosYousef/Receipty'
attribution: 'Independent project created and evaluated by Kirlos Yousef.'
---

## Product problem

Receipt extraction is useful only when downstream systems can distinguish validated data from a model guess. Receipty treats the model as an untrusted extractor and makes uncertainty visible through typed outcomes instead of silently accepting malformed or unsupported fields.

## Engineering approach

The FastAPI service sends schema-constrained requests, validates returned data with Pydantic, and applies deterministic locale-aware parsing. The same service path powers a labelled extraction harness. Indexed receipts can then be searched through keyword, dense, hybrid, or hybrid-rerank retrieval before the question-answering endpoint returns cited source IDs or a not-found response.

## Retrieval results

Four strategies were scored on the 64 answerable questions (corpus of 55 receipts, k = 5):

| Strategy         | recall@5 | MRR  |
| ---------------- | -------- | ---- |
| Keyword          | 1.00     | 0.99 |
| Dense (pgvector) | 1.00     | 0.99 |
| Hybrid           | 1.00     | 0.99 |
| Hybrid + rerank  | 1.00     | 0.99 |

All four strategies score the same, so this suite cannot show one strategy beating another. It confirms retrieval works on this corpus; harder queries are needed to separate the strategies.

## Bounded agent

`POST /v1/agent` runs a LangGraph tool-calling loop over four application-owned tools. Reads run immediately. Writes pause with `interrupt()` until a human approves them through `/v1/agent/resume`. Step, time and token budgets stop a loop that keeps requesting tools, and a provider failure ends the run with the completed steps kept. The same four tools are exposed over an MCP stdio server.

## Observability and safety

Every chat completion, embedding call, retrieval and tool call writes a JSON trace line with duration, model, token counts and provider cost. Payment cards, emails, phone numbers and credentials are redacted before they reach logs or traces. Latency is p50 1.7 s and p95 3.4 s at about $0.0005 per receipt (60 images, $0.0298 in total). The 178 tests run in CI behind an 80% branch-coverage gate.

## Validation and limits

The extraction suite contains 60 curated images: 55 receipts and five non-receipts. Receipt classification, total, and date checks passed on all 60 examples, but that result describes this limited dataset rather than universal accuracy. The 69-question retrieval suite contains 64 answerable questions and five not-found cases; recall and MRR apply only to the 64 questions with gold sources. Retrieval evaluation measures search quality, not answer correctness.
