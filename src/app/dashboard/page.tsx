import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import Hero__Form from "./_utils/Hero__Form"
import {getSectionData, getTableData} from '@/utils/api'
import Two_side_Form from "./_utils/Two__Side__Form"
import Common__Form from "@/app/dashboard/_utils/Common__Form"
import Pages__Form from "@/app/dashboard/_utils/Pages_Form"
import { redirect } from "next/navigation"
import { createClient } from "@/utils/supabase/server"
const Home = async () => {

  const supabase = await createClient();
  const { data: userData } = await supabase.auth.getUser();

  if (userData?.user?.aud !== "authenticated") {
      redirect("/auth");
  }

  const {sectionData: heroDataHome, } = await getSectionData({page: 'home', sectionName: 'hero_section'}); 
  const {sectionData: sectionDataAbout, } = await getSectionData({page: 'about', sectionName: 'hero_section'});
  const {sectionData: sectionDataContact, } = await getSectionData({page: 'contact', sectionName: 'hero_section'});
  const {sectionData: sectionDataService,} = await getSectionData({page: 'service', sectionName: 'hero_section'});
  const {sectionData: sectionDataCareer,} = await getSectionData({page: 'career', sectionName: 'hero_section'});
  const {sectionData: sectionDataEvents,} = await getSectionData({page: 'events', sectionName: 'hero_section'});
  const {sectionData: sectionDataBlog,} = await getSectionData({page: 'blog', sectionName: 'hero_section'});
  const {sectionData: sectionDataJoin,} = await getSectionData({page: 'join', sectionName: 'hero_section'});
  const {sectionData: sectionDataTeam,} = await getSectionData({page: 'team', sectionName: 'hero_section'});

  const {sectionData: sectionDataTwoSide,} = await getSectionData({sectionName: 'two_side_section', isMultiple: true});

  const {sectionData: sectionDataBranding,} = await getSectionData({sectionName: 'branding', isMultiple: true});
  const {tableData: blogs} = await getTableData({tableName: 'blogs'});

  // get recent news
  const {sectionData: sectionDataRecentNews,} = await getSectionData({sectionName: 'recent_blogs_section', isSingle: true, id: 1});

  // get gallery
  const {sectionData: sectionDataGallery,} = await getSectionData({sectionName: 'gallery', isSingle: true, id: 1});

  const {tableData: cards} = await getTableData({tableName: 'cards'});

  // get other contents
  const {sectionData:privacyDataOtherContents,} = await getSectionData({sectionName: 'other_contents', page: 'privacy-policy'});

  const {sectionData:termsConditionDataOtherContents,} = await getSectionData({sectionName: 'other_contents', page: 'terms'});

  return (
    <div className="container section">
      <div className="rounded-lg space-y-8 max-w-[800px] mx-auto ">
        <Tabs defaultValue="sections">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="sections">Hero Sections</TabsTrigger>
            <TabsTrigger value="Two_side_section">Two Side Sections</TabsTrigger>
            <TabsTrigger value="common_section">Common Sections</TabsTrigger>
            <TabsTrigger value="pages">Pages</TabsTrigger>
          </TabsList>
          <TabsContent value="sections">
            <Hero__Form 
              heroDataHome={heroDataHome}  
              sectionDataAbout={sectionDataAbout}
              sectionDataContact={sectionDataContact}
              sectionDataService={sectionDataService}
              sectionDataCareer={sectionDataCareer}
              sectionDataEvents={sectionDataEvents}
              sectionDataBlog={sectionDataBlog}
              sectionDataJoin={sectionDataJoin}
              sectionDataTeam={sectionDataTeam}
            />
          </TabsContent>
          <TabsContent value="Two_side_section">
            <Two_side_Form 
              sectionDataTwoSide={sectionDataTwoSide}
              cards={cards || []}
            />
          </TabsContent>
          <TabsContent value="common_section">
            <Common__Form  
              sectionDataBranding={sectionDataBranding} 
              blogs={blogs || []} 
              recentNews={sectionDataRecentNews} 
              sectionDataGallery={sectionDataGallery}
            />   
          </TabsContent>
          <TabsContent value="pages">
            <Pages__Form privacyDataOtherContents={privacyDataOtherContents} termsConditionDataOtherContents={termsConditionDataOtherContents}/>
          </TabsContent>
        </Tabs>

      </div>

    </div>
  )
}
export default Home;

