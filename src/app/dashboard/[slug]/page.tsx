import Blogs from '@/app/dashboard/_utils/blogs/blogs';
import { notFound } from 'next/navigation';
import Jobs from '../_utils/jobs/jobs';
import Reviews from '../_utils/reviews';
import Teams from '../_utils/teams';
import Events from '../_utils/Events';
import Users from '../_utils/users/Users';
import Cards from '../_utils/Cards';
import Contact from '../_utils/Contact';
import Faqs from '../_utils/Faqs';
import Settings from '../_utils/settings';
import { createClient } from '@/utils/supabase/server';


// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function DashboardPage({ params }: { params: any }) {
    const { slug } = await params;
    
    // based on the slug, show component  

    if(!slug) return notFound();

    const supabase = await createClient();

    //get user details supabase
    const { data: { user } } = await supabase.auth.getUser();

    // get profile data
    const { data: profileData } = await supabase
    .from(`profiles`)
    .select()
    .eq('id', `${user?.id}`)
    .single()
    // console.log(profileData, 'profileData');

  if (slug === "blogs") {
        return <Blogs slug={slug}  />
    }else if(slug === "jobs"){
        return <Jobs slug={slug}  />
    }else if(slug === "reviews"){
        return <Reviews slug={slug}  />
    }else if(slug === "teams"){
        return <Teams slug={slug}  />
    }else if(slug === "events"){
        return <Events slug={slug}  />
    }else if(slug === "users"){
        return <Users />
    }else if(slug === "cards"){
        return <Cards slug={slug}  />
    }else if(slug === "contact"){
        return <Contact   />
    }else if(slug === "faqs"){
        return <Faqs slug={slug}  />
    }else if(slug === "settings"){
        return <Settings user={user} profileData={profileData} />
    }
}