import { NextResponse } from 'next/server'

export async function POST(req: any, res: any) {
  // 解析formData
  const formData = await req.formData()
  const image = formData.get('image')
  const fd = new FormData()
  fd.append('image', image)
  const data = await fetch('https://locate-image-7cs5mab6na-uc.a.run.app/', {
    method: 'POST',
    body: fd,
    headers: {
      origin: 'https://geospy.ai',
      referer: 'https://geospy.ai/',
      priority: 'u=1, i',
    },
  })
  const json = await data.json()
  return NextResponse.json(json)
}

export async function GET(req: any, res: any) {
  return NextResponse.json({
    message: 'Hello world!',
  })
}
