'use client';

import { Button } from "@/components/ui/button";
import Blog__Card from "./Blog__Card";
import Blog__Pagination from "./Blog__Pagination";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { getBlogs } from "@/utils/api";
import { Skeleton } from "@/components/ui/skeleton";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Blogs__Section() {
    const [page, setPage] = useState(1);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [blogs, setBlogs] = useState<any>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchBlogs = async () => {
            setIsLoading(true)
            const { blogsData } = await getBlogs(page, 5)
            setBlogs(blogsData)
            setIsLoading(false)
        }
        fetchBlogs()
    }, [page])






    return (
        <div className="section container">
            <div className="flex items-center  gap-4">
                <Button className="text-base font-medium text-text_color border-none shadow-none" variant="outline">All</Button>
                <Button className="text-base font-medium text-text_color border-none shadow-none" variant="outline">Popular</Button>
                <Button className="text-base font-medium hover:bg-primary hover:text-white transition-all duration-300 " variant="default">Latest</Button>
            </div>
            <motion.div
                // left to right
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="py-5">
                {
                    isLoading ? (
                        Array.from({ length: 4 }).map((_, idx) => (
                            <div key={idx} className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 py-5">
                                <div className="w-full ">
                                    <Skeleton className="w-full h-[312px] bg-gray-100" />
                                </div>
                                <div className="w-full space-y-6 ">
                                    <Skeleton className="w-full h-[20px] bg-gray-100 mb-10" />
                                    <Skeleton className="w-full h-[10px] bg-gray-100 mb-2" />
                                    <Skeleton className="w-full h-[10px] bg-gray-100 mb-5" />
                                    <div className="w-full space-y-6 pt-[40px]">
                                        <Skeleton className="w-full h-[15px] bg-gray-100 mb-2" />
                                        <Skeleton className="w-full h-[15px] bg-gray-100 mb-2" />
                                        <Skeleton className="w-full h-[15px] bg-gray-100" />
                                    </div>
                                </div>

                            </div>
                        ))
                    ) :
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        blogs?.map((item: any, idx: number) => (

                            <Blog__Card key={idx} item={item} />
                        ))
                }



            </motion.div>


            <Blog__Pagination blogs={blogs} page={page} setPage={setPage} />


        </div>
    )
}
