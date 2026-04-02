interface OpportunityType {
  class: string;
  properties: {
    type: string;
    days: string;
    name: string;
    subname: string;
    description: string;
  }[];
}

const Opportunity : OpportunityType[] = [
  {   
    class: 'Join Challenge',
    properties: [
      {
        type: 'Challenge',
        days: '4 days left',
        name: 'TechCorp LTD',
        subname: 'Web Design Sprint Challenge',
        description: 'Create a landing page for a fictional product in 48 hours. Showcase your design and frontend skills using Vibe code tools such as Moonchild, Figma, Vercel etc.',
      },
      
      {
        type: 'Opportunity',
        days: '5 days left',
        name: 'TechCorp LTD',
        subname: 'Web Design Sprint Challenge',
        description: 'Create a landing page for a fictional product in 48 hours. Showcase your design and frontend skills using Vibe code tools such as Moonchild, Figma, Vercel etc.',
      },
      
      {
        type: 'Opportunity',
        days: '7 days left',
        name: 'TechCorp LTD',
        subname: 'Web Design Sprint Challenge',
        description: 'Create a landing page for a fictional product in 48 hours. Showcase your design and frontend skills using Vibe code tools such as Moonchild, Figma, Vercel etc.',
      },
      
      {
        type: 'Challenge',
        days: '10 days left',
        name: 'TechCorp LTD',
        subname: 'Web Design Sprint Challenge',
        description: 'Create a landing page for a fictional product in 48 hours. Showcase your design and frontend skills using Vibe code tools such as Moonchild, Figma, Vercel etc.',
      }
    ]
  },
  
  {   
    class: 'Join Project',
    properties: [
      {
        type: 'Project',
        days: '12 days left',
        name: 'TechCorp LTD',
        subname: 'Web Design Sprint Challenge',
        description: 'Create a landing page for a fictional product in 48 hours. Showcase your design and frontend skills using Vibe code tools such as Moonchild, Figma, Vercel etc.',
      },
      
      {
        type: 'Project',
        days: '15 days left',
        name: 'TechCorp LTD',
        subname: 'Web Design Sprint Challenge',
        description: 'Create a landing page for a fictional product in 48 hours. Showcase your design and frontend skills using Vibe code tools such as Moonchild, Figma, Vercel etc.',
      },
    ]
  },
  
];

export default Opportunity;