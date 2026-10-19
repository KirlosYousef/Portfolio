// Source of truth for both résumés. Run: node resume-src/build.mjs
const contactBase = [
  ['kirlosy@icloud.com', 'mailto:kirlosy@icloud.com'],
  ['linkedin.com/in/kirlosyousef', 'https://www.linkedin.com/in/kirlosyousef'],
  ['github.com/KirlosYousef', 'https://github.com/KirlosYousef'],
];
const tail = 'Egypt (UTC+3) · Remote or relocation';

const iomob = (ai) => ({
  company: 'Iomob',
  place: 'Barcelona, Spain (Remote)',
  period: '02/2021 – 02/2025',
  roles: [
    {
      title: 'iOS Team Lead',
      period: '02/2024 – 02/2025',
      bullets: ai
        ? [
            'Led 5 iOS engineers delivering LNER and BrightBike at a crash-free rate above 99.9%',
            'Added Stripe tokenization to LNER, cutting checkout below 8 seconds; reduced trip-planning latency by 35%',
          ]
        : [
            'Led 5 iOS engineers delivering LNER and BrightBike at a crash-free rate above 99.9%',
            'Added Stripe tokenization to LNER, cutting checkout below 8 seconds; reduced trip-planning latency by 35%',
            'Delivered BrightBike with offline map clustering and on-device receipts for unreliable networks',
          ],
    },
    {
      title: 'iOS Engineer',
      period: '02/2021 – 02/2024',
      bullets: ai
        ? [
            'Built the mobility SDK behind Ford and Renfe integrations, cutting integration time from weeks to under 2 days',
            'Normalized data from 10+ providers; raised core SDK test coverage above 90%',
          ]
        : [
            'Built the core iOS Mobility SDK behind Ford and Renfe integrations, normalizing 10+ providers and cutting integration time from weeks to under 2 days',
            'Moved multi-provider sync off the main thread, keeping scrolling smooth during concurrent updates',
            'Raised core SDK test coverage above 90% with unit and UI tests',
          ],
    },
  ],
});

