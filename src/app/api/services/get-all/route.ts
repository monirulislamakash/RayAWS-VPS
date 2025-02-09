import { createClient } from "@/utils/supabase/server";
import {NextResponse } from "next/server";

export async function POST() {

    try {

        const supabase = await createClient();
        const { data, error } = await supabase
            .from('services')
            .select()
            .limit(10)

            if (error) {
                return NextResponse.json({ error: error.message }, { status: 500 });
            }else{
                return NextResponse.json({ data }, { status: 200 });
            }

    } catch (err) {
        return NextResponse.json({ error: err }, { status: 500 });
    }

}