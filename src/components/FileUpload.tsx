import React, { useCallback } from 'react';
import { Upload, FileType } from 'lucide-react';

interface FileUploadProps {
  onFileSelect: (file: File) => void;
}

export function FileUpload({ onFileSelect }: FileUploadProps) {
  const handleDrop = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      const file = e.dataTransfer.files[0];
      if (file && (file.type === 'application/pdf' || file.type === 'application/msword' || file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document')) {
        onFileSelect(file);
      }
    },
    [onFileSelect]
  );

  const handleFileInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
        onFileSelect(file);
      }
    },
    [onFileSelect]
  );

  return (
    <div
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
      className="w-full max-w-xl p-12 border-2 border-dashed border-blue-300 rounded-xl hover:border-blue-500 transition-colors bg-white shadow-sm hover:shadow-md"
    >
      <label className="flex flex-col items-center justify-center space-y-4 cursor-pointer">
        <div className="p-4 bg-blue-50 rounded-full">
          <Upload className="w-8 h-8 text-blue-500" />
        </div>
        <div className="text-center">
          <span className="text-lg font-medium text-gray-900">
            Drop your resume here
          </span>
          <p className="text-sm text-gray-500">
            or click to browse
          </p>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <FileType className="w-4 h-4" />
          <span>Supports PDF, DOC, and DOCX files</span>
        </div>
        <input
          type="file"
          className="hidden"
          accept=".pdf,.doc,.docx"
          onChange={handleFileInput}
        />
      </label>
    </div>
  );
}