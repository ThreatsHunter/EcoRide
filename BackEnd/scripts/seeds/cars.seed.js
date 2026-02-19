import { fakerFR as faker } from '@faker-js/faker';
import { supabase } from "../../src/config/supabase.js";

const seedCars = async () => {
    try {
        console.log("🚗 Starting Cars seed...");

        const { data: users } = await supabase.from('users').select('user_id');
        const { data: brands } = await supabase.from('brand').select('brand_id');

        if (!users?.length || !brands?.length) {
            console.error(`❌ Missing dependencies: ${users?.length || 0} users, ${brands?.length || 0} brands.`);
            return;
        }

        const cars = Array.from({ length: 5 }).map(() => ({
            model: faker.vehicle.model().slice(0, 50),
            license_plate: faker.vehicle.vrm().slice(0, 50),
            energy: faker.helpers.arrayElement(['Electric', 'Diesel', 'Gasoline']),
            color: faker.vehicle.color().slice(0, 50),
            first_registration_date: faker.date.past({ years: 10 }).toISOString().split('T')[0],
            user_id: faker.helpers.arrayElement(users).user_id,
            brand_id: faker.helpers.arrayElement(brands).brand_id
        }));

        const { data, error } = await supabase.from('car').insert(cars).select();
        if (error) throw error;
        console.log(`✅ ${data.length} cars created!`);
    } catch (err) {
        console.error("❌ Error seed-cars:", err.message);
    }
};

seedCars();