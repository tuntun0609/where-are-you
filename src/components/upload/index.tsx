'use client'

import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { useState } from 'react'
import { Card } from '../ui/card'

export const Upload = () => {
  const [image, setImage] = useState<File | undefined>()
  const [generateResult, setGenerateResult] = useState<string | undefined>()

  const handleSubmit = async () => {
    if (image) {
      const formData = new FormData()
      formData.append('image', image)
      const data = await fetch('/api/getImageInfo', {
        method: 'POST',
        body: formData,
      })
      const result = await data.json()
      console.log(result)
      setGenerateResult(result.message)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center h-full mt-4">
      <h1 className="text-2xl font-bold">Upload your image</h1>
      <div className="w-[500px]">
        <form className="mt-4">
          <Input
            onChange={(e) => {
              const fileData = e.target.files?.[0]
              setImage(fileData)
            }}
            name="image"
            type="file"
          />
        </form>
        <Button className="w-full mt-4" onClick={handleSubmit}>
          Submit
        </Button>
        {generateResult && (
          <Card className="mt-4 whitespace-pre-line p-4">{generateResult}</Card>
        )}
      </div>
    </div>
  )
}
