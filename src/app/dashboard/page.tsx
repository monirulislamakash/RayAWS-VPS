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
  // Authentication check
  const supabase = await createClient();
  const { data: userData } = await supabase.auth.getUser();

  if (userData?.user?.aud !== "authenticated") {
    redirect("/auth");
  }

  // Parallel data fetching using Promise.all
  const [
    heroSections,
    twoSideData,
    commonSections,
    pageContents
  ] = await Promise.all([
    // Hero sections
    Promise.all([
      getSectionData({page: 'home', sectionName: 'hero_section'}),
      getSectionData({page: 'about', sectionName: 'hero_section'}),
      getSectionData({page: 'contact', sectionName: 'hero_section'}),
      getSectionData({page: 'service', sectionName: 'hero_section'}),
      getSectionData({page: 'career', sectionName: 'hero_section'}),
      getSectionData({page: 'events', sectionName: 'hero_section'}),
      getSectionData({page: 'blog', sectionName: 'hero_section'}),
      getSectionData({page: 'join', sectionName: 'hero_section'}),
      getSectionData({page: 'team', sectionName: 'hero_section'})
    ]),
    // Two side section data
    Promise.all([
      getSectionData({sectionName: 'two_side_section', isMultiple: true}),
      getTableData({tableName: 'cards'})
    ]),
    // Common sections
    Promise.all([
      getSectionData({sectionName: 'branding', isMultiple: true}),
      getTableData({tableName: 'blogs'}),
      getSectionData({sectionName: 'recent_blogs_section', isSingle: true, id: 1}),
      getSectionData({sectionName: 'gallery', isSingle: true, id: 1})
    ]),
    // Page contents
    Promise.all([
      getSectionData({sectionName: 'other_contents', page: 'privacy-policy'}),
      getSectionData({sectionName: 'other_contents', page: 'terms'})
    ])
  ]);

  const [
    {sectionData: heroDataHome},
    {sectionData: sectionDataAbout},
    {sectionData: sectionDataContact},
    {sectionData: sectionDataService},
    {sectionData: sectionDataCareer},
    {sectionData: sectionDataEvents},
    {sectionData: sectionDataBlog},
    {sectionData: sectionDataJoin},
    {sectionData: sectionDataTeam}
  ] = heroSections;

  const [
    {sectionData: sectionDataTwoSide},
    {tableData: cards}
  ] = twoSideData;

  const [
    {sectionData: sectionDataBranding},
    {tableData: blogs},
    {sectionData: sectionDataRecentNews},
    {sectionData: sectionDataGallery}
  ] = commonSections;

  const [
    {sectionData: privacyDataOtherContents},
    {sectionData: termsConditionDataOtherContents}
  ] = pageContents;

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

