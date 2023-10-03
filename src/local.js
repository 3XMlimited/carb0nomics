export const unit_types = [
    {
      unit_type: "Area",
      type: "area",
      units: { area_unit: ["m2", "km2", "ft2", "ha"] },
      activity_id:
        "building_materials-type_concrete_block_wall_single_skin_aac_concrete_block_average_strength_inc_mortar_not_inc_construction_waste-size_100_mm_thickness_wall",
    },
    // {
    //   unit_type: "AreaOverTime",
    //   units: {
    //     area_unit: ["m2", "km2", "ft2", "ha"],
    //     time_unit: ["ms", "s", "m", "h", "day", "year"],
    //   },
    //   activity_id:
    //     "land_use_change-type_land_use_change_perennial_crop_land_use_change_perennial_crop",
    // },
    // {
    //   unit_type: "ContainerOverDistance",
    //   type: "ContainerOverDistance",
    //   units: { distance_unit: ["m", "km", "ft", "mi", "nmi"] },
    //   activity_id: "sea_freight-vessel_type_container-distance_uplift_included",
    // },
    {
      unit_type: "Data",
      type: "data",
      units: { data_unit: ["MB", "GB", "TB"] },
      activity_id: "networking-provider_aws-region_af_south_1",
    },
    {
      unit_type: "DataOverTime",
      type: "DataOverTime",
      units: {
        data_unit: ["MB", "GB", "TB"],
        time_unit: ["ms", "s", "m", "h", "day", "year"],
      },
      activity_id: "memory-provider_aws-region_af_south_1",
    },
    {
      unit_type: "Distance",
      type: "distance",
      units: { distance_unit: ["m", "km", "ft", "mi", "nmi"] },
    },
    {
      unit_type: "DistanceOverTime",
      type: "DistanceOverTime",
      units: {
        distance_unit: ["m", "km", "ft", "mi", "nmi"],
        time_unit: ["ms", "s", "m", "h", "day", "year"],
      },
      activity_id:
        "passenger_vehicle-vehicle_type_car-fuel_source_bev-engine_size_na-vehicle_age_na-vehicle_weight_na",
    },
    {
      unit_type: "Energy",
      type: "energy",
      units: {
        energy_unit: [
          "Wh",
          "kWh",
          "MWh",
          "MJ",
          "GJ",
          "TJ",
          "BTU",
          "therm",
          "MMBTU",
        ],
      },
      activity_id: "electricity-supply_grid-source_residual_mix",
    },
    {
      unit_type: "Money",
      type: "money",
      units: {
        money_unit: [
          "usd",
          "eur",
          "hkd",
          "cny",
          // "afn",
          // "dzd",
          // "ars",
          // "aud",
          // "bhd",
          // "brl",
          // "cad",
          // "kyd",
  
          // "dkk",
          // "egp",
  
          // "huf",
          // "isk",
          // "inr",
          // "iqd",
          // "ils",
          // "jpy",
          // "lbp",
          // "mxn",
          // "mad",
          // "nzd",
          // "nok",
          // "qar",
          // "rub",
          // "sar",
          // "sgd",
          // "zar",
          // "krw",
          // "sek",
          // "chf",
          // "thb",
          // "twd",
          // "tnd",
          // "try",
          // "aed",
          // "gbp",
        ],
      },
      activity_id: "consumer_goods-type_dairy_products",
    },
    // { unit_type: "Number", units: {} },
    {
      unit_type: "NumberOverTime",
      type: "NumberOverTime",
      units: { time_unit: ["ms", "s", "m", "h", "day", "year"] },
      activity_id: "cpu-provider_aws-region_af_south_1",
    },
    {
      unit_type: "Distance",
      type: "Distance",
      units: { distance_unit: ["m", "km", "ft", "mi", "nmi"] },
      activity_id: "passenger_train-route_type_na-fuel_source_electricity",
    },
    {
      unit_type: "Time",
      type: "time",
      units: { time_unit: ["ms", "s", "m", "h", "day", "year"] },
      activity_id: "homeworking_type_heating",
    },
    {
      unit_type: "Volume",
      type: "volume",
      units: {
        volume_unit: ["ml", "l", "m3", "standard_cubic_foot", "gallon_us", "bbl"],
      },
      activity_id: "fuel-type_natural_gas-fuel_use_electric_utilities",
    },
    {
      unit_type: "Weight",
      type: "weight",
      units: { weight_unit: ["g", "kg", "t", "ton", "lb"] },
      activity_id: "building_materials-type_cement_production",
    },
    {
      unit_type: "WeightOverDistance",
      type: "WeightOverDistance",
      units: {
        distance_unit: ["m", "km", "ft", "mi", "nmi"],
        weight_unit: ["g", "kg", "t", "ton", "lb"],
      },
      activity_id: "freight_train-route_type_na-fuel_type_na",
    },
];

export const top30 = [
    { symbol: "0669.HK", company: "Techtronic Industries Company Limited" },
    { symbol: "2688.HK", company: "ENN Energy Holdings Limited" },
    //   { symbol: "2269.HK", company: "WuXi Biologics (Cayman) Inc." },
    { symbol: "0003.HK", company: "The Hong Kong and China Gas Company Limited" },
    { symbol: "0002.HK", company: "CLP Holdings Limited" },
    {
      symbol: "1398.HK",
      company: "Industrial and Commercial Bank of China Limited",
    },
    { symbol: "1044.HK", company: "Hengan International Group Company Limited" },
    //   { symbol: "9633.HK", company: "Nongfu Spring Co., Ltd." },
    { symbol: "0027.HK", company: "Galaxy Entertainment Group Limited" },
    { symbol: "0883.HK", company: "CNOOC Limited" },
    { symbol: "0017.HK", company: "New World Development Company Limited" },
    { symbol: "1038.HK", company: "CK Infrastructure Holdings Limited" },
    //   { symbol: "6690.HK", company: "Haier Smart Home Co., Ltd." },
    {
      symbol: "2319.HK",
      company: "China Mengniu Dairy Company Limited",
    },
    {
      symbol: "1093.HK",
      company: "CSPC Pharmaceutical Group Limited",
    },
    //   {
    //     symbol: "3690.HK",
    //     company: "Meituan",
    //   },
    //   {
    //     symbol: "6098.HK",
    //     company: "Country Garden Services Holdings Company Limited",
    //   },
    {
      symbol: "2020.HK",
      company: "ANTA Sports Products Limited",
    },
    {
      symbol: "0012.HK",
      company: "Henderson Land Development Company Limited	20.1",
    },
    //   { symbol: "1810.HK", company: "Xiaomi Corporation" },
    { symbol: "0267.HK", company: "CITIC Limited" },
    //   { symbol: "2331.HK", company: "Li Ning Company Limited" },
    {
      symbol: "2628.HK",
      company: "China Life Insurance Company Limited",
    },
    //   {
    //     symbol: "0241.HK",
    //     company: "Alibaba Health Information Technology Limited",
    //   },
    {
      symbol: "9988.HK",
      company: "Alibaba Group Holding Limited",
    },
    { symbol: "0992.HK", company: "Lenovo Group Limited" },
    {
      symbol: "1109.HK",
      company: "China Resources Land Limited",
    },
    { symbol: "9618.HK", company: "JD.com, Inc." },
    {
      symbol: "0101.HK",
      company: "Hang Lung Properties Limited",
    },
    //   {
    //     symbol: "1209.HK",
    //     company: "China Resources Mixc Lifestyle Services Limited",
    //   },
];

