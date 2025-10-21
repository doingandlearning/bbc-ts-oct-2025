// Exercise 9: Integration Exercise
// Combine multiple TypeScript concepts in a real-world scenario

// Define Article and Author interfaces
interface Author {
  id: number;
  name: string;
  email: string;
  bio?: string;
  socialMedia?: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

// Discriminated union for article status
interface DraftArticle {
  id: number;
  title: string;
  content: string;
  author: Author;
  status: "draft";
  lastModified: Date;
  tags: string[];
}

interface PublishedArticle {
  id: number;
  title: string;
  content: string;
  author: Author;
  status: "published";
  publishedAt: Date;
  views: number;
  tags: string[];
}

interface ArchivedArticle {
  id: number;
  title: string;
  content: string;
  author: Author;
  status: "archived";
  archivedAt: Date;
  reason: string;
  tags: string[];
}

interface DeletedArticle {
  id: number;
  title: string;
  content: string;
  author: Author;
  status: "deleted";
  deletedAt: Date;
  deletedBy: string;
  tags: string[];
}

type Article = DraftArticle | PublishedArticle | ArchivedArticle | DeletedArticle;

// Type guards for article status
function isDraft(article: Article): article is DraftArticle {
  return article.status === "draft";
}

function isPublished(article: Article): article is PublishedArticle {
  return article.status === "published";
}

function isArchived(article: Article): article is ArchivedArticle {
  return article.status === "archived";
}

function isDeleted(article: Article): article is DeletedArticle {
  return article.status === "deleted";
}

// Function to process articles using discriminated unions
function processArticle(article: Article): string {
  switch (article.status) {
    case "draft":
      // TypeScript knows this is DraftArticle
      return `Draft "${article.title}" last modified: ${article.lastModified.toISOString()}`;
    
    case "published":
      // TypeScript knows this is PublishedArticle
      return `Published "${article.title}" on ${article.publishedAt.toISOString()}, ${article.views} views`;
    
    case "archived":
      // TypeScript knows this is ArchivedArticle
      return `Archived "${article.title}" on ${article.archivedAt.toISOString()}, reason: ${article.reason}`;
    
    case "deleted":
      // TypeScript knows this is DeletedArticle
      return `Deleted "${article.title}" on ${article.deletedAt.toISOString()} by ${article.deletedBy}`;
    
    default:
      // Exhaustive checking
      const _exhaustiveCheck: never = article;
      return _exhaustiveCheck;
  }
}

// Optional chaining for safe property access
function getAuthorInfo(author: Author): string {
  const bio = author.bio ?? "No bio available";
  const twitter = author.socialMedia?.twitter ?? "No Twitter";
  const linkedin = author.socialMedia?.linkedin ?? "No LinkedIn";
  const github = author.socialMedia?.github ?? "No GitHub";
  
  return `
    Author: ${author.name} (${author.email})
    Bio: ${bio}
    Social: Twitter: ${twitter}, LinkedIn: ${linkedin}, GitHub: ${github}
  `;
}

// Type guards for data validation
function isValidAuthor(data: unknown): data is Author {
  return (
    typeof data === 'object' &&
    data !== null &&
    'id' in data &&
    'name' in data &&
    'email' in data &&
    typeof (data as any).id === 'number' &&
    typeof (data as any).name === 'string' &&
    typeof (data as any).email === 'string'
  );
}

function isValidArticle(data: unknown): data is Article {
  if (
    typeof data === 'object' &&
    data !== null &&
    'id' in data &&
    'title' in data &&
    'content' in data &&
    'author' in data &&
    'status' in data &&
    'tags' in data
  ) {
    const article = data as any;
    return (
      typeof article.id === 'number' &&
      typeof article.title === 'string' &&
      typeof article.content === 'string' &&
      isValidAuthor(article.author) &&
      ['draft', 'published', 'archived', 'deleted'].includes(article.status) &&
      Array.isArray(article.tags)
    );
  }
  return false;
}

// Function to validate article data
function validateArticleData(data: unknown): Article | null {
  if (isValidArticle(data)) {
    return data;
  }
  return null;
}

// Configuration using satisfies operator
interface NewsSystemConfig {
  maxArticlesPerPage: number;
  defaultStatus: "draft" | "published";
  features: {
    comments: boolean;
    socialSharing: boolean;
    analytics: boolean;
  };
  api: {
    baseUrl: string;
    version: string;
    timeout: number;
  };
}

const newsConfig = {
  maxArticlesPerPage: 10,
  defaultStatus: "draft" as const,
  features: {
    comments: true,
    socialSharing: true,
    analytics: false
  },
  api: {
    baseUrl: "https://api.news.com",
    version: "v1",
    timeout: 5000
  }
} satisfies NewsSystemConfig;

// Sample data
const author: Author = {
  id: 1,
  name: "Jane Smith",
  email: "jane@example.com",
  bio: "Tech journalist with 10 years of experience",
  socialMedia: {
    twitter: "@janesmith",
    linkedin: "jane-smith-tech",
    github: "janesmith"
  }
};

const draftArticle: Article = {
  id: 1,
  title: "Understanding TypeScript",
  content: "TypeScript is a powerful language...",
  author,
  status: "draft",
  lastModified: new Date(),
  tags: ["typescript", "programming", "web development"]
};

const publishedArticle: Article = {
  id: 2,
  title: "Advanced TypeScript Patterns",
  content: "Let's explore advanced patterns...",
  author,
  status: "published",
  publishedAt: new Date('2024-01-15'),
  views: 1250,
  tags: ["typescript", "advanced", "patterns"]
};

// Test the system
console.log("=== News Article Management System ===");

console.log("\n1. Processing Articles:");
console.log(processArticle(draftArticle));
console.log(processArticle(publishedArticle));

console.log("\n2. Author Information:");
console.log(getAuthorInfo(author));

console.log("\n3. Configuration:");
console.log(`Max articles per page: ${newsConfig.maxArticlesPerPage}`);
console.log(`API base URL: ${newsConfig.api.baseUrl}`);
console.log(`Comments enabled: ${newsConfig.features.comments}`);

console.log("\n4. Data Validation:");
const validData = validateArticleData(draftArticle);
const invalidData = validateArticleData({ invalid: "data" });

console.log("Valid article data:", validData ? "✓ Valid" : "✗ Invalid");
console.log("Invalid article data:", invalidData ? "✓ Valid" : "✗ Invalid");

console.log("\n5. Type Guards in Action:");
if (isDraft(draftArticle)) {
  console.log(`Draft last modified: ${draftArticle.lastModified.toISOString()}`);
}

if (isPublished(publishedArticle)) {
  console.log(`Published article views: ${publishedArticle.views}`);
}

export {};
