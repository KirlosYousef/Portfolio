---
title: 'Receipty — Evaluated LLM Extraction & RAG'
shortTitle: 'Receipty'
order: 1
tracks: ['ai', 'backend']
priority:
  general: 2
  ai: 1
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
    'OpenAI SDK',
    'Docker',
    'GitHub Actions',
  ]
outcomes:
  - value: '60/60'
    label: 'receipt, total, and date checks'
  - value: '69 queries'
    label: 'labelled retrieval suite'
  - value: '80%'
    label: 'branch coverage gate'
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

## Validation and limits

The extraction suite contains 60 curated images: 55 receipts and five non-receipts. Receipt classification, total, and date checks passed on all 60 examples, but that result describes this limited dataset rather than universal accuracy. The 69-question retrieval suite contains 64 answerable questions and five not-found cases; recall and MRR apply only to the 64 questions with gold sources. Retrieval evaluation measures search quality, not answer correctness.
