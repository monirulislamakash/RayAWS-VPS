import PageHeaderSection from "@/components/common/Page__Header__Section";
import { Metadata } from "next";
import Events__Section from "./_utils/Events__Section";
import Blog__Carousel from "../about-us/_utils/Blog__Carousel";
import Header from "@/components/common/layout/Header";
import Footer from "@/components/common/layout/Footer";
import { getTableData } from "@/utils/api";
export const metadata: Metadata = {
    title: "Events - Ray Advertising",
    description: "Ray Advertising",
};


type Blog = {
  id: number;
  title: string;
  description: string;
  images: any[];
};

type Event = {
  id: number;
  name: string;
  date: string;
  gallery: string[];
  location: string;
  description: {
    paragraph: (string | JSX.Element)[]; 
  };
  content: string;
  start_date: string;
  end_date: string;
  images: any[];
};

export default async function Events() {

  const [blogsResponse, eventsResponse] = await Promise.all([
    getTableData({ tableName: "blogs" }).catch(error => {
      console.error('Failed to fetch blogs:', error);
      return { tableData: [] };
    }),
    getTableData({ tableName: "events" }).catch(error => {
      console.error('Failed to fetch events:', error);
      return { tableData: [] };
    })
  ]);

  const blogs = blogsResponse.tableData as Blog[];
  const events = eventsResponse.tableData as Event[];

  return (
    <>
      <Header />
      <main>
        <PageHeaderSection 
          title="Events" 
          description="RAPIDLY GROWING #1 PERFORMANCE AFFILIATE NETWORK" 
          bg="/images/events-bg.png" 
        />

        <div className="section">
          {events?.length > 0 ? (
            events.map((item) => (
              <Events__Section 
                key={item.id} 
                idx={item.id} 
                item={item} 
              />
            ))
          ) : (
            <p>No events found</p>
          )}
        </div>

        <Blog__Carousel blogs={blogs} />
      </main>
      <Footer />
    </>
  );
}