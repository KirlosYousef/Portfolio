---
title: 'LNER — Door to Door'
shortTitle: 'LNER'
order: 6
eyebrow: 'Client product · Mobility & payments'
role: 'iOS Team Lead'
period: '2024 — 2025'
platforms: ['iOS']
summary: 'A multimodal journey-planning and booking experience connecting rail travel with first- and last-mile mobility.'
contribution: 'Led iOS delivery and added Stripe tokenization for a faster, PCI-conscious checkout experience.'
image: '/images/apps/lner.jpg'
imageAlt: 'LNER app icon with white lettering on a red background'
accent: '#ff4964'
technologies: ['Swift', 'UIKit', 'Stripe', 'REST', 'Mobility SDK', 'CI/CD']
outcomes:
  - value: '<8 sec'
    label: 'checkout time'
  - value: '35%'
    label: 'less trip-planning latency'
challenges:
  - 'Coordinate multiple mobility providers into a coherent door-to-door journey.'
  - 'Improve payment speed while keeping tokenization aligned with PCI-conscious boundaries.'
  - 'Deliver reliably across a team working on an enterprise mobility stack.'
decisions:
  - 'Integrated Stripe tokenization into the native checkout flow.'
  - 'Built on the normalized mobility SDK rather than coupling UI directly to individual providers.'
  - 'Standardized CI and code review practices across the iOS team.'
links:
  - label: 'View on the App Store'
    url: 'https://apps.apple.com/us/app/id1521840052'
attribution: 'Delivered at Iomob for LNER. Only public résumé information is presented.'
---

## Product context

LNER Door to Door extends a rail journey beyond the station by combining multiple transport providers into one planning and booking experience. That requires provider complexity to stay out of the customer’s way.

## Engineering approach

The app consumes a normalized mobility layer rather than exposing individual provider differences throughout the UI. Stripe tokenization supports the native payment experience, while delivery practices across the team improved the reliability of ongoing releases.

## What the work demonstrates

LNER represents technical leadership in an enterprise product: mobility aggregation, payments, performance, team standards, and measurable improvements to a critical conversion path.
