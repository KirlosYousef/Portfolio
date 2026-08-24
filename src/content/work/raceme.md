---
title: 'RaceMe — Run with Friends'
shortTitle: 'RaceMe'
order: 3
eyebrow: 'Independent product · Real-time fitness'
role: 'Creator & iOS Engineer'
period: '2020 — Present'
platforms: ['iOS', 'watchOS']
summary: 'A competitive social running app for live races, background tracking, Apple Watch telemetry, leaderboards, and lock-screen race progress.'
contribution: 'Built the product across iPhone and Apple Watch, including real-time race synchronization and resilient background location tracking.'
image: '/images/apps/RaceMe.jpg'
imageAlt: 'RaceMe app icon with two white runners on a black background'
accent: '#f1f1ee'
technologies:
  ['Swift', 'Core Location', 'Firestore', 'BrainCloud RTT', 'WatchConnectivity', 'Live Activities']
outcomes:
  - value: '2 platforms'
    label: 'iPhone and Apple Watch'
  - value: 'Live'
    label: 'race synchronization'
challenges:
  - 'Maintain useful race state when runners lock their phones or the operating system suspends work.'
  - 'Synchronize competition data with sufficiently low latency for a live head-to-head experience.'
  - 'Keep phone, watch, and lock-screen surfaces coherent throughout a race.'
decisions:
  - 'Combined Firestore with BrainCloud real-time transport for race synchronization.'
  - 'Designed background Core Location tracking to recover from suspension and preserve race continuity.'
  - 'Used WatchConnectivity plus Live Activities and Dynamic Island for glanceable progress.'
links:
  - label: 'View on the App Store'
    url: 'https://apps.apple.com/us/app/id1514432749'
attribution: 'Independent product created and maintained by Kirlos Yousef.'
---

## Product context

RaceMe turns a solitary run into a live competition. Runners can challenge friends or people around the world, follow progress in real time, and continue the experience across iPhone, Apple Watch, and the lock screen.

## Engineering approach

The central system coordinates live race data while Core Location continues collecting meaningful progress through background transitions. WatchConnectivity keeps the wrist experience aligned with the phone, and Live Activities expose the most important state without requiring the main app to remain open.

## What the work demonstrates

RaceMe shows full-product ownership across a difficult combination of sensors, background execution, distributed state, real-time UX, and multiple Apple platforms.
