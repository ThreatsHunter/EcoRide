import { supabase } from "../src/config/supabase.js";

const clearDatabase = async () => {
    console.log("-----------------------------------------");
    console.log("🧹 Starting Database Cleanup...");
    console.log("-----------------------------------------");

    // Order is strictly respected to avoid Foreign Key violations
    const tables = [
        { name: 'review', idName: 'review_id' },
        { name: 'trip', idName: 'trip_id' },
        { name: 'car', idName: 'car_id' },
        { name: 'users', idName: 'user_id' }, // UUID
        { name: 'brand', idName: 'brand_id' },
        { name: 'role', idName: 'role_id' },
        { name: 'parameter', idName: 'parameter_id' },
        { name: 'configuration', idName: 'configuration_id' }
    ];

    try {
        for (const table of tables) {
            // We use .neq with a value that won't exist to target everything
            // For UUIDs (users), we use a different approach
            let query = supabase.from(table.name).delete();
            
            if (table.name === 'users') {
                // Special case for UUID: delete where user_id is not null
                query = query.not('user_id', 'is', null);
            } else {
                // For SERIAL IDs: delete everything where id > 0
                query = query.gt(table.idName, 0);
            }

            const { error } = await query;

            if (error) {
                console.error(`❌ Failed to clear [${table.name}]:`, error.message);
            } else {
                console.log(`✅ Table [${table.name}] cleared.`);
            }
        }
    } catch (err) {
        console.error("❌ Unexpected error:", err.message);
    }

    console.log("-----------------------------------------");
    console.log("✨ Cleanup finished!");
    console.log("-----------------------------------------");
};

clearDatabase();