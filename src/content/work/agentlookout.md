---
title: 'AgentLookout — Coding-Agent Monitor'
shortTitle: 'AgentLookout'
order: 1
tracks: ['ai', 'ios']
priority:
  general: 1
  ai: 1
  ios: 1
eyebrow: 'Independent product · Developer tools'
role: 'Creator & iOS Engineer'
period: '2026'
platforms: ['iOS', 'iPadOS', 'macOS']
summary: 'An iPhone and iPad app, with a Mac Connector, that shows what AI coding agents are doing across projects: running, waiting for input, completed.'
contribution: 'Built the iOS/iPadOS app, the macOS Connector, the pairing relay and the release tooling on top of the open-source bot-crossing visualizer, and shipped it to the App Store.'
image: '/images/apps/AgentLookout.png'
imageAlt: 'AgentLookout app icon'
accent: '#f2a65a'
technologies:
  [
    'Swift',
    'SwiftUI',
    'TypeScript',
    'Cloudflare Workers',
    'Durable Objects',
    'WebSockets',
    'Device pairing',
  ]
outcomes:
  - value: '7 tools'
    label: 'Claude Code, Codex, Cursor, OpenCode, Antigravity CLI, Hermes, Kilo Code'
  - value: 'Live'
    label: 'running, waiting and completed session states'
  - value: 'Solo'
    label: 'built and shipped to the App Store'
challenges:
  - 'Show live agent-session state on a phone without moving the sessions off the Mac that runs them.'
  - 'Pair a phone to a Mac quickly and safely, with a code or a QR scan.'
  - 'Keep one status model across agent tools that report progress in different ways.'
decisions:
  - 'Split the system into a local macOS Connector, an opaque Cloudflare relay that carries status between paired devices, and a native iOS/iPadOS client.'
  - 'Grouped sessions by project on a map-style interface so the ones waiting for input stand out.'
  - 'Showed actions only where the Connector supports them for a given tool.'
links:
  - label: 'View on the App Store'
    url: 'https://apps.apple.com/us/app/id6816671865'
  - label: 'Product site'
    url: 'https://www.agentlookout.kirlosyousef.com'
attribution: 'Independent product built by Kirlos Yousef on the open-source bot-crossing visualizer; original colony work by Jarren Rocks.'
---

## Product problem

Coding agents run for minutes or hours across several repos, and each one stops to ask for input at some point. AgentLookout puts those sessions on one map so you can see which are moving, which are finished and which are waiting for you, without switching tabs on the Mac.

## Architecture

```
Mac Connector ──(local session discovery)──► Relay ──(paired by code / QR)──► iPhone / iPad app
```

The Connector discovers supported sessions on the Mac. After pairing, the relay carries status updates to the native app, which groups sessions by project and highlights the ones that need attention.

## What I built, and what I started from

AgentLookout builds on bot-crossing, an open-source visualizer for agent sessions, which supplied the web visualizer and the agent harnesses. I built the native iOS/iPadOS app, the macOS Connector, the pairing relay and the release pipeline, then shipped the result to the App Store. The credits page on the product site lists the upstream work and licenses.
