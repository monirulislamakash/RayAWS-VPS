import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";
import type { MetadataRoute } from 'next'

async function getBlogs(){
    const supabase = await createClient();
    const { data, error } = await supabase
        .from('blogs')
        .select()
    return data
}
async function getEvents(){
    const supabase = await createClient();
    const { data, error } = await supabase
        .from('events')
        .select()
    return data
}
export default async function sitemap():Promise<MetadataRoute.Sitemap>{
    const baseUrl="https://rayadvertising.com";
    const blogData= await getBlogs();
    const eventData= await getEvents();

    const malsiam=[{url:`${baseUrl}`,},{url:`${baseUrl}/about-us`,},{url:`${baseUrl}/services`,},{url:`${baseUrl}/career`,},{url:`${baseUrl}/events`,},{url:`${baseUrl}/blog`,},{url:`${baseUrl}/contact`,},{url:`${baseUrl}/join-us`,},{url:`${baseUrl}/privacy-policy`,},{url:`${baseUrl}/terms-condition`,},]
    blogData?.forEach((item: any, idx: number) => malsiam.push({url:`${baseUrl}/blog/${item.slug}`}))
    eventData?.forEach((item: any, idx: number) => malsiam.push({url:`${baseUrl}/event/${item.id}`}))
    return malsiam

}