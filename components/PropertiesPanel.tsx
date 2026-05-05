'use client'

import React from 'react'
import { FONTS } from '@/lib/types'

interface PropertiesPanelProps {
  selectedObject: any
  onPropertyChange: (key: string, value: any) => void
}

export default function PropertiesPanel({
  selectedObject,
  onPropertyChange,
}: PropertiesPanelProps) {
  if (!selectedObject) {
    return (
      <div className="w-48 bg-gray-900 border-l border-gray-700 p-4">
        <p className="text-sm text-gray-500">Select an object to edit</p>
      </div>
    )
  }

  const isText = selectedObject.type === 'textbox'
  const isShape = selectedObject.type === 'rect' || selectedObject.type === 'circle'

  return (
    <div className="w-48 bg-gray-900 border-l border-gray-700 overflow-y-auto">
      <div className="p-4">
        <h3 className="font-bold mb-4">Properties</h3>

        {/* Common Properties */}
        <div className="space-y-3">
          {/* Fill Color */}
          <div>
            <label className="text-sm block mb-1">Fill Color</label>
            <div className="flex gap-2">
              <input
                type="color"
                value={selectedObject.fill || '#000000'}
                onChange={(e) => onPropertyChange('fill', e.target.value)}
                className="w-12 h-8 rounded cursor-pointer"
              />
            </div>
          </div>

          {/* Opacity */}
          <div>
            <label className="text-sm block mb-1">Opacity</label>
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={selectedObject.opacity || 1}
              onChange={(e) => onPropertyChange('opacity', parseFloat(e.target.value))}
              className="w-full"
            />
          </div>

          {/* Text Properties */}
          {isText && (
            <>
              <div>
                <label className="text-sm block mb-1">Font Size</label>
                <input
                  type="number"
                  value={selectedObject.fontSize || 24}
                  onChange={(e) =>
                    onPropertyChange('fontSize', parseInt(e.target.value))
                  }
                  className="w-full px-2 py-1 bg-gray-800 border border-gray-600 rounded"
                />
              </div>

              <div>
                <label className="text-sm block mb-1">Font</label>
                <select
                  value={selectedObject.fontFamily || 'Arial'}
                  onChange={(e) => onPropertyChange('fontFamily', e.target.value)}
                  className="w-full px-2 py-1 bg-gray-800 border border-gray-600 rounded"
                >
                  {FONTS.map((font) => (
                    <option key={font} value={font}>
                      {font}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() =>
                    onPropertyChange(
                      'fontWeight',
                      selectedObject.fontWeight === 'bold' ? 'normal' : 'bold'
                    )
                  }
                  className={`flex-1 py-1 rounded text-sm ${
                    selectedObject.fontWeight === 'bold'
                      ? 'bg-blue-600'
                      : 'bg-gray-800'
                  }`}
                >
                  Bold
                </button>
                <button
                  onClick={() =>
                    onPropertyChange(
                      'fontStyle',
                      selectedObject.fontStyle === 'italic' ? 'normal' : 'italic'
                    )
                  }
                  className={`flex-1 py-1 rounded text-sm ${
                    selectedObject.fontStyle === 'italic'
                      ? 'bg-blue-600'
                      : 'bg-gray-800'
                  }`}
                >
                  Italic
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
