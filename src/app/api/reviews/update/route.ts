import { NextRequest, NextResponse } from "next/server";
import { createClient } from '@/utils/supabase/server'


export async function POST(request: NextRequest) {
    const {id, UpdateData} =  await request.json();
    try {
        const supabase = await createClient();

        const { data, error } = await supabase
            .from('reviews')
            .update([UpdateData])
            .eq('id', id)
            .select()


        if (error) {
            return NextResponse.json({ error: error }, { status: 500 });
        }else{
            return NextResponse.json({ data }, { status: 200 });
        }
        // NextResponse.json({ 'asdasd': "asdasd" }, { status: 200 })

    } catch (error) {
        console.log(error);
    }
}
