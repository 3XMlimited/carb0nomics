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
        },
        {
          category: "Energy Services",
          name: "Distribution and trade of electricity (services)",
          id: "energy_services-type_distribution_trade_of_electricity_services",
          sector: "Energy",
          source: "EXIOBASE",
          years: "2021",
          unit: "Money",
        },
        {
          category: "Fuel",
          name: "Natural gas (electric utilities subsector)",
          id: "fuel-type_natural_gas-fuel_use_electric_utilities",
          sector: "Energy",
          source: "UNFCCC",
          years: "2020",
          unit: "Volume",
        },
  
        {
          category: "Heat and Steam",
          name: "District heating",
          id: "heat_and_steam-type_district",
          sector: "Energy",
          source: "BEIS, EPA, GHG Protocol, UBA",
          years: "2019",
          unit: "Energy",
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
        },
        {
          category: "Transport Services and Warehousing",
          name: "Air transport services",
          id: "transport_services-type_air_transport_services",
          sector: "Transport",
          source: "EXIOBASE",
          years: "2019",
          unit: "Money",
        },
        {
          category: "Vehicles",
          name: "Motor vehicles/trailers and semitrailers",
          id: "passenger_vehicle-vehicle_type_motor_vehicles_trailers_semitrailers-fuel_source_na-engine_size_na-vehicle_age_na-vehicle_weight_na",
          sector: "Transport",
          source: "EXIOBASE",
          years: "2019",
          unit: "Money",
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
        },
        {
          category: "Housing",
          name: "Owner-occupied housing",
          id: "housing-type_owner_occupied_housing",
          sector: "Buildings and Infrastructure",
          source: "EPA",
          years: "2018",
          unit: "Money",
        },
        {
          category: "Infrastructure",
          name: "Pipeline transport",
          id: "infrastructure-type_pipeline_transport",
          sector: "Buildings and Infrastructure",
          source: "EPA",
          years: "2018",
          unit: "Money",
        },
        {
          category: "Maintenance and Repair",
          name: "Nonresidential maintenance and repair",
          id: "maintenance_repair-type_nonresidential_maintenance_repair",
          sector: "Buildings and Infrastructure",
          source: "EPA",
          years: "2018",
          unit: "Money",
        },
        {
          category: "Pavement and Surfacing",
          name: "Asphalt pavement",
          id: "pavement_surfaces-type_asphalt_pavement",
          sector: "Buildings and Infrastructure",
          source: "EPA",
          years: "2018",
          unit: "Money",
        },
        {
          category: "Real Estate",
          name: "Other real estate",
          id: "real_estate-type_other_real_estate",
          sector: "Buildings and Infrastructure",
          source: "EPA",
          years: "2019",
          unit: "Money",
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
        },
        {
          category: "Consumer Goods Rental",
          name: "Consumer goods and general rental centers",
          id: "consumer_goods_rental-type_consumer_goods_general_rental_centers",
          sector: "Consumer Goods and Services",
          source: "EPA",
          year: 2018,
          unit: "Money",
        },
        {
          category: "DIY and Gardening Equipment",
          name: "Building material and garden equipment and supplies dealers",
          id: "equipment_gardening_diy-type_building_material_garden_equipment_supplies_dealers",
          sector: "Consumer Goods and Services",
          source: "EPA",
          year: 2018,
          unit: "Money",
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
        },
        {
          category: "Health Care",
          name: "Health and personal care stores",
          id: "health_care-type_health_personal_care_stores",
          sector: "Consumer Goods and Services",
          source: "EPA",
          year: 2018,
          unit: "Money",
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
        },
        {
          category: "Personal Care and Accessories",
          name: "Conditioner",
          id: "consumer_goods-type_conditioner",
          sector: "Consumer Goods and Services",
          source: "Shiseido",
          year: 2021,
          unit: "Volume",
        },
        {
          category: "Professional Services and Activities",
          name: "Funerary services",
          id: "consumer_services-type_funerary_services",
          sector: "Consumer Goods and Services",
          source: "EPA",
          year: 2018,
          unit: "Money",
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
        },
  
        {
          category: "Vehicle Maintenance and Services",
          name: "Anti-freeze/battery water/cleaning materials",
          id: "consumer_goods-type_anti_freeze_battery_water_cleaning_materials",
          sector: "Consumer Goods and Services",
          source: "EXIOBASE",
          year: 2018,
          unit: "Money",
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
        },
        {
          category: "Electrical Waste",
          name: "Batteries waste disposal (landfill)",
          id: "waste-type_batteries-disposal_method_landfill",
          sector: "Waste",
          source: "BEIS",
          year: 2023,
          unit: "Weight",
        },
        {
          category: "Food and Organic Waste",
          name: "Beef - Anaerobically Digested (Dry Digestate with Curing)",
          id: "waste-type_beef-disposal_method_anaerobically_digested_dry_digestate_with_curing",
          sector: "Waste",
          source: "BEIS",
          year: 2023,
          unit: "Weight",
        },
        {
          category: "General Waste",
          name: "Books waste disposal (closed-loop)",
          id: "waste-type_books-disposal_method_closed_loop",
          sector: "Waste",
          source: "BEIS",
          year: 2023,
          unit: "Weight",
        },
        {
          category: "Glass Waste",
          name: "Glass - Combusted",
          id: "waste-type_glass-disposal_method_combusted",
          sector: "Waste",
          source: "EPA",
          year: 2023,
          unit: "Weight",
        },
        {
          category: "Metal Waste",
          name: "Aluminum Cans - Combusted",
          id: "waste-type_aluminum_cans-disposal_method_combusted",
          sector: "Waste",
          source: "EPA",
          year: 2023,
          unit: "Weight",
        },
        {
          category: "Paper and Cardboard Waste",
          name: "Cardboard waste disposal (closed-loop)",
          id: "waste-type_cardboard-disposal_method_closed_loop",
          sector: "Waste",
          source: "BEIS",
          year: 2023,
          unit: "Weight",
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
            },
            {
              category: "Water Supply",
              name: "Water supply",
              id: "water_supply-type_na",
              sector: "Water",
              source: "BEIS",
              year: 2019,
              unit: "Volume",
            },
          ],
        },
      ],
    },
];  