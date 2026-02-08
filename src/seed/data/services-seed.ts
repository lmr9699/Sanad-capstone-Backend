export interface ServiceSeed {
  name: string;
  description: string;
  longDescription: string;
  icon: string;
  category: string;
  rating: number;
  reviews: number;
  providers: number;
  color: string;
  benefits: string[];
  duration: string;
  frequency: string;
  ageRange: string;
}

export const servicesSeed: ServiceSeed[] = [
  {
    name: "Speech Therapy",
    description: "Improve communication and language skills for children with speech delays",
    longDescription: "Professional speech therapy services in Kuwait to help children develop clear communication, improve articulation, language comprehension, and social communication skills. Our certified speech-language pathologists work with children facing various speech and language challenges.",
    icon: "chatbubble-ellipses-outline",
    category: "Therapy",
    rating: 4.8,
    reviews: 124,
    providers: 28,
    color: "#7FB77E",
    benefits: [
      "Improved articulation and pronunciation",
      "Enhanced language comprehension",
      "Better social communication skills",
      "Increased confidence in speaking",
      "Support for non-verbal communication"
    ],
    duration: "45-60 minutes",
    frequency: "2-3 times per week",
    ageRange: "2-18 years"
  },
  {
    name: "Occupational Therapy",
    description: "Develop daily living and fine motor skills for better independence",
    longDescription: "Comprehensive occupational therapy services in Kuwait focusing on helping children develop essential life skills, fine motor coordination, sensory processing, and independence in daily activities. Our therapists create personalized programs to support each child's unique needs.",
    icon: "hand-left-outline",
    category: "Therapy",
    rating: 4.7,
    reviews: 98,
    providers: 22,
    color: "#5F8F8B",
    benefits: [
      "Improved fine motor skills",
      "Enhanced sensory processing",
      "Better self-care abilities",
      "Increased independence",
      "Improved handwriting and coordination"
    ],
    duration: "50-60 minutes",
    frequency: "2-3 times per week",
    ageRange: "3-18 years"
  },
  {
    name: "Behavioral Therapy",
    description: "Address behavioral challenges with evidence-based techniques",
    longDescription: "Specialized behavioral therapy services in Kuwait using Applied Behavior Analysis (ABA) and other evidence-based approaches. Our certified behavioral therapists help children develop positive behaviors, reduce challenging behaviors, and improve social interactions.",
    icon: "heart-outline",
    category: "Therapy",
    rating: 4.9,
    reviews: 156,
    providers: 35,
    color: "#E63946",
    benefits: [
      "Reduced challenging behaviors",
      "Improved social skills",
      "Better emotional regulation",
      "Enhanced communication",
      "Increased adaptive behaviors"
    ],
    duration: "60-90 minutes",
    frequency: "3-5 times per week",
    ageRange: "2-16 years"
  },
  {
    name: "Physical Therapy",
    description: "Enhance movement, strength, and physical development",
    longDescription: "Professional physical therapy services in Kuwait designed to improve children's mobility, strength, balance, and coordination. Our licensed physical therapists work with children to achieve their physical development goals and improve overall quality of life.",
    icon: "fitness-outline",
    category: "Therapy",
    rating: 4.6,
    reviews: 87,
    providers: 18,
    color: "#457B9D",
    benefits: [
      "Improved mobility and movement",
      "Enhanced balance and coordination",
      "Increased muscle strength",
      "Better posture and alignment",
      "Reduced pain and discomfort"
    ],
    duration: "45-60 minutes",
    frequency: "2-3 times per week",
    ageRange: "0-18 years"
  },
  {
    name: "Educational Support",
    description: "Academic assistance and personalized learning strategies",
    longDescription: "Comprehensive educational support services in Kuwait for children with special learning needs. Our qualified special education teachers provide individualized instruction, learning strategies, and academic support to help children succeed in their educational journey.",
    icon: "school-outline",
    category: "Education",
    rating: 4.7,
    reviews: 112,
    providers: 42,
    color: "#F77F00",
    benefits: [
      "Personalized learning plans",
      "Improved academic performance",
      "Enhanced study skills",
      "Better classroom participation",
      "Increased confidence in learning"
    ],
    duration: "60 minutes",
    frequency: "2-4 times per week",
    ageRange: "5-18 years"
  },
  {
    name: "Family Counseling",
    description: "Support for the whole family on the special needs journey",
    longDescription: "Compassionate family counseling services in Kuwait to support families navigating the challenges and joys of raising a child with special needs. Our licensed counselors provide emotional support, guidance, and strategies to strengthen family bonds and improve overall well-being.",
    icon: "people-outline",
    category: "Support",
    rating: 4.8,
    reviews: 76,
    providers: 15,
    color: "#9B59B6",
    benefits: [
      "Improved family communication",
      "Better stress management",
      "Enhanced coping strategies",
      "Stronger family relationships",
      "Increased understanding and acceptance"
    ],
    duration: "50-60 minutes",
    frequency: "Weekly or bi-weekly",
    ageRange: "All ages"
  },
  {
    name: "Sensory Integration Therapy",
    description: "Help children process and respond to sensory information",
    longDescription: "Specialized sensory integration therapy services in Kuwait for children who have difficulty processing sensory information. Our trained therapists use various techniques and equipment to help children better understand and respond to sensory input from their environment.",
    icon: "pulse-outline",
    category: "Therapy",
    rating: 4.6,
    reviews: 65,
    providers: 12,
    color: "#06A77D",
    benefits: [
      "Improved sensory processing",
      "Reduced sensory sensitivities",
      "Better attention and focus",
      "Enhanced motor planning",
      "Increased comfort in daily activities"
    ],
    duration: "45-60 minutes",
    frequency: "2-3 times per week",
    ageRange: "3-12 years"
  },
  {
    name: "Social Skills Training",
    description: "Develop social interaction and communication skills",
    longDescription: "Structured social skills training programs in Kuwait designed to help children learn and practice essential social interaction skills. Our programs use evidence-based methods including role-playing, group activities, and real-world practice to build confidence in social situations.",
    icon: "people-circle-outline",
    category: "Training",
    rating: 4.7,
    reviews: 89,
    providers: 20,
    color: "#E07A5F",
    benefits: [
      "Improved social interactions",
      "Better understanding of social cues",
      "Enhanced friendship skills",
      "Increased confidence in social settings",
      "Better conflict resolution"
    ],
    duration: "60 minutes",
    frequency: "1-2 times per week",
    ageRange: "5-18 years"
  },
  {
    name: "Early Intervention",
    description: "Support for infants and toddlers with developmental delays",
    longDescription: "Comprehensive early intervention services in Kuwait for infants and toddlers (0-3 years) showing signs of developmental delays. Our multidisciplinary team provides timely support to maximize each child's developmental potential during these critical early years.",
    icon: "flower-outline",
    category: "Intervention",
    rating: 4.9,
    reviews: 143,
    providers: 30,
    color: "#FFB627",
    benefits: [
      "Early identification of delays",
      "Faster developmental progress",
      "Family support and education",
      "Improved long-term outcomes",
      "Reduced need for intensive services later"
    ],
    duration: "45-60 minutes",
    frequency: "2-4 times per week",
    ageRange: "0-3 years"
  },
  {
    name: "Assistive Technology",
    description: "Technology solutions to enhance learning and communication",
    longDescription: "Assistive technology services in Kuwait providing assessments, training, and support for children who benefit from technology aids. We help families find and implement the right assistive devices and software to support communication, learning, and daily living.",
    icon: "tablet-portrait-outline",
    category: "Technology",
    rating: 4.5,
    reviews: 54,
    providers: 10,
    color: "#4A90E2",
    benefits: [
      "Improved communication",
      "Enhanced learning opportunities",
      "Increased independence",
      "Better access to education",
      "Customized technology solutions"
    ],
    duration: "60-90 minutes",
    frequency: "As needed",
    ageRange: "3-18 years"
  },
  {
    name: "Play Therapy",
    description: "Therapeutic play to support emotional and social development",
    longDescription: "Professional play therapy services in Kuwait using play as a medium for children to express themselves, process emotions, and develop social skills. Our certified play therapists create a safe, supportive environment where children can explore and grow through play.",
    icon: "game-controller-outline",
    category: "Therapy",
    rating: 4.6,
    reviews: 71,
    providers: 14,
    color: "#FF6B6B",
    benefits: [
      "Emotional expression and processing",
      "Improved social skills",
      "Enhanced creativity and imagination",
      "Better problem-solving abilities",
      "Reduced anxiety and stress"
    ],
    duration: "45-50 minutes",
    frequency: "1-2 times per week",
    ageRange: "3-12 years"
  },
  {
    name: "Nutrition Counseling",
    description: "Specialized nutrition support for children with special needs",
    longDescription: "Expert nutrition counseling services in Kuwait for children with special dietary needs, feeding difficulties, or nutritional concerns. Our registered dietitians work with families to develop personalized nutrition plans that support overall health and development.",
    icon: "restaurant-outline",
    category: "Health",
    rating: 4.7,
    reviews: 58,
    providers: 8,
    color: "#95E1D3",
    benefits: [
      "Personalized nutrition plans",
      "Improved feeding skills",
      "Better nutritional status",
      "Support for dietary restrictions",
      "Enhanced overall health"
    ],
    duration: "45-60 minutes",
    frequency: "Monthly or as needed",
    ageRange: "0-18 years"
  }
];
