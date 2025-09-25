import { Metadata } from 'next'
import { getEspecializacion } from '@/sanity/lib/queries'

type Props = {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const especializacion = await getEspecializacion(params.slug)
  
  return {
    title: especializacion?.title,
    description: especializacion?.description,
  }
}

export default async function Page({ params }: Props) {
  const especializacion = await getEspecializacion(params.slug)

  return (
    <div>
      {/* Your page content using especializacion data */}
    </div>
  )
}