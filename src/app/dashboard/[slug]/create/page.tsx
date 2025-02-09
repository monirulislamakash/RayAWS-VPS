import Blog___Form from "./_utils/Blog___Form";
import { getTableData } from "@/utils/api";
import Jobs___Form from "./_utils/Jobs__Form";
import Review__Form from "./_utils/Review__Form";
import Team__Form from "./_utils/Team__Form";
import Event___Form from "./_utils/Event__Form";
import Cards___Form from "./_utils/Cards__Form";
import Faqs__Form from "./_utils/Faqs_Form";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function CreatePage({ params: { slug } }: any) {
    const { tableData } = await getTableData({ tableName: "blog_categories" });

    const { tableData: jobCategories } = await getTableData({ tableName: "job_categories" });
    const { tableData: teamCategories } = await getTableData({ tableName: "team_categories" });
    
    if(slug === "blogs") {
        return(
            <div className="w-full md:w-[800px] mx-auto">
                <Blog___Form categories={tableData || []} />
            </div>
        )
    }else if(slug === "jobs"){ 
        return(
            <div className="w-full md:w-[800px] mx-auto">
                <Jobs___Form categories={jobCategories || []} />
            </div>
        )
    }
    else if(slug === "reviews") {
        return <div className="w-full md:w-[800px] mx-auto">
            <Review__Form />
        </div>
    }
    else if(slug === "teams"){
        return <div className="w-full md:w-[800px] mx-auto">
            <Team__Form categories={teamCategories || []} />
        </div>
    }
    else if(slug === "events"){
        return <div className="w-full md:w-[800px] mx-auto">
            <Event___Form />
        </div>
    }
    else if(slug === "cards"){
        return <div className="w-full md:w-[800px] mx-auto">
            <Cards___Form />
        </div>
    }else if(slug === "faqs"){
        return <div className="w-full md:w-[800px] mx-auto">
            <Faqs__Form />
        </div>
    }
    else{
        return <div>Invalid Page</div>
    }

}