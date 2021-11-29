import path from 'path'

type ImageExtension = 'png' | 'svg'

export const timeout = async (ms: number) => {
  await new Promise((resolve) => setTimeout(resolve, ms))
}

export const extractImageOfId = (url: string, ext: ImageExtension) => {
  return path.basename(url, `.${ext}`)
}
