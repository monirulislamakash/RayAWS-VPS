import PageHeaderSection from "@/components/common/Page__Header__Section";
import Leader__Section from "./_utils/Leader__Section";
import Gallery__Carousel from "../_utils/components/Gallery__Carousel";
import Divider from "../_utils/components/Divider";
import AllTeamSection from "./_utils/All__Team__Section";
import Header from "@/components/common/layout/Header";
import Footer from "@/components/common/layout/Footer";
import { getSectionData, getTableData } from "@/utils/api";
import { Metadata } from "next";


export const metadata: Metadata = {
    title: "Our Team - Ray Advertising",
    description: "Ray Advertising",
};
  
// Add type for the team data
type TeamMember = {
  id: number;
  name: string;
  position: string;
  // Add other team member properties as needed
};

type GalleryImage = {
  id: number;
  url: string;
  // Add other image properties as needed
};

export default async function OurTeam() {
  // Fetch data in parallel using Promise.all
  const [galleryResponse, teamResponse] = await Promise.all([
    getSectionData({ sectionName: 'gallery', isSingle: true, id: 1 }),
    getTableData({ tableName: "teams" })
  ]);

  const images: GalleryImage[] = galleryResponse.sectionData?.images || [];
  const teamData: TeamMember[] = teamResponse.tableData || [];

  const teamImages = images.map(member => member.url) || [];

  return (
    <>
        <Header />
        <main>
            <PageHeaderSection title="Our Team" description="#Dream team that works for your" bg="/images/team-bg.png" />
            <Leader__Section teamData={teamData} />
            <Divider />
            <AllTeamSection teamData={teamData} />
            <Gallery__Carousel images={teamImages} />
        </main>
        <Footer />
    </>
  )
}