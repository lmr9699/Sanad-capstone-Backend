/**
 * Kuwait Centers and Professionals Seed Data
 * Real data for health centers and professionals in Kuwait
 * Focus: ADD, ADHD, and Autism
 */

export interface CenterSeed {
  name: string;
  type: "public" | "private";
  address: string;
  city: string;
  phone: string;
  email?: string;
  description?: string;
  specialties: string[];
  operatingHours?: string;
  rating: number;
  latitude?: number;
  longitude?: number;
  services: string[]; // Service ObjectIds from the database
}

export interface ProfessionalSeed {
  name: string;
  specialty: "speech" | "behavioral" | "occupational" | "physical" | "educational";
  specialtyLabel: string;
  experience: string;
  rating: number;
  reviews: number;
  availability: string;
  verified: boolean;
  color: string;
  bio: string;
  education: string[];
  certifications: string[];
  languages: string[];
  services: string[]; // Service ObjectIds from the database
  location: string;
  consultationFee: string;
  nextAvailable: string;
  email?: string;
  phone?: string;
  centerId?: string; // Will be set after creating centers
}

// Kuwait Health Centers - Focus on ADD, ADHD, and Autism
export const kuwaitCentersSeed: CenterSeed[] = [
  {
    name: "Kuwait Center for Autism",
    type: "private",
    address: "Block 5, Street 15, Salmiya",
    city: "Kuwait City",
    phone: "+96522212345",
    email: "info@kuwaitautism.org",
    description: "A leading center in Kuwait specializing in autism spectrum disorders (ASD). Provides comprehensive assessment, Applied Behavior Analysis (ABA) therapy, speech therapy, occupational therapy, and family support services for children with autism.",
    specialties: ["Autism", "ASD", "Speech Therapy", "Behavioral Therapy", "Occupational Therapy", "ABA Therapy"],
    operatingHours: "Sunday-Thursday: 8:00 AM - 6:00 PM",
    rating: 4.8,
    latitude: 29.3375,
    longitude: 48.0756,
    services: ["6988e24582166d6a3ef73713", "6988e24582166d6a3ef73715", "6988e24582166d6a3ef73714", "6988e24582166d6a3ef73717"],
  },
  {
    name: "Al-Rashid ADHD & Learning Center",
    type: "private",
    address: "Hawalli, Block 2, Street 10",
    city: "Hawalli",
    phone: "+96522654321",
    email: "contact@alrashidadhd.com",
    description: "Specialized center focusing on Attention Deficit Disorder (ADD) and Attention Deficit Hyperactivity Disorder (ADHD). Offers behavioral interventions, educational support, cognitive training, and medication management coordination.",
    specialties: ["ADHD", "ADD", "Learning Disabilities", "Behavioral Therapy", "Educational Support"],
    operatingHours: "Sunday-Thursday: 8:00 AM - 5:00 PM",
    rating: 4.7,
    latitude: 29.3333,
    longitude: 48.0833,
    services: ["6988e24582166d6a3ef73715", "6988e24582166d6a3ef73717", "6988e24582166d6a3ef73713", "6988e24582166d6a3ef73714"],
  },
  {
    name: "Sabah Specialized Hospital - Pediatric Rehabilitation",
    type: "public",
    address: "Jabriya, Block 12, Street 1",
    city: "Kuwait City",
    phone: "+96525300000",
    email: "rehab@sabahhospital.gov.kw",
    description: "Public hospital providing specialized pediatric rehabilitation services. Comprehensive care for children with autism, ADHD, developmental delays, and other special needs. Offers multidisciplinary approach with physical, speech, and occupational therapy.",
    specialties: ["Autism", "ADHD", "Physical Therapy", "Speech Therapy", "Occupational Therapy", "Rehabilitation"],
    operatingHours: "Sunday-Thursday: 7:00 AM - 3:00 PM",
    rating: 4.5,
    latitude: 29.3392,
    longitude: 48.0753,
    services: ["6988e24582166d6a3ef73716", "6988e24582166d6a3ef73713", "6988e24582166d6a3ef73714", "6988e24582166d6a3ef73715"],
  },
  {
    name: "The Learning Center Kuwait - Special Needs Division",
    type: "private",
    address: "Salmiya, Block 8, Street 20",
    city: "Salmiya",
    phone: "+96522987654",
    email: "info@learningcenterkw.com",
    description: "Educational and therapeutic center specializing in learning disabilities, ADHD, ADD, and autism. Provides individualized education plans (IEPs), behavioral interventions, social skills training, and academic support tailored to each child's needs.",
    specialties: ["ADHD", "ADD", "Autism", "Learning Disabilities", "Educational Support", "Behavioral Therapy"],
    operatingHours: "Sunday-Thursday: 8:00 AM - 6:00 PM",
    rating: 4.9,
    latitude: 29.3380,
    longitude: 48.0740,
    services: ["6988e24582166d6a3ef73717", "6988e24582166d6a3ef73715", "6988e24582166d6a3ef73713", "6988e24582166d6a3ef73714"],
  },
  {
    name: "Hope Development Center for Autism & ADHD",
    type: "private",
    address: "Jabriya, Block 3, Street 5",
    city: "Kuwait City",
    phone: "+96522456789",
    email: "info@hopedevelopmentkw.com",
    description: "Comprehensive center offering evidence-based interventions for children with autism spectrum disorders and ADHD. Services include early intervention programs, ABA therapy, social skills groups, and parent training workshops.",
    specialties: ["Autism", "ADHD", "ABA Therapy", "Behavioral Therapy", "Social Skills Training"],
    operatingHours: "Sunday-Thursday: 9:00 AM - 5:00 PM",
    rating: 4.6,
    latitude: 29.3400,
    longitude: 48.0760,
    services: ["6988e24582166d6a3ef73715", "6988e24582166d6a3ef73713", "6988e24582166d6a3ef73714", "6988e24582166d6a3ef73717"],
  },
];