export const resumes = {
  Kirlos_Yousef_AI_Engineer: {
    title: 'Senior Software Engineer | AI Application Engineering',
    contact: [...contactBase, ['kirlosyousef.com/ai', 'https://www.kirlosyousef.com/ai']],
    tail,
    summary:
      'Senior software engineer with 5+ years shipping production software and leading engineering teams. Ships LLM features to production at Sellou: streaming chat, tool calling into native actions, and access-controlled search across iOS, web and AWS. Builds evaluated LLM systems in Python: schema-constrained extraction, hybrid retrieval with citations, and a bounded tool-calling agent exposed over MCP.',
    skills: [
      [
        'LLM & agents',
        'OpenAI SDK, OpenRouter, Gemini, structured outputs, tool calling, LangGraph, MCP, human-in-the-loop, embeddings, reranking',
      ],
      [
        'Evals & observability',
        'labelled eval sets, recall@k, MRR, prompt A/B tests, step tracing, token/cost tracking, PII redaction',
      ],
      [
        'Backend & data',
        'Python, TypeScript, FastAPI, Pydantic, Hono, PostgreSQL, pgvector, DynamoDB, OpenSearch',
      ],
      [
        'Cloud & delivery',
        'AWS Lambda, AppSync, CDK, Cloudflare Workers, Docker, GitHub Actions, pytest, Vitest, Ruff, Pyright',
      ],
      ['Apps & clients', 'Swift, SwiftUI, React, Next.js, GraphQL, SSE, OAuth'],
    ],
    experience: [
      {
        company: 'Sellou',
        place: 'Utah, US (Remote)',
        period: '02/2025 – Present',
        roles: [
          {
            title: 'Lead Product Engineer – AI Applications',
            period: '08/2025 – Present',
            bullets: [
              'Primary iOS and web engineer on Spookling, an AI workspace (~87% of iOS and ~76% of web commits)',
              'Streamed LLM responses over SSE and mapped model tool calls through typed boundaries to native EventKit calendar actions',
              'Shipped OpenSearch Serverless chat search with highlights and conversation-level access control',
              'Built workspace and DM chat APIs on AppSync, Lambda and DynamoDB with threads, mentions and file indexes',
              'Connected the assistant to Composio tools and Google/Buffer via OAuth; added assistant history and public booking APIs',
            ],
          },
          {
            title: 'Senior iOS Engineer / iOS Tech Lead',
            period: '02/2025 – 08/2025',
            bullets: [
              'Led the iOS team and mentored 2 engineers; introduced CI/CD that cut release cycle time by 50%',
              'Cut video playback startup 40% with AVKit/HLS and initial download size 20% with On-Demand Resources',
              'Built Plot My Calories end to end: meal photo to nutrition breakdown with OpenAI Vision and Swift Concurrency',
            ],
          },
        ],
      },
      iomob(true),
    ],
    projectsTitle: 'Selected AI projects',
    projects: [
      {
        name: 'AgentLookout',
        desc: 'AI coding-agent monitor (iOS/iPadOS + macOS)',
        link: ['App Store', 'https://apps.apple.com/us/app/id6816671865'],
        bullets: [
          'Built the iOS/iPadOS app, macOS connector and pairing relay that bring the open-source bot-crossing agent visualizer to phones, monitoring sessions across 7 tools incl. Claude Code, Codex and Cursor',
          'Shipped it solo to the App Store as AgentLookout: QR/code device pairing, live session status (running, waiting for input, completed) and a connector release pipeline',
        ],
      },
      {
        name: 'Receipty',
        desc: 'Evaluated LLM extraction, RAG and agent (Python)',
        link: ['GitHub', 'https://github.com/KirlosYousef/Receipty'],
        bullets: [
          'Built a FastAPI vision pipeline with strict JSON schemas, Pydantic validation and explicit review/failure outcomes; passed 60/60 labelled checks at p95 3.4 s and ~$0.0005 per receipt',
          'Built a labelled retrieval eval (69 queries; keyword, dense, hybrid and rerank strategies) behind answers that cite receipts or return not-found; recall@5 1.0 on the 64 answerable queries',
          'Built a LangGraph tool-calling agent with bounded steps and human approval for writes; exposed its tools over MCP',
          'Added step tracing, token/cost logging and PII redaction; versioned prompts (v1 vs v2) are compared on the eval set, and CI enforces 178 tests and an 80% branch-coverage floor',
        ],
      },
      {
        name: 'Revera AI',
        desc: 'AI voice recorder & transcriber (iOS/iPadOS)',
        link: [
          'App Store',
          'https://apps.apple.com/us/app/revera-ai-note-taker-scribe/id6748306699',
        ],
        bullets: [
          'Built a Whisper/SFSpeech pipeline with offline queuing and interruption recovery; cut upload data ~82% via 16 kHz mono',
          'Put OpenAI behind a Cloudflare Worker with allowlisted routes and server-side usage limits, so no API key ships in the app',
        ],
      },
    ],
  },
  Kirlos_Yousef_Senior_iOS_Engineer: {
    title: 'Senior iOS Engineer | Tech Lead',
    contact: [...contactBase, ['kirlosyousef.com/ios', 'https://www.kirlosyousef.com/ios']],
    tail,
    summary:
      'Senior iOS engineer and tech lead with 5+ years shipping consumer apps and enterprise mobility SDKs. Led 5 iOS engineers and shipped 11 App Store products spanning offline sync, real-time data, payments, video, watchOS and AI features. Cut release cycles 50%, video startup 40% and checkout time below 8 seconds.',
    skills: [
      ['iOS & macOS', 'Swift, SwiftUI, UIKit, Swift Concurrency, Combine, Objective-C'],
      [
        'Architecture & data',
        'MVVM-C, Clean Architecture, Swift Package Manager, Core Data, SwiftData, offline-first sync',
      ],
      [
        'Quality & delivery',
        'XCTest, XCUITest, snapshot testing, Instruments, LLDB, Xcode Cloud, CI/CD, Datadog',
      ],
      [
        'Platforms',
        'Stripe, Apple Pay, StoreKit 2, EventKit, WatchConnectivity, AVFoundation, AVKit, WidgetKit, Live Activities',
      ],
      ['Applied AI', 'OpenAI and Gemini APIs, SSE streaming, tool calling, Whisper, vision input'],
    ],
    experience: [
      {
        company: 'Sellou',
        place: 'Utah, US (Remote)',
        period: '02/2025 – Present',
        roles: [
          {
            title: 'Lead Product Engineer – AI Applications',
            period: '08/2025 – Present',
            bullets: [
              'Primary engineer on the Spookling iOS app (~87% of commits, ~51k Swift LOC): modular Swift package architecture, SSE-streamed AI responses, and model tool calls mapped through typed boundaries to EventKit actions',
              'Extended the product to web and AWS (AppSync, Lambda, DynamoDB, OpenSearch) for chat, search and integrations',
            ],
          },
          {
            title: 'Senior iOS Engineer / iOS Tech Lead',
            period: '02/2025 – 08/2025',
            bullets: [
              'Led iOS technical direction and mentored 2 engineers; introduced CI/CD that cut release cycle time by 50%',
              'Rebuilt video playback with AVKit/HLS: 40% faster startup, 20% smaller initial download via On-Demand Resources',
              'Unified deep-link and push-notification routing so every launch state resolves to the right screen',
              'Built Plot My Calories end to end with OpenAI Vision and Swift Concurrency, keeping AI work off the main thread',
            ],
          },
        ],
      },
      iomob(false),
    ],
    projectsTitle: 'Projects',
    projects: [
      {
        name: 'AgentLookout',
        desc: 'iOS/iPadOS + macOS',
        link: ['App Store', 'https://apps.apple.com/us/app/id6816671865'],
        bullets: [
          'Built the iPhone/iPad app, macOS connector and relay on top of the open-source bot-crossing visualizer, with QR/code pairing and live status for coding agents across 7 tools',
          'Shipped it solo to the App Store; sessions are grouped by project, with agents waiting for input surfaced first',
        ],
      },
      {
        name: 'RaceMe',
        desc: 'iOS/watchOS · solo, since 2019 · ~70k Swift LOC, 369 tests, 4 languages',
        link: ['App Store', 'https://apps.apple.com/us/app/id1514432749'],
        bullets: [
          'Real-time races with Firestore and BrainCloud RTT; background Core Location tracking that survives suspension',
          'Apple Watch companion via WatchConnectivity, plus Live Activities and Dynamic Island',
        ],
      },
      {
        name: 'Revera AI',
        desc: 'iOS/iPadOS',
        link: [
          'App Store',
          'https://apps.apple.com/us/app/revera-ai-note-taker-scribe/id6748306699',
        ],
        bullets: [
          'SFSpeech/Whisper transcription with offline queuing and interruption recovery; ~82% less upload data via 16 kHz mono',
          'Routed OpenAI through a Cloudflare Worker with allowlisted routes and usage limits, so no API key ships in the app',
        ],
      },
    ],
  },
};
export const education =
  'B.S. Computer Science, University of Debrecen, Hungary · 2017 – 2020 · Graduated first in cohort, full scholarship';
