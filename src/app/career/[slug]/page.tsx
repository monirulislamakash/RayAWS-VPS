import Blog__Carousel from "@/app/about-us/_utils/Blog__Carousel";
import PageHeaderSection from "@/components/common/Page__Header__Section";
import { User2Icon, BriefcaseIcon, MapPinIcon, Wallet2 } from "lucide-react";
import Header from "@/components/common/layout/Header";
import Footer from "@/components/common/layout/Footer";
import { createClient } from "@/utils/supabase/server";
import { getTableData } from "@/utils/api";

// Add these type definitions at the top
type Job = {
  slug: string;
  name: string;
  vacancies: string;
  experience: string;
  remote: string;
  job_type: string;
  salary_range: string;
  description: string;
  apply_link: string;
};

// Add error handling and parallel data fetching
export default async function SingleJob({ params: { slug } }: { params: { slug: string } }) {
    try {
        // Fetch job and blog data in parallel
        const [jobResponse, blogsResponse] = await Promise.all([
            createClient().then(supabase => 
                supabase
                    .from('jobs')
                    .select('*')
                    .eq('slug', slug)
                    .single()
            ),
            getTableData({ tableName: "blogs" })
        ]);

        if (!jobResponse.data) {
            throw new Error('Job not found');
        }

        const job = jobResponse.data as Job;
        
        const data = [
            {
                icon: <User2Icon className='w-[15px] h-[15px] text-secondary' />,
                title: job.vacancies,
            },
            {
                icon: <BriefcaseIcon className='w-[15px] h-[15px] text-secondary' />,
                title: job.experience,
            },
            {
                icon: <MapPinIcon className='w-[15px] h-[15px] text-secondary' />,
                title: job.remote,
            },
            {
                icon: <BriefcaseIcon className='w-[15px] h-[15px] text-secondary' />,
                title: job.job_type,
            },
            {
                icon: <Wallet2 className='w-[15px] h-[15px] text-secondary' />,
                title: job.salary_range,
            }
        ];

        return (
            <>
                <Header/>
                <main>
                    <PageHeaderSection 
                        title={job.name} 
                        bg="/images/job-details-bg.png" 
                        isButton={true} 
                        data={data} 
                        link={job.apply_link} 
                    />
                    {job.description && (
                        <div className="container">
                            <div 
                                className="py-10" 
                                dangerouslySetInnerHTML={{ __html: job.description }} 
                            />
                        </div> 
                    )}
                    <Blog__Carousel blogs={blogsResponse.tableData || []} />
                </main>
                <Footer/>
            </>
        );
    } catch (error) {
        console.error('Error fetching job details:', error);
        // You might want to redirect to a 404 page or show an error message
        return <div>Job not found</div>;
    }
}