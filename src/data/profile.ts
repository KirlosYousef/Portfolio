export type CareerTrack = 'general' | 'ai' | 'ios';

export const profile = {
  name: 'Kirlos Yousef',
  title: 'Senior Software Engineer | iOS & AI Application Engineering',
  email: 'kirlosy@icloud.com',
  location: 'Egypt',
  availability: 'Open to remote work and relocation',
  linkedin: 'https://www.linkedin.com/in/kirlosyousef',
  github: 'https://github.com/KirlosYousef',
  website: 'https://www.kirlosyousef.com',
  resumes: {
    ai: '/resume/Kirlos_Yousef_AI_Engineer.pdf',
    ios: '/resume/Kirlos_Yousef_Senior_iOS_Engineer.pdf',
  },
  introduction:
    'I have 5+ years of experience shipping production software and leading engineering teams across mobile, web, and backend systems. My work combines established iOS expertise with a growing focus on structured LLM systems, retrieval, evaluation, and production AI services.',
  about:
    'Senior software engineer with 5+ years shipping production software and leading engineering teams. I build across iOS, web, and backend systems, with a current focus on reliable AI applications and the evaluation systems that make them trustworthy.',
} as const;

export const proofPoints = [
  { value: '5+', label: 'years shipping production software' },
  { value: '5', label: 'engineers led' },
  { value: '99.9%+', label: 'crash-free delivery' },
  { value: '11', label: 'App Store products shipped' },
] as const;

type Highlight = { text: string; tracks: readonly Exclude<CareerTrack, 'general'>[] };

export const experience = [
  {
    id: 'sellou-product-engineer',
    period: '08/2025 — Present',
    title: 'Lead Product Engineer',
    company: 'Sellou',
    descriptor: 'AI Product Studio',
    location: 'Utah, US · Remote',
    tracks: ['ai', 'ios'] as const,
    highlights: [
      {
        text: 'Primary iOS and web engineer on Spookling, an AI workspace (~87% of iOS and ~76% of web commits): AI chat, calendar workflows, and browser-based coding.',
        tracks: ['ai', 'ios'],
      },
      {
        text: 'Integrated SSE streaming and connected LLM tool calls to native EventKit calendar actions.',
        tracks: ['ai', 'ios'],
      },
      {
        text: 'Built workspace and direct-message APIs with AppSync, Lambda, DynamoDB, and OpenSearch.',
        tracks: ['ai'],
      },
    ] satisfies readonly Highlight[],
  },
  {
    id: 'sellou-ios-lead',
    period: '02/2025 — 08/2025',
    title: 'Senior iOS Engineer / iOS Tech Lead',
    company: 'Sellou',
    descriptor: 'Consumer App Studio',
    location: 'Utah, US · Remote',
    tracks: ['ios'] as const,
    highlights: [
      {
        text: 'Led the iOS team and mentored 2 engineers; introduced CI/CD workflows that cut release cycle time by 50%.',
        tracks: ['ios'],
      },
      {
        text: 'Cut playback startup by 40% with AVKit/HLS and initial download size by 20% with On-Demand Resources.',
        tracks: ['ios'],
      },
      {
        text: 'Built Plot My Calories end to end: meal photo to nutrition breakdown with OpenAI Vision and Swift Concurrency.',
        tracks: ['ios'],
      },
    ] satisfies readonly Highlight[],
  },
  {
    id: 'iomob-team-lead',
    period: '02/2024 — 02/2025',
    title: 'iOS Team Lead',
    company: 'Iomob',
    descriptor: 'B2B Mobility-as-a-Service Platform',
    location: 'Barcelona, Spain · Remote',
    tracks: ['ios'] as const,
    highlights: [
      {
        text: 'Led five iOS engineers delivering LNER and BrightBike while sustaining crash-free delivery above 99.9%.',
        tracks: ['ios'],
      },
      {
        text: 'Added Stripe tokenization to LNER, cutting checkout below eight seconds, and reduced trip-planning latency by 35%.',
        tracks: ['ios'],
      },
    ] satisfies readonly Highlight[],
  },
  {
    id: 'iomob-ios-engineer',
    period: '02/2021 — 02/2024',
    title: 'iOS Engineer',
    company: 'Iomob',
    descriptor: 'B2B Mobility-as-a-Service Platform',
    location: 'Barcelona, Spain · Remote',
    tracks: ['ios'] as const,
    highlights: [
      {
        text: 'Built the mobility SDK used in Ford and Renfe integrations, reducing integration time from weeks to under two days.',
        tracks: ['ios'],
      },
      {
        text: 'Normalized data from more than 10 providers and raised core SDK test coverage above 90%.',
        tracks: ['ios'],
      },
    ] satisfies readonly Highlight[],
  },
] as const;

