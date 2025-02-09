import { NextRequest, NextResponse } from "next/server";
import { createClient } from '@/utils/supabase/server'


export async function POST(request: NextRequest) {
    const {page} = await request.json();

    // console.log(sectionName, page, 'sectionName, page');

    try {

        const supabase = await createClient();

        const { data: heroData, error: heroError } = await supabase
            .from(`hero_section`)
            .select()
            .eq('page', `${page}`)
            .single()

        if (heroError) {
            return NextResponse.json({ error: heroError.message }, { status: 500 });
        } else {
            return NextResponse.json({ heroData }, { status: 200 });
        }

    } catch (err) {
        return NextResponse.json({ error: err }, { status: 500 });
    }

}