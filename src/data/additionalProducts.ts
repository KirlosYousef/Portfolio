export interface AdditionalProduct {
  name: string;
  platform: string;
  description: string;
  image: string;
  imageAlt: string;
  link: string;
  linkLabel: string;
  tags: readonly string[];
}

export const additionalProducts = [
  {
    name: 'Smart Quiz',
    platform: 'iOS · iPadOS',
    description:
      'An AI-powered education product with custom quizzes, flashcard review, daily streaks, friend challenges, rewards, and subscriptions.',
    image: '/images/apps/SmartQuizAI.png',
    imageAlt: 'Smart Quiz icon with a white brain, question mark, and glasses on purple',
    link: 'https://apps.apple.com/us/app/smart-quiz-ai-trivia-maker/id6736992820',
    linkLabel: 'App Store',
    tags: ['Applied AI', 'SwiftUI', 'StoreKit', 'Gamification'],
  },
  {
    name: 'Focus4',
    platform: 'iOS · iPadOS',
    description:
      'A focused productivity experience that combines guided work sessions, streaks, insights, and a companion character.',
    image: '/images/apps/Focus4.png',
    imageAlt: 'Focus4 app icon featuring a green and black bird',
    link: 'https://apps.apple.com/us/app/id6739164359',
    linkLabel: 'App Store',
    tags: ['SwiftUI', 'Productivity', 'Gamification'],
  },
  {
    name: 'Amour',
    platform: 'iOS · iPadOS',
    description:
      'A private social product designed for couples to share memories, strengthen connection, and build a space together.',
    image: '/images/apps/Amour.png',
    imageAlt: 'Amour app icon with a pink heart-shaped basketball mark',
    link: 'https://apps.apple.com/eg/app/id6740337214',
    linkLabel: 'App Store',
    tags: ['Swift', 'Image caching', 'Deep links'],
  },
] as const satisfies readonly AdditionalProduct[];
