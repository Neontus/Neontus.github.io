import type { Metadata } from "next";
import { Fraunces, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { projects } from "@/data/projects";
import { contactLinks } from "@/constants/links";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-serif",
  axes: ["opsz"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "juno kim",
  description: "CS @ UPenn. Signal processing, optimization, AI/ML.",
  icons: { icon: "/favicon.ico" },
  keywords: [
    "Juno Kim",
    "Software Engineer",
    "Computer Science",
    "University of Pennsylvania",
    "UPenn",
    "Signal Processing", 
    "Optimization",
    "AI/ML",
    "Machine Learning",
    "React",
    "TypeScript",
    "Python",
    "Chrome Extensions",
    "Full Stack Developer",
    "Frontend Developer",
    "Backend Developer",
  ],
  authors: [{ name: "Juno Kim" }],
  creator: "Juno Kim",
  openGraph: {
    title: "Juno Kim - CS @ UPenn",
    description: "CS @ UPenn. Signal processing, optimization, AI/ML. Full-stack developer building innovative projects.",
    type: "website",
    locale: "en_US",
    siteName: "Juno Kim Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Juno Kim - CS @ UPenn", 
    description: "CS @ UPenn. Signal processing, optimization, AI/ML. Full-stack developer building innovative projects.",
  },
};

// Generate JSON-LD structured data
function generateStructuredData() {
  // Get social media URLs from contactLinks
  const linkedinUrl = contactLinks.find(link => link.label === "linkedin")?.href;
  const githubUrl = contactLinks.find(link => link.label === "github")?.href;
  const emailUrl = contactLinks.find(link => link.label === "email")?.href;
  
  // Filter visible projects only
  const visibleProjects = projects.filter(project => !project.hidden);
  
  // Person schema
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Juno Kim",
    "jobTitle": "Computer Science Student",
    "affiliation": {
      "@type": "Organization",
      "name": "University of Pennsylvania",
      "alternateName": "UPenn"
    },
    "alumniOf": {
      "@type": "Organization", 
      "name": "University of Pennsylvania"
    },
    "description": "CS @ UPenn. Signal processing, optimization, AI/ML.",
    "knowsAbout": [
      "Signal Processing",
      "Optimization", 
      "Artificial Intelligence",
      "Machine Learning",
      "React",
      "TypeScript",
      "Python",
      "Chrome Extensions",
      "Full Stack Development",
      "UX/UI Design",
      "Real Estate Technology",
      "Cryptography",
      "Web Development"
    ],
    "email": emailUrl,
    "sameAs": [linkedinUrl, githubUrl].filter(Boolean),
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "degree",
        "educationalLevel": "undergraduate",
        "recognizedBy": {
          "@type": "Organization",
          "name": "University of Pennsylvania"
        }
      }
    ]
  };

  // Project schemas - using CreativeWork type
  const projectSchemas = visibleProjects.map(project => ({
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": project.title,
    "description": project.description,
    "abstract": project.details.join(" "),
    "creator": {
      "@type": "Person",
      "name": "Juno Kim"
    },
    "keywords": project.technologies.join(", "),
    "about": project.technologies,
    ...(project.github && { "codeRepository": project.github }),
    ...(project.demo && { "url": project.demo }),
    ...(project.slides && { "associatedMedia": project.slides }),
    "additionalProperty": [
      {
        "@type": "PropertyValue", 
        "name": "Technologies",
        "value": project.technologies.join(", ")
      },
      ...project.details.map((detail, index) => ({
        "@type": "PropertyValue",
        "name": `Achievement ${index + 1}`,
        "value": detail
      }))
    ]
  }));

  return [personSchema, ...projectSchemas];
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${fraunces.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ThemeToggle />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
