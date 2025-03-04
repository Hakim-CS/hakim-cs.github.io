
import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import coding from '../videos/coding_page.jpg';

// Blog post data structure (same as in Blog.tsx)
interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
}

// Sample blog posts data (should be imported from a shared file in a real app)
const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Exploring AI's Profound Impact on Daily Life",
    excerpt: "From voice assistants to personalized recommendations, artificial intelligence is quietly revolutionizing how we live, work, and interact with technology.",
    content: `
      <h2>Exploring AI's Profound Impact on Daily Life</h2>
      
      <p>In recent years, artificial intelligence (AI) has transitioned from a futuristic concept to an integral part of our everyday lives. Its influence extends far beyond specialized applications, touching nearly every aspect of how we work, communicate, shop, and even relax. Let's explore how AI is reshaping our daily experiences, often in ways we might not even notice.</p>
      
      <h3>The Invisible Assistant</h3>
      
      <p>Perhaps the most visible manifestation of AI in our daily routines comes through virtual assistants like Siri, Alexa, and Google Assistant. These AI-powered tools have become household staples, helping us check the weather, set reminders, play music, and control smart home devices with simple voice commands. What once seemed like science fiction has become so commonplace that many of us interact with these AI systems dozens of times daily without a second thought.</p>
      
      <p>Beyond dedicated assistants, AI quietly powers the predictive text that completes our sentences while typing emails or messages, the spam filters that protect our inboxes, and the autocorrect features that save us from embarrassing typos. These subtle but powerful applications demonstrate how AI has become woven into the fabric of our digital communications.</p>
      
      <h3>Personalized Experiences</h3>
      
      <p>One of AI's most significant impacts on daily life comes through personalization. Streaming services like Netflix and Spotify use sophisticated AI algorithms to analyze your viewing or listening habits and recommend content you're likely to enjoy. E-commerce platforms like Amazon similarly track your browsing and purchasing history to suggest products tailored to your preferences.</p>
      
      <p>This personalization extends to social media feeds, news aggregators, and even email marketing campaigns. The content we see online is increasingly curated by AI systems designed to maximize our engagement by showing us what we're most likely to find interesting or relevant. While this creates more engaging experiences, it also raises important questions about filter bubbles and the diversity of information we consume.</p>
      
      <h3>Healthcare Transformation</h3>
      
      <p>AI is revolutionizing healthcare in ways that directly impact our wellbeing. Wearable devices use AI to monitor our health metrics and alert us to potential concerns. Diagnostic tools powered by machine learning can detect patterns in medical images that might escape even trained professionals, leading to earlier detection of conditions like cancer.</p>
      
      <p>Apps leveraging AI can help track fitness goals, monitor chronic conditions, and even provide mental health support through chatbots programmed with therapeutic techniques. As these technologies continue to develop, they promise to make healthcare more accessible, personalized, and preventative.</p>
      
      <h3>Transportation and Navigation</h3>
      
      <p>Whether you're commuting to work or planning a road trip, AI likely plays a role in your journey. Navigation apps use AI to analyze traffic patterns and suggest the fastest routes. Ride-sharing services employ complex algorithms to match drivers with passengers efficiently and predict demand in different areas.</p>
      
      <p>Meanwhile, advanced driver-assistance systems (ADAS) in modern vehicles use AI to enhance safety through features like automatic emergency braking, lane-keeping assistance, and adaptive cruise control. These technologies represent stepping stones toward the fully autonomous vehicles that may one day transform our transportation landscape entirely.</p>
      
      <h3>Work and Productivity</h3>
      
      <p>In professional settings, AI tools are augmenting human capabilities across industries. Smart email categorization helps manage overwhelming inboxes. Calendar assistants streamline scheduling. Document analysis tools extract key information from contracts and reports. Creative professionals benefit from AI-powered design tools, while programmers leverage code completion and suggestion features.</p>
      
      <p>These applications don't replace human workers but rather enhance their productivity by automating routine tasks and providing decision support. This partnership between human creativity and AI efficiency represents one of the most promising aspects of the technology's integration into our work lives.</p>
      
      <h3>Challenges and Considerations</h3>
      
      <p>As AI becomes more pervasive in our daily lives, important questions arise about privacy, data security, algorithmic bias, and transparency. The systems that make our lives more convenient often rely on vast amounts of personal data, raising concerns about how this information is collected, stored, and used.</p>
      
      <p>Additionally, AI systems can inadvertently perpetuate or amplify existing biases if they're trained on unrepresentative data sets. Ensuring these technologies are developed and deployed ethically requires ongoing attention from developers, policymakers, and users alike.</p>
      
      <h3>Looking Forward</h3>
      
      <p>The integration of AI into our daily lives will likely accelerate in coming years. Smart homes will become more intuitive and responsive. Virtual and augmented reality experiences powered by AI will create new forms of entertainment and learning. Healthcare will become increasingly personalized based on our unique genetic profiles and life circumstances.</p>
      
      <p>As these technologies evolve, the most successful implementations will be those that enhance human capabilities, foster connection, and respect fundamental values like privacy and autonomy. By approaching AI as a tool to augment rather than replace human judgment and creativity, we can harness its potential to meaningfully improve our daily lives while mitigating potential downsides.</p>
      
      <p>In many ways, the AI revolution is just beginning. The most profound impacts on how we live, work, and relate to one another may still lie ahead. By staying informed and engaged with these developments, we can help shape a future where AI truly serves human flourishing.</p>
    `,
    date: "March 15, 2024",
    readTime: "8 min read"
  },
  {
    id: 2,
    title: "The Future of Web Development",
    excerpt: "Exploring emerging trends and technologies that will shape the next generation of web applications.",
    content: "This is a placeholder for the full content of blog post 2.",
    date: "March 8, 2024",
    readTime: "6 min read"
  },
  {
    id: 3,
    title: "Building Responsive UIs with Modern Frameworks",
    excerpt: "A deep dive into strategies for creating beautiful, responsive user interfaces that work across all devices.",
    content: "This is a placeholder for the full content of blog post 3.",
    date: "February 28, 2024",
    readTime: "5 min read"
  }
];

export default function BlogPost() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  // Find the blog post with the matching ID
  const post = blogPosts.find(post => post.id === Number(id));
  
  // If no post is found, redirect to the blog page
  if (!post) {
    React.useEffect(() => {
      navigate('/blog');
    }, [navigate]);
    return null;
  }

  return (
    <div className="relative min-h-screen pt-16 md:pt-20">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${coding})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Content */}
      <div className="px-4 sm:px-6 lg:px-8 py-8 md:py-16">
        <div className="container mx-auto animate-fadeIn relative z-10 max-w-4xl">
          <Link to="/blog" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-6">
            <svg className="w-4 h-4 mr-2 rotate-180" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Back to Blog
          </Link>
          
          <article className="bg-white/10 backdrop-blur-sm rounded-lg p-6 md:p-8">
            <header className="mb-6">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 text-white">{post.title}</h1>
              <div className="flex items-center text-sm text-gray-300">
                <time>{post.date}</time>
                <span className="mx-2">•</span>
                <span>{post.readTime}</span>
              </div>
            </header>
            
            <div 
              className="prose prose-invert max-w-none prose-headings:text-white prose-p:text-gray-300"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </article>
        </div>
      </div>
    </div>
  );
}
