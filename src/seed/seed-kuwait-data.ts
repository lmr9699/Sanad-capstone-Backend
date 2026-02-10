/**
 * Seed script for Kuwait Centers and Professionals
 * Run: ts-node src/seed/seed-kuwait-data.ts
 */

import mongoose from "mongoose";
import connectDB from "../config/db";
import Center from "../models/Center.model";
import Professional from "../models/Professional.model";
import {
  kuwaitCentersSeed,
  kuwaitProfessionalsSeed,
} from "./data/kuwait-centers-professionals";

const seedKuwaitData = async () => {
  try {
    // Connect to database
    console.log("Connecting to database...");
    await connectDB();
    console.log("✅ Connected to database\n");

    // Step 1: Clear existing centers and professionals (optional - comment out if you want to keep existing)
    console.log("Clearing existing data...");
    const deleteCenters = await Center.deleteMany({});
    const deleteProfessionals = await Professional.deleteMany({});
    console.log(`✅ Cleared ${deleteCenters.deletedCount} centers`);
    console.log(`✅ Cleared ${deleteProfessionals.deletedCount} professionals\n`);

    // Step 2: Seed Centers
    console.log("Seeding centers...");
    const centersToInsert = kuwaitCentersSeed.map((center) => ({
      name: center.name,
      type: center.type,
      address: center.address,
      city: center.city,
      phone: center.phone,
      email: center.email,
      description: center.description,
      specialties: center.specialties,
      operatingHours: center.operatingHours,
      rating: center.rating,
      latitude: center.latitude,
      longitude: center.longitude,
      // Convert string ObjectIds to mongoose ObjectIds
      services: center.services.map(
        (serviceId) => new mongoose.Types.ObjectId(serviceId)
      ),
    }));

    const createdCenters = await Center.insertMany(centersToInsert);
    console.log(`✅ Created ${createdCenters.length} centers`);

    // List created centers
    console.log("\n📋 Centers created:");
    createdCenters.forEach((center, index) => {
      console.log(
        `  ${index + 1}. ${center.name} (${center.type}) - Rating: ${center.rating} ⭐ - City: ${center.city}`
      );
    });

    // Step 3: Seed Professionals
    console.log("\nSeeding professionals...");
    const professionalsToInsert = kuwaitProfessionalsSeed.map((professional, index) => {
      // Optionally link professionals to centers (round-robin assignment)
      // You can modify this logic to match professionals to specific centers
      const centerId = createdCenters[index % createdCenters.length]._id;

      return {
        name: professional.name,
        specialty: professional.specialty,
        specialtyLabel: professional.specialtyLabel,
        experience: professional.experience,
        rating: professional.rating,
        reviews: professional.reviews,
        availability: professional.availability,
        verified: professional.verified,
        color: professional.color,
        bio: professional.bio,
        education: professional.education,
        certifications: professional.certifications,
        languages: professional.languages,
        // Convert string ObjectIds to mongoose ObjectIds
        // Filter out non-ObjectId strings (sub-services like "Language Development", "ABA Therapy", etc.)
        services: professional.services
          .filter((serviceId) => mongoose.Types.ObjectId.isValid(serviceId))
          .map((serviceId) => new mongoose.Types.ObjectId(serviceId)),
        location: professional.location,
        consultationFee: professional.consultationFee,
        nextAvailable: professional.nextAvailable,
        centerId: centerId, // Link to center
        email: professional.email,
        phone: professional.phone,
      };
    });

    const createdProfessionals = await Professional.insertMany(professionalsToInsert);
    console.log(`✅ Created ${createdProfessionals.length} professionals`);

    // List created professionals
    console.log("\n📋 Professionals created:");
    createdProfessionals.forEach((professional, index) => {
      console.log(
        `  ${index + 1}. ${professional.name} (${professional.specialtyLabel}) - Rating: ${professional.rating} ⭐ - ${professional.verified ? "✓ Verified" : "Not Verified"}`
      );
    });

    // Summary by specialty
    console.log("\n📊 Summary by Specialty:");
    const bySpecialty = createdProfessionals.reduce((acc, prof) => {
      acc[prof.specialty] = (acc[prof.specialty] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    Object.entries(bySpecialty).forEach(([specialty, count]) => {
      console.log(`  - ${specialty}: ${count} professional(s)`);
    });

    // Summary by center
    console.log("\n📊 Summary by Center:");
    createdCenters.forEach((center) => {
      const professionalsInCenter = createdProfessionals.filter(
        (prof) => prof.centerId?.toString() === center._id.toString()
      );
      console.log(
        `  - ${center.name}: ${professionalsInCenter.length} professional(s)`
      );
    });

    console.log("\n✅ Kuwait data seeding completed successfully!");
    console.log(`\n📊 Total Summary:`);
    console.log(`  - Centers: ${createdCenters.length}`);
    console.log(`  - Professionals: ${createdProfessionals.length}`);
    process.exit(0);
  } catch (error) {
    console.error("\n❌ Error seeding Kuwait data:", error);
    process.exit(1);
  }
};

// Run seed if this file is executed directly
if (require.main === module) {
  seedKuwaitData();
}

export default seedKuwaitData;
