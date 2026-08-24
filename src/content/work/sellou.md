---
title: 'Sellou — Video Commerce'
shortTitle: 'Sellou'
order: 1
eyebrow: 'Client product · Video commerce'
role: 'iOS Tech Lead'
period: '2025 — Present'
platforms: ['iOS']
summary: 'A video-first commerce product rebuilt around faster playback, a smaller application footprint, and dependable navigation across every launch state.'
contribution: 'Led iOS technical direction, rebuilt the AVKit and HLS playback layer, introduced On-Demand Resources, and designed one routing system for links and notifications.'
image: '/images/apps/Sellou.jpg'
imageAlt: 'Sellou app icon with a black cat on a mint background'
accent: '#77d8c2'
technologies:
  ['Swift', 'AVKit', 'HLS', 'On-Demand Resources', 'Deep Links', 'Push Notifications', 'CI/CD']
outcomes:
  - value: '40% faster'
    label: 'video playback start time'
  - value: '20% smaller'
    label: 'application bundle'
  - value: '50% faster'
    label: 'release cycles across the iOS portfolio'
challenges:
  - 'Make a video-first storefront feel immediate without allowing media assets to inflate the installed application.'
  - 'Keep navigation consistent when users arrive through deep links or notifications during cold launches and background operation.'
  - 'Improve delivery speed across several active iOS products without weakening release confidence.'
decisions:
  - 'Rebuilt playback around AVKit and HLS, focusing the media pipeline on startup responsiveness.'
  - 'Moved eligible assets to On-Demand Resources so the initial bundle stayed focused on the essential experience.'
  - 'Centralized deep-link and push-notification handling into a universal routing system.'
  - 'Established CI/CD workflows to shorten the release cycle and make delivery repeatable.'
links:
  - label: 'View on the App Store'
    url: 'https://apps.apple.com/us/app/sellou-sell-with-video/id1548126433'
attribution: 'Built at Sellou. Details shown here are limited to public résumé and App Store information.'
---

## Product context

Sellou is a video-powered storefront for creators selling digital products. Video is central to discovery and product presentation, so playback quality is part of the core shopping experience rather than a secondary media feature.

## Engineering approach

The iOS rebuild treated playback latency, download size, and navigation reliability as one product-quality problem. AVKit and HLS provide the video foundation, while On-Demand Resources reduce the initial application footprint. A unified router ensures links and notifications resolve predictably regardless of application state.

## What the work demonstrates

Sellou demonstrates technical leadership on a live consumer product: identifying the engineering constraints users can feel, redesigning the underlying systems, and improving both runtime performance and the team’s release process.
