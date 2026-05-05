'use client'

import React, { useState } from 'react'
import { SLIDE_FORMATS } from '@/lib/types'

interface ToolbarProps {
  format: '1:1' | '4:5' | '9:16'
  activeTool: string | null
  onToolClick: (tool: string) => void
  onFormatChange: (format: '1:1' | '4:5' | '9:16') => void
  onExportSingle: () => void
  onExportAll: () => void
  backgroundColor: string
  onBackgroundChange: (color: string) => void
}

export default function Toolbar({
  format,
  activeTool,
  onToolClick,
  onFormatChange,
  onExportSingle,
  onExportAll,
  backgroundColor,
  onBackgroundChange,
}: ToolbarProps) {
  const [showColorPicker, setShowColorPicker] = useState(false)

  return (
    <div className="bg-gray-900 border-b border-gray-700 p-3 flex items-center gap-4 flex-wrap">
      {/* Tools */}
      <div className="flex gap-2">
        <button
          onClick={() => onToolClick('text')}
          className={`px-3 py-2 rounded transition ${
            activeTool === 'text'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-800 hover:bg-gray-700'
          }`}
        >
          T (Text)
        </button>
        <button
          onClick={() => onToolClick('rect')}
          className={`px-3 py-2 rounded transition ${
            activeTool === 'rect'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-800 hover:bg-gray-700'
          }`}
        >
          ▭ (Rect)
        </button>
        <button
          onClick={() => onToolClick('circle')}
          className={`px-3 py-2 rounded transition ${
            activeTool === 'circle'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-800 hover:bg-gray-700'
          }`}
        >
          ○ (Circle)
        </button>
      </div>

      {/* Format */}
      <div className="flex gap-2">
        {Object.entries(SLIDE_FORMATS).map(([key, value]) => (
          <button
            key={key}
            onClick={() => onFormatChange(key as any)}
            className={`px-3 py-2 rounded text-sm transition ${
              format === key
                ? 'bg-green-600 text-white'
                : 'bg-gray-800 hover:bg-gray-700'
            }`}
          >
            {value.label}
          </button>
        ))}
      </div>

      {/* Background Color */}
      <div className="flex items-center gap-2">
        <label className="text-sm">BG:</label>
        <div className="relative">
          <div
            onClick={() => setShowColorPicker(!showColorPicker)}
            className="w-8 h-8 rounded cursor-pointer border border-gray-600"
            style={{ backgroundColor }}
          />
          {showColorPicker && (
            <div className="absolute top-full mt-2 p-2 bg-gray-800 rounded shadow-lg z-10">
              <input
                type="color"
                value={backgroundColor}
                onChange={(e) => {
                  onBackgroundChange(e.target.value)
                  setShowColorPicker(false)
                }}
                className="w-12 h-12 cursor-pointer"
              />
            </div>
          )}
        </div>
      </div>

      {/* Export */}
      <div className="flex gap-2 ml-auto">
        <button
          onClick={onExportSingle}
          className="px-4 py-2 bg-orange-600 hover:bg-orange-700 rounded transition"
        >
          Export Slide
        </button>
        <button
          onClick={onExportAll}
          className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded transition"
        >
          Export All (ZIP)
        </button>
      </div>
    </div>
  )
}
