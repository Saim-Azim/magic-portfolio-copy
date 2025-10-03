import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Saim",
  lastName: "Azim Qureshi",
  name: `Saim Azim Qureshi`,
  role: "Software Developer (React)",
  avatar: "/images/avatar.jpg",
  email: "saimqureshi647@gmail.com",
  location: "Asia/Kolkata", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Hindi"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}&apos;s Newsletter</>,
  description: <>Weekly insights about React development, MERN stack, and modern web technologies</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/saim-qureshi",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/saim-azim-79563b252/",
  },
  {
    name: "Phone",
    icon: "phone",
    link: "tel:+917620619373",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building scalable web and mobile applications with React</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">React Developer</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work",
  },
  subline: (
    <>
      I&apos;m Saim, a Software Developer with 3+ years of experience building scalable web and mobile applications.
      <br /> Proven expertise in React, MERN stack, and TypeScript with hands-on experience in RESTful API design and React Native.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Saim is a Pune-based Software Developer with 3+ years of experience building scalable web and mobile applications.
        Proven expertise in crafting performant, maintainable React applications and optimizing frontend performance
        across large codebases. Comfortable across the MERN stack and TypeScript, with hands-on experience in
        RESTful API design, JWT-based authentication, and React Native for cross-platform mobile features.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "ABL INFOTECH",
        timeframe: "September 2022 - Present",
        role: "Mobile and Web  Developer",
        achievements: [
          <>
            Implemented advanced scheduling by customizing and integrating React-big-calendar with React.js,
            enabling event creation, modification, and management, improving scheduling efficiency by 30%.
          </>,
          <>
            Developed a real-time alerts and notifications module using Redux, async API integrations, and WebSockets,
            delivering instant alerts with read/unread tracking and increasing user engagement.
          </>,
          <>
            Engineered a data-driven business dashboard with role-based access control (RBAC), integrating revenue metrics,
            peak-hour analysis, and customer-base insights via Redux Toolkit and REST APIs, reducing data retrieval time by 40%.
          </>,
          <>
            Automated payroll reporting workflows with API-driven report generation, scheduled tasks, and SMTP email notifications,
            cutting manual errors by 25% and accelerating delivery.
          </>,
          <>
            Optimized React rendering and state management by applying memoization, lazy loading, and code splitting,
            reducing page load time by 22%.
          </>,
          <>
            Built news module in React Native with API-driven content delivery, Redux state management, and Firebase Analytics,
            tracking real-time engagement to inform product decisions.
          </>,
          <>
            Developed event scheduling feature using react-native-calendar-events and Redux integration,
            improving appointment adherence by 35%.
          </>,
          <>
            Implemented secure Node.js backend logic with hashed/standardized IDs, JWT authentication,
            and bcrypt password hashing to ensure strong data protection.
          </>,
          <>
            Architected a school management portal with React.js, React Router, Redux Toolkit, and Axios,
            supporting dynamic child profiles and internationalized school data.
          </>,
          <>
            Built a responsive back-to-school questionnaire system using React hooks, Redux Thunk, and Tailwind CSS,
            reducing parent onboarding time by 40%.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Savitribai Phule University",
        description: <>M.Sc Computer Science - 2024</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Frontend Development",
        description: (
          <>Expert in React.js, React Native, Next.js with Redux for state management and modern CSS frameworks.</>
        ),
        tags: [
          {
            name: "React",
            icon: "react",
          },
          {
            name: "JavaScript",
            icon: "javascript",
          },
          {
            name: "TypeScript",
            icon: "typescript",
          },
          {
            name: "Next.js",
            icon: "nextjs",
          },
        ],
        images: [],
      },
      {
        title: "Backend & Database",
        description: (
          <>Building robust backends with Node.js, Express.js, MongoDB, and Firebase with JWT authentication.</>
        ),
        tags: [
          {
            name: "Node.js",
            icon: "nodejs",
          },
          {
            name: "MongoDB",
            icon: "mongodb",
          },
          {
            name: "Firebase",
            icon: "firebase",
          },
        ],
        images: [],
      },
      {
        title: "Tools & DevOps",
        description: (
          <>Proficient with Git, REST APIs, Postman, Jira, Agile methodologies, and basic AWS & Docker knowledge.</>
        ),
        tags: [
          {
            name: "Git",
            icon: "git",
          },
          {
            name: "AWS",
            icon: "aws",
          },
          {
            name: "Docker",
            icon: "docker",
          },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about React and web development...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `React and MERN stack projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
