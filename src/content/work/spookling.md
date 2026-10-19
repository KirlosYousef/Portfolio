---
title: 'Spookling — AI Workspace'
shortTitle: 'Spookling'
order: 3
tracks: ['ai', 'ios', 'web', 'backend']
priority:
  general: 2
  ai: 3
eyebrow: 'Product engineering · AI workspace'
role: 'Lead Product Engineer'
period: '08/2025 — Present'
platforms: ['iOS', 'Web', 'Backend']
summary: 'An AI workspace spanning native chat, calendar tools, browser-based coding, collaboration, search, and connected services.'
contribution: 'Built across iOS and web, then expanded into AWS backend services for chat, search, integrations, history, booking, and billing fixes.'
image: '/images/apps/Spookling.png'
imageAlt: 'Spookling app icon showing a friendly ghost in a witch hat on purple'
accent: '#7138e8'
technologies:
  [
    'Swift',
    'SwiftUI',
    'TypeScript',
    'React',
    'SSE',
    'EventKit',
    'AppSync',
    'Lambda',
    'DynamoDB',
    'OpenSearch',
  ]
outcomes:
  - value: '~87%'
    label: 'of iOS app commits (272 of 311)'
  - value: '~76%'
    label: 'of web app commits (223 of 293)'
  - value: '~51k'
    label: 'lines of Swift in the iOS app'
challenges:
  - 'Keep streamed model output responsive while maintaining predictable state across native and web clients.'
  - 'Translate evolving tool-call payloads into safe native actions and reliable third-party integrations.'
  - 'Add searchable workspace communication without exposing conversations across access boundaries.'
decisions:
  - 'Used SSE for progressive AI responses and mapped tool calls through typed boundaries before EventKit actions.'
  - 'Built workspace and direct-message APIs on AppSync, Lambda, and DynamoDB with threads, mentions, and file indexes.'
  - 'Implemented OpenSearch Serverless indexing, highlights, and conversation-level access control.'
  - 'Added Buffer and Google connection flows, Composio tools, assistant history, booking APIs, and billing fixes.'
links:
  - label: 'Open the web app'
    url: 'https://app.spookling.com/home'
  - label: 'View on the App Store'
    url: 'https://apps.apple.com/us/app/id6759097441'
attribution: 'Built at Sellou. Details limited by NDA.'
---

## Product problem

Spookling brings always-available AI into chat, calendar workflows, coding, collaboration, and connected services. The work required more than a chat interface: native actions, progressive responses, workspace communication, search, external connections, and backend product flows had to behave as one dependable system.

## Engineering approach

On iOS, SSE delivers partial model responses and typed tool boundaries protect native EventKit actions. The web product extends those workflows into browser-based workspaces and coding. Backend contributions added workspace and direct-message APIs, conversation files, OpenSearch-powered search, OAuth connections, assistant history, public booking, and billing fixes on AWS services.

## Ownership

I was the primary engineer on the iOS app and the web app (about 87% and 76% of commits respectively) and built the AWS services behind chat, search and integrations. The case study describes shipped application features and infrastructure, not model training.
