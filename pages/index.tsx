/* eslint-disable jsx-a11y/alt-text */
import Head from "next/head";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillMediumCircle,
} from "react-icons/ai";
import { FaReact, FaNodeJs, FaAws } from "react-icons/fa";
import { SiTypescript, SiFirebase } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";

import { informations as Informations } from "@/informations";

// Dynamically import Three.js component to avoid SSR issues
const ThreeBackground = dynamic(() => import("../components/ThreeBackground"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Zafer Barış | Senior React Native Developer - Remote & Freelance</title>
        <meta
          name="description"
          content="Senior React Native Developer with nearly 6 years of experience. Available for remote work, freelance projects, and consulting. Specialized in healthcare apps, payment integrations, and high-traffic mobile solutions."
        />
        <meta
          name="keywords"
          content="React Native Developer, Freelance Developer, Remote Developer, Mobile Developer, Healthcare Apps, Contract Work, Technical Consulting, React Native Expert, TypeScript, Firebase, Payment Integration"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Three.js Background */}
      <ThreeBackground />

      <div className="portfolio-container">
        {/* Hero Section */}
        <section className="hero-section" id="about">
          <div className="hero-frame">
            {/* Logo */}
            <div className="logo">
              <span className="logo-text">Z</span>
              <span className="logo-accent">b</span>
            </div>

            {/* Contact Buttons */}
            <div className="contact-buttons">
              <a
                href="mailto:zaferrosh@gmail.com"
                className="contact-btn contact-email"
                aria-label="Send Email"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                Email
              </a>
              <a
                href="tel:+905053998425"
                className="contact-btn contact-phone"
                aria-label="Call Phone"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                Phone
              </a>
              <a
                href={Informations.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-btn contact-linkedin"
                aria-label="LinkedIn Profile"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                LinkedIn
              </a>
            </div>

            {/* Vertical Navigation */}
            <nav className="vertical-nav">
              <a href="#skills">Expertise</a>
              <a href="#technologies">Tech Stack</a>
              <a
                href="https://drive.google.com/file/d/1dmWH-b8EfqREh9Jre9RE-lQJdU1gT7YI/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
              <a href={Informations.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </nav>

            {/* Hero Content */}
            <div className="hero-content">
              <div className="hero-header">
                <p className="hero-subtitle">ZAFER BARIŞ</p>
                <span className="remote-badge">Remote</span>
              </div>
              <h1 className="hero-title">
                <span>Senior React Native</span>
                <span>Developer</span>
              </h1>
              
              <div className="hero-about-container">
                <div className="hero-about">
                  <p>
                    With nearly 6 years of experience in React Native and React, I specialize in 
                    developing scalable, high-performance mobile applications across healthcare, 
                    consumer apps, and high-traffic solutions. My expertise includes complex 
                    integrations with health platforms, payment systems, custom map routes, and 
                    advanced iOS features like Live Activity.
                  </p>
                  <p>
                    I have built diverse features including AI chatbots, video calling, live GPS 
                    tracking, and e-commerce solutions. Working with various APIs and technologies, 
                    I successfully manage complete project lifecycles from conception to release.
                  </p>
                  <p>
                    As a team leader, I focus on collaboration, performance monitoring, and efficient 
                    coordination. I can independently manage projects from ground zero to production, 
                    ensuring high standards and timely delivery while staying at the forefront of 
                    technology.
                  </p>
                  <p>
                    Available for freelance projects, contract work, and consulting. I work remotely 
                    with clients worldwide, delivering professional solutions across all time zones.
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="social-links">
              <a
                href={Informations.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <AiFillLinkedin />
              </a>
              <a
                href={Informations.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <AiFillGithub />
              </a>
              <a
                href={Informations.medium}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Medium"
              >
                <AiFillMediumCircle />
              </a>
            </div>

            <div className="tech-stack-summary">
              <div className="tech-stack-item">React Native</div>
              <div className="tech-stack-item">TypeScript</div>
              <div className="tech-stack-item">Next.js</div>
              <div className="tech-stack-item">Firebase</div>
              <div className="tech-stack-item">AWS</div>
              <div className="tech-stack-item">CI/CD</div>
              <div className="tech-stack-more">+60</div>
            </div>

            {/* Scroll Indicator */}
            <div className="scroll-indicator">
              <div className="scroll-line"></div>
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section id="technologies" className="tech-section">
          <div className="tech-container">
            <h3 className="tech-section-title">Technologies & Tools</h3>
            <div className="tech-grid">
              <div className="tech-category">
                <h4>Mobile Development</h4>
                <div className="tech-tags">
                  <span>React Native</span>
                  <span>Expo</span>
                  <span>TypeScript</span>
                  <span>JavaScript</span>
                  <span>React Navigation</span>
                  <span>React Native CLI</span>
                  <span>Reanimated</span>
                  <span>Gesture Handler</span>
                  <span>iOS</span>
                  <span>Android</span>
                </div>
              </div>
              
              <div className="tech-category">
                <h4>Deployment & Release</h4>
                <div className="tech-tags">
                  <span>App Store Connect</span>
                  <span>Google Play Console</span>
                  <span>TestFlight</span>
                  <span>CodePush</span>
                  <span>EAS (Expo)</span>
                  <span>Fastlane</span>
                  <span>OTA Updates</span>
                </div>
              </div>
              
              <div className="tech-category">
                <h4>Development Tools</h4>
                <div className="tech-tags">
                  <span>Xcode</span>
                  <span>Android Studio</span>
                  <span>VS Code</span>
                  <span>Flipper</span>
                  <span>React Native Debugger</span>
                  <span>Reactotron</span>
                  <span>Chrome DevTools</span>
                </div>
              </div>
              
              <div className="tech-category">
                <h4>DevOps & CI/CD</h4>
                <div className="tech-tags">
                  <span>Git & GitHub</span>
                  <span>GitHub Actions</span>
                  <span>Azure DevOps</span>
                  <span>Bitrise</span>
                  <span>CI/CD Pipelines</span>
                  <span>Docker</span>
                  <span>Environment Config</span>
                </div>
              </div>
              
              <div className="tech-category">
                <h4>Project Management</h4>
                <div className="tech-tags">
                  <span>Agile/Scrum</span>
                  <span>Jira</span>
                  <span>Linear</span>
                  <span>Trello</span>
                  <span>Notion</span>
                  <span>Slack</span>
                  <span>Git Flow</span>
                </div>
              </div>
              
              <div className="tech-category">
                <h4>State Management</h4>
                <div className="tech-tags">
                  <span>Redux Toolkit</span>
                  <span>Redux Saga</span>
                  <span>Redux Persist</span>
                  <span>Zustand</span>
                  <span>React Query</span>
                  <span>Context API</span>
                  <span>Jotai</span>
                </div>
              </div>
              
              <div className="tech-category">
                <h4>Backend & Cloud</h4>
                <div className="tech-tags">
                  <span>Firebase</span>
                  <span>Firestore</span>
                  <span>Supabase</span>
                  <span>AWS</span>
                  <span>Google Cloud</span>
                  <span>GraphQL</span>
                  <span>REST APIs</span>
                  <span>WebSockets</span>
                </div>
              </div>
              
              <div className="tech-category">
                <h4>Payments & Subscriptions</h4>
                <div className="tech-tags">
                  <span>Revenue Cat</span>
                  <span>Stripe</span>
                  <span>In-App Purchases</span>
                  <span>Apple Pay</span>
                  <span>Google Pay</span>
                  <span>Subscription Management</span>
                </div>
              </div>
              
              <div className="tech-category">
                <h4>Maps & Location</h4>
                <div className="tech-tags">
                  <span>Google Maps API</span>
                  <span>Mapbox</span>
                  <span>Geolocation</span>
                  <span>Custom Routes</span>
                  <span>Location Tracking</span>
                  <span>Geocoding</span>
                </div>
              </div>
              
              <div className="tech-category">
                <h4>Device Features</h4>
                <div className="tech-tags">
                  <span>Camera</span>
                  <span>Vision Camera</span>
                  <span>Biometric Auth</span>
                  <span>Push Notifications</span>
                  <span>Deep Linking</span>
                  <span>NFC</span>
                  <span>Bluetooth</span>
                  <span>OCR</span>
                </div>
              </div>
              
              <div className="tech-category">
                <h4>Real-time & Communication</h4>
                <div className="tech-tags">
                  <span>WebRTC</span>
                  <span>Socket.io</span>
                  <span>Video Calling</span>
                  <span>Chat Integration</span>
                  <span>Live Updates</span>
                </div>
              </div>
              
              <div className="tech-category">
                <h4>AI & ML Integration</h4>
                <div className="tech-tags">
                  <span>OpenAI API</span>
                  <span>ChatGPT</span>
                  <span>Google ML Kit</span>
                  <span>Vision AI</span>
                  <span>Image Recognition</span>
                  <span>NLP</span>
                </div>
              </div>
              
              <div className="tech-category">
                <h4>Monitoring & Analytics</h4>
                <div className="tech-tags">
                  <span>Sentry</span>
                  <span>Crashlytics</span>
                  <span>Firebase Analytics</span>
                  <span>Mixpanel</span>
                  <span>Performance Monitor</span>
                  <span>A/B Testing</span>
                </div>
              </div>
              
              <div className="tech-category">
                <h4>Testing & Quality</h4>
                <div className="tech-tags">
                  <span>Jest</span>
                  <span>Detox</span>
                  <span>React Testing Library</span>
                  <span>Unit Testing</span>
                  <span>E2E Testing</span>
                  <span>Code Review</span>
                </div>
              </div>
              
              <div className="tech-category">
                <h4>App Store Compliance</h4>
                <div className="tech-tags">
                  <span>Apple Guidelines</span>
                  <span>Google Play Policies</span>
                  <span>Privacy Policy</span>
                  <span>App Store Optimization</span>
                  <span>Beta Testing</span>
                  <span>App Review Process</span>
                </div>
              </div>
              
              <div className="tech-category">
                <h4>Healthcare Solutions</h4>
                <div className="tech-tags">
                  <span>Apple Health Kit</span>
                  <span>Google Fit</span>
                  <span>FHIR</span>
                  <span>HL7</span>
                  <span>HIPAA Compliance</span>
                  <span>Telemedicine</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="content-section">
          <h2 className="section-title">Professional Expertise</h2>
          <p className="section-description">
            With nearly 6 years of experience in React Native and React, I specialize 
            in building scalable, high-performance mobile applications. From healthcare 
            platforms to consumer apps, I deliver solutions that meet both technical 
            excellence and business objectives.
          </p>

          <div className="skills-grid">
            <div className="skill-card">
              <h3>Core Expertise</h3>
              <ul>
                <li>Mobile App Development (iOS & Android)</li>
                <li>Cross-Platform Solutions with React Native</li>
                <li>Complex API Integrations & Third-Party Services</li>
                <li>Healthcare & Medical Applications</li>
                <li>Payment System Integrations</li>
                <li>Real-time Features & Live Data</li>
                <li>Performance Optimization & Monitoring</li>
              </ul>
            </div>

            <div className="skill-card">
              <h3>Technical Leadership</h3>
              <ul>
                <li>Team Leadership & Mentoring</li>
                <li>Project Management (0 to Production)</li>
                <li>Code Review & Quality Assurance</li>
                <li>Architecture Design & Planning</li>
                <li>CI/CD Pipeline Setup</li>
                <li>Performance & Security Audits</li>
                <li>Technical Documentation</li>
              </ul>
            </div>

            <div className="skill-card">
              <h3>Work Style & Availability</h3>
              <ul>
                <li>Remote Work Specialist</li>
                <li>Freelance & Contract Projects</li>
                <li>Technical Consulting & Advisory</li>
                <li>Full-Time & Part-Time Engagements</li>
                <li>Global Time Zone Flexibility</li>
                <li>B2B Partnerships</li>
                <li>Agile Team Collaboration</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Projects Section - Currently Under NDA */}
        {/* <section id="projects" className="content-section">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-description">
            Most of my professional work is under NDA. I have worked on various 
            healthcare applications, fintech solutions, and high-traffic mobile platforms.
          </p>
        </section> */}
      </div>
    </>
  );
}
