"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { X } from "lucide-react";

type ImageUploaderProps = {
  defaultValue?: string;
  onChange: (file: File | null) => void;
  size?: number;
};

const SingleImageUploadX: React.FC<ImageUploaderProps> = ({
  defaultValue = "",
  onChange,
  size = 3,
}) => {
  const [image, setImage] = useState<string | File>(defaultValue);
  const [previewUrl, setPreviewUrl] = useState<string>(defaultValue);
  const [isDragging, setIsDragging] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const MAX_FILE_SIZE = size * 1024 * 1024;

  // Memoize the image upload handler
  const handleImageUpload = useCallback((newFile: File) => {
    if (newFile.size <= MAX_FILE_SIZE) {
      setImage(newFile);
      setPreviewUrl(URL.createObjectURL(newFile));
      setErrorMessage("");
      onChange(newFile);
    } else {
      setErrorMessage("The file is too large and was not added.");
    }
  }, [MAX_FILE_SIZE, onChange]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      handleImageUpload(file);
    }
    // Reset input value to allow re-selecting the same file
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };

  const handleRemoveImage = () => {
    setImage("");
    setPreviewUrl("");
    onChange(null);
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };

  const handleDrop = useCallback((event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(false);
    const file = event.dataTransfer.files?.[0];
    if (file) {
      handleImageUpload(file);
    }
  }, [handleImageUpload]);

  // Clean up preview URL when component unmounts
  useEffect(() => {
    return () => {
      if (previewUrl && previewUrl !== defaultValue) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl, defaultValue]);

  const formatFileSize = (size: number) => {
    if (size < 1024) return `${size} B`;
    else if (size < 1048576) return `${(size / 1024).toFixed(1)} KB`;
    else return `${(size / 1048576).toFixed(1)} MB`;
  };

  return (
    <div className="bg-white">
      <div
        className={`border-2 border-dashed rounded-lg p-6 ${
          isDragging
            ? "border-primary bg-blue-100"
            : "border-gray-300 bg-gray-50"
        }`}
        onDragOver={(e) => {
          e.preventDefault();
          setIsDragging(true);
        }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={handleDrop}
      >
        <div className="flex flex-col items-center justify-center h-32">
          <span className="text-primary text-2xl md:text-3xl lg:text-4xl mb-2">
            📁
          </span>
          <p className="text-gray-500 text-center">
            Drag and drop your file here
          </p>
          <p className="text-gray-500 text-center">or</p>
          <button
            type="button"
            className="text-primary underline"
            onClick={() => inputRef.current?.click()}
          >
            Browse file
          </button>
          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleFileChange}
          />
        </div>
      </div>
      <p className="text-gray-500 mt-2 text-sm">
        Supported file size: PNG, JPG, GIF (Max {size}MB)
      </p>
      {errorMessage && (
        <p className="text-red-500 mt-2 text-sm">{errorMessage}</p>
      )}
      {image && (
        <div className="mt-4">
          <div className="relative flex flex-col items-center mb-4 p-2 border rounded-lg">
            <div className="w-full min-h-[200px] relative">
              <Image
                src={typeof image === "string" ? image : previewUrl}
                alt="Image"
                className="rounded-md"
                width={800}
                height={400}
              />
            </div>
            <div className="ml-4 flex-grow">
              <div>
              <p className="text-gray-700 text-xs">
                Name: {typeof image === "string"
                  ? image.split("/").pop()
                  : image.name}
              </p>
              <p className="text-gray-500 text-xs">
                Size: {typeof image === "string" ? "" : formatFileSize(image.size)}
              </p>
              </div>
              <div
              className="ml-4 bg-red-500 text-white rounded-full p-1 min-w-5 min-h-5 w-5 h-5 flex items-center justify-center cursor-pointer"
              onClick={handleRemoveImage}
            >
              <X className="w-4 h-4 stroke-white" />
            </div>
            </div>
            
          </div>
        </div>
      )}
      <div
        onClick={() => inputRef.current?.click()}
        className="mt-4 py-2 rounded-lg border bg-white flex items-center justify-center text-sm"
      >
        Upload Image
      </div>
    </div>
  );
};

export default SingleImageUploadX;