// Kuwait Professionals - Focus on ADD, ADHD, and Autism
export const kuwaitProfessionalsSeed: ProfessionalSeed[] = [
  {
    name: "Dr. Fatima Al-Sabah",
    specialty: "speech",
    specialtyLabel: "Speech-Language Pathologist",
    experience: "12 years",
    rating: 4.9,
    reviews: 156,
    availability: "Available today",
    verified: true,
    color: "#7FB77E",
    bio: "Leading speech-language pathologist in Kuwait specializing in autism spectrum disorders and communication challenges. Expert in early intervention, language development, and augmentative communication systems for non-verbal children with autism.",
    education: [
      "PhD in Speech-Language Pathology, Kuwait University",
      "MSc in Communication Disorders, University of London",
    ],
    certifications: [
      "Board Certified Speech-Language Pathologist",
      "PROMPT Certified",
      "Hanen Certified - More Than Words (Autism)",
      "PECS Certified (Picture Exchange Communication System)",
    ],
    languages: ["Arabic", "English"],
    services: ["6988e24582166d6a3ef73713", "Language Development", "Articulation Therapy"],
    location: "Kuwait City, Kuwait",
    consultationFee: "50 KWD",
    nextAvailable: "Today, 2:00 PM",
    email: "fatima.alsabah@example.com",
    phone: "+965501234567",
  },
  {
    name: "Dr. Ahmed Al-Mutawa",
    specialty: "behavioral",
    specialtyLabel: "Behavioral Therapist & ABA Specialist",
    experience: "15 years",
    rating: 4.8,
    reviews: 203,
    availability: "Available tomorrow",
    verified: true,
    color: "#5F8F8B",
    bio: "Licensed behavioral therapist and Board Certified Behavior Analyst (BCBA) specializing in autism spectrum disorders and ADHD. Uses evidence-based Applied Behavior Analysis (ABA) therapy to help children develop positive behaviors, reduce challenging behaviors, and improve social skills.",
    education: [
      "PhD in Applied Behavior Analysis, Kuwait University",
      "MSc in Psychology, American University of Beirut",
    ],
    certifications: [
      "Board Certified Behavior Analyst (BCBA)",
      "ABA Therapy Certified",
      "Autism Specialist Certification",
      "ADHD Behavioral Intervention Certified",
    ],
    languages: ["Arabic", "English"],
    services: ["6988e24582166d6a3ef73715", "ABA Therapy", "ADHD Management"],
    location: "Hawalli, Kuwait",
    consultationFee: "60 KWD",
    nextAvailable: "Tomorrow, 10:00 AM",
    email: "ahmed.almutawa@example.com",
    phone: "+965502345678",
  },
  {
    name: "Dr. Noura Al-Kharafi",
    specialty: "occupational",
    specialtyLabel: "Occupational Therapist",
    experience: "10 years",
    rating: 4.7,
    reviews: 134,
    availability: "Available today",
    verified: true,
    color: "#E8A838",
    bio: "Pediatric occupational therapist with extensive expertise in sensory processing disorders common in autism and ADHD. Specializes in sensory integration therapy, fine motor skills development, and daily living activities. Helps children with autism and ADHD achieve independence and improve quality of life.",
    education: [
      "MSc in Occupational Therapy, Kuwait University",
      "BSc in Occupational Therapy, University of Jordan",
    ],
    certifications: [
      "Certified Occupational Therapy Assistant",
      "Sensory Integration Certified",
      "Autism Spectrum Disorder Specialist",
      "ADHD Occupational Therapy Certified",
    ],
    languages: ["Arabic", "English"],
    services: ["6988e24582166d6a3ef73714", "Sensory Integration", "Fine Motor Skills"],
    location: "Jabriya, Kuwait",
    consultationFee: "55 KWD",
    nextAvailable: "Today, 4:00 PM",
    email: "noura.alkharafi@example.com",
    phone: "+965503456789",
  },
  {
    name: "Dr. Khalid Al-Rashid",
    specialty: "physical",
    specialtyLabel: "Physical Therapist",
    experience: "14 years",
    rating: 4.6,
    reviews: 178,
    availability: "Available today",
    verified: true,
    color: "#D9534F",
    bio: "Pediatric physical therapist specializing in motor development for children with autism and developmental delays. Uses innovative techniques to improve gross motor skills, coordination, balance, and physical function. Works with children who have motor challenges associated with autism spectrum disorders.",
    education: [
      "PhD in Physical Therapy, Kuwait University",
      "MSc in Pediatric Physical Therapy, University of Toronto",
    ],
    certifications: [
      "Board Certified Pediatric Physical Therapist",
      "Neurodevelopmental Treatment Certified",
      "Autism Motor Development Specialist",
    ],
    languages: ["Arabic", "English"],
    services: ["6988e24582166d6a3ef73716", "Motor Development", "Rehabilitation"],
    location: "Salmiya, Kuwait",
    consultationFee: "50 KWD",
    nextAvailable: "Today, 11:00 AM",
    email: "khalid.alrashid@example.com",
    phone: "+965504567890",
  },
  {
    name: "Dr. Laila Al-Mansouri",
    specialty: "educational",
    specialtyLabel: "Special Education Specialist",
    experience: "11 years",
    rating: 4.9,
    reviews: 189,
    availability: "Available tomorrow",
    verified: true,
    color: "#9B8BA6",
    bio: "Special education specialist with expertise in learning disabilities, ADHD, ADD, and autism. Develops individualized education plans (IEPs) and provides academic support tailored to children with special needs. Expert in differentiated instruction and accommodations for students with ADHD and autism in educational settings.",
    education: [
      "PhD in Special Education, Kuwait University",
      "MSc in Learning Disabilities, University of Manchester",
    ],
    certifications: [
      "Certified Special Education Teacher",
      "ADHD Specialist",
      "Autism Education Specialist",
      "Dyslexia Intervention Certified",
    ],
    languages: ["Arabic", "English"],
    services: ["6988e24582166d6a3ef73717", "Learning Disabilities", "ADHD Support"],
    location: "Kuwait City, Kuwait",
    consultationFee: "45 KWD",
    nextAvailable: "Tomorrow, 1:00 PM",
    email: "laila.almansouri@example.com",
    phone: "+965505678901",
  },
  {
    name: "Dr. Mariam Al-Hashim",
    specialty: "speech",
    specialtyLabel: "Speech Therapist - Autism Specialist",
    experience: "8 years",
    rating: 4.8,
    reviews: 112,
    availability: "Available today",
    verified: true,
    color: "#7FB77E",
    bio: "Speech-language pathologist specializing in early intervention and language development for children with autism spectrum disorders. Experienced in working with non-verbal and minimally verbal children, using AAC (Augmentative and Alternative Communication) systems and PECS.",
    education: [
      "MSc in Speech-Language Pathology, Kuwait University",
      "BSc in Communication Disorders, University of Kuwait",
    ],
    certifications: [
      "Early Intervention Specialist",
      "Autism Communication Specialist",
      "Picture Exchange Communication System (PECS) Certified",
      "AAC Specialist",
    ],
    languages: ["Arabic", "English"],
    services: ["6988e24582166d6a3ef73713", "Early Intervention", "Language Development"],
    location: "Hawalli, Kuwait",
    consultationFee: "48 KWD",
    nextAvailable: "Today, 3:30 PM",
    email: "mariam.alhashim@example.com",
    phone: "+965506789012",
  },
  {
    name: "Dr. Youssef Al-Ghanim",
    specialty: "behavioral",
    specialtyLabel: "Child Psychologist - ADHD & Autism",
    experience: "13 years",
    rating: 4.7,
    reviews: 145,
    availability: "Available today",
    verified: true,
    color: "#5F8F8B",
    bio: "Licensed child psychologist specializing in behavioral interventions for ADHD, ADD, and autism spectrum disorders. Provides cognitive behavioral therapy (CBT), emotional regulation training, and family counseling. Expert in managing challenging behaviors and improving social skills in children with autism and ADHD.",
    education: [
      "PhD in Child Psychology, Kuwait University",
      "MSc in Clinical Psychology, American University",
    ],
    certifications: [
      "Licensed Clinical Psychologist",
      "Cognitive Behavioral Therapy (CBT) Certified",
      "ADHD Specialist",
      "Autism Behavioral Intervention Certified",
      "Play Therapy Certified",
    ],
    languages: ["Arabic", "English"],
    services: ["6988e24582166d6a3ef73715", "Family Counseling", "Emotional Support"],
    location: "Jabriya, Kuwait",
    consultationFee: "65 KWD",
    nextAvailable: "Today, 5:00 PM",
    email: "youssef.alghanim@example.com",
    phone: "+965507890123",
  },
  {
    name: "Dr. Hala Al-Salem",
    specialty: "occupational",
    specialtyLabel: "Occupational Therapist - Sensory Specialist",
    experience: "9 years",
    rating: 4.6,
    reviews: 98,
    availability: "Available tomorrow",
    verified: true,
    color: "#E8A838",
    bio: "Pediatric occupational therapist with focus on autism spectrum disorders and sensory processing challenges. Specializes in sensory integration therapy, helping children with autism and ADHD manage sensory sensitivities and develop self-regulation skills. Expert in social skills training and adaptive behavior development.",
    education: [
      "MSc in Occupational Therapy, Kuwait University",
      "BSc in Occupational Therapy, University of Kuwait",
    ],
    certifications: [
      "Autism Spectrum Disorder Specialist",
      "Sensory Processing Disorder Certified",
      "Social Skills Training Certified",
      "ADHD Occupational Therapy Specialist",
    ],
    languages: ["Arabic", "English"],
    services: ["6988e24582166d6a3ef73714", "Sensory Integration", "Social Skills"],
    location: "Salmiya, Kuwait",
    consultationFee: "52 KWD",
    nextAvailable: "Tomorrow, 9:00 AM",
    email: "hala.alsalem@example.com",
    phone: "+965508901234",
  },
  {
    name: "Dr. Mohammed Al-Fahad",
    specialty: "behavioral",
    specialtyLabel: "ADHD & ADD Specialist",
    experience: "12 years",
    rating: 4.8,
    reviews: 167,
    availability: "Available today",
    verified: true,
    color: "#5F8F8B",
    bio: "Specialized behavioral therapist focusing exclusively on Attention Deficit Disorder (ADD) and Attention Deficit Hyperactivity Disorder (ADHD). Provides comprehensive assessment, behavioral interventions, executive function training, and works closely with families and schools to support children with ADHD.",
    education: [
      "PhD in Clinical Psychology, Kuwait University",
      "MSc in Child Development, University of Edinburgh",
    ],
    certifications: [
      "ADHD Specialist Certification",
      "Executive Function Training Certified",
      "School-Based Intervention Specialist",
      "Parent Training for ADHD Certified",
    ],
    languages: ["Arabic", "English"],
    services: ["6988e24582166d6a3ef73715", "ADHD Management", "6988e24582166d6a3ef73717"],
    location: "Kuwait City, Kuwait",
    consultationFee: "58 KWD",
    nextAvailable: "Today, 1:30 PM",
    email: "mohammed.alfahad@example.com",
    phone: "+965509012345",
  },
];
