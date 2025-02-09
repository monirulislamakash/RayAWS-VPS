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

 
    if (!slug) return notFound();

    const { id } = searchParams;

    const [
        blog,
        jobs,
        teams,
        reviews,
        cards,
        faqs,
        jobCategories,
        teamCategories,
        events
      ] = await Promise.all([
        getSectionData({ sectionName: 'blogs', id: id, isSingle: true }),
        getSectionData({ sectionName: 'jobs', id: id, isSingle: true }),
        getSectionData({ sectionName: 'teams', id: id, isSingle: true }),
        getSectionData({ sectionName: 'reviews', id: id, isSingle: true }),
        getSectionData({ sectionName: 'cards', id: id, isSingle: true }),
        getSectionData({ sectionName: 'faqs_section', id: id, isSingle: true }),
        getSectionData({ sectionName: 'events', id: id, isSingle: true }),
        getTableData({ tableName: 'job_categories' }),
        getTableData({ tableName: 'team_categories' }),
      ])





    if (slug === "blogs") {
        return <Blog__Form blog={blog} />
    } else if (slug === "jobs") {
        return <Job__Form jobs={jobs} jobCategories={jobCategories}/>
    } else if (slug === "reviews") {
        return <main className=" mx-auto max-w-[1000px] w-full"><Review__Form reviews={reviews} /></main>
    }
    else if(slug === "teams"){
        return <Team__Form team={teams} teamCategories={teamCategories?.tableData || []} />
    }else if(slug === "events"){
        return <Event__Form events={events} />
    }else if(slug === "cards"){
        return <Cards__Form cards={cards} />
    }else if(slug === "faqs"){
        return <Faqs___Form faqs={faqs} />  
    }
}