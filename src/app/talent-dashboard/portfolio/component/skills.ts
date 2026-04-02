// skills.ts
export const skills: string[] = [
  // Web & Tech
  "HTML", "CSS", "JavaScript", "TypeScript", "React", "Vue", "Angular", "Svelte",
  "Next.js", "Nuxt.js", "Node.js", "Express", "GraphQL", "REST API", "Redux", 
  "Zustand", "Tailwind CSS", "Chakra UI", "Bootstrap", "Material UI", "Git", "GitHub",
  "GitLab", "Docker", "Kubernetes", "AWS", "Azure", "GCP", "Firebase", "MongoDB",
  "PostgreSQL", "MySQL", "SQL", "NoSQL", "Python", "Django", "Flask", "PHP", "Laravel",
  "Symfony", "Ruby", "Rails", "Go", "Rust", "Java", "Spring Boot", "C#", ".NET", "Swift",
  "Kotlin", "Flutter", "React Native", "Mobile App Development", "UI/UX Design", 
  "Figma", "Adobe XD", "Sketch", "Photoshop", "Illustrator", "SEO", "Content Management",

  // Creative & Arts
  "Photography", "Videography", "Film Editing", "Graphic Design", "Animation", 
  "Music Production", "Drawing", "Painting", "Sculpting", "Fashion Design", 
  "Interior Design", "Creative Writing", "Copywriting", "Storytelling",

  // Trades & Manual Skills
  "Plumbing", "Carpentry", "Electrician", "Masonry", "Welding", "Tailoring", 
  "Baking", "Cooking", "Gardening", "Landscaping", "Automobile Repair", 
  "Housekeeping", "Laundry Services", "Cleaning", "Bartending", "Driving", 
  "Appliance Repair", "Mechanics", "Fishing", "Animal Care", "Pet Grooming", 
  "Furniture Making", "Printing", "Sign Making",

  // Business, Management & Office
  "Accounting", "Bookkeeping", "Finance", "Marketing", "Sales", "Customer Service", 
  "Human Resources", "Project Management", "Leadership", "Negotiation", 
  "Event Planning", "Administration", "Data Entry", "Telemarketing", "Public Speaking", 
  "Consulting", "Branding", "Advertising", "Social Media Management", "Digital Marketing",

  // Health & Wellness
  "Nursing", "Physiotherapy", "Dentistry", "Healthcare", "Nutrition", 
  "Personal Training", "Yoga Instruction", "Mental Health Support",

  // Miscellaneous & Life Skills
  "Problem Solving", "Critical Thinking", "Time Management", "Communication",
  "Teamwork", "Adaptability", "Research", "Teaching", "Coaching", 
  "Translation", "Language Learning", "Conflict Resolution", "Negotiation",

  // Advanced / Niche Skills
  "Cloud Architecture", "Cybersecurity", "Ethical Hacking", "Blockchain", 
  "NFT Development", "Metaverse Development", "AI/ML", "Data Science", 
  "Big Data", "Analytics", "Robotics", "AR/VR Development"
]
  // Remove duplicates
  .filter((value, index, self) => self.indexOf(value) === index);