export const skillGroups = [
  {
    title: 'AI applications & backend',
    tracks: ['general', 'ai'] as const,
    items: [
      'Python',
      'FastAPI',
      'Pydantic',
      'Structured outputs',
      'Tool calling',
      'LangGraph',
      'MCP',
      'RAG',
      'PostgreSQL',
      'pgvector',
      'AWS',
    ],
  },
  {
    title: 'iOS & Apple platforms',
    tracks: ['general', 'ios'] as const,
    items: [
      'Swift',
      'SwiftUI',
      'UIKit',
      'Swift Concurrency',
      'EventKit',
      'WatchConnectivity',
      'AVKit',
      'Live Activities',
    ],
  },
  {
    title: 'Reliability, evaluation & delivery',
    tracks: ['general', 'ai'] as const,
    items: [
      'pytest',
      'XCTest',
      'CI/CD',
      'GitHub Actions',
      'Prompt A/B tests',
      'Recall@k & MRR',
      'Latency & cost tracking',
      'Production observability',
    ],
  },
  {
    title: 'Web, cloud & product systems',
    tracks: ['ai'] as const,
    items: [
      'TypeScript',
      'React',
      'Next.js',
      'AppSync',
      'Lambda',
      'DynamoDB',
      'OpenSearch',
      'Cloudflare Workers',
    ],
  },
  {
    title: 'Architecture & platform quality',
    tracks: ['ios'] as const,
    items: [
      'MVVM-C',
      'Clean Architecture',
      'Swift Package Manager',
      'Offline-first sync',
      'XCTest',
      'XCUITest',
      'Snapshot testing',
      'Instruments',
      'LLDB',
      'Xcode Cloud',
      'Datadog',
      'CI/CD',
    ],
  },
] as const;

export const trackContent = {
  ai: {
    label: 'AI application engineering',
    title: 'AI applications built with evaluation, retrieval, and production reliability.',
    description:
      'I apply senior product engineering discipline to LLM systems: explicit failure states, reproducible evaluation, grounded retrieval, typed APIs, and production infrastructure across mobile, web, and backend.',
    resume: profile.resumes.ai,
    proofPoints: [
      { value: '7', label: 'coding-agent tools monitored by AgentLookout' },
      { value: '~87%', label: 'of Spookling iOS commits' },
      { value: '~$0.0005', label: 'LLM cost per receipt, p95 3.4 s' },
      { value: '178', label: 'tests behind a CI eval gate' },
    ],
  },
  ios: {
    label: 'Senior iOS engineering',
    title: 'Production iOS engineering shaped by leadership, performance, and reliability.',
    description:
      'I lead close to the product: designing maintainable Apple-platform systems, improving delivery, and solving the performance and reliability problems users can feel.',
    resume: profile.resumes.ios,
    proofPoints: [
      { value: '5', label: 'iOS engineers led' },
      { value: '99.9%+', label: 'crash-free delivery' },
      { value: '40%', label: 'faster playback startup' },
      { value: '<2 days', label: 'SDK integration time' },
    ],
  },
} as const;

export function skillsFor(track: CareerTrack) {
  return skillGroups.filter((group) => (group.tracks as readonly string[]).includes(track));
}
