export type Job = {
  id: number;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
};

export const jobs: Job[] = [
  {
    id: 1,
    title: "Frontend Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description: `
Join our frontend team to build responsive and high-performing web applications. You will collaborate closely with UX designers and backend engineers to deliver seamless user experiences.

You are expected to write clean, maintainable code using React and modern frontend technologies, optimize performance, and ensure cross-browser compatibility. Participate in code reviews and contribute to improving development processes.

Ideal candidates have strong problem-solving skills, a keen eye for UI details, and experience with state management libraries, testing frameworks, and component-driven development.

You will have the opportunity to influence the product roadmap by suggesting improvements and experimenting with innovative solutions. Your work will directly impact the experience of thousands of users worldwide.

Our team values collaboration, continuous learning, and a growth mindset. You will receive mentorship from senior engineers and have access to resources that will help you develop both technically and professionally.

You will also contribute to knowledge sharing within the team, helping to maintain coding standards and improve the overall quality of our codebase.
    `,
  },
  {
    id: 2,
    title: "Backend Developer",
    department: "Engineering",
    location: "Berlin",
    type: "Full-time",
    description: `
As a backend developer, you will design, implement, and maintain scalable server-side applications and APIs. Work closely with frontend developers and product managers to deliver reliable and performant solutions.

Responsibilities include developing RESTful services, optimizing database queries, implementing security best practices, and ensuring seamless integration with third-party services.

We are looking for someone with strong experience in Node.js, database design, and cloud services. A proactive approach to debugging and a passion for clean code is essential.

This role offers opportunities to shape the architecture of critical systems, optimize workflows, and ensure high availability for users across the globe.

You will join a collaborative team that values knowledge sharing, peer reviews, and continuous improvement, giving you a chance to grow both as a developer and as a technical leader.

Additionally, you will contribute to system scalability discussions and help implement solutions for future growth and performance optimization.
    `,
  },
  {
    id: 3,
    title: "Product Designer",
    department: "Design",
    location: "Remote",
    type: "Contract",
    description: `
You will craft intuitive and visually compelling product experiences across web and mobile platforms. Collaborate with product managers, engineers, and researchers to translate ideas into design solutions.

Key responsibilities include creating wireframes, prototypes, and high-fidelity designs, conducting usability testing, and iterating based on feedback.

We value designers who are creative problem solvers, have strong visual design skills, and are passionate about creating products users love.

You will have the opportunity to influence the overall product experience, helping to define the look and feel of new features and products.

Our team encourages open communication, experimentation, and learning. Your contributions will directly impact our users and help shape the future of our brand.

You will also mentor junior designers and contribute to the development of design standards and best practices.
    `,
  },
  {
    id: 4,
    title: "Marketing Specialist",
    department: "Marketing",
    location: "New York",
    type: "Part-time",
    description: `
Join our marketing team to plan and execute campaigns that drive engagement and growth. You will help shape messaging across social media, email, and other channels.

Responsibilities include content creation, campaign analysis, and collaboration with sales to align marketing strategies with company goals.

Ideal candidates are creative, data-driven, and have experience with digital marketing tools and analytics platforms.

You will have the chance to experiment with new marketing strategies, analyze their impact, and help optimize the customer journey across channels.

Our team values creativity, collaboration, and results-driven experimentation. You will work alongside experienced marketers and gain exposure to multiple aspects of a growing brand.

You will also be involved in brand storytelling initiatives, helping maintain a consistent and compelling brand voice across campaigns.
    `,
  },
  {
    id: 5,
    title: "DevOps Engineer",
    department: "Engineering",
    location: "Toronto",
    type: "Full-time",
    description: `
Maintain and improve our infrastructure to support reliable deployments and scalable applications. You will work closely with development teams to automate processes and ensure high availability.

Tasks include managing CI/CD pipelines, monitoring system performance, and troubleshooting infrastructure issues.

We are seeking someone experienced in cloud platforms, containerization, and infrastructure as code who enjoys solving complex operational problems.

You will play a key role in shaping the operational efficiency of our systems and ensuring that deployments are smooth and secure.

Our DevOps team values collaboration, documentation, and continuous learning, providing opportunities to improve both technical skills and operational best practices.

You will also help implement monitoring and alerting systems to ensure proactive resolution of potential issues.
    `,
  },
  {
    id: 6,
    title: "UI Designer",
    department: "Design",
    location: "Remote",
    type: "Full-time",
    description: `
Design user interfaces that are visually appealing and user-friendly across all platforms. Collaborate with UX researchers to ensure designs meet user needs.

Responsibilities include creating style guides, interactive prototypes, and high-fidelity screens, while maintaining consistency across products.

Candidates should have strong visual design skills, proficiency with design tools, and a good understanding of responsive design principles.

You will be able to contribute to brand identity and influence design decisions across multiple products.

Our team encourages experimentation, feedback, and continuous learning to foster creativity and professional growth.

You will also collaborate with developers to ensure accurate implementation of design specifications and maintain high-quality UI standards.
    `,
  },
  {
    id: 7,
    title: "Full Stack Developer",
    department: "Engineering",
    location: "Paris",
    type: "Full-time",
    description: `
Work on both frontend and backend development, building end-to-end solutions for our products. Collaborate with teams to deliver high-quality, scalable applications.

Responsibilities include developing APIs, building responsive interfaces, integrating databases, and maintaining application performance.

Ideal candidates are comfortable with multiple languages and frameworks, have experience with cloud deployment, and enjoy solving complex problems.

You will have the opportunity to contribute to the full product lifecycle, from architecture design to deployment, and see the impact of your work directly.

Our team values mentorship, knowledge sharing, and agile development practices, providing a supportive environment to grow as a developer.

You will also have opportunities to lead projects and help junior developers improve their skills through guidance and code reviews.
    `,
  },
  {
    id: 8,
    title: "QA Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Contract",
    description: `
Ensure the quality of our software products through manual and automated testing. Collaborate with development teams to identify and resolve issues early.

Responsibilities include writing test cases, performing regression testing, reporting bugs, and improving testing frameworks.

Candidates should be detail-oriented, have experience in automated testing tools, and understand software development workflows.

You will play a critical role in maintaining product reliability and user satisfaction by ensuring high standards for quality.

Our QA team encourages learning, experimentation, and collaboration to continuously improve testing practices and product quality.

You will also contribute to the development of automated testing suites and documentation to support future releases.
    `,
  },
  {
    id: 9,
    title: "Data Analyst",
    department: "Data",
    location: "London",
    type: "Full-time",
    description: `
Analyze large datasets to extract actionable insights for business decision-making. Collaborate with teams across engineering, marketing, and product.

Responsibilities include building dashboards, reporting key metrics, and creating predictive models to support strategic planning.

Ideal candidates are skilled in SQL, data visualization tools, and statistical analysis, and are comfortable communicating insights to non-technical stakeholders.

You will influence business strategy by providing insights that inform product development and marketing initiatives.

Our data team values curiosity, experimentation, and clear communication, offering opportunities to grow your analytical and presentation skills.

You will also work on projects to improve data quality, automate reporting, and optimize data-driven decision-making processes.
    `,
  },
  {
    id: 10,
    title: "HR Manager",
    department: "Human Resources",
    location: "Dubai",
    type: "Full-time",
    description: `
Lead HR initiatives to support company growth and foster a positive workplace culture. Manage recruitment, employee relations, and performance management.

Responsibilities include developing HR policies, conducting training sessions, and advising leadership on workforce planning.

We are looking for someone with strong communication skills, experience in HR processes, and a passion for supporting employee development.

You will have the chance to implement programs that directly improve employee satisfaction and retention.

Our HR team values transparency, empathy, and collaboration, giving you opportunities to shape organizational culture and growth.

You will also lead initiatives around diversity, inclusion, and employee engagement to create a welcoming environment for all.
    `,
  },
  {
    id: 11,
    title: "Content Writer",
    department: "Marketing",
    location: "Remote",
    type: "Part-time",
    description: `
Create compelling content for blogs, newsletters, and social media to engage our audience. Collaborate with marketing and design teams to maintain brand voice.

Responsibilities include researching topics, writing original content, and optimizing content for SEO to drive traffic and engagement.

Candidates should be creative, detail-oriented, and able to write clearly for diverse audiences.

You will have the opportunity to shape content strategy and influence brand storytelling initiatives across multiple channels.

Our team values collaboration, experimentation, and constructive feedback to continually improve content quality.

You will also work on developing content frameworks and contribute to editorial planning to ensure consistent messaging.
    `,
  },
  {
    id: 12,
    title: "Mobile App Developer",
    department: "Engineering",
    location: "San Francisco",
    type: "Full-time",
    description: `
Develop and maintain high-quality mobile applications for iOS and Android. Work closely with designers and backend developers to deliver seamless user experiences.

Responsibilities include building features, debugging, testing, and deploying apps to app stores while ensuring performance and security.

Candidates should be proficient in Swift, Kotlin, or cross-platform frameworks and have a strong understanding of mobile app performance optimization.

You will have the chance to contribute to the mobile product roadmap and implement innovative features that delight users.

Our team values collaboration, agile development practices, and continuous learning to improve skills and processes.

You will also participate in code reviews and mentoring junior mobile developers to help maintain high-quality standards.
    `,
  },
  {
    id: 13,
    title: "UX Researcher",
    department: "Design",
    location: "Berlin",
    type: "Contract",
    description: `
Conduct user research to inform product design and improve user experience. Collaborate with designers and product managers to translate research findings into actionable insights.

Responsibilities include usability testing, surveys, interviews, and data analysis to inform design decisions.

Ideal candidates have strong analytical skills, empathy for users, and experience with UX research methodologies.

You will directly impact product decisions by providing insights into user behavior and pain points.

Our team encourages curiosity, experimentation, and knowledge sharing to enhance research processes and product quality.

You will also mentor junior researchers and contribute to the development of best practices for UX studies.
    `,
  },
  {
    id: 14,
    title: "Sales Executive",
    department: "Sales",
    location: "New York",
    type: "Full-time",
    description: `
Drive revenue growth by identifying new business opportunities and maintaining client relationships. Work closely with marketing and product teams to align strategies.

Responsibilities include preparing proposals, closing deals, and tracking sales metrics to meet targets.

We are seeking candidates with excellent communication skills, a results-driven mindset, and experience in B2B sales.

You will have the opportunity to build relationships with key clients and shape sales strategies that influence business growth.

Our sales team values collaboration, transparency, and professional development to help you reach your full potential.

You will also participate in sales training and mentoring programs to continuously improve skills and performance.
    `,
  },
  {
    id: 15,
    title: "Customer Support Specialist",
    department: "Support",
    location: "Remote",
    type: "Full-time",
    description: `
Provide exceptional support to our customers via chat, email, and phone. Troubleshoot issues and guide users to effective solutions.

Responsibilities include responding to inquiries promptly, documenting issues, and collaborating with internal teams to resolve customer concerns.

Candidates should be patient, empathetic, and have excellent communication skills, with a focus on creating a positive customer experience.

You will have the opportunity to identify patterns in support requests and recommend improvements to product and process workflows.

Our team encourages collaboration, empathy, and continuous learning to enhance support quality.

You will also contribute to creating self-help guides and FAQs to empower customers and reduce repetitive inquiries.
    `,
  },
  {
    id: 16,
    title: "Cybersecurity Analyst",
    department: "Security",
    location: "Toronto",
    type: "Full-time",
    description: `
Monitor and protect the company’s IT infrastructure against cyber threats. Implement security policies and conduct regular audits to maintain compliance.

Responsibilities include threat analysis, vulnerability assessment, incident response, and employee training.

Ideal candidates have experience with security tools, risk assessment, and a strong understanding of network and application security best practices.

You will play a key role in safeguarding sensitive data and maintaining the trust of our clients and employees.

Our security team values vigilance, collaboration, and continuous improvement, providing opportunities to expand technical expertise.

You will also contribute to security awareness initiatives and help develop strategies to prevent future security incidents.
    `,
  },
  {
    id: 17,
    title: "Cloud Engineer",
    department: "Engineering",
    location: "Amsterdam",
    type: "Full-time",
    description: `
Design, implement, and maintain cloud infrastructure to ensure high availability and scalability. Collaborate with developers to optimize deployment processes.

Responsibilities include monitoring cloud services, automating infrastructure tasks, and cost optimization.

Candidates should be experienced in AWS, Azure, or GCP, with strong scripting and DevOps skills.

You will have the opportunity to improve system reliability and implement innovative solutions for cloud architecture.

Our team values collaboration, best practices, and continuous learning to stay ahead in cloud technologies.

You will also mentor junior engineers and contribute to documentation and knowledge sharing within the cloud team.
    `,
  },
  {
    id: 18,
    title: "Graphic Designer",
    department: "Design",
    location: "Madrid",
    type: "Part-time",
    description: `
Create visual assets for marketing campaigns, branding, and product interfaces. Collaborate with marketing and product teams to maintain consistency across platforms.

Responsibilities include designing graphics, layouts, and promotional materials, and iterating based on feedback.

Candidates should have strong creativity, proficiency with design software, and an eye for detail.

You will have the opportunity to shape brand visuals and influence how users perceive the company.

Our design team values collaboration, constructive feedback, and continuous learning to enhance creativity and skills.

You will also contribute to developing brand guidelines and design systems that streamline creative workflows.
    `,
  },
  {
    id: 19,
    title: "Finance Analyst",
    department: "Finance",
    location: "Zurich",
    type: "Full-time",
    description: `
Analyze financial data, prepare reports, and support budgeting and forecasting processes. Work closely with leadership to guide strategic decisions.

Responsibilities include financial modeling, variance analysis, and monitoring key performance indicators.

Ideal candidates have strong analytical skills, proficiency in Excel and financial software, and experience in corporate finance.

You will influence business strategy by providing insights into cost optimization and investment decisions.

Our finance team values accuracy, collaboration, and proactive problem-solving to support company growth.

You will also participate in cross-departmental projects, contributing financial expertise to product and operational initiatives.
    `,
  },
  {
    id: 20,
    title: "Recruiter",
    department: "Human Resources",
    location: "Remote",
    type: "Contract",
    description: `
Manage the end-to-end recruitment process for multiple departments. Source, screen, and interview candidates to ensure a strong talent pipeline.

Responsibilities include coordinating with hiring managers, negotiating offers, and maintaining candidate databases.

We are looking for someone with excellent communication skills, networking abilities, and experience in recruitment best practices.

You will have the opportunity to shape the company’s talent strategy and help hire high-performing teams.

Our HR team values collaboration, inclusivity, and continuous improvement to provide a seamless candidate experience.

You will also help develop recruitment policies and contribute to employer branding initiatives.
    `,
  },
  {
    id: 21,
    title: "AI Engineer",
    department: "Engineering",
    location: "Boston",
    type: "Full-time",
    description: `
Develop and integrate AI and machine learning models into our products. Collaborate with data scientists, engineers, and product managers to deploy intelligent solutions.

Responsibilities include training models, optimizing performance, and ensuring ethical AI practices.

Candidates should have strong programming skills, experience with ML frameworks, and a passion for advancing AI technologies.

You will have the opportunity to work on cutting-edge AI projects that directly impact product features and user experience.

Our AI team values innovation, collaboration, and continuous learning to stay ahead in the rapidly evolving field of artificial intelligence.

You will also mentor junior engineers, contribute to research initiatives, and help implement best practices for scalable AI solutions.
    `,
  },
];
