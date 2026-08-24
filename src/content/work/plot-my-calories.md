---
title: 'Plot My Calories — AI Food Scanner'
shortTitle: 'Plot My Calories'
order: 5
eyebrow: 'Applied AI · Health & fitness'
role: 'Lead iOS Engineer'
period: '2025'
platforms: ['iOS']
summary: 'A camera-first nutrition product that uses vision-based AI to turn a meal photo into an immediately useful nutritional breakdown.'
contribution: 'Built the iOS product from zero to one, including image input, AI processing, concurrency, and the result experience.'
image: '/images/apps/PlotMyCalories.jpg'
imageAlt: 'Plot My Calories AI app icon with black lettering on pink'
accent: '#ff9ec7'
technologies: ['Swift', 'SwiftUI', 'Swift Concurrency', 'OpenAI Vision', 'Camera input']
outcomes:
  - value: '0 → 1'
    label: 'product delivery'
  - value: 'Responsive'
    label: 'non-blocking AI workflow'
challenges:
  - 'Move image and AI processing through the product without blocking interaction.'
  - 'Turn uncertain model output into a legible, useful nutrition result.'
  - 'Keep the camera-to-result flow fast and understandable.'
decisions:
  - 'Used Swift Concurrency to keep networking and AI processing away from UI work.'
  - 'Designed the experience around a single photo-to-insight path instead of manual food entry.'
  - 'Presented nutritional output as a clear hierarchy rather than raw model text.'
links:
  - label: 'View on the App Store'
    url: 'https://apps.apple.com/us/app/id6752576373'
attribution: 'Built at Sellou. Details shown here are limited to public résumé information.'
---

## Product context

Plot My Calories reduces the effort of nutrition tracking: take a photo and receive a structured view of calories and nutritional impact. The product needed to make a complex AI operation feel like one direct interaction.

## Engineering approach

Image preparation, networking, and model work are coordinated with Swift Concurrency so processing never blocks the interface. The result experience converts the response into a consistent visual structure that is easier to scan than unformatted model output.

## What the work demonstrates

This project shows zero-to-one delivery, vision-based AI integration, concurrent iOS engineering, and the product thinking required to turn a model capability into a focused consumer experience.
