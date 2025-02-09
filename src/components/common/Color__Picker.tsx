'use client';
import React, { useState } from 'react'
import { useCurrentEditor } from '@tiptap/react'
import { Button } from '../ui/button'

const ColorPicker = () => {
  const { editor } = useCurrentEditor()
  const [customColor, setCustomColor] = useState('#000000') // Default black color

  if (!editor) {
    return null
  }

  const applyColor = () => {
    if (customColor) {
      editor.chain().focus().setColor(customColor).run()
    }
  }

  return (
    <div className="color-picker-group">
      {/* Button to Apply Current Custom Color */}
      <Button
        onClick={applyColor}
        style={{
          backgroundColor: editor.isActive('textStyle', { color: customColor }) ? customColor : 'transparent',
          color: editor.isActive('textStyle', { color: customColor }) ? '#fff' : '#000',
        }}
        className={editor.isActive('textStyle', { color: customColor }) ? 'is-active' : ''}
      >
        Apply Color
      </Button>

      {/* Input for Custom Hex Code */}
      <input
        type="color"
        value={customColor}
        onChange={(e) => setCustomColor(e.target.value)}
        className="color-input"
      />

      {/* Hex Input for Manual Color Input */}
      <input
        type="text"
        value={customColor}
        onChange={(e) => setCustomColor(e.target.value)}
        placeholder="#000000"
        className="hex-input"
      />
    </div>
  )
}

export default ColorPicker
