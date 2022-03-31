interface IGallery {
  id?: string
  createdAt: string
  nsfw: boolean
  col: number
  embeds: string[]
}

interface IReactiveGalleries {
  loading: boolean
  data: IGallery[]
}
