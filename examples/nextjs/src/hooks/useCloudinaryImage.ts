import { buildUrl } from 'cloudinary-build-url'

interface ImageTransformOptions {
  transformations: {
    effect?: string
    quality?: number
  }
}

export const buildImageUrl = (imageId: string, options?: ImageTransformOptions) =>
  buildUrl(imageId, {
    cloud: {
      cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME as string,
    },
    transformations: {
      ...options?.transformations,
    },
  })

export const useCloudinaryImage = (publicId: string) => {
  const imageURL = buildImageUrl(publicId)
  const blurDataURL = buildImageUrl(publicId, {
    transformations: { effect: 'blur:1000', quality: 1 },
  })

  console.dir(blurDataURL)

  return { imageURL, blurDataURL }
}