export const categories = [
  {
    sector: "Insurance and Financial Services",
    region: "All",

    categories: [
      {
        category: "Insurance Services",

        name: "Insurance and pension funding services (except compulsory social security services)",
        id: "insurance-type_insurance_pension_funding_services_except_compulsory_social_security_services",
        sector: "Insurance and Financial Services",
        category: "Insurance Services",
        source: "EXIOBASE",
        years: "2019",
        unit: "Money",
        reduce_plan: [
          {
            plan: "Green Insurance Products",
            description:
              "Offer insurance products that incentivize and reward environmentally friendly practices and sustainable behaviors.",
          },
          {
            plan: "Carbon Risk Assessment",
            description:
              "Incorporate carbon risk assessment into underwriting processes to encourage businesses to reduce their carbon footprint.",
          },
          {
            plan: "Promote Energy Efficiency",
            description:
              "Provide insurance incentives and discounts for homeowners and businesses that invest in energy-efficient technologies and practices.",
          },
          {
            plan: "Support Climate Resilience",
            description:
              "Develop insurance products that support climate resilience, such as policies for flood-prone areas or renewable energy installations.",
          },
          {
            plan: "Green Investment Portfolios",
            description:
              "Offer investment options that prioritize green and sustainable companies, aligning insurance investments with climate goals.",
          },
        ],
      },
      {
        category: "Financial Services",
        name: "Financial intermediation services (except insurance and pension funding services)",
        id: "financial_services-type_financial_intermediation_services_except_insurance_pension_funding_services",
        sector: "Insurance and Financial Services",
        category: "Financial Services",
        source: "EXIOBASE",
        years: "2019",
        unit: "Money",
        reduce_plan: [
          {
            plan: "Invest in Sustainable Ventures",
            description:
              "Promote investments in sustainable and low-carbon ventures, such as renewable energy projects and green technologies.",
          },
          {
            plan: "Carbon Disclosure and Reporting",
            description:
              "Mandate carbon disclosure and reporting for financial institutions to track and reduce their carbon footprint.",
          },
          {
            plan: "Green Financing",
            description:
              "Develop and expand green financing options, including green bonds and loans, to fund eco-friendly projects and initiatives.",
          },
          {
            plan: "Sustainable Investment Criteria",
            description:
              "Incorporate sustainability criteria into investment decision-making processes, encouraging investments in environmentally responsible companies.",
          },
          {
            plan: "Carbon Tax Advocacy",
            description:
              "Advocate for the implementation of carbon pricing mechanisms and support policies that penalize high-carbon investments.",
          },
        ],
      },
    ],
  },
  {
    sector: "Energy",
    region: "Hong Kong",
    categories: [
      {
        category: "Electricity",
        name: "Electricity supplied from grid",
        id: "electricity-supply_grid-source_supplier_mix",
        sector: "Energy",
        source: "BEIS, CLP Group, Google, HKEI",
        years: "2021",
        unit: "Energy",
        reduce_plan: [
          {
            plan: "Transition to Renewable Energy Sources",
            description:
              "Shift electricity generation from fossil fuels to renewable sources like wind, solar, and hydropower to reduce carbon emissions.",
          },
          {
            plan: "Implement Energy Efficiency Programs",
            description:
              "Promote energy efficiency through programs that encourage consumers and industries to reduce energy consumption.",
          },
          {
            plan: "Upgrade and Modernize the Grid",
            description:
              "Invest in upgrading and modernizing the electrical grid to improve efficiency and accommodate renewable energy sources.",
          },
          {
            plan: "Battery Energy Storage",
            description:
              "Deploy battery energy storage systems to store excess renewable energy and provide power during peak demand, reducing the need for fossil fuel backup.",
          },
          {
            plan: "Carbon Pricing",
            description:
              "Implement carbon pricing mechanisms such as carbon taxes or cap-and-trade systems to incentivize emissions reduction in the electricity sector.",
          },
        ],
      },
      {
        category: "Energy Services",
        name: "Distribution and trade of electricity (services)",
        id: "energy_services-type_distribution_trade_of_electricity_services",
        sector: "Energy",
        source: "EXIOBASE",
        years: "2021",
        unit: "Money",
        reduce_plan: [
          {
            plan: "Transition to Renewable Energy",
            description:
              "Shift energy services to rely more on renewable sources such as solar, wind, and hydropower, reducing reliance on fossil fuels.",
          },
          {
            plan: "Promote Energy Efficiency Programs",
            description:
              "Implement energy efficiency programs to reduce energy consumption in homes, businesses, and industries.",
          },
          {
            plan: "Smart Grid Implementation",
            description:
              "Upgrade and modernize the electrical grid to incorporate smart grid technologies for improved energy distribution and consumption management.",
          },
          {
            plan: "Decentralized Energy Generation",
            description:
              "Encourage the development of decentralized energy generation systems, such as microgrids and distributed renewables.",
          },
          {
            plan: "Energy Storage Solutions",
            description:
              "Invest in energy storage solutions, such as advanced batteries, to store excess renewable energy for use during peak demand times.",
          },
        ],
      },
      {
        category: "Fuel",
        name: "Natural gas (electric utilities subsector)",
        id: "fuel-type_natural_gas-fuel_use_electric_utilities",
        sector: "Energy",
        source: "UNFCCC",
        years: "2020",
        unit: "Volume",
        reduce_plan: [
          {
            plan: "Promote Alternative Fuels",
            description:
              "Encourage the use of alternative fuels such as biofuels, hydrogen, and synthetic fuels to reduce carbon emissions from vehicles and industry.",
          },
          {
            plan: "Improve Fuel Efficiency Standards",
            description:
              "Enforce stricter fuel efficiency standards for vehicles, machinery, and industrial processes to reduce fuel consumption and emissions.",
          },
          {
            plan: "Invest in Public Transportation",
            description:
              "Allocate resources to expand and improve public transportation systems, reducing the reliance on private vehicles and their emissions.",
          },
          {
            plan: "Transition to Electric Vehicles (EVs)",
            description:
              "Promote the widespread adoption of electric vehicles by offering incentives, building charging infrastructure, and improving battery technology.",
          },
          {
            plan: "Carbon Pricing",
            description:
              "Implement a carbon pricing mechanism, such as a carbon tax or cap-and-trade system, to internalize the cost of emissions and incentivize reductions.",
          },
        ],
      },

      {
        category: "Heat and Steam",
        name: "District heating",
        id: "heat_and_steam-type_district",
        sector: "Energy",
        source: "BEIS, EPA, GHG Protocol, UBA",
        years: "2019",
        unit: "Energy",
        reduce_plan: [
          {
            plan: "Transition to Renewable Energy Sources",
            description:
              "Shift from fossil fuels to renewable energy sources like solar, wind, and geothermal for heat and steam generation.",
          },
          {
            plan: "Improve Energy Efficiency",
            description:
              "Upgrade equipment and systems to improve energy efficiency in heat and steam generation processes, reducing waste and emissions.",
          },
          {
            plan: "Implement Combined Heat and Power (CHP) Systems",
            description:
              "Deploy Combined Heat and Power systems to simultaneously generate electricity and useful heat, maximizing energy efficiency.",
          },
          {
            plan: "Promote District Heating and Cooling",
            description:
              "Encourage district heating and cooling systems that use centralized plants to supply multiple buildings, optimizing energy use and emissions.",
          },
          {
            plan: "Carbon Capture and Storage (CCS)",
            description:
              "Explore and invest in carbon capture and storage technologies to capture and store carbon emissions from heat and steam generation.",
          },
        ],
      },
    ],
  },
  {
    sector: "Transport",
    region: "China",
    categories: [
      // {
      //   category: "Air Freight",
      //   name: "Domestic air freight - without RF effect",
      //   id: "freight_flight-route_type_domestic-distance_na-weight_na-rf_excluded-distance_uplift_included",
      //   sector: "Transport",
      //   source: "BEIS",
      //   years: "2023",
      //   unit: "WeightOverDistance",
      // },
      {
        category: "Air Travel",
        name: "Domestic flight - without RF effect",
        id: "passenger_flight-route_type_domestic-aircraft_type_na-distance_na-class_na-rf_excluded-distance_uplift_included",
        sector: "Transport",
        source: "BEIS",
        years: "2023",
        unit: "Distance",
        reduce_plan: [
          {
            plan: "Invest in Sustainable Aviation Fuels",
            description:
              "Support research and development of sustainable aviation fuels (SAFs) to replace conventional jet fuels, reducing aviation emissions.",
          },
          {
            plan: "Improve Aircraft Efficiency",
            description:
              "Encourage the use of more fuel-efficient aircraft and retrofit older planes with modern technologies to reduce fuel consumption.",
          },
          {
            plan: "Implement Carbon Offsetting",
            description:
              "Introduce voluntary carbon offset programs for passengers to compensate for their flight emissions by investing in emissions reduction projects.",
          },
          {
            plan: "Expand High-Speed Rail Networks",
            description:
              "Develop high-speed rail networks for short to medium-haul routes, offering an alternative to domestic flights.",
          },
          {
            plan: "Regulate Emissions",
            description:
              "Implement and strengthen regulations to limit aviation emissions, including emissions trading schemes and carbon pricing for airlines.",
          },
        ],
      },
      // {
      //   category: "Rail Freight",
      //   name: "Rail freight (diesel traction) - average/mixed load - WTW",
      //   id: "freight_train-route_type_na-fuel_type_diesel",
      //   sector: "Transport",
      //   source: "GLEC",
      //   years: "2019",
      //   unit: "WeightOverDistance",
      // },

      {
        category: "Rail Travel",
        name: "Electric passenger train",
        id: "passenger_train-route_type_na-fuel_source_electricity",
        sector: "Transport",
        source: "ADEME",
        years: "2021",
        unit: "Distance",
        reduce_plan: [
          {
            plan: "Electrify Rail Lines",
            description:
              "Invest in electrification of rail lines to replace diesel locomotives with electric trains, reducing emissions significantly.",
          },
          {
            plan: "Increase High-Speed Rail",
            description:
              "Expand and develop high-speed rail networks to encourage more people to choose trains over short-haul flights.",
          },
          {
            plan: "Improve Energy Efficiency",
            description:
              "Implement energy-efficient technologies and practices in rail operations, including regenerative braking and lightweight materials.",
          },
          {
            plan: "Promote Rail Freight Transport",
            description:
              "Shift a larger portion of freight transport from trucks to trains, as trains are more fuel-efficient and produce fewer emissions.",
          },
          {
            plan: "Invest in Maintenance and Modernization",
            description:
              "Allocate resources to maintain and modernize rail infrastructure, ensuring optimal performance and reduced emissions.",
          },
        ],
      },

      // {
      //   category: "Road Freight",
      //   name: "BEV van (1.305 to 1.74 tonnes)",
      //   id: "freight_vehicle-vehicle_type_van-fuel_source_bev-vehicle_weight_gt_1.305t_lt_1.74t",
      //   sector: "Transport",
      //   source: "BEIS",
      //   years: "2021",
      //   unit: "WeightOverDistance",
      // },

      {
        category: "Road Travel",
        name: "Bus",
        id: "passenger_vehicle-vehicle_type_bus-fuel_source_na-distance_na-engine_size_na",
        sector: "Transport",
        source: "EPA, GHG Protocol, MfE, UBA",
        years: "2023",
        unit: "Distance",
        reduce_plan: [
          {
            plan: "Promote Electric Vehicles (EVs)",
            description:
              "Incentivize the adoption of electric vehicles through subsidies, tax credits, and charging infrastructure development.",
          },
          {
            plan: "Expand Public Transportation",
            description:
              "Invest in and expand public transportation networks to encourage people to use buses, trams, and trains instead of private cars.",
          },
          {
            plan: "Implement Congestion Pricing",
            description:
              "Charge drivers a fee for using congested roads during peak hours to reduce traffic and encourage carpooling or alternative transportation modes.",
          },
          {
            plan: "Promote Cycling and Walking",
            description:
              "Create bike lanes, pedestrian-friendly infrastructure, and promote cycling and walking as viable commuting options.",
          },
          {
            plan: "Transition to Sustainable Fuels",
            description:
              "Encourage the use of sustainable and low-carbon fuels, such as biofuels, hydrogen, or synthetic fuels, in internal combustion engine vehicles.",
          },
        ],
      },
      // {
      //   category: "Sea Freight",
      //   name: "General cargo (average)",
      //   id: "sea_freight-vessel_type_cargo-route_type_na-vessel_length_na-tonnage_na-fuel_source_na",
      //   sector: "Transport",
      //   source: "BEIS, EPA, MfE",
      //   years: "2023",
      //   unit: "WeightOverDistance",
      // },
      {
        category: "Tickets and Passes",
        name: "Bus and coach fares",
        id: "tickets_passes-transport_type_bus_and_coach-ticket_type_na",
        sector: "Transport",
        source: "BEIS",
        years: "2018",
        unit: "Money",
        reduce_plan: [
          {
            plan: "Digital Ticketing and Passes",
            description:
              "Encourage the use of digital tickets and passes to reduce the production and distribution of paper tickets.",
          },
          {
            plan: "Dynamic Pricing for Public Transport",
            description:
              "Implement dynamic pricing for public transportation to distribute demand more efficiently and reduce the emissions associated with crowded vehicles.",
          },
          {
            plan: "Promote Eco-friendly Event Tickets",
            description:
              "Encourage event organizers to offer eco-friendly ticket options, such as carbon-neutral tickets, and promote environmentally responsible attendance.",
          },
          {
            plan: "Ticket Redemption Programs",
            description:
              "Introduce ticket redemption programs that incentivize users to return and recycle paper tickets or passes.",
          },
          {
            plan: "Carbon Offset with Ticket Purchases",
            description:
              "Give customers the option to purchase carbon offsets when buying tickets or passes, with funds directed toward emissions reduction projects.",
          },
        ],
      },
      {
        category: "Transport Services and Warehousing",
        name: "Air transport services",
        id: "transport_services-type_air_transport_services",
        sector: "Transport",
        source: "EXIOBASE",
        years: "2019",
        unit: "Money",
        reduce_plan: [
          {
            plan: "Fleet Electrification",
            description:
              "Transition company-owned vehicle fleets to electric or hybrid vehicles to reduce emissions from transportation.",
          },
          {
            plan: "Optimize Route Planning",
            description:
              "Implement advanced route planning and optimization software to reduce mileage and fuel consumption for deliveries and transport services.",
          },
          {
            plan: "Use Renewable Energy for Warehouses",
            description:
              "Power warehouses and distribution centers with renewable energy sources such as solar or wind to reduce emissions from energy consumption.",
          },
          {
            plan: "Implement Sustainable Packaging",
            description:
              "Encourage the use of eco-friendly packaging materials that are recyclable or biodegradable to reduce the environmental impact of shipments.",
          },
          {
            plan: "Promote Rail and Water Transport",
            description:
              "Shift a portion of goods transportation from road to more energy-efficient and lower-emission modes like rail and water transport.",
          },
        ],
      },
      {
        category: "Vehicles",
        name: "Motor vehicles/trailers and semitrailers",
        id: "passenger_vehicle-vehicle_type_motor_vehicles_trailers_semitrailers-fuel_source_na-engine_size_na-vehicle_age_na-vehicle_weight_na",
        sector: "Transport",
        source: "EXIOBASE",
        years: "2019",
        unit: "Money",
        reduce_plan: [
          {
            plan: "Fleet Electrification",
            description:
              "Transition company-owned vehicle fleets to electric or hybrid vehicles to reduce emissions from transportation.",
          },
          {
            plan: "Optimize Route Planning",
            description:
              "Implement advanced route planning and optimization software to reduce mileage and fuel consumption for deliveries and transport services.",
          },
          {
            plan: "Use Renewable Energy for Warehouses",
            description:
              "Power warehouses and distribution centers with renewable energy sources such as solar or wind to reduce emissions from energy consumption.",
          },
          {
            plan: "Implement Sustainable Packaging",
            description:
              "Encourage the use of eco-friendly packaging materials that are recyclable or biodegradable to reduce the environmental impact of shipments.",
          },
          {
            plan: "Promote Rail and Water Transport",
            description:
              "Shift a portion of goods transportation from road to more energy-efficient and lower-emission modes like rail and water transport.",
          },
        ],
      },
    ],
  },
  {
    sector: "Buildings and Infrastructure",
    region: "United States",
    categories: [
      {
        category: "Construction",
        name: "Commercial structures/including farm structures",
        id: "construction-type_commercial_structures_incl_farm_structures",
        sector: "Buildings and Infrastructure",
        source: "EPA",
        years: "2018",
        unit: "Money",
        reduce_plan: [
          {
            plan: "Use Sustainable Building Materials",
            description:
              "Promote the use of sustainable and low-carbon building materials, such as recycled materials, reclaimed wood, and green concrete.",
          },
          {
            plan: "Energy-Efficient Design Standards",
            description:
              "Enforce energy-efficient design standards for buildings to reduce energy consumption and emissions over the building's lifecycle.",
          },
          {
            plan: "Construction Site Waste Reduction",
            description:
              "Implement waste reduction and recycling programs at construction sites to minimize landfill waste and emissions.",
          },
          {
            plan: "Adopt Green Building Certifications",
            description:
              "Encourage builders to pursue green building certifications like LEED or BREEAM, which prioritize sustainability and emissions reduction.",
          },
          {
            plan: "Transportation Efficiency",
            description:
              "Optimize transportation of construction materials and equipment to reduce emissions associated with transportation.",
          },
        ],
      },
      {
        category: "Housing",
        name: "Owner-occupied housing",
        id: "housing-type_owner_occupied_housing",
        sector: "Buildings and Infrastructure",
        source: "EPA",
        years: "2018",
        unit: "Money",
        reduce_plan: [
          {
            plan: "Energy-Efficient Retrofits",
            description:
              "Encourage homeowners to retrofit existing homes with energy-efficient technologies, such as insulation, LED lighting, and smart thermostats.",
          },
          {
            plan: "Promote Solar Power",
            description:
              "Incentivize the installation of residential solar panels to generate clean energy and reduce reliance on fossil fuels for electricity.",
          },
          {
            plan: "Implement Green Building Codes",
            description:
              "Enforce green building codes and standards for new construction to ensure homes are built with energy efficiency and sustainability in mind.",
          },
          {
            plan: "Encourage Electric Heating and Cooling",
            description:
              "Promote the adoption of electric heat pumps for heating and cooling, which are more energy-efficient and produce fewer emissions.",
          },
          {
            plan: "Community-Based Initiatives",
            description:
              "Support community-based initiatives for sustainable living, such as community gardens, shared transportation, and energy co-operatives.",
          },
        ],
      },
      {
        category: "Infrastructure",
        name: "Pipeline transport",
        id: "infrastructure-type_pipeline_transport",
        sector: "Buildings and Infrastructure",
        source: "EPA",
        years: "2018",
        unit: "Money",
        reduce_plan: [
          {
            plan: "Use Low-Carbon Building Materials",
            description:
              "Prioritize the use of low-carbon and sustainable building materials for infrastructure projects, reducing emissions from construction.",
          },
          {
            plan: "Implement Smart Transportation Systems",
            description:
              "Integrate smart transportation systems that optimize traffic flow, reduce congestion, and minimize emissions from vehicles.",
          },
          {
            plan: "Invest in Renewable Energy Infrastructure",
            description:
              "Allocate resources to develop renewable energy infrastructure, such as wind farms and solar installations, to power critical infrastructure.",
          },
          {
            plan: "Upgrade Water and Wastewater Systems",
            description:
              "Modernize water and wastewater systems to reduce energy consumption and minimize emissions associated with water treatment.",
          },
          {
            plan: "Green Roof Initiatives",
            description:
              "Promote the installation of green roofs on infrastructure buildings to enhance energy efficiency and reduce urban heat island effects.",
          },
        ],
      },
      {
        category: "Maintenance and Repair",
        name: "Nonresidential maintenance and repair",
        id: "maintenance_repair-type_nonresidential_maintenance_repair",
        sector: "Buildings and Infrastructure",
        source: "EPA",
        years: "2018",
        unit: "Money",
        reduce_plan: [
          {
            plan: "Promote Regular Vehicle Maintenance",
            description:
              "Encourage vehicle owners to perform regular maintenance on their vehicles to keep them running efficiently and reduce emissions.",
          },
          {
            plan: "Support Repair and Reuse",
            description:
              "Promote the repair and reuse of consumer products, including electronics and appliances, to extend their lifespans and reduce waste.",
          },
          {
            plan: "Implement Eco-Friendly Repair Practices",
            description:
              "Encourage repair businesses to adopt eco-friendly repair practices, such as using refurbished parts and sustainable materials.",
          },
          {
            plan: "Extend Product Warranty Periods",
            description:
              "Advocate for longer warranty periods on products to incentivize manufacturers to produce more durable and repairable items.",
          },
          {
            plan: "Provide Incentives for Proper Disposal",
            description:
              "Offer incentives for the proper disposal of hazardous materials, such as encouraging recycling of e-waste and used batteries.",
          },
        ],
      },
      {
        category: "Pavement and Surfacing",
        name: "Asphalt pavement",
        id: "pavement_surfaces-type_asphalt_pavement",
        sector: "Buildings and Infrastructure",
        source: "EPA",
        years: "2018",
        unit: "Money",
        reduce_plan: [
          {
            plan: "Use Recycled Materials",
            description:
              "Promote the use of recycled materials, such as recycled asphalt and concrete, in pavement construction to reduce the environmental impact.",
          },
          {
            plan: "Implement Permeable Pavements",
            description:
              "Encourage the use of permeable pavements that allow rainwater to pass through, reducing runoff and the need for stormwater management.",
          },
          {
            plan: "Optimize Pavement Design",
            description:
              "Optimize pavement design to reduce thickness and material use while maintaining durability, thereby reducing emissions from construction and maintenance.",
          },
          {
            plan: "Use Cool Pavements",
            description:
              "Promote the use of cool pavements that reflect more sunlight and absorb less heat, reducing urban heat island effects and energy use for cooling.",
          },
          {
            plan: "Regular Maintenance and Repairs",
            description:
              "Implement regular maintenance and repairs to extend the lifespan of pavements, reducing the need for frequent resurfacing and reconstruction.",
          },
        ],
      },
      {
        category: "Real Estate",
        name: "Other real estate",
        id: "real_estate-type_other_real_estate",
        sector: "Buildings and Infrastructure",
        source: "EPA",
        years: "2019",
        unit: "Money",
        reduce_plan: [
          {
            plan: "Green Building Certification",
            description:
              "Encourage real estate developers to pursue and promote green building certifications like LEED or BREEAM for new construction projects.",
          },
          {
            plan: "Energy Performance Upgrades",
            description:
              "Incentivize property owners to make energy performance upgrades to existing buildings, such as better insulation, HVAC systems, and energy-efficient windows.",
          },
          {
            plan: "Renewable Energy Integration",
            description:
              "Promote the installation of renewable energy systems, such as solar panels and wind turbines, in commercial and residential properties.",
          },
          {
            plan: "Sustainable Land Use Planning",
            description:
              "Develop sustainable land use policies and zoning regulations that prioritize mixed-use developments, reducing the need for car travel.",
          },
          {
            plan: "Energy-Efficient Transportation Options",
            description:
              "Facilitate the development of energy-efficient transportation options within real estate developments, such as electric vehicle charging infrastructure and bike-sharing programs.",
          },
        ],
      },
    ],
  },
  {
    sector: "Consumer Goods and Services",
    region: "China",
    categories: [
      {
        category: "Clothing and Footwear",
        name: "Leather and leather products",
        id: "consumer_goods-type_leather_leather_products",
        sector: "Consumer Goods and Services",
        source: "EXIOBASE",
        year: 2019,
        description:
          "Emission intensity of supply chain in EUR spend on: leather and leather products. Retrieved from the EXIOBASE v3.8.2 model outputs for products. These factors were calculated based on 2019 data. CO2 equivalent factors incorporate emissions from land use; constituent gases have not been included as they do not. The LCA boundaries of these factors are not defined by the source. These factors include effects of international trade.",
        unit: "Money",
        reduce_plan: [
          {
            plan: "Sustainable Material Sourcing",
            description:
              "Promote the use of sustainable materials, such as organic cotton, recycled fibers, and plant-based alternatives, in clothing and footwear production.",
          },
          {
            plan: "Local and Ethical Manufacturing",
            description:
              "Encourage local and ethical manufacturing practices to reduce emissions associated with long-distance transportation and unethical labor practices.",
          },
          {
            plan: "Circular Fashion Economy",
            description:
              "Foster a circular fashion economy by promoting clothing rental, resale, and recycling to extend the lifespan of garments and reduce waste.",
          },
          {
            plan: "Consumer Education",
            description:
              "Educate consumers about sustainable fashion choices, encouraging them to buy fewer items, choose quality over quantity, and opt for eco-friendly brands.",
          },
          {
            plan: "Carbon-Neutral Supply Chains",
            description:
              "Work with clothing and footwear companies to establish carbon-neutral supply chains, offsetting emissions from production, transportation, and operations.",
          },
        ],
      },
      {
        category: "Consumer Goods Rental",
        name: "Consumer goods and general rental centers",
        id: "consumer_goods_rental-type_consumer_goods_general_rental_centers",
        sector: "Consumer Goods and Services",
        source: "EPA",
        year: 2018,
        unit: "Money",
        reduce_plan: [
          {
            plan: "Promote Sharing Economy",
            description:
              "Encourage consumers to participate in the sharing economy by renting and sharing goods rather than purchasing them.",
          },
          {
            plan: "Offer Sustainable Product Options",
            description:
              "Provide rental options for sustainable and eco-friendly products, promoting responsible consumption.",
          },
          {
            plan: "Extend Product Lifespan",
            description:
              "Implement maintenance and repair programs to extend the lifespan of rented products, reducing the need for frequent replacements.",
          },
          {
            plan: "Implement Green Packaging",
            description:
              "Use environmentally friendly packaging for rented goods, such as reusable and recyclable materials.",
          },
          {
            plan: "Carbon-Neutral Operations",
            description:
              "Offset the emissions associated with transportation and operations of rented goods to make the rental service carbon-neutral.",
          },
        ],
      },
      {
        category: "DIY and Gardening Equipment",
        name: "Building material and garden equipment and supplies dealers",
        id: "equipment_gardening_diy-type_building_material_garden_equipment_supplies_dealers",
        sector: "Consumer Goods and Services",
        source: "EPA",
        year: 2018,
        unit: "Money",
        reduce_plan: [
          {
            plan: "Promote Electric Yard Tools",
            description:
              "Encourage the use of electric or battery-powered yard tools, such as lawnmowers and leaf blowers, to replace gasoline-powered models.",
          },
          {
            plan: "Support Tool Sharing Programs",
            description:
              "Establish community tool-sharing programs where neighbors can share rarely used DIY and gardening equipment, reducing the need for individual ownership.",
          },
          {
            plan: "Provide Eco-Friendly Paints and Finishes",
            description:
              "Promote the use of low-VOC (Volatile Organic Compound) paints and finishes for DIY projects to reduce emissions from harmful chemicals.",
          },
          {
            plan: "Educate on Sustainable Gardening",
            description:
              "Offer educational programs and resources on sustainable gardening practices, such as composting and xeriscaping, to reduce environmental impact.",
          },
          {
            plan: "Recycle DIY and Gardening Waste",
            description:
              "Encourage the proper recycling and disposal of waste materials from DIY and gardening activities to minimize their impact on the environment.",
          },
        ],
      },
      {
        category: "Domestic Services",
        name: "Private households with employed persons",
        id: "domestic_services-type_private_households_with_employed_persons",
        sector: "Consumer Goods and Services",
        source: "EXIOBASE",
        year: 2019,
        description:
          "Emission intensity of supply chain in EUR spend on: private households with employed persons. Retrieved from the EXIOBASE v3.8.2 model outputs for products. These factors were calculated based on 2019 data. CO2 equivalent factors incorporate emissions from land use; constituent gases have not been included as they do not. The LCA boundaries of these factors are not defined by the source. These factors include effects of international trade.",
        unit: "Money",
        reduce_plan: [
          {
            plan: "Promote Energy-Efficient Appliances",
            description:
              "Encourage the use of energy-efficient appliances in households to reduce electricity consumption and emissions.",
          },
          {
            plan: "Educate and Raise Awareness",
            description:
              "Educate the public about energy conservation, waste reduction, and sustainable practices in their daily routines.",
          },
          {
            plan: "Implement Smart Home Technology",
            description:
              "Promote the use of smart home technology to automate energy-saving processes, such as thermostat control and lighting.",
          },
          {
            plan: "Support Green Cleaning Products",
            description:
              "Encourage the use of eco-friendly and non-toxic cleaning products to reduce indoor air pollution and environmental impact.",
          },
          {
            plan: "Community-Based Sustainability Programs",
            description:
              "Foster community-based programs that provide resources and incentives for households to reduce waste and lower their carbon footprint.",
          },
        ],
      },

      {
        category: "Food/Beverages/Tobacco",
        name: "Beverages",
        id: "consumer_goods-type_beverages",
        sector: "Consumer Goods and Services",
        source: "EXIOBASE",
        year: 2019,
        description:
          "Emission intensity of supply chain in EUR spend on: beverages. Retrieved from the EXIOBASE v3.8.2 model outputs for products. These factors were calculated based on 2019 data. CO2 equivalent factors incorporate emissions from land use; constituent gases have not been included as they do not. The LCA boundaries of these factors are not defined by the source. These factors include effects of international trade.",
        unit: "Money",
        reduce_plan: [
          {
            plan: "Reduce Food Waste",
            description:
              "Implement strategies to reduce food waste at all stages of production, distribution, and consumption to lower emissions from decomposing organic matter in landfills.",
          },
          {
            plan: "Transition to Plant-Based Diets",
            description:
              "Promote plant-based diets and reduce meat consumption to lower emissions associated with livestock farming and meat production.",
          },
          {
            plan: "Sustainable Agriculture Practices",
            description:
              "Encourage farmers to adopt sustainable agriculture practices, such as no-till farming and organic farming, which reduce emissions from soil degradation and chemical use.",
          },
          {
            plan: "Local Sourcing",
            description:
              "Support local sourcing of food and beverages to reduce emissions from long-distance transportation and promote local economies.",
          },
          {
            plan: "Energy-Efficient Food Processing",
            description:
              "Promote energy-efficient technologies and practices in food processing facilities to reduce emissions from energy consumption.",
          },
        ],
      },
      {
        category: "Furnishings and Household",
        name: "Furniture/other manufactured goods (not elsewhere specified)",
        id: "consumer_goods-type_furniture_other_manufactured_goods_not_elsewhere_specified",
        sector: "Consumer Goods and Services",
        source: "EXIOBASE",
        year: 2019,
        description:
          "Emission intensity of supply chain in EUR spend on: furniture/other manufactured goods (not specified in other EXIOBASE emission factors). Retrieved from the EXIOBASE v3.8.2 model outputs for products. These factors were calculated based on 2019 data. CO2 equivalent factors incorporate emissions from land use; constituent gases have not been included as they do not. The LCA boundaries of these factors are not defined by the source. These factors include effects of international trade.",
        unit: "Money",
        reduce_plan: [
          {
            plan: "Sustainable Materials",
            description:
              "Promote the use of sustainable materials in the production of furniture and household items, such as reclaimed wood, bamboo, or recycled plastics.",
          },
          {
            plan: "Circular Economy Practices",
            description:
              "Encourage manufacturers to implement circular economy practices, including recycling, refurbishing, and extending the lifespan of products.",
          },
          {
            plan: "Reduce Packaging Waste",
            description:
              "Minimize packaging waste by adopting eco-friendly packaging materials and reducing excess packaging for household items.",
          },
          {
            plan: "Energy-Efficient Appliances",
            description:
              "Promote the use of energy-efficient household appliances and electronics to reduce energy consumption and emissions.",
          },
          {
            plan: "Consumer Education",
            description:
              "Educate consumers about the environmental impact of their choices and provide information on sustainable options for furnishings and household items.",
          },
        ],
      },

      {
        category: "General Retail",
        name: "Retail trade (except of motor vehicles and motorcycles) and repair of personal and household goods (services)",
        id: "general_retail-type_retail_trade_except_of_motor_vehicles_motorcycles_repair_of_personal_household_goods_services",
        sector: "Consumer Goods and Services",
        source: "EXIOBASE",
        year: 2019,
        description:
          "Emission intensity of supply chain in EUR spend on: retail trade (except of motor vehicles and motorcycles) and repair of personal and household goods (services). Retrieved from the EXIOBASE v3.8.2 model outputs for products. These factors were calculated based on 2019 data. CO2 equivalent factors incorporate emissions from land use; constituent gases have not been included as they do not. The LCA boundaries of these factors are not defined by the source. These factors include effects of international trade.",
        unit: "Money",
        reduce_plan: [
          {
            plan: "Green Supply Chain Management",
            description:
              "Implement environmentally friendly supply chain practices, such as efficient transportation, reduced packaging, and sustainable sourcing.",
          },
          {
            plan: "Energy-Efficient Store Operations",
            description:
              "Optimize store operations for energy efficiency by using LED lighting, smart HVAC systems, and energy management technology.",
          },
          {
            plan: "Reduce Food Waste",
            description:
              "Minimize food waste by improving inventory management, offering discounts on perishable items, and donating surplus food.",
          },
          {
            plan: "Eco-Friendly Packaging",
            description:
              "Switch to eco-friendly packaging options like recyclable or biodegradable materials and encourage reusable bags.",
          },
          {
            plan: "Promote Sustainable Products",
            description:
              "Highlight and promote products with sustainable certifications and eco-friendly attributes, encouraging customers to make greener choices.",
          },
        ],
      },
      {
        category: "Health Care",
        name: "Health and personal care stores",
        id: "health_care-type_health_personal_care_stores",
        sector: "Consumer Goods and Services",
        source: "EPA",
        year: 2018,
        unit: "Money",
        reduce_plan: [
          {
            plan: "Green Healthcare Facilities",
            description:
              "Design and construct healthcare facilities that prioritize sustainability, energy efficiency, and the use of renewable energy sources.",
          },
          {
            plan: "Telemedicine Promotion",
            description:
              "Encourage the use of telemedicine and remote healthcare services to reduce the need for patient travel and associated emissions.",
          },
          {
            plan: "Energy-Efficient Medical Equipment",
            description:
              "Replace or upgrade medical equipment with energy-efficient models to reduce energy consumption in healthcare settings.",
          },
          {
            plan: "Waste Reduction and Recycling",
            description:
              "Implement waste reduction and recycling programs in healthcare facilities to minimize medical waste and emissions.",
          },
          {
            plan: "Green Pharmaceutical Manufacturing",
            description:
              "Promote the development and use of environmentally friendly processes and materials in pharmaceutical manufacturing to reduce emissions.",
          },
        ],
      },
      {
        category: "Paper Products",
        name: "Paper and paper products",
        id: "paper_products-type_paper_paper_products",
        sector: "Consumer Goods and Services",
        source: "EXIOBASE",
        year: 2019,
        description:
          "Emission intensity of supply chain in EUR spend on: paper and paper products. Retrieved from the EXIOBASE v3.8.2 model outputs for products. These factors were calculated based on 2019 data. CO2 equivalent factors incorporate emissions from land use; constituent gases have not been included as they do not. The LCA boundaries of these factors are not defined by the source. These factors include effects of international trade.",
        unit: "Money",
        reduce_plan: [
          {
            plan: "Promote Digital Documentation",
            description:
              "Encourage businesses and individuals to transition to digital documentation and reduce the use of paper.",
          },
          {
            plan: "Recycled Paper Usage",
            description:
              "Increase the use of recycled paper products to reduce the environmental impact of paper production.",
          },
          {
            plan: "Paperless Billing and Statements",
            description:
              "Encourage companies to offer paperless billing and statements, reducing the need for paper invoices and statements.",
          },
          {
            plan: "Optimize Printing Practices",
            description:
              "Implement printing guidelines to reduce unnecessary printing and ensure efficient use of paper in offices and homes.",
          },
          {
            plan: "Sustainable Forest Management",
            description:
              "Promote sustainable forestry practices and responsible paper sourcing to minimize deforestation and its associated emissions.",
          },
        ],
      },
      {
        category: "Personal Care and Accessories",
        name: "Conditioner",
        id: "consumer_goods-type_conditioner",
        sector: "Consumer Goods and Services",
        source: "Shiseido",
        year: 2021,
        unit: "Volume",
        reduce_plan: [
          {
            plan: "Sustainable Packaging",
            description:
              "Promote the use of eco-friendly packaging for personal care products, such as biodegradable materials and minimalistic packaging.",
          },
          {
            plan: "Switch to Eco-friendly Materials",
            description:
              "Encourage the use of sustainable and renewable materials in the production of personal care items, such as bamboo toothbrushes and reusable cotton pads.",
          },
          {
            plan: "Reduce Single-Use Products",
            description:
              "Educate consumers on the environmental impact of single-use products and promote reusable alternatives, such as refillable containers.",
          },
          {
            plan: "Minimize Microplastics",
            description:
              "Regulate and reduce the use of microplastics in personal care products like scrubs and cosmetics to prevent pollution.",
          },
          {
            plan: "Local and Ethical Sourcing",
            description:
              "Encourage brands to source ingredients locally and ethically, reducing transportation emissions and supporting responsible production.",
          },
        ],
      },
      {
        category: "Professional Services and Activities",
        name: "Funerary services",
        id: "consumer_services-type_funerary_services",
        sector: "Consumer Goods and Services",
        source: "EPA",
        year: 2018,
        unit: "Money",
        reduce_plan: [
          {
            plan: "Remote Work",
            description:
              "Encourage remote work and telecommuting options to reduce the need for commuting and associated emissions.",
          },
          {
            plan: "Energy-Efficient Office Spaces",
            description:
              "Implement energy-efficient practices and technologies in office spaces to reduce energy consumption and emissions.",
          },
          {
            plan: "Paperless Office Operations",
            description:
              "Promote paperless office operations by digitizing documents and adopting electronic communication and documentation tools.",
          },
          {
            plan: "Sustainable Business Practices",
            description:
              "Adopt sustainable business practices, such as green procurement and waste reduction, to minimize the environmental impact of professional activities.",
          },
          {
            plan: "Carbon Neutrality Commitment",
            description:
              "Commit to achieving carbon neutrality by measuring, reducing, and offsetting emissions from professional services and activities.",
          },
        ],
      },
      {
        category: "Recreation and Culture",
        name: "Recreational/cultural and sporting services",
        id: "consumer_goods-type_recreational_cultural_sporting_services",
        sector: "Consumer Goods and Services",
        source: "EXIOBASE",
        year: 2019,
        description:
          "Emission intensity of supply chain in EUR spend on: recreational/cultural and sporting services. Retrieved from the EXIOBASE v3.8.2 model outputs for products. These factors were calculated based on 2019 data. CO2 equivalent factors incorporate emissions from land use; constituent gases have not been included as they do not. The LCA boundaries of these factors are not defined by the source. These factors include effects of international trade.",
        unit: "Money",
        reduce_plan: [
          {
            plan: "Promote Eco-Friendly Events",
            description:
              "Encourage event organizers to minimize emissions by hosting eco-friendly events, using renewable energy, and reducing waste.",
          },
          {
            plan: "Public Transportation to Cultural Venues",
            description:
              "Improve public transportation options to cultural venues, making it easier for attendees to use sustainable transportation modes.",
          },
          {
            plan: "Sustainable Tourism Initiatives",
            description:
              "Promote sustainable tourism practices that minimize environmental impacts in recreational and cultural destinations.",
          },
          {
            plan: "Carbon-Neutral Festivals",
            description:
              "Organize festivals and cultural events with a commitment to carbon neutrality, including carbon offset programs.",
          },
          {
            plan: "Cultural and Eco-Education",
            description:
              "Develop educational programs that promote both cultural awareness and environmental responsibility to raise awareness and reduce emissions.",
          },
        ],
      },

      {
        category: "Textiles",
        name: "Textiles",
        id: "textiles-type_textiles",
        sector: "Consumer Goods and Services",
        source: "EXIOBASE",
        year: 2019,
        description:
          "Emission intensity of supply chain in EUR spend on: textiles. Retrieved from the EXIOBASE v3.8.2 model outputs for products. These factors were calculated based on 2019 data. CO2 equivalent factors incorporate emissions from land use; constituent gases have not been included as they do not. The LCA boundaries of these factors are not defined by the source. These factors include effects of international trade.",
        unit: "Money",
        reduce_plan: [
          {
            plan: "Promote Sustainable Fibers",
            description:
              "Encourage the use of sustainable and low-impact fibers like organic cotton, hemp, and recycled materials in textile production.",
          },
          {
            plan: "Implement Eco-Friendly Dyeing Processes",
            description:
              "Adopt water-saving and low-chemical dyeing processes, such as digital printing and eco-friendly dyes, to reduce water and chemical waste.",
          },
          {
            plan: "Extend Product Lifespan",
            description:
              "Promote durability and repairability in textile products to extend their lifespan and reduce the need for frequent replacements.",
          },
          {
            plan: "Circular Fashion Economy",
            description:
              "Transition to a circular fashion economy by encouraging recycling, upcycling, and reusing textiles to minimize waste and emissions.",
          },
          {
            plan: "Transparent Supply Chains",
            description:
              "Ensure transparency in the textile supply chain to track and reduce emissions at every stage, from raw materials to manufacturing and transportation.",
          },
        ],
      },

      {
        category: "Vehicle Maintenance and Services",
        name: "Anti-freeze/battery water/cleaning materials",
        id: "consumer_goods-type_anti_freeze_battery_water_cleaning_materials",
        sector: "Consumer Goods and Services",
        source: "EXIOBASE",
        year: 2018,
        unit: "Money",
        reduce_plan: [
          {
            plan: "Promote Regular Vehicle Maintenance",
            description:
              "Encourage vehicle owners to schedule regular maintenance checks to ensure their vehicles operate at optimal efficiency.",
          },
          {
            plan: "Offer Eco-Friendly Auto Services",
            description:
              "Provide eco-friendly auto services, such as eco-friendly car washes, oil change recycling, and tire recycling programs.",
          },
          {
            plan: "Support Hybrid and Electric Vehicle Servicing",
            description:
              "Train mechanics to specialize in servicing hybrid and electric vehicles to ensure proper maintenance and repair of clean energy vehicles.",
          },
          {
            plan: "Reduce Auto Repair Waste",
            description:
              "Implement recycling and waste reduction programs at auto repair shops to minimize the environmental impact of auto repair services.",
          },
          {
            plan: "Promote Carpooling for Vehicle Service Appointments",
            description:
              "Encourage carpooling for vehicle service appointments to reduce the number of trips to service centers and emissions from customer travel.",
          },
        ],
      },
    ],
  },
  {
    sector: "Education",
    region: "United States",
    categories: [
      {
        category: "Education",
        name: "Colleges/universities/junior colleges and professional schools",
        id: "education-type_colleges_universities_junior_colleges_professional_schools",
        sector: "Education",
        category: "Education",
        source: "EPA",
        year: 2018,
        description:
          "Emission intensity of supply chain (with margins i.e. cradle to shelf) in US dollars spend on: colleges/universities/junior colleges and professional schools. This factor is representative of the described commodity (equivalent to a goods or services category) and was obtained from the USEEIO model v1.0.1. Refer to the source for the source-specific data quality assessment. Retrieved from Supply Chain Factors Dataset v1.1.1",
        unit: "Money",
        reduce_plan: [
          {
            plan: "Promote Sustainable Commuting",
            description:
              "Encourage students and staff to use public transportation, carpooling, cycling, or walking to reduce emissions from daily commutes.",
          },
          {
            plan: "Green Campus Initiatives",
            description:
              "Implement green campus initiatives, including energy-efficient buildings, renewable energy sources, and waste reduction programs.",
          },
          {
            plan: "Environmental Education Programs",
            description:
              "Incorporate environmental education into the curriculum to raise awareness and inspire students to take environmentally responsible actions.",
          },
          {
            plan: "Telecommuting and Online Learning",
            description:
              "Promote telecommuting for administrative staff and offer online learning options to reduce the need for physical transportation to campus.",
          },
          {
            plan: "Student-Led Sustainability Projects",
            description:
              "Support student-led sustainability projects, clubs, and initiatives that focus on reducing emissions within the school community.",
          },
        ],
      },
    ],
  },
  {
    sector: "Health and Social Care",
    region: "United States",
    categories: [
      {
        category: "Health Care",
        name: "Ambulances",
        id: "health_care-type_ambulances",
        sector: "Health and Social Care",
        source: "EPA",
        year: 2018,
        description:
          "Emission intensity of supply chain (with margins i.e. cradle to shelf) in US dollars spend on: ambulances. This factor is representative of the described commodity (equivalent to a goods or services category) and was obtained from the USEEIO model v1.0.1. Refer to the source for the source-specific data quality assessment. Retrieved from Supply Chain Factors Dataset v1.1.1",
        unit: "Money",
        reduce_plan: [
          {
            plan: "Energy-Efficient Hospital Buildings",
            description:
              "Design and construct healthcare facilities to meet energy-efficient building standards, reducing energy consumption and emissions.",
          },
          {
            plan: "Green Healthcare Supply Chain",
            description:
              "Promote the use of sustainable and eco-friendly products in healthcare supply chains, from medical equipment to disposable items.",
          },
          {
            plan: "Telehealth Services",
            description:
              "Expand telehealth services to reduce the need for in-person visits, thereby lowering emissions associated with patient travel.",
          },
          {
            plan: "Renewable Energy Adoption",
            description:
              "Invest in renewable energy sources such as solar panels or wind turbines to power healthcare facilities and reduce reliance on fossil fuels.",
          },
          {
            plan: "Eco-Friendly Transportation",
            description:
              "Encourage staff to use eco-friendly modes of transportation, such as biking, carpooling, or electric vehicles, for commuting to work.",
          },
        ],
      },
      {
        category: "Health and Social Care",
        name: "Health and social work",
        id: "health_social_care-type_health_social_work",
        sector: "Health and Social Care",
        source: "EXIOBASE",
        year: 2019,
        description:
          "Emission intensity of supply chain in EUR spend on: health and social work. Retrieved from the EXIOBASE v3.8.2 model outputs for products. These factors were calculated based on 2019 data. CO2 equivalent factors incorporate emissions from land use; constituent gases have not been included as they do not. The LCA boundaries of these factors are not defined by the source. These factors include effects of international trade.",
        unit: "Money",
        reduce_plan: [
          {
            plan: "Telemedicine and Remote Care",
            description:
              "Promote the use of telemedicine and remote care services to reduce the need for patients and healthcare workers to travel, cutting emissions.",
          },
          {
            plan: "Green Healthcare Facilities",
            description:
              "Design and construct healthcare facilities with sustainable materials and energy-efficient technologies, including renewable energy sources.",
          },
          {
            plan: "Eco-Friendly Medical Equipment",
            description:
              "Encourage the use of eco-friendly and energy-efficient medical equipment and devices to reduce energy consumption and waste.",
          },
          {
            plan: "Promote Active Commuting",
            description:
              "Encourage healthcare workers to adopt active commuting options like biking or walking to reduce emissions from daily transportation.",
          },
          {
            plan: "Sustainable Procurement",
            description:
              "Implement sustainable procurement practices for medical supplies and equipment, prioritizing products with lower carbon footprints.",
          },
        ],
      },
      {
        category: "Social Care",
        name: "Child day care",
        id: "social_care-type_child_day_care",
        sector: "Health and Social Care",
        source: "EPA",
        year: 2018,
        description:
          "Emission intensity of supply chain (with margins i.e. cradle to shelf) in US dollars spend on: child day care. This factor is representative of the described commodity (equivalent to a goods or services category) and was obtained from the USEEIO model v1.0.1. Refer to the source for the source-specific data quality assessment. Retrieved from Supply Chain Factors Dataset v1.1.1",
        unit: "Money",
        reduce_plan: [
          {
            plan: "Remote Work for Social Care Professionals",
            description:
              "Promote remote work options for social care professionals, reducing the need for commuting and associated emissions.",
          },
          {
            plan: "Energy-Efficient Care Facilities",
            description:
              "Upgrade and retrofit care facilities to be more energy-efficient, reducing energy consumption and emissions.",
          },
          {
            plan: "Green Transportation for Home Visits",
            description:
              "Provide social care professionals with eco-friendly transportation options, such as electric vehicles or bicycles, for home visits.",
          },
          {
            plan: "Community-Based Care Programs",
            description:
              "Encourage community-based care programs that reduce the need for long-distance travel and institutional care facilities.",
          },
          {
            plan: "Training and Awareness",
            description:
              "Educate social care professionals and clients about eco-friendly practices and their role in emissions reduction.",
          },
        ],
      },
    ],
  },
  {
    sector: "Restaurants and Accommodation",
    region: "United States",
    categories: [
      {
        category: "Accommodation",
        name: "Hotel stay",
        id: "accommodation_type_hotel_stay",
        sector: "Restaurants and Accommodation",
        source: "BEIS",
        year: 2023,
        description:
          "Emission intensity of average hotel night in the United States. Retrieved from the Conversion Factors 2023: flat file published by the UK BEIS/Defra at the source URL.",
        unit: "Number",
        reduce_plan: [
          {
            plan: "Energy-Efficient Lighting",
            description:
              "Upgrade all lighting fixtures to energy-efficient LED or CFL bulbs in accommodation facilities to reduce electricity consumption.",
          },
          {
            plan: "HVAC System Upgrades",
            description:
              "Replace or upgrade heating, ventilation, and air conditioning (HVAC) systems with energy-efficient models to reduce energy usage.",
          },
          {
            plan: "Waste Reduction and Recycling",
            description:
              "Implement waste reduction and recycling programs in accommodations to minimize landfill waste and emissions.",
          },
          {
            plan: "Renewable Energy Sources",
            description:
              "Install renewable energy sources like solar panels or wind turbines on accommodation properties to generate clean electricity.",
          },
          {
            plan: "Green Building Certifications",
            description:
              "Pursue green building certifications like LEED or Green Key to ensure accommodations adhere to sustainability and emissions reduction standards.",
          },
        ],
      },
      {
        category: "Food and Beverage Services",
        name: "All other food and drinking places",
        id: "consumer_services-type_all_other_food_drinking_places",
        sector: "Restaurants and Accommodation",
        source: "EPA",
        year: 2018,
        description:
          "Emission intensity of supply chain (with margins i.e. cradle to shelf) in US dollars spend on: all other food and drinking places. This factor is representative of the described commodity (equivalent to a goods or services category) and was obtained from the USEEIO model v1.0.1. Refer to the source for the source-specific data quality assessment. Retrieved from Supply Chain Factors Dataset v1.1.1",
        unit: "Money",
        reduce_plan: [
          {
            plan: "Source Locally",
            description:
              "Prioritize sourcing food and ingredients locally to reduce emissions associated with long-distance transportation.",
          },
          {
            plan: "Reduce Food Waste",
            description:
              "Implement strategies to reduce food waste in restaurants, such as portion control, composting, and donation programs.",
          },
          {
            plan: "Offer Plant-Based Options",
            description:
              "Expand menu offerings to include more plant-based and vegetarian options to reduce the carbon footprint of meat production.",
          },
          {
            plan: "Energy-Efficient Kitchen Equipment",
            description:
              "Upgrade kitchen equipment to energy-efficient models to reduce energy consumption and emissions in food preparation.",
          },
          {
            plan: "Sustainable Packaging",
            description:
              "Use eco-friendly packaging materials for takeout and delivery orders to reduce plastic waste and environmental impact.",
          },
        ],
      },
      {
        category: "Restaurants and Accommodation",
        name: "Hotel and restaurant (services)",
        id: "restaurants_accommodation-type_hotel_restaurant_services",
        sector: "Restaurants and Accommodation",
        source: "EXIOBASE",
        year: 2019,
        description:
          "Emission intensity of supply chain in EUR spend on: hotel and restaurant (services). Retrieved from the EXIOBASE v3.8.2 model outputs for products. These factors were calculated based on 2019 data. CO2 equivalent factors incorporate emissions from land use; constituent gases have not been included as they do not. The LCA boundaries of these factors are not defined by the source. These factors include effects of international trade.",
        unit: "Money",
        reduce_plan: [
          {
            plan: "Sustainable Sourcing of Food",
            description:
              "Encourage restaurants and accommodations to source food locally and sustainably to reduce emissions from transportation and support local farmers.",
          },
          {
            plan: "Reduce Food Waste",
            description:
              "Implement food waste reduction strategies, such as portion control, composting, and donating surplus food to minimize methane emissions from landfills.",
          },
          {
            plan: "Energy Efficiency Upgrades",
            description:
              "Invest in energy-efficient appliances and lighting, as well as implement energy-saving practices, to reduce energy consumption in restaurants and accommodations.",
          },
          {
            plan: "Promote Meatless Options",
            description:
              "Promote and expand plant-based and vegetarian menu options to reduce the carbon footprint associated with meat production and consumption.",
          },
          {
            plan: "Green Building Certifications",
            description:
              "Encourage restaurants and accommodations to obtain green building certifications like LEED or ENERGY STAR, focusing on sustainability and emissions reduction.",
          },
        ],
      },
    ],
  },
  {
    sector: "Waste",
    region: "China",
    categories: [
      {
        category: "Construction Waste",
        name: "Aggregates waste disposal (closed-loop)",
        id: "waste-type_aggregates-disposal_method_closed_loop",
        sector: "Waste",
        source: "BEIS",
        year: 2023,
        unit: "Weight",
        reduce_plan: [
          {
            plan: "Waste Minimization",
            description:
              "Implement waste minimization strategies during construction projects to reduce the overall amount of waste generated.",
          },
          {
            plan: "Materials Recycling",
            description:
              "Promote the recycling of construction materials, such as concrete, steel, and wood, to reduce the need for new resource extraction and manufacturing.",
          },
          {
            plan: "Deconstruction and Salvage",
            description:
              "Encourage deconstruction and salvage operations to recover reusable materials from demolished buildings before they are sent to landfills.",
          },
          {
            plan: "Construction Waste Tracking",
            description:
              "Implement tracking systems to monitor and manage construction waste, ensuring responsible disposal and recycling.",
          },
          {
            plan: "Circular Construction Practices",
            description:
              "Transition to circular construction practices, where materials are designed for easy disassembly, reuse, and recycling.",
          },
        ],
      },
      {
        category: "Electrical Waste",
        name: "Batteries waste disposal (landfill)",
        id: "waste-type_batteries-disposal_method_landfill",
        sector: "Waste",
        source: "BEIS",
        year: 2023,
        unit: "Weight",
        reduce_plan: [
          {
            plan: "Extended Producer Responsibility",
            description:
              "Enforce extended producer responsibility (EPR) programs to make manufacturers responsible for the end-of-life disposal and recycling of their electronic products.",
          },
          {
            plan: "Promote Repairability",
            description:
              "Encourage manufacturers to design products that are easier to repair and promote repair services to extend the lifespan of electronics.",
          },
          {
            plan: "E-Waste Collection Centers",
            description:
              "Establish convenient e-waste collection centers to facilitate the proper disposal and recycling of electronic devices.",
          },
          {
            plan: "Educational Campaigns",
            description:
              "Launch public awareness campaigns to educate consumers about the importance of recycling e-waste and the availability of disposal options.",
          },
          {
            plan: "Incentives for Recycling",
            description:
              "Provide financial incentives, such as rebates or tax credits, to individuals and businesses for recycling their old electronic devices.",
          },
        ],
      },
      {
        category: "Food and Organic Waste",
        name: "Beef - Anaerobically Digested (Dry Digestate with Curing)",
        id: "waste-type_beef-disposal_method_anaerobically_digested_dry_digestate_with_curing",
        sector: "Waste",
        source: "BEIS",
        year: 2023,
        unit: "Weight",
        reduce_plan: [
          {
            plan: "Implement Food Waste Reduction Programs",
            description:
              "Introduce programs to educate consumers and businesses about food waste reduction and proper food storage techniques.",
          },
          {
            plan: "Expand Composting Infrastructure",
            description:
              "Invest in and expand composting facilities to divert organic waste from landfills and reduce methane emissions.",
          },
          {
            plan: "Promote Sustainable Farming Practices",
            description:
              "Support and incentivize farmers to adopt sustainable farming practices that reduce food loss and waste at the production level.",
          },
          {
            plan: "Food Redistribution Programs",
            description:
              "Establish programs to collect surplus food from businesses and redistribute it to those in need, reducing both waste and food insecurity.",
          },
          {
            plan: "Regulate Food Labeling",
            description:
              "Implement regulations on food labeling to reduce confusion and prevent premature disposal of safe and edible food.",
          },
        ],
      },
      {
        category: "General Waste",
        name: "Books waste disposal (closed-loop)",
        id: "waste-type_books-disposal_method_closed_loop",
        sector: "Waste",
        source: "BEIS",
        year: 2023,
        unit: "Weight",
        reduce_plan: [
          {
            plan: "Source Separation and Recycling",
            description:
              "Encourage households and businesses to separate recyclables from general waste, promoting recycling and reducing landfill emissions.",
          },
          {
            plan: "Composting Programs",
            description:
              "Implement city-wide composting programs to divert organic waste from landfills, reducing methane emissions.",
          },
          {
            plan: "Waste-to-Energy Facilities",
            description:
              "Invest in waste-to-energy facilities that convert non-recyclable waste into electricity or heat, reducing greenhouse gas emissions.",
          },
          {
            plan: "Extended Producer Responsibility (EPR)",
            description:
              "Enforce EPR programs, making manufacturers responsible for the disposal and recycling of their products, encouraging eco-friendly design.",
          },
          {
            plan: "Reduce Single-Use Plastics",
            description:
              "Implement bans or restrictions on single-use plastics to reduce waste generation and environmental impact.",
          },
        ],
      },
      {
        category: "Glass Waste",
        name: "Glass - Combusted",
        id: "waste-type_glass-disposal_method_combusted",
        sector: "Waste",
        source: "EPA",
        year: 2023,
        unit: "Weight",
        reduce_plan: [
          {
            plan: "Glass Recycling Programs",
            description:
              "Establish and promote glass recycling programs to divert glass waste from landfills and reduce the need for new glass production.",
          },
          {
            plan: "Reduce Single-Use Glass Packaging",
            description:
              "Encourage businesses to reduce the use of single-use glass containers and promote reusable or alternative packaging materials.",
          },
          {
            plan: "Eco-Friendly Glass Production",
            description:
              "Invest in more energy-efficient and sustainable glass production methods, such as using recycled glass and cleaner energy sources.",
          },
          {
            plan: "Consumer Education",
            description:
              "Educate consumers about the importance of recycling glass and provide convenient recycling options in communities.",
          },
          {
            plan: "Glass Bottle Return Programs",
            description:
              "Implement bottle return systems with incentives for consumers to return glass bottles for reuse or recycling.",
          },
        ],
      },
      {
        category: "Metal Waste",
        name: "Aluminum Cans - Combusted",
        id: "waste-type_aluminum_cans-disposal_method_combusted",
        sector: "Waste",
        source: "EPA",
        year: 2023,
        unit: "Weight",
        reduce_plan: [
          {
            plan: "Recycling Programs",
            description:
              "Implement comprehensive recycling programs to encourage the collection and recycling of metal waste, reducing the need for virgin metal production.",
          },
          {
            plan: "Promote Circular Economy",
            description:
              "Shift towards a circular economy model where metals are reused, remanufactured, or recycled to extend their lifecycle and reduce emissions.",
          },
          {
            plan: "Energy-Efficient Smelting",
            description:
              "Invest in energy-efficient smelting and refining technologies to reduce the energy consumption and emissions associated with metal production.",
          },
          {
            plan: "Waste Reduction in Manufacturing",
            description:
              "Encourage manufacturers to minimize metal waste during production processes through lean manufacturing and efficient design.",
          },
          {
            plan: "Consumer Education",
            description:
              "Educate consumers about the environmental impact of metal waste and promote responsible consumption and recycling habits.",
          },
        ],
      },
      {
        category: "Paper and Cardboard Waste",
        name: "Cardboard waste disposal (closed-loop)",
        id: "waste-type_cardboard-disposal_method_closed_loop",
        sector: "Waste",
        source: "BEIS",
        year: 2023,
        unit: "Weight",
        reduce_plan: [
          {
            plan: "Promote Paper Recycling",
            description:
              "Implement comprehensive paper recycling programs to divert paper and cardboard waste from landfills and reduce emissions associated with disposal.",
          },
          {
            plan: "Reduce Paper Consumption",
            description:
              "Encourage businesses and individuals to reduce paper usage by adopting digital documentation and communication methods.",
          },
          {
            plan: "Use Recycled and Sustainable Paper",
            description:
              "Promote the use of recycled paper and cardboard products and support the development of sustainable paper manufacturing practices.",
          },
          {
            plan: "Compost Cardboard",
            description:
              "Encourage composting of cardboard materials in composting facilities to reduce methane emissions from landfills.",
          },
          {
            plan: "Implement Paperless Policies",
            description:
              "Implement paperless policies in government and corporate settings, reducing the need for paper and cardboard production.",
          },
        ],
      },
      {
        category: "Plastic Waste",
        name: "HDPE - Combusted",
        id: "waste-type_hdpe-disposal_method_combusted",
        sector: "Waste",
        source: "BEIS",
        year: 2023,
        unit: "Weight",
      },
      {
        category: "Waste Management",
        name: "Food waste for treatment: composting and land application",
        id: "waste_management-type_food_waste_for_treatment_composting_land_application",
        sector: "Waste",
        source: "EXIOBASE",
        year: 2019,
        description:
          "Emission intensity of supply chain in EUR spend on: food waste for treatment: composting and land application. Retrieved from the EXIOBASE v3.8.2 model outputs for products. These factors were calculated based on 2019 data. CO2 equivalent factors incorporate emissions from land use; constituent gases have not been included as they do not. The LCA boundaries of these factors are not defined by the source. These factors include effects of international trade.",
        unit: "Money",
        reduce_plan: [
          {
            plan: "Source Reduction",
            description:
              "Promote source reduction strategies to minimize waste generation at the source, including reducing packaging and single-use items.",
          },
          {
            plan: "Recycling Programs",
            description:
              "Expand and improve recycling programs, making it easier for communities to recycle materials and divert them from landfills.",
          },
          {
            plan: "Organic Waste Composting",
            description:
              "Implement widespread organic waste composting programs to reduce methane emissions from landfills and create valuable compost.",
          },
          {
            plan: "Waste-to-Energy Facilities",
            description:
              "Invest in waste-to-energy facilities that convert non-recyclable waste into electricity, reducing landfill emissions and generating clean energy.",
          },
          {
            plan: "Public Awareness and Education",
            description:
              "Launch public awareness campaigns and educational programs to promote responsible waste disposal and recycling practices.",
          },
        ],
      },
      {
        sector: "Water",
        region: "United States",
        categories: [
          {
            category: "Water Treatment",
            name: "Collected and purified water/distribution of water (services)",
            id: "water_treatment-type_collected_purified_water_distribution_of_water_services",
            sector: "Water",
            source: "EXIOBASE",
            year: 2019,
            description:
              "Emission intensity of supply chain in EUR spend on: collected and purified water/distribution of water (services). Retrieved from the EXIOBASE v3.8.2 model outputs for products. These factors were calculated based on 2019 data. CO2 equivalent factors incorporate emissions from land use; constituent gases have not been included as they do not. The LCA boundaries of these factors are not defined by the source. These factors include effects of international trade.",
            unit: "Money",
            reduce_plan: [
              {
                plan: "Energy-Efficient Technologies",
                description:
                  "Upgrade water treatment facilities with energy-efficient technologies and processes to reduce energy consumption and emissions.",
              },
              {
                plan: "Renewable Energy Integration",
                description:
                  "Transition water treatment plants to use renewable energy sources like solar or wind to power their operations.",
              },
              {
                plan: "Reduce Chemical Usage",
                description:
                  "Implement strategies to reduce the use of chemicals in water treatment processes, which can result in lower emissions and fewer harmful byproducts.",
              },
              {
                plan: "Wastewater Reuse",
                description:
                  "Promote the reuse of treated wastewater for non-potable purposes, reducing the energy required for additional treatment.",
              },
              {
                plan: "Green Infrastructure",
                description:
                  "Integrate green infrastructure solutions like vegetated swales and permeable pavements to manage stormwater naturally, reducing the burden on treatment facilities.",
              },
            ],
          },
          {
            category: "Water Supply",
            name: "Water supply",
            id: "water_supply-type_na",
            sector: "Water",
            source: "BEIS",
            year: 2019,
            unit: "Volume",
            reduce_plan: [
              {
                plan: "Energy-Efficient Water Treatment",
                description:
                  "Upgrade water treatment plants to use more energy-efficient technologies and processes to reduce energy consumption and emissions.",
              },
              {
                plan: "Reduce Water Leaks",
                description:
                  "Implement measures to detect and repair water leaks in distribution systems to minimize the energy required to pump and treat water.",
              },
              {
                plan: "Promote Water Recycling",
                description:
                  "Encourage the use of treated wastewater for non-potable purposes, such as irrigation and industrial processes, to reduce the demand on freshwater resources.",
              },
              {
                plan: "Invest in Renewable Energy",
                description:
                  "Power water supply facilities, such as pumping stations, with renewable energy sources like solar or wind to reduce emissions from energy consumption.",
              },
              {
                plan: "Education and Conservation",
                description:
                  "Promote water conservation practices and educate consumers on the environmental impact of water use, leading to reduced demand and emissions.",
              },
            ],
          },
        ],
      },
    ],
  },
];