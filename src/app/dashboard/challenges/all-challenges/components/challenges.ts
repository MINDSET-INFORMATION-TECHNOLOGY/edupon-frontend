interface ChallengeType {
  challenge: string;
  properties: {
    type: string;
    name: string;
    participants: string;
  }[];
}

const Challenges : ChallengeType[] = [
  {   
    challenge: 'Ongoing',
    properties: [
      {
        type: 'Technical',
        name: 'Data Analysis Sprint',
        participants: '40 participants',
      },
      
      {
        type: 'Creative',
        name: 'Creative Writing Showcase',
        participants: '50 participants',
      },
      
      {
        type: 'Technical',
        name: 'STEM Innovation Challenge',
        participants: '18 participants',
      }
    ]
  },
  
  {
    challenge: 'Completed',
    properties: [
      {
        type: 'Academic',
        name: 'Academic Writing Challenge',
        participants: '28 participants',
      },
      
      {
        type: 'Technical',
        name: 'EdTech Hackathon 2025',
        participants: '30 participants',
      },
      
      {
        type: 'Academic',
        name: 'Research Methods Quiz Bowl',
        participants: '29 participants',
      }
    ]
  },
  
  {    
    challenge: 'Upcoming',
    properties: [
      {
        type: 'Academic',
        name: 'Pedagogy Best Practices',
        participants: '0 participants',
      }
    ]
  }
];

export default Challenges;