import Marquee from "@/components/ui/marquee";
import TestimonialCard from './Testimonial__Card';
import Heading from "@/components/common/Heading";
import { getSectionData } from "@/utils/api";
import AnimateContainer from "../Animate_Container";



export default async function TestimonialSection() {

    const reviews = await getSectionData({ sectionName: "reviews", isMultiple: true })
    // console.log(reviews, 'reviews');

    return (
        <div className="section container">
            <Heading
                label="What Our Clients Say"
                headingStyle="text-primary"
                desc="Some words from our valuable  clients"
            />
            <AnimateContainer direction="downToUp">
                <Marquee pauseOnHover className="[--duration:20s] pt-5">
                    {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                    {reviews?.sectionData?.map((review: any, index: number) => (
                        <TestimonialCard key={index} {...review} />
                    ))}
                </Marquee>
            </AnimateContainer>
        </div>
    )
}