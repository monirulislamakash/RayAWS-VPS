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

const DASHBOARD_COMPONENTS = {
  blogs: Blogs,
  jobs: Jobs,
  reviews: Reviews,
  teams: Teams,
  events: Events,
  users: Users,
  cards: Cards,
  contact: Contact,
  faqs: Faqs,
  settings: Settings,
} as const;

type ValidSlug = keyof typeof DASHBOARD_COMPONENTS;

export default async function DashboardPage({ params }: { params: { slug: string } }) {
  const { slug } = params;

  if (!slug || !(slug in DASHBOARD_COMPONENTS)) {
    return notFound();
  }

  // Only fetch user data if we're accessing the settings page
  if (slug === 'settings') {
    const supabase = await createClient();
    const [userResponse, profileResponse] = await Promise.all([
      supabase.auth.getUser(),
      supabase
        .from('profiles')
        .select()
        .eq('id', (await supabase.auth.getUser()).data.user?.id)
        .single()
    ]);

    const { data: { user } } = userResponse;
    const { data: profileData } = profileResponse;

    return <Settings user={user} profileData={profileData} />;
  }

  const Component = DASHBOARD_COMPONENTS[slug as ValidSlug] as React.ComponentType<{ slug: string }>;
  return <Component slug={slug} />;
}   