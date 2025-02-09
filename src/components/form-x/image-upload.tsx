'use client'
import Media__com from "@/app/dashboard/_utils/media/media__com";
import { Modal } from "../common/Modal";
import { Button } from "../ui/button";
import { ImageIcon } from "lucide-react";
import { UseFormReturn } from "react-hook-form";
import Image from "next/image";
import { useState } from "react";
import { MediaItem } from "@/types/media";
import useStore from "@/lib/store";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function ImageUpload({ label, name, form, defaultValue, defaultValues }: { label: string, name: string, form: UseFormReturn, defaultValue?: any, defaultValues?: MediaItem[] }) {

    const [open, setOpen] = useState(false);

    const images = form.watch(name) || defaultValues || [];

    const isSingleImage = typeof defaultValue === 'string';

    const singleImage = images[0]?.publicUrl || defaultValue;

    const { setSelected } = useStore() as { selected: MediaItem[], setSelected: (selected: MediaItem[]) => void };

    const handleShowSelectedImages = () => {
        if (images.length > 0) {
            setSelected(images);
            setOpen(true);
        }
    }



    return (
        <div>
            <Modal
                open={open}
                setOpen={setOpen}
                className="max-w-[1200px]"
                title="Upload Image"
                trigger={
                    <div className="space-y-2">
                        <h4 className="text-sm font-medium">{label}</h4>
                        <Button onClick={handleShowSelectedImages} type="button" variant="outline" className="flex items-center gap-2">
                            <ImageIcon className="w-4 h-4" />
                            {images.length > 0 ? 'Edit Images' : 'Select Images'}
                        </Button>
                    </div>
                }
            >
                <Media__com form={form} name={name} setOpen={setOpen} />
            </Modal>
            <div className="flex items-center flex-wrap gap-2 py-4">
                {isSingleImage ? (
                    singleImage && (
                        <Image 
                            className="p-2 rounded-md border border-gray-200" 
                            src={singleImage} 
                            alt="Uploaded image" 
                            width={100} 
                            height={100} 
                        />
                    )
                ) : (
                    images?.map((image: MediaItem, index: number) => (
                        <Image 
                            className="p-2 rounded-md border border-gray-200" 
                            key={index} 
                            src={image?.publicUrl || ''} 
                            alt={image?.name || `Image ${index + 1}`} 
                            width={100} 
                            height={100} 
                        />
                    ))
                )}
            </div>
        </div>
    )
}
