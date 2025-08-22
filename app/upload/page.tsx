"use client";
import React, { useState } from "react";
import { CldUploadWidget, CldImage } from "next-cloudinary";

interface UploadPageProps {
  public_id?: string;
}

const UploadPage = () => {
  const [imageId, setImageId] = useState("");

  return (
    <>
      {/*渲染上传的图片 */}
      {imageId && (
        <CldImage width="300" height="300" src={imageId} alt="Uploaded Image" />
      )}
      {/* 上传图片到云端 */}
      <CldUploadWidget
        // 这里的 uploadPreset 应该替换为你在 Cloudinary 上设置的上传预设
        uploadPreset="firist"
        options={{ sources: ["local"], multiple: false, maxFiles: 5 }}
        onSuccess={(result) => {
          // 处理上传结果
          console.log("Upload success result:", result.info);
          // Cloudinary 返回的图片唯一 ID 是 public_id
          const publicId = result.info as UploadPageProps;
          // 更新状态以显示上传的图片
          setImageId(publicId.public_id || "");
        }}
      >
        {({ open }) => (
          <button className="btn btn-primary" onClick={() => open()}>
            Upload
          </button>
        )}
      </CldUploadWidget>
    </>
  );
};

export default UploadPage;
