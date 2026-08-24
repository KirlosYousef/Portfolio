---
title: 'Revera — AI Note Taker'
shortTitle: 'Revera AI'
order: 4
eyebrow: 'Independent product · Voice intelligence'
role: 'Creator & iOS Engineer'
period: '2025 — Present'
platforms: ['iOS', 'iPadOS']
summary: 'A privacy-minded voice recorder and AI transcription product with offline queuing, interruption recovery, summaries, translation, and searchable notes.'
contribution: 'Built the recording, transcription, persistence, recovery, and storage pipeline end to end.'
image: '/images/apps/Revera.jpg'
imageAlt: 'Revera app icon with a white waveform in a circle on black'
accent: '#cfb8ff'
technologies: ['Swift', 'SwiftUI', 'SFSpeech', 'Whisper', 'SwiftData', 'AVFoundation']
outcomes:
  - value: '~82%'
    label: 'less raw upload data'
  - value: 'Offline-first'
    label: 'recording and queueing'
challenges:
  - 'Protect long recordings from interruptions, low storage, and unreliable connectivity.'
  - 'Reduce audio transfer size without compromising speech-oriented transcription input.'
  - 'Keep recordings and transcripts recoverable through partial processing states.'
decisions:
  - 'Combined SFSpeech and Whisper in a pipeline with offline queuing and interruption recovery.'
  - 'Converted 44.1 kHz stereo input to 16 kHz mono, reducing raw upload data by approximately 82%.'
  - 'Persisted recordings and transcript state with SwiftData and explicit low-storage handling.'
links:
  - label: 'View on the App Store'
    url: 'https://apps.apple.com/us/app/revera-ai-note-taker-scribe/id6748306699'
attribution: 'Independent product created by Kirlos Yousef.'
---

## Product context

Revera turns meetings, lectures, interviews, and voice notes into transcripts and structured information. Its experience is designed around an important reality: recording must remain trustworthy even when the network is not.

## Engineering approach

The recording pipeline handles interruptions and queues transcription work until connectivity returns. Audio is prepared for speech processing by converting stereo 44.1 kHz input to 16 kHz mono. SwiftData keeps recordings, transcripts, and recovery state available locally, including explicit responses to low-storage conditions.

## What the work demonstrates

Revera combines audio engineering, local persistence, applied AI, offline product behavior, and careful handling of failure states in a user-facing product.
