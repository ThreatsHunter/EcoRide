import { supabase } from "../src/config/supabase.js";

/**
 * Database Status Script
 * Checks the row count for all tables in the English MLD schema
 */
const countAll = async () => {
    // List of all tables based on your English MLD
    const tables = [
        'configuration',
        'parameter',
        'role',
        'users',
        'brand',
        'car',
        'trip',
        'review'
    ];
    
    console.log("-----------------------------------------");
    console.log("📊 SQL Database Current Status");
    console.log("-----------------------------------------");

    for (const table of tables) {
        const { count, error } = await supabase
            .from(table)
            .select('*', { count: 'exact', head: true });
        
        if (error) {
            console.error(`❌ Error on [${table}]:`, error.message);
        } else {
            // Display row count for each table
            console.log(`> ${table.padEnd(15)}: ${count} rows`);
        }
    }
    console.log("-----------------------------------------");
};

countAll();