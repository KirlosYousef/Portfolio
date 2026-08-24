---
title: 'BrightBike — Bike Share'
shortTitle: 'BrightBike'
order: 7
eyebrow: 'Client product · Offline mobility'
role: 'iOS Team Lead'
period: '2024 — 2025'
platforms: ['iOS']
summary: 'A bike-sharing experience designed to remain useful around unreliable connectivity, dense station maps, and on-the-go receipts.'
contribution: 'Led iOS delivery of offline map clustering and on-device receipt generation.'
image: '/images/apps/brightbike.jpg'
imageAlt: 'BrightBike app icon with black lettering on a yellow background'
accent: '#ffd900'
technologies: ['Swift', 'MapKit', 'Offline-first', 'On-device documents', 'CI/CD']
outcomes:
  - value: 'Offline-first'
    label: 'map experience'
  - value: 'On-device'
    label: 'receipt generation'
challenges:
  - 'Keep a station-dense map understandable and responsive.'
  - 'Preserve useful product behavior when the network is unreliable.'
  - 'Generate customer receipts without making connectivity a hard dependency.'
decisions:
  - 'Used map clustering to control visual density and interaction cost.'
  - 'Designed important mobility state around offline-first behavior.'
  - 'Generated receipts on device so riders could retain transaction records locally.'
links:
  - label: 'View on the App Store'
    url: 'https://apps.apple.com/gb/app/id1613184779'
attribution: 'Delivered at Iomob for BrightBike. Only public résumé information is presented.'
---

## Product context

Bike-share products are used in motion, often in places where connectivity is inconsistent. BrightBike needed to make stations easy to discover while keeping important post-ride information available locally.

## Engineering approach

Map clustering reduces density as the viewport changes. Offline-first choices protect the core map experience from unreliable networks, while on-device receipt generation ensures riders can retain transaction records without waiting on a remote document service.

## What the work demonstrates

BrightBike highlights practical mobile engineering: graceful offline behavior, map performance, device-side document generation, and team leadership around a product people use in real-world conditions.
