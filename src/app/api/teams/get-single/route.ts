import { createClient } from "@/utils/supabase/server";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const id = await request.json();

    try {

        const supabase = await createClient();
        const { data, error } = await supabase
            .from('teams')
            .select()
            .eq('id', id)
            .single()
            if (error) {
                return NextResponse.json({ error: error.message }, { status: 500 });
            }else{
                return NextResponse.json({ data }, { status: 200 });
            }

    } catch (err) {
        return NextResponse.json({ error: err }, { status: 500 });
    }

}