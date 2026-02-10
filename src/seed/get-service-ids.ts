/**
 * Script to get Service ObjectIds from database
 * Run: ts-node src/seed/get-service-ids.ts
 */

import mongoose from "mongoose";
import connectDB from "../config/db";
import Service from "../models/Service.model";

const getServiceIds = async () => {
  try {
    // Connect to database
    console.log("Connecting to database...");
    await connectDB();
    console.log("✅ Connected to database\n");

    // Get all services
    const services = await Service.find({}).select("_id name").sort({ name: 1 });

    if (services.length === 0) {
      console.log("❌ No services found in database. Please seed services first.");
      process.exit(1);
    }

    console.log("📋 Services with ObjectIds:\n");
    services.forEach((service) => {
      console.log(`${service.name}: ${service._id.toString()}`);
    });

    console.log("\n📝 Copy the ObjectIds above to use in your seed files.");
    process.exit(0);
  } catch (error) {
    console.error("\n❌ Error fetching services:", error);
    process.exit(1);
  }
};

// Run if executed directly
if (require.main === module) {
  getServiceIds();
}

export default getServiceIds;
