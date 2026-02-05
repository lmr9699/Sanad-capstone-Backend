/**
 * Professionals Seed Data
 * Based on professional information from the frontend screens
 */

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
  services: string[];
  location: string;
  consultationFee: string;
  nextAvailable: string;
  email?: string;
  phone?: string;
  centerId?: string; // Will be set after creating centers
}

export const professionalsSeed: ProfessionalSeed[] = [
  {
    name: "Dr. Sarah Ahmed",
    specialty: "speech",
    specialtyLabel: "Speech Therapist",
    experience: "10 years",
    rating: 4.9,
    reviews: 127,
    availability: "Available today",
    verified: true,
    color: "#7FB77E",
    bio: "Dr. Sarah Ahmed is a certified speech-language pathologist specializing in pediatric speech and language disorders. With over 10 years of experience, she has helped hundreds of children improve their communication skills through evidence-based therapy techniques.",
    education: [
      "PhD in Speech-Language Pathology, King Saud University",
      "MSc in Communication Disorders, American University",
    ],
    certifications: [
      "Board Certified Specialist in Child Language",
      "PROMPT Certified",
      "Hanen Certified",
    ],
    languages: ["Arabic", "English"],
    services: [
      "Speech Delay Therapy",
      "Articulation Therapy",
      "Language Development",
      "Fluency Disorders",
    ],
    location: "Riyadh, Saudi Arabia",
    consultationFee: "250 SAR",
    nextAvailable: "Today, 3:00 PM",
    email: "sarah.ahmed@example.com",
    phone: "+966501234567",
  },
  {
    name: "Dr. Mohammed Ali",
    specialty: "behavioral",
    specialtyLabel: "Behavioral Specialist",
    experience: "8 years",
    rating: 4.8,
    reviews: 98,
    availability: "Next available: Tomorrow",
    verified: true,
    color: "#E8A838",
    bio: "Dr. Mohammed Ali is a board-certified behavior analyst (BCBA) specializing in Applied Behavior Analysis (ABA) for children with autism and developmental disorders. He focuses on creating individualized treatment plans that help children reach their full potential.",
    education: [
      "Master's in Applied Behavior Analysis, Florida Institute of Technology",
      "Bachelor's in Psychology, King Fahd University",
    ],
    certifications: [
      "Board Certified Behavior Analyst (BCBA)",
      "Registered Behavior Technician Supervisor",
    ],
    languages: ["Arabic", "English"],
    services: [
      "ABA Therapy",
      "Behavior Modification",
      "Social Skills Training",
      "Parent Training",
    ],
    location: "Jeddah, Saudi Arabia",
    consultationFee: "300 SAR",
    nextAvailable: "Tomorrow, 10:00 AM",
    email: "mohammed.ali@example.com",
    phone: "+966502345678",
  },
  {
    name: "Dr. Fatima Hassan",
    specialty: "occupational",
    specialtyLabel: "Occupational Therapist",
    experience: "12 years",
    rating: 4.9,
    reviews: 156,
    availability: "Available today",
    verified: true,
    color: "#5F8F8B",
    bio: "Dr. Fatima Hassan is an experienced occupational therapist who helps children develop the skills they need for daily living and academic success. She specializes in sensory integration therapy and fine motor skill development.",
    education: [
      "Doctorate in Occupational Therapy, University of Jordan",
      "BSc in Occupational Therapy, Cairo University",
    ],
    certifications: [
      "Sensory Integration and Praxis Tests (SIPT) Certified",
      "Handwriting Without Tears Certified",
    ],
    languages: ["Arabic", "English", "French"],
    services: [
      "Sensory Integration Therapy",
      "Fine Motor Skills Development",
      "Self-Care Training",
      "School Readiness",
    ],
    location: "Riyadh, Saudi Arabia",
    consultationFee: "275 SAR",
    nextAvailable: "Today, 5:00 PM",
    email: "fatima.hassan@example.com",
    phone: "+966503456789",
  },
  {
    name: "Dr. Omar Khalid",
    specialty: "educational",
    specialtyLabel: "Educational Psychologist",
    experience: "6 years",
    rating: 4.7,
    reviews: 67,
    availability: "Next available: Wed",
    verified: true,
    color: "#7B68EE",
    bio: "Dr. Omar Khalid is an educational psychologist dedicated to helping children with learning differences achieve academic success. He conducts comprehensive assessments and develops personalized learning strategies.",
    education: [
      "PhD in Educational Psychology, University of Edinburgh",
      "MA in Special Education, Lebanese American University",
    ],
    certifications: [
      "Licensed Educational Psychologist",
      "Certified Learning Disabilities Specialist",
    ],
    languages: ["Arabic", "English"],
    services: [
      "Psychological Assessment",
      "Learning Disability Evaluation",
      "IEP Development",
      "Academic Counseling",
    ],
    location: "Dammam, Saudi Arabia",
    consultationFee: "350 SAR",
    nextAvailable: "Wednesday, 11:00 AM",
    email: "omar.khalid@example.com",
    phone: "+966504567890",
  },
  {
    name: "Dr. Layla Mansour",
    specialty: "speech",
    specialtyLabel: "Speech Therapist",
    experience: "15 years",
    rating: 5.0,
    reviews: 203,
    availability: "Available today",
    verified: true,
    color: "#7FB77E",
    bio: "Dr. Layla Mansour is one of the most experienced speech therapists in the region, with 15 years of expertise in treating children with complex communication disorders. She is known for her patient-centered approach and exceptional outcomes.",
    education: [
      "PhD in Communication Sciences, Boston University",
      "MSc in Speech-Language Pathology, McGill University",
    ],
    certifications: [
      "ASHA Certified",
      "PROMPT Level 3 Instructor",
      "AAC Specialist",
    ],
    languages: ["Arabic", "English", "French"],
    services: [
      "Complex Communication Disorders",
      "Augmentative Communication (AAC)",
      "Childhood Apraxia of Speech",
      "Feeding and Swallowing",
    ],
    location: "Riyadh, Saudi Arabia",
    consultationFee: "400 SAR",
    nextAvailable: "Today, 4:30 PM",
    email: "layla.mansour@example.com",
    phone: "+966505678901",
  },
  {
    name: "Dr. Youssef Ibrahim",
    specialty: "behavioral",
    specialtyLabel: "Behavioral Analyst",
    experience: "9 years",
    rating: 4.8,
    reviews: 112,
    availability: "Available today",
    verified: true,
    color: "#E8A838",
    bio: "Dr. Youssef Ibrahim specializes in behavioral interventions for children with autism spectrum disorder. His approach combines ABA principles with naturalistic teaching strategies to promote meaningful skill development.",
    education: [
      "Master's in Behavior Analysis, Western Michigan University",
      "Bachelor's in Psychology, American University of Sharjah",
    ],
    certifications: [
      "Board Certified Behavior Analyst (BCBA)",
      "Early Start Denver Model (ESDM) Certified",
    ],
    languages: ["Arabic", "English"],
    services: [
      "Early Intervention",
      "Verbal Behavior Therapy",
      "Naturalistic Teaching",
      "Behavior Support Plans",
    ],
    location: "Jeddah, Saudi Arabia",
    consultationFee: "280 SAR",
    nextAvailable: "Today, 2:00 PM",
    email: "youssef.ibrahim@example.com",
    phone: "+966506789012",
  },
  {
    name: "Dr. Nour Al-Rashid",
    specialty: "occupational",
    specialtyLabel: "Occupational Therapist",
    experience: "7 years",
    rating: 4.6,
    reviews: 89,
    availability: "Next available: Thu",
    verified: false,
    color: "#5F8F8B",
    bio: "Dr. Nour Al-Rashid is an occupational therapist focusing on helping children with developmental delays and sensory processing challenges. She creates fun, engaging therapy sessions that motivate children to learn new skills.",
    education: [
      "MSc in Occupational Therapy, University of Toronto",
      "BSc in Rehabilitation Sciences, King Saud University",
    ],
    certifications: [
      "Certified Autism Specialist",
      "DIR/Floortime Trained",
    ],
    languages: ["Arabic", "English"],
    services: [
      "Developmental Delay Therapy",
      "Sensory Processing",
      "Play-Based Therapy",
      "Visual Motor Skills",
    ],
    location: "Riyadh, Saudi Arabia",
    consultationFee: "250 SAR",
    nextAvailable: "Thursday, 9:00 AM",
    email: "nour.alrashid@example.com",
    phone: "+966507890123",
  },
  {
    name: "Dr. Ahmed Mahmoud",
    specialty: "physical",
    specialtyLabel: "Physical Therapist",
    experience: "11 years",
    rating: 4.9,
    reviews: 145,
    availability: "Available today",
    verified: true,
    color: "#D9534F",
    bio: "Dr. Ahmed Mahmoud is a pediatric physical therapist specializing in gross motor development and rehabilitation. He works with children of all ages to improve mobility, strength, and coordination through evidence-based interventions.",
    education: [
      "Doctorate in Physical Therapy, University of Southern California",
      "BSc in Physical Therapy, Ain Shams University",
    ],
    certifications: [
      "Pediatric Clinical Specialist (PCS)",
      "NDT Certified",
      "Kinesio Taping Certified",
    ],
    languages: ["Arabic", "English"],
    services: [
      "Gross Motor Development",
      "Gait Training",
      "Strength and Balance",
      "Post-Surgery Rehabilitation",
    ],
    location: "Riyadh, Saudi Arabia",
    consultationFee: "275 SAR",
    nextAvailable: "Today, 1:00 PM",
    email: "ahmed.mahmoud@example.com",
    phone: "+966508901234",
  },
];

export default professionalsSeed;
