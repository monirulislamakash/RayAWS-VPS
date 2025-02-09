'use client'

import { getImage } from "@/utils/api";
import Image from "next/image";
import { useEffect, useState } from "react";
import { MediaItem } from "@/types/media";
import useStore from "@/lib/store";

export default function Media__item({ media }: { media: MediaItem }) {
  const [data, setData] = useState<{ publicUrl: string } | null>(null);
  const { selected, setSelected } = useStore();

  // if selected is array then check if the item is in the array  
  const isSelected = Array.isArray(selected) && selected.some(item => item?.id === media?.id);


  useEffect(() => {
    const fetchData = async () => {
      const response = await getImage({ fileName: media.name });
      setData(response.data);
    };
    fetchData();
  }, [media.name]);

  const handleClick = (item: MediaItem) => {
    // if selected is array then check if the item is in the array
    if (Array.isArray(selected)) {
      if (selected?.some((selected: MediaItem) => selected.name === item.name)) {
        setSelected(selected?.filter((selected: MediaItem) => selected.name !== item.name));
      } else {
        setSelected([...selected, item]);
      }
    }else{
      setSelected([item]);
    }
  }

  return (
    <div onClick={() => handleClick({
      name: media.name,
      publicUrl: data?.publicUrl || '',
      id: media.id
    })} className="w-full h-full border border-gray-200 rounded-md p-2 cursor-pointer relative">
        {
            data?.publicUrl ? (
                <Image className="w-full h-full object-contain" src={data?.publicUrl || ''} alt={media.name} width={400} height={400} />
            ) : (
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    <span>No Image</span>
                </div>
            )
        }
      
        {isSelected && (
          <div className="absolute top-0 left-0 bg-red-500 text-white p-2 rounded-md text-xs">
            <span>Selected</span>
          </div>
        )}
    </div>
  )
}