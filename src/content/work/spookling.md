---
title: 'Spookling — AI Agent'
shortTitle: 'Spookling'
order: 2
eyebrow: 'Applied AI · Native productivity'
role: 'iOS Tech Lead'
period: '2025 — Present'
platforms: ['iOS']
summary: 'A native AI agent that streams responses in real time and turns model tool calls into useful actions across Apple productivity services.'
contribution: 'Designed and shipped the iOS architecture, including modular Swift packages, Server-Sent Events, and native EventKit actions.'
image: '/images/apps/Spookling.png'
imageAlt: 'Spookling app icon showing a friendly ghost in a witch hat on purple'
accent: '#7138e8'
technologies: ['Swift', 'SwiftUI', 'Swift Package Manager', 'SSE', 'EventKit', 'Tool calling']
outcomes:
  - value: 'Real-time'
    label: 'streamed AI responses'
  - value: 'Native'
    label: 'calendar and reminder actions'
challenges:
  - 'Keep streamed model output responsive while maintaining predictable UI state.'
  - 'Translate untrusted, evolving tool-call payloads into safe native actions.'
  - 'Keep a fast-moving AI product modular enough for multiple engineers to extend.'
decisions:
  - 'Separated transport, conversation state, tool decoding, and Apple-platform integrations into focused Swift packages.'
  - 'Used SSE for progressive response delivery instead of waiting for a complete model result.'
  - 'Mapped tool calls through typed boundaries before they reached EventKit.'
links:
  - label: 'View on the App Store'
    url: 'https://apps.apple.com/us/app/id6759097441'
attribution: 'Built at Sellou. Details shown here are limited to public résumé information.'
---

## Product context

Spookling brings agentic AI into a native iOS experience. The important product challenge was not simply displaying model output; it was making a streaming, tool-using system feel dependable inside the interaction patterns people already understand on iPhone.

## Engineering approach

The app was organized as a modular Swift package architecture so networking, streaming, conversation state, and native integrations could evolve independently. Server-Sent Events deliver partial responses as they arrive. Tool calls are decoded into typed operations before they can request calendar or reminder changes through EventKit.

## What the work demonstrates

This project combines product judgment with applied AI engineering: responsive streaming, explicit integration boundaries, native platform behavior, and an architecture a team can continue to extend.
