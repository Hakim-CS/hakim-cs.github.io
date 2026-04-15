
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
// blog 1
const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Microservices Architecture: Lessons Learned",
    excerpt: "A comprehensive guide to microservices architecture patterns, real-world challenges, and battle-tested lessons from building distributed systems at scale.",
    content: `
      <h2>Microservices Architecture: Lessons Learned</h2>
      
      <p>Over the past few years, I've had the opportunity to design, build, and maintain microservices-based systems. From trading bots to finance trackers, I've learned valuable lessons about what works, what doesn't, and everything in between. This comprehensive guide shares architectural patterns, common pitfalls, and proven strategies for building scalable, maintainable microservices.</p>
      
      <h3>Understanding Microservices</h3>
      
      <p>Microservices architecture represents a paradigm shift from monolithic applications. Instead of a single, large codebase, your application is broken down into smaller, independent services. Each service owns a specific business capability, operates independently, and communicates with others through well-defined APIs.</p>
      
      <p>In theory, this sounds perfect: independent scaling, easy deployment, technology flexibility, and clear separation of concerns. In practice, however, microservices introduce significant complexity that can overcome their benefits if not handled properly.</p>
      
      <h3>Lesson 1: Start Simple, Evolve Gradually</h3>
      
      <p><strong>The Mistake:</strong> Many teams jump into microservices too early. They break a system into 20+ services from day one, thinking it's the "modern" approach. This is rarely correct.</p>
      
      <p><strong>The Lesson:</strong> Start with a well-structured monolith or limited microservices (3-5 services). As your system grows and you clearly identify service boundaries and scaling requirements, gradually extract services. This approach, often called "monolith-first," lets you understand your domain better before fragmenting it.</p>
      
      <p><strong>Why This Matters:</strong> Premature microservices introduce operational complexity: deployment challenges, network latency, distributed tracing difficulties, and data consistency issues. These overheads are only worth it when you have clear performance or development velocity gains.</p>
      
      <h3>Lesson 2: Define Clear Service Boundaries</h3>
      
      <p><strong>The Challenge:</strong> Determining where services should begin and end is an art. Poor boundaries lead to chatty services, tight coupling, and performance degradation.</p>
      
      <p><strong>The Solution:</strong> Use Domain-Driven Design (DDD) principles. Identify bounded contexts where each microservice owns a specific, well-defined business domain. A few key questions:</p>
      
      <ul>
        <li>Can this service be deployed independently?</li>
        <li>Do we need to scale it separately?</li>
        <li>Does it have its own data store?</li>
        <li>Can a small team own and maintain it?</li>
      </ul>
      
      <p><strong>Real Example:</strong> In our AI Finance tracker, we separated the expense tracking service, the AI forecasting service, and the user authentication service. Each owns its database, scales independently, and has clear responsibilities. When the ML service needs heavy computation, we can scale just that service without affecting others.</p>
      
      <h3>Lesson 3: Choose the Right Communication Pattern</h3>
      
      <p><strong>Synchronous vs Asynchronous:</strong> This is perhaps the most critical decision. Synchronous calls (REST/gRPC) are simple but create tight coupling and cascading failures. Asynchronous messaging (RabbitMQ, Kafka) provides loose coupling but adds complexity.</p>
      
      <p><strong>My Recommendation:</strong></p>
      
      <ul>
        <li><strong>Use Synchronous (REST/gRPC) for:</strong> Read operations, immediate responses required, simple request-response patterns</li>
        <li><strong>Use Asynchronous (Message Queues) for:</strong> Data processing, notifications, background jobs, operations that can tolerate delays</li>
      </ul>
      
      <p><strong>Lesson Learned:</strong> Don't use asynchronous messaging everywhere. It complicates debugging, monitoring, and adds latency. I've seen teams make every service communicate via Kafka, creating a nightmare to troubleshoot failures. Be intentional about when and where you use asynchronous patterns.</p>
      
      <h3>Lesson 4: Database Strategy – Don't Share!</h3>
      
      <p><strong>The Wrong Way:</strong> Multiple services sharing a single database. This completely defeats the purpose of microservices—you lose independent scalability and deployment flexibility.</p>
      
      <p><strong>The Right Way:</strong> Each service has its own database. This enforces clean boundaries and prevents tight coupling.</p>
      
      <p><strong>The Challenge:</strong> Distributed data consistency. When data is split across services, you can't use traditional ACID transactions. You need to embrace eventual consistency and implement patterns like:</p>
      
      <ul>
        <li><strong>Saga Pattern:</strong> Distributed transactions across services using choreography (message-driven) or orchestration</li>
        <li><strong>Event Sourcing:</strong> Store events rather than state, allowing you to reconstruct data and maintain consistency</li>
        <li><strong>CQRS (Command Query Responsibility Segregation):</strong> Separate read and write operations for better scalability</li>
      </ul>
      
      <p><strong>Battle-Tested Approach:</strong> For our trading bot system, different services handle order placement, portfolio management, and market data. Each has its database. When an order is placed, we emit an event that other services consume. This maintains data consistency while keeping services independent.</p>
      
      <h3>Lesson 5: Monitoring and Observability are Non-Negotiable</h3>
      
      <p><strong>The Reality:</strong> In a monolith, a single log file shows you most of what you need. Microservices? A single request might touch 5-10 services across different servers, languages, and databases.</p>
      
      <p><strong>Essential Tools:</strong></p>
      
      <ul>
        <li><strong>Distributed Tracing:</strong> Jaeger or Zipkin to follow a single request across services</li>
        <li><strong>Centralized Logging:</strong> ELK Stack (Elasticsearch, Logstash, Kibana) or newer solutions like Loki</li>
        <li><strong>Metrics Collection:</strong> Prometheus + Grafana for real-time performance visibility</li>
        <li><strong>Alerting:</strong> Set up automati alerts for anomalies, not just hard thresholds</li>
      </ul>
      
      <p><strong>Why Now:</strong> Without observability, debugging a timeout in production is nearly impossible. You won't know if it's a slow database, network latency, or a cascading failure. I learned this the hard way when our trading bot had intermittent slowdowns. With proper distributed tracing, I identified that one service was timing out, causing all dependent operations to fail.</p>
      
      <h3>Lesson 6: Build for Resilience</h3>
      
      <p><strong>The Rule:</strong> In microservices, failure is not a question of if, but when. Services will fail, networks will be slow, databases will become overloaded.</p>
      
      <p><strong>Resilience Patterns:</strong></p>
      
      <ul>
        <li><strong>Circuit Breaker:</strong> Stop calling a failing service to prevent cascading failures</li>
        <li><strong>Retry Logic:</strong> Implement exponential backoff for transient failures</li>
        <li><strong>Timeouts:</strong> Always set timeouts on external calls; never wait indefinitely</li>
        <li><strong>Bulkheads:</strong> Isolate resources so one failure doesn't affect everything</li>
        <li><strong>Graceful Degradation:</strong> Show users partial results instead of complete failures</li>
      </ul>
      
      <p><strong>Code Example (Go):</strong> In our services, we use libraries like Hystrix to implement circuit breakers. When calling another service, if it fails repeatedly, the circuit opens and requests fail fast instead of piling up.</p>
      
      <p><strong>Result:</strong> When the ML service is under heavy load, other services continue operating normally. Users see forecasting as unavailable rather than the entire app timing out.</p>
      
      <h3>Lesson 7: Version Your APIs Carefully</h3>
      
      <p><strong>The Challenge:</strong> Services need to evolve. But if you break existing clients, you'll face deployment coordination nightmares.</p>
      
      <p><strong>Best Practices:</strong></p>
      
      <ul>
        <li>Add new fields to API responses without removing old ones (additive changes)</li>
        <li>Support multiple API versions (v1, v2) for a period</li>
        <li>Make fields optional with sensible defaults</li>
        <li>Document deprecation timelines clearly</li>
      </ul>
      
      <p><strong>Lesson:</strong> I once broke backward compatibility in our API, forcing all dependent services to update simultaneously. This caused a 2-hour outage coordinating deployments. Now, we're religious about backward compatibility.</p>
      
      <h3>Lesson 8: Automate Testing at All Levels</h3>
      
      <p><strong>The Complexity Multiplier:</strong> With microservices, testing becomes exponentially harder. You can't just spin up a single app and test it.</p>
      
      <p><strong>Testing Strategy:</strong></p>
      
      <ul>
        <li><strong>Unit Tests:</strong> Fast, isolated tests for individual components (70%)</li>
        <li><strong>Integration Tests:</strong> Test services with real dependencies (Testcontainers is great) (20%)</li>
        <li><strong>Contract Tests:</strong> Verify services can communicate with expected APIs (5%)</li>
        <li><strong>End-to-End Tests:</strong> Critical user journeys in a staging environment (5%)</li>
      </ul>
      
      <p><strong>Automation is Essential:</strong> Every pull request should run the entire test suite. This catches issues before they reach production.</p>
      
      <h3>Lesson 9: Keep Teams Small and Independent</h3>
      
      <p><strong>Conway's Law:</strong> "Any organization that designs a system will produce a design whose structure is a mirror image of the organization's communication structure."</p>
      
      <p><strong>The Application:</strong> Your service boundaries should align with your team structure. Each team should own a small number of related services (2-3 services per team).</p>
      
      <p><strong>Why:</strong> This eliminates dependencies between teams, speeds up development, and makes ownership clear. A team can deploy their service without coordinating with others.</p>
      
      <h3>Lesson 10: Security Across the Boundary</h3>
      
      <p><strong>New Attack Surface:</strong> Microservices communicate over networks, creating new security concerns—encrypted communication, authentication between services, API rate limiting.</p>
      
      <p><strong>Best Practices:</strong></p>
      
      <ul>
        <li>Use mutual TLS between services</li>
        <li>Implement service-to-service authentication (JWT, mutual certificates)</li>
        <li>Rate limit external APIs</li>
        <li>Validate all inputs, even from internal services</li>
        <li>Use API Gateway for external traffic</li>
      </ul>
      
      <h3>When NOT to Use Microservices</h3>
      
      <p>Before I conclude, let me be clear: microservices aren't always the right answer.</p>
      
      <p><strong>Avoid microservices if:</strong></p>
      
      <ul>
        <li>Your team is small (&lt;10 people) and not growing</li>
        <li>You don't have performance issues with a monolith</li>
        <li>Your deployment process isn't mature (automate first!)</li>
        <li>You don't have observability infrastructure in place</li>
      </ul>
      
      <p><strong>Start with microservices if:</strong></p>
      
      <ul>
        <li>You have clear, independent business domains</li>
        <li>Different services have different scaling requirements</li>
        <li>You have multiple teams working on the same product</li>
        <li>You need geographic distribution or high availability</li>
      </ul>
      
      <h3>Conclusion: Microservices Are Not Magic</h3>
      
      <p>Microservices architecture is a powerful tool, but it's not magic. It trades the complexity of a monolith for the complexity of a distributed system. This trade is worth it at scale, but not before.</p>
      
      <p><strong>Key Takeaways:</strong></p>
      
      <ol>
        <li>Start simple and evolve gradually</li>
        <li>Use DDD for clear service boundaries</li>
        <li>Choose the right communication patterns</li>
        <li>Give each service its own data store</li>
        <li>Invest in observability from day one</li>
        <li>Build for failure and resilience</li>
        <li>Maintain backward compatibility in APIs</li>
        <li>Automate testing extensively</li>
        <li>Align teams with service boundaries</li>
        <li>Address security proactively</li>
      </ol>
      
      <p>These lessons come from real projects—trading bots, finance trackers, and distributed data pipelines. They're not theoretical; they're practical wisdom earned through both successes and failures.</p>
      
      <p>The next time you're considering microservices, ask yourself: "Do I really need them?" If the answer is yes, approach the transition thoughtfully, plan for operational complexity, and invest in tooling and monitoring. Done right, microservices scale with your ambitions. Done wrong, they become your biggest headache.</p>
    `,
    date: "April 15, 2026",
    readTime: "15 min read"
  },
  {
    id: 2,
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
    id: 3,
    title: "The Future of Web Development",
    excerpt: "Exploring emerging trends and technologies that will shape the next generation of web applications.",
    content: "This is a placeholder for the full content of blog post 3.",
    date: "March 8, 2024",
    readTime: "6 min read"
  },
  {
    id: 4,
    title: "Building Responsive UIs with Modern Frameworks",
    excerpt: "A deep dive into strategies for creating beautiful, responsive user interfaces that work across all devices.",
    content: "This is a placeholder for the full content of blog post 4.",
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
