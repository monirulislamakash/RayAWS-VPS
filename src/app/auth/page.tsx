
import Header from "@/components/common/layout/Header";
import Footer from "@/components/common/layout/Footer";
import { Metadata } from "next";
import Login__Form from "./Login__Form";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
    title: "Auth - Ray Advertising",
    description: "Ray Advertising",
};
export default async function AuthPage() {
    // is user logged in supabase?
    const supabase = await createClient();
    const { data: userData } = await supabase.auth.getUser();

    if (userData?.user?.aud === "authenticated") {
        redirect("/dashboard");
    }

    return (
        <>
            <Header />
            <main className="max-w-[600px] mx-auto py-20">
                <Login__Form />

            </main>
            <Footer />
        </>
    )
}