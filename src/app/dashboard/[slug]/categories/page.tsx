import BlogCategories from "../../_utils/blogs/categories";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function Categories({ params }: any){
    const { slug } = params;
    
    if(slug === 'blogs'){
    return(
        <main className="w-full">
            <BlogCategories tableName="blog_categories" />
        </main>
        )
    }else if(slug === 'jobs'){
        return(
            <main className="w-full">
                <BlogCategories tableName="job_categories" />
            </main>
        )
    }else if(slug === 'teams'){
        return(
            <main className="w-full">
                <BlogCategories tableName="team_categories" />
            </main>
        )
    }
}