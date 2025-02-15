import { notFound } from "next/navigation";
import Blog__Form from "./_utils/Blog___Form";
import Job__Form from "./_utils/Jobs__Form";
import Review__Form from "./_utils/Review__Form";
import { getSectionData, getTableData } from "@/utils/api";
import Team__Form from "./_utils/Team__Form";
import Event__Form from "./_utils/Event__Form";
import Cards__Form from "./_utils/Cards__Form";
import Faqs___Form from "./_utils/Faqs_Form";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function UpdatePage({ params, searchParams }: { params: any, searchParams: any }) {
    const { slug } = params;

    // based on the slug, show component 
    if (!slug) return notFound();

    const { id } = searchParams;


    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const blog: any = await getSectionData({ sectionName: 'blogs', id: id, isSingle: true })

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const jobs: any = await getSectionData({ sectionName: 'jobs', id: id, isSingle: true })
    const { tableData: jobCategories } = await getTableData({ tableName: "job_categories" });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const teams: any = await getSectionData({ sectionName: 'teams', id: id, isSingle: true })
    const { tableData: teamCategories } = await getTableData({ tableName: "team_categories" });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const reviews: any = await getSectionData({ sectionName: 'reviews', id: id, isSingle: true })

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const events: any = await getSectionData({ sectionName: 'events', id: id, isSingle: true })

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const cards: any = await getSectionData({ sectionName: 'cards', id: id, isSingle: true })

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const {sectionData: faqs}: any = await getSectionData({ sectionName: 'faqs_section', id: id, isSingle: true })


    if (slug === "blogs") {
        return <Blog__Form blog={blog} />
    } else if (slug === "jobs") {
        return <Job__Form jobs={jobs} jobCategories={jobCategories}/>
    } else if (slug === "reviews") {
        return <main className=" mx-auto max-w-[1000px] w-full"><Review__Form reviews={reviews} /></main>
    }
    else if(slug === "teams"){
        return <Team__Form team={teams} teamCategories={teamCategories || []} />
    }else if(slug === "events"){
        return <Event__Form events={events} />
    }else if(slug === "cards"){
        return <Cards__Form cards={cards} />
    }else if(slug === "faqs"){
        return <Faqs___Form faqs={faqs} />  
    }
}