const fs = require("fs");
const path = require("path");

// This is an optional utility script to generate more yacht data if needed
// It will create a total of 50 yachts by adding to the existing ones in yachts.json

// Load data files
const loadData = (filename) => {
  try {
    const data = fs.readFileSync(
      path.join(__dirname, "data/", filename),
      "utf8",
    );
    return JSON.parse(data);
  } catch (error) {
    console.error(`Error loading ${filename}:`, error);
    return [];
  }
};

// Generate yacht data for endpoints with more than 50 yachts
const generateYachts = () => {
  const baseYachts = loadData("yachts.json");
  const shipyards = loadData("shipyards.json");
  const companies = loadData("companies.json");
  const bases = loadData("bases.json");
  const yachtTypes = loadData("yacht-types.json");
  const equipment = loadData("equipment.json");

  // Calculate how many more yachts we need to reach 50
  const currentCount = baseYachts.length;
  const neededCount = 50 - currentCount;

  console.log(`Generating ${neededCount} additional yachts...`);

  // Generate additional yachts
  const additionalYachts = [];

  for (let i = 0; i < neededCount; i++) {
    const index = currentCount + i;
    const randomShipyard =
      shipyards[Math.floor(Math.random() * shipyards.length)];
    const randomCompany =
      companies[Math.floor(Math.random() * companies.length)];
    const randomBase = bases[Math.floor(Math.random() * bases.length)];
    const randomYachtType =
      yachtTypes[Math.floor(Math.random() * yachtTypes.length)];

    // Generate 3 random equipment items
    const randomEquipment = [];
    const equipmentIds = [];
    for (let j = 0; j < 3; j++) {
      const randomEquipItem =
        equipment[Math.floor(Math.random() * equipment.length)];
      equipmentIds.push(randomEquipItem.id);
      randomEquipment.push({
        value: randomEquipItem.name,
        id: randomEquipItem.id,
      });
    }

    const newYacht = {
      id: 8860335000799 + i,
      name: `Yacht ${index}`,
      model: `Model ${index}`,
      modelId: 428155400799 + i,
      shipyardId: randomShipyard.id,
      year: 2018 + Math.floor(Math.random() * 8),
      kind: randomYachtType.name,
      certificate: `C${i}${i}${i}${i}${i}${i}`,
      homeBaseId: randomBase.id,
      homeBase: randomBase.name,
      companyId: randomCompany.id,
      company: randomCompany.name,
      draught: 1.5 + Math.random() * 1.5,
      beam: 3 + Math.random() * 3,
      length: 10 + Math.random() * 15,
      waterCapacity: 150 + Math.floor(Math.random() * 250),
      fuelCapacity: 150 + Math.floor(Math.random() * 250),
      engine: `${50 + Math.floor(Math.random() * 700)} hp`,
      deposit: 1000 + Math.floor(Math.random() * 4000),
      currency: "EUR",
      commissionPercentage: 10 + Math.floor(Math.random() * 8),
      wc: 1 + Math.floor(Math.random() * 3),
      berths: 4 + Math.floor(Math.random() * 12),
      cabins: 2 + Math.floor(Math.random() * 6),
      wcNote: "Standard marine toilets",
      berthsNote: "Comfortable berths",
      cabinsNote: "Spacious cabins",
      transitLog: 100 + Math.floor(Math.random() * 100),
      mainsailArea: 40 + Math.floor(Math.random() * 50),
      genoaArea: 30 + Math.floor(Math.random() * 40),
      mainsailType: Math.random() > 0.5 ? "Furling" : "Classic",
      genoaType: Math.random() > 0.5 ? "Roller" : "Self Tacking Jib",
      requiredSkipperLicense: Math.random() > 0.2 ? 1 : 0,
      defaultCheckInDay: Math.floor(Math.random() * 7),
      defaultCheckInTime: "17:00",
      defaultCheckOutTime: "9:00",
      minimumCharterDuration: Math.random() > 0.3 ? 7 : 3,
      maxPeopleOnBoard: 6 + Math.floor(Math.random() * 10),
      images: [
        {
          name: `yacht-${index}.jpg`,
          description: "Yacht image",
          url: `http://www.booking-manager.com/image${index}`,
          sortOrder: 1,
        },
      ],
      equipmentIds: equipmentIds,
      equipment: randomEquipment,
      equipmentRaw: [
        {
          id: 667400400000100000 + i,
          parentId: equipmentIds[0],
          name: randomEquipment[0].value,
          value: "In good condition",
          categoryName: "Additional equipment",
        },
      ],
      products: [
        {
          name: Math.random() > 0.7 ? "Skippered" : "Bareboat",
          crewedByDefault: Math.random() > 0.7,
          isDefaultProduct: true,
          extras: [
            {
              id: 8860335000799 + i,
              name: Math.random() > 0.5 ? "Final cleaning" : "Fuel",
              obligatory: true,
              price: 100 + Math.floor(Math.random() * 500),
              currency: "EUR",
              unit: "per booking",
              payableInBase: true,
              includedDepositWaiver: false,
              validDaysFrom: 0,
              validDaysTo: 365,
              validForBases: [
                {
                  from: [randomBase.id],
                  to: [randomBase.sailingAreas[0]],
                },
              ],
              validDateFrom: "2019-01-01 00:00:00",
              validDateTo: "2025-12-31 00:00:00",
              description: "Mandatory fee",
              availableInBase: randomBase.id,
              validSailingAreas: randomBase.sailingAreas,
            },
          ],
        },
      ],
      descriptions: [
        {
          category: "general",
          text: `This is a description for ${randomYachtType.name} Yacht ${index}`,
          document: [
            {
              id: 4469909500000101000 + i,
              name: `yacht-${index}-doc.jpg`,
              description: "",
              url: `https://www.booking-manager.com/cbm/documents/4469910710000100${randomCompany.id}_yacht-${index}-doc.jpg`,
              sortOrder: 0,
            },
          ],
        },
      ],
      crew:
        Math.random() > 0.7
          ? [
              {
                name: `Captain ${index}`,
                description: `Experienced captain of Yacht ${index}`,
                age: 30 + Math.floor(Math.random() * 30),
                nationality: randomBase.country,
                roles: ["Captain"],
                licenses: `LICENSE-${index}`,
                languages: [
                  "English",
                  Math.random() > 0.5 ? "French" : "Italian",
                ],
                images: [
                  {
                    id: 4469909500000102000 + i,
                    name: `captain-${index}.jpg`,
                    description: "",
                    url: `https://www.booking-manager.com/cbm/documents/4469910710000100${randomCompany.id}_captain-${index}.jpg`,
                    sortOrder: 0,
                  },
                ],
              },
            ]
          : [],
    };

    additionalYachts.push(newYacht);
  }

  // Combine and save
  const allYachts = [...baseYachts, ...additionalYachts];
  fs.writeFileSync(
    path.join(__dirname, "data/", "yachts-extended.json"),
    JSON.stringify(allYachts, null, 2),
  );

  console.log(
    `Generated ${neededCount} additional yachts. Total: ${allYachts.length}`,
  );
  console.log(`Saved to yachts-extended.json`);
};

generateYachts();
