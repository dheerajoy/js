const mongoose = require("mongoose");

async function runAggregation() {
  try {
    // Connect to MongoDB using Mongoose
    await mongoose.connect(
      "mongodb://3EcoProductionLiveAdmin:3EcoAdminProductionLive3548768454321231321464654321321@15.207.255.56:40017/3Eco_Production",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("mongodb connected!");

    // Get the raw MongoDB connection object from Mongoose
    const db = mongoose.connection.db; // This gives you the raw MongoDB connection

    // Define your aggregation pipeline
    const aggregationPipeline = [
      {
        $match: {
          createdAt: {
            $gt: "2024-11-15T18:30:00.000Z",
            $lt: "2024-11-20T18:29:59.999Z",
          },
        },
      },
      {
        $lookup: {
          from: "Vehicle",
          localField: "vehicleId",
          foreignField: "_id",
          as: "VehicleDetails",
        },
      },
      { $unwind: "$VehicleDetails" },
      {
        $lookup: {
          from: "FON",
          localField: "fonId",
          foreignField: "_id",
          as: "fonDetails",
        },
      },
      { $unwind: "$fonDetails" },
      {
        $lookup: {
          from: "FOS",
          localField: "fosId",
          foreignField: "_id",
          as: "fosDetails",
        },
      },
      { $unwind: "$fosDetails" },
      {
        $lookup: {
          from: "User",
          localField: "cproId",
          foreignField: "_id",
          as: "CProDetails",
        },
      },
      { $unwind: "$CProDetails" },
      {
        $project: {
          _id: 0,
          date: 1,
          Reg_no: "$VehicleDetails.rtoRegistrationNo",
          FM: "$CProDetails.name",
          FON: "$fonDetails.fonCode",
          Location: "$fosDetails.name",
          Location_Code: "$fosDetails.code",
          VH_Status: "$currentStatus",
        },
      },
    ];
    // Run the aggregation directly on the "Shift" collection using MongoDB's native driver
    const result = await db
      .collection("VehiclePerDayLog")
      .aggregate(aggregationPipeline)
      .toArray();

    console.log("Aggregation Result:", result);

    if (result.length === 0) {
      console.log(
        "No data returned. Check if there is data matching the aggregation criteria."
      );
    }
  } catch (error) {
    console.error("Error running aggregation:", error);
  } finally {
    await mongoose.disconnect();
    console.log("mongodb disconnected!");
  }
}

runAggregation().catch(console.dir);
