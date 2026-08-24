export const profile = {
  name: 'Kirlos Yousef',
  title: 'Senior iOS Engineer | Tech Lead',
  email: 'kirlosy@icloud.com',
  location: 'Egypt',
  availability: 'Open to remote work and relocation',
  linkedin: 'https://www.linkedin.com/in/kirlosyousef',
  github: 'https://github.com/KirlosYousef',
  website: 'https://www.kirlosyousef.com',
  resume: '/resume/Kirlos_Yousef_Senior_iOS_Engineer.pdf',
  introduction:
    'I build reliable iOS products and the systems behind them—from real-time consumer apps to enterprise mobility SDKs, offline sync, payments, video, watchOS, and applied AI.',
  about:
    'Senior iOS Engineer and Tech Lead with 5+ years of experience shipping consumer applications and enterprise mobility SDKs. I care about product quality, clear architecture, responsive interfaces, and teams that can move quickly without trading away reliability.',
} as const;

export const proofPoints = [
  { value: '5+', label: 'years shipping iOS products' },
  { value: '5', label: 'engineers led' },
  { value: '99.9%', label: 'crash-free delivery' },
  { value: '50%', label: 'faster release cycles' },
] as const;

export const experience = [
  {
    period: '02/2025 — Present',
    title: 'iOS Tech Lead',
    company: 'Sellou',
    descriptor: 'Consumer App Studio & AI Incubator',
    location: 'Utah, United States · Remote',
    highlights: [
      'Own iOS technical direction across Sellou and incubated applications.',
      'Introduced CI/CD workflows that reduced release cycle time by 50%.',
      'Shipped modular AI, video, calendar, and vision-based product systems.',
    ],
  },
  {
    period: '02/2024 — 02/2025',
    title: 'iOS Team Lead',
    company: 'Iomob',
    descriptor: 'B2B Mobility-as-a-Service Platform',
    location: 'Barcelona, Spain · Remote',
    highlights: [
      'Led five iOS engineers delivering LNER and BrightBike.',
      'Sustained a crash-free rate above 99.9%.',
      'Standardized CI and code reviews to improve delivery reliability.',
    ],
  },
  {
    period: '02/2021 — 02/2024',
    title: 'iOS Engineer',
    company: 'Iomob',
    descriptor: 'B2B Mobility-as-a-Service Platform',
    location: 'Barcelona, Spain · Remote',
    highlights: [
      'Built the core iOS Mobility SDK used in Ford and Renfe integrations.',
      'Normalized data from more than 10 mobility providers.',
      'Raised core SDK test coverage above 90%.',
    ],
  },
] as const;

export const skillGroups = [
  {
    title: 'iOS engineering',
    items: ['Swift', 'SwiftUI', 'UIKit', 'Swift Concurrency', 'Combine', 'Objective-C'],
  },
  {
    title: 'Architecture & data',
    items: [
      'MVVM-C',
      'Clean Architecture',
      'Swift Package Manager',
      'Core Data',
      'SwiftData',
      'Offline-first sync',
    ],
  },
  {
    title: 'Quality & delivery',
    items: [
      'XCTest',
      'XCUITest',
      'Snapshot testing',
      'Instruments',
      'LLDB',
      'CI/CD',
      'Xcode Cloud',
      'Datadog',
    ],
  },
  {
    title: 'Platforms & integrations',
    items: [
      'REST',
      'GraphQL',
      'Firebase',
      'Stripe',
      'Apple Pay',
      'StoreKit 2',
      'EventKit',
      'WatchConnectivity',
      'AVKit',
      'WidgetKit',
    ],
  },
  {
    title: 'Applied AI',
    items: ['OpenAI', 'Gemini', 'SSE streaming', 'Tool calling', 'Whisper', 'Vision input'],
  },
] as const;
