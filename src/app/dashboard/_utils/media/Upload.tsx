'use client'

import React, { useState, useRef, ChangeEvent, DragEvent } from 'react'
import Image from 'next/image'
import { X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { uploadFile } from "@/utils/api";
import Response from "@/components/common/Response";

export default function ImageUpload() {
  const [previews, setPreviews] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isUploading, setIsUploading] = useState(false);


  const [files, setFiles] = useState<File[]>([]);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])
    handleFiles(files)
  }

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    const files = Array.from(e.dataTransfer.files)
    handleFiles(files)
  };

  const handleFiles = (files: File[]) => {
    const imageFiles = files.filter(file => file.type.startsWith('image/'))
    const newPreviews = imageFiles.map(file => URL.createObjectURL(file))
    setPreviews(prev => [...prev, ...newPreviews])
    // onUpload(imageFiles)
    setFiles(prev => [...prev, ...imageFiles])
  }

  const removePreview = (index: number) => {
    setPreviews(prev => prev.filter((_, i) => i !== index))
  }


  const handleUpload = async () => {
    try {
        setIsUploading(true);
        const uploadResponse = await uploadFile({ files: files, multiple: true });

        if (uploadResponse) {
            setIsUploading(false);
            Response({
                title: 'Success',
                description: 'Media uploaded successfully',
                success: true,
            })
        } else {
            setIsUploading(false);
            Response({
                title: 'Error',
                description: 'Failed to upload media',
                success: false,
            })
        }

    } catch (error) {
        console.log(error, 'error');
        setIsUploading(false);
    }
}



// useEffect(() => {
//     setSelected(previews?.map((preview, index) => ({
//         name: preview?.name || '',
//         publicUrl: preview?.publicUrl || '',
//         id: `image-${index}`
//     })));
// }, [previews]);



  console.log(previews, 'previews');

  return (
    <div className="w-full max-w-md mx-auto">
      <div
        className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center cursor-pointer hover:border-gray-400 transition-colors"
        onClick={() => fileInputRef.current?.click()}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          multiple
          accept="image/*"
          className="hidden"
        />
        <p className="text-gray-600">Click to select or drag and drop images here</p>
      </div>
      {previews.length > 0 && (
        <div className="mt-4 grid grid-cols-3 gap-4">
          {previews?.map((preview, index) => (
            <div key={index} className="relative">
              <Image
                src={preview}
                alt={`Preview ${index + 1}`}
                width={100}
                height={100}
                className="rounded-lg object-cover w-full h-24"
              />
              <button
                onClick={() => removePreview(index)}
                className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors"
              >
                <X size={16} />
              </button>
            </div>
          ))}
        </div>
      )}

      <Button className="mt-4 w-full hover:bg-primary hover:text-white" onClick={handleUpload}>
        {isUploading ? 'Uploading...' : 'Upload Media'} 
        </Button>    
    </div>
  )
}

