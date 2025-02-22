/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  await knex("assets").del();
  await knex("assets").insert([
    {
      id: "a1",
      guiId: "aguid1",
      user_id: "u1",
      contract_id: "con1",
      product_category_id: "pc1",
      product_sub_category_id: "psc1",
      company_id: "c1",
      asset_site_id: "as1",
      service_id: "s1",
      notes_id: "n1",
      asset_type: "Hardware",
      asset_name: "Gaming Laptop",
      serial_number: "SN001",
      supported: true,
      status: "New",
      priority: "High",
      attach_image: "laptop.jpg",
      description: "High-end gaming laptop",
      isDeleted: false,
    },
    {
      id: "a2",
      guiId: "aguid2",
      user_id: "u2",
      contract_id: "con2",
      product_category_id: "pc2",
      product_sub_category_id: "psc2",
      company_id: "c2",
      asset_site_id: "as2",
      service_id: "s2",
      notes_id: "n2",
      asset_type: "Software",
      asset_name: "Antivirus Software",
      serial_number: "SN002",
      supported: true,
      status: "Deployed",
      priority: "Medium",
      attach_image: "software.jpg",
      description: "Essential antivirus software",
      isDeleted: false,
    },
    {
      id: "a3",
      guiId: "aguid3",
      user_id: "u3",
      contract_id: "con3",
      product_category_id: "pc3",
      product_sub_category_id: "psc3",
      company_id: "c3",
      asset_site_id: "as3",
      service_id: "s3",
      notes_id: "n3",
      asset_type: "Hardware",
      asset_name: "Phone Charger",
      serial_number: "SN003",
      supported: false,
      status: "In Inventory",
      priority: "Low",
      attach_image: "charger.jpg",
      description: "Fast charging phone charger",
      isDeleted: false,
    },
  ]);
};
