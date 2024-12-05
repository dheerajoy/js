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
            $gte: "2024-11-30T18:30:00.000Z",
            $lte: "2024-12-02T18:29:59.999Z",
          },
        },
      },
      {
        $lookup: {
          from: "FON",
          let: { fonId: "$fonId" },
          pipeline: [
            {
              $match: {
                $expr: { $eq: ["$_id", "$$fonId"] },
              },
            },
            { $project: { fonCode: 1, _id: 0 } },
          ],
          as: "fonDetails",
        },
      },
      {
        $addFields: {
          FON: { $arrayElemAt: ["$fonDetails.fonCode", 0] },
        },
      },
      {
        $lookup: {
          from: "FOS",
          let: { fosId: "$fosId" },
          pipeline: [
            {
              $match: {
                $expr: { $eq: ["$_id", "$$fosId"] },
              },
            },
            { $project: { code: 1, _id: 0 } },
          ],
          as: "fosDetails",
        },
      },
      {
        $addFields: {
          locationCode: { $arrayElemAt: ["$fosDetails.code", 0] },
        },
      },
      {
        $lookup: {
          from: "FOSN",
          let: { fosnId: "$fosnId" },
          pipeline: [
            {
              $match: {
                $expr: { $eq: ["$_id", "$$fosnId"] },
              },
            },
            { $project: { fosnCode: 1, _id: 0 } },
          ],
          as: "fosnDetails",
        },
      },
      {
        $addFields: {
          FOS: { $arrayElemAt: ["$fosnDetails.fosnCode", 0] },
        },
      },
      {
        $lookup: {
          from: "Shift",
          let: { vehicleId: "$vehicleId" },
          pipeline: [
            {
              $match: {
                $expr: { $eq: ["$vehicleId", "$$vehicleId"] },
                createdAt: {
                  $gte: "2024-11-30T18:30:00.000Z",
                  $lte: "2024-12-02T18:29:59.999Z",
                },
              },
            },
            {
              $project: {
                totalRevenue: 1,
                accountId: 1,
                sproId: 1,
                _id: 0,
              },
            },
          ],
          as: "shiftDetails",
        },
      },
      {
        $addFields: {
          totalRevenue: { $arrayElemAt: ["$shiftDetails.totalRevenue", 0] },
        },
      },
      {
        $lookup: {
          from: "SPro",
          localField: "shiftDetails.sproId",
          foreignField: "_id",
          as: "sproDetails",
        },
      },
      {
        $unwind: {
          path: "$sproDetails",
        },
      },
      {
        $lookup: {
          from: "User",
          localField: "cproId",
          foreignField: "_id",
          as: "cproDetails",
        },
      },
      {
        $unwind: {
          path: "$cproDetails",
        },
      },
      {
        $lookup: {
          from: "EnterpriseCustomer",
          localField: "shiftDetails.accountId",
          foreignField: "_id",
          as: "accountDetails",
        },
      },
      {
        $unwind: {
          path: "$accountDetails",
        },
      },
      {
        $lookup: {
          from: "Master",
          localField: "accountDetails.customer",
          foreignField: "_id",
          as: "customerDetails",
        },
      },
      {
        $unwind: {
          path: "$customerDetails",
        },
      },
      {
        $lookup: {
          from: "Vehicle",
          localField: "vehicleId",
          foreignField: "_id",
          as: "vehicleDetails",
        },
      },
      {
        $unwind: {
          path: "$vehicleDetails",
        },
      },
      {
        $project: {
          _id: 0,
          FON: 1,
          locationCode: 1,
          FOS: 1,
          VehNo: "$vehicleDetails.vin",
          VH_Status: "$currentStatus",
          FM: "$cproDetails.name",
          date: {
            $dateToString: {
              format: "%Y-%m-%d",
              date: {
                $add: [
                  {
                    $dateFromString: {
                      dateString: "$createdAt",
                    },
                  },
                  19800000,
                ],
              },
            },
          },
          totalRevenue: 1,
          Customer: "$customerDetails.name",
          CustomerCode: "$customerDetails.code",
          Spro_ID: "$sproDetails.empId",
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
