import { supabase } from "../../src/config/supabase.js";

const seedConfig = async () => {
    try {
        console.log("⚙️  Seeding Base Configuration...");

        // 1. Rôles (On force les IDs pour être certain de la correspondance)
        const { error: roleErr } = await supabase.from('role').upsert([
            { role_id: 1, label: 'admin' },
            { role_id: 2, label: 'employee' },
            { role_id: 3, label: 'user' }
        ]);
        if (roleErr) throw new Error(`Roles: ${roleErr.message}`);
        console.log("✅ Roles (admin, employee, user) synchronized.");

        // 2. Marques
        const { error: brandErr } = await supabase.from('brand').upsert([
            { brand_id: 1, label: 'Tesla' },
            { brand_id: 2, label: 'Renault' },
            { brand_id: 3, label: 'Peugeot' }
        ]);
        if (brandErr) throw new Error(`Brands: ${brandErr.message}`);

        // 3. Configuration technique
        const { data: config, error: configErr } = await supabase
            .from('configuration')
            .upsert({ configuration_id: 1 })
            .select()
            .single();
        if (configErr) throw new Error(`Config: ${configErr.message}`);

        // 4. Paramètres
        await supabase.from('parameter').upsert([
            { parameter_id: 1, property: 'site_maintenance', value: 'false', configuration_id: 1 },
            { parameter_id: 2, property: 'commission_rate', value: '2.00', configuration_id: 1 }
        ]);

        console.log("🚀 Base Configuration restored successfully!");
    } catch (err) {
        console.error("❌ Config Seed Error:", err.message);
    }
};

seedConfig();