'use client'

import { useEffect, useState } from "react";
import { deleteMedia, getAllMedia } from "@/utils/api";
import Media__item from "./Media__item";
// import Pagination from "./pagination";
import { MediaItem } from "@/types/media";
import { Button } from "@/components/ui/button";
import { ChevronLeftIcon, ChevronRightIcon, Loader2Icon, PlusIcon, TrashIcon, UploadIcon } from "lucide-react";

import Response from "@/components/common/Response";
import { Modal } from "@/components/common/Modal";
// import {  FormX__TYPE_Field, FormX__TYPE_Structure } from "@/components/form-x/form-x";
// import { z } from "zod";
import { UseFormReturn } from "react-hook-form";
import Upload from "./Upload";
import useStore from "@/lib/store";

export default function Media__com({ form, name, setOpen }: { form: UseFormReturn, name: string, setOpen: (open: boolean) => void }) {


    const [page, setPage] = useState(1);
    const [media, setMedia] = useState<MediaItem[]>([]);
    // const [isSelected, setIsSelected] = useState<MediaItem[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    const { selected, setSelected } = useStore() as { selected: MediaItem[], setSelected: (selected: MediaItem[]) => void };

    useEffect(() => {
        const fetchMedia = async () => {
            setIsLoading(true);
            const response = await getAllMedia(page);
            if (response?.data) {
                setMedia(response.data);
                setIsLoading(false);
            }
        };

        fetchMedia();
    }, [page]);


    // handle pagination, if page is 1, then prev is disabled
    const handlePagination = (type: 'prev' | 'next') => {
        if (type === 'prev') {
            setPage(page - 1);
        } else {
            setPage(page + 1);
        }
    }


    const handleInsertImages = () => {
        // insert selected images to the react form hook
            form.setValue(name, selected, {
            shouldValidate: true,
            shouldDirty: true,
            shouldTouch: true
        });
        setOpen(false);
    }

    const handleDelete = async () => {
        const response = await deleteMedia({ fileName: selected.map(item => item.name) });
        if (response?.data) {
            setMedia(media.filter(item => !selected.some(selected => selected.name === item.name)));
            setSelected([]);
            Response({
                title: 'Success',
                description: 'Media deleted successfully',
                success: true,
            })
        } else {
            Response({
                title: 'Error',
                description: 'Failed to delete media',
                success: false,
            })
        }
    }







    return (
        <div className="w-full">
            <div className="flex justify-between items-center py-4">
                <div className="flex items-center gap-2">
                    {/* disable prev button if page is 1 */}
                    <Button disabled={page === 1} onClick={() => handlePagination('prev')} variant="outline" className="hover:bg-primary hover:text-white flex items-center gap-2">
                        <ChevronLeftIcon className="w-4 h-4" />
                    </Button>
                    <Button onClick={() => handlePagination('next')} variant="outline" className="hover:bg-primary hover:text-white flex items-center gap-2">
                        <ChevronRightIcon className="w-4 h-4" />
                    </Button>
                </div>
                <div className="flex items-center gap-2">
                    {
                        selected.length > 0 && (
                            <Button onClick={handleDelete} variant="destructive" className="hover:bg-primary hover:text-white flex items-center gap-2">
                                <TrashIcon className="w-4 h-4" />
                                Delete
                            </Button>
                        )
                    }
                    {
                        selected.length > 0 && (
                            <Button onClick={handleInsertImages} variant="default" className=" hover:bg-primary hover:text-white flex items-center gap-2">
                                <PlusIcon className="w-4 h-4" />
                                Insert Images
                            </Button>
                        )
                    }

                    {/* upload media button  */}
                    <div className=" overflow-y-auto">
                    <Modal  trigger={
                        <Button className="hover:bg-primary hover:text-white flex items-center gap-2">
                            <UploadIcon className="w-4 h-4" />
                            Upload Media
                        </Button>
                    } title="Upload Media">
                       <Upload />
                    </Modal>
                    </div>
                </div>

            </div>
            <div className="grid grid-cols-6 gap-4">

                {
                    isLoading ? (
                        Array.from({ length: 10 }).map((_, idx) => (
                            <div key={idx} className="col-span-1 flex justify-center items-center h-[200px] border rounded-md">
                                <Loader2Icon className="w-4 h-4 animate-spin" />
                            </div>
                        ))
                    ) : (
                        //  eslint-disable-next-line
                        media?.map((item: any, idx: number) => (
                            <Media__item key={idx} media={item} />
                        ))
                    )
                }
            </div>
        </div>
    )
}

