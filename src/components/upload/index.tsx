'use client'
import { toast } from 'sonner'
import { Loader2 } from 'lucide-react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { useState } from 'react'
import { Card } from '../ui/card'

export const Upload = () => {
  const [image, setImage] = useState<File | undefined>()
  const [generateResult, setGenerateResult] = useState<string | undefined>()
  const [loading, setLoading] = useState(false)

  const handleSubmit = async () => {
    if (image) {
      const formData = new FormData()
      formData.append('image', image)
      setLoading(true)
      try {
        const data = await fetch('/api/getImageInfo', {
          method: 'POST',
          body: formData,
        })
        if (data.status === 401) {
          toast.error('Unauthorized', {
            position: 'top-center',
            duration: 1500,
            id: 'unauthorized',
          })
        }
        const result = await data.json()
        setGenerateResult(result.message)
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    } else {
      toast.info('Please select an image', {
        position: 'top-center',
        duration: 1500,
        id: 'no-image',
      })
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
        <Button
          className="w-full mt-4"
          onClick={handleSubmit}
          disabled={loading}>
          {loading ? (
            <div className="flex items-center justify-center gap-2">
              <Loader2 className="animate-spin" />
              <div>loading</div>
            </div>
          ) : (
            'Submit'
          )}
        </Button>
        {generateResult && (
          <Card className="mt-4 whitespace-pre-line p-4">{generateResult}</Card>
        )}
      </div>
    </div>
  )
}
