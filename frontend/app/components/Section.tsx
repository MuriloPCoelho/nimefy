import type { ReactNode } from 'react'
import { Link } from 'react-router'
import { Carousel, CarouselContent } from './ui/carousel'

interface SectionProps {
  title: string
  children: ReactNode
  linkTo?: string
}

const Section = ({ title, linkTo, children }: SectionProps) => {
  return (
    <section>
      <div>
        <h2>{title}</h2>
        {linkTo && (
          <Link
            to={linkTo}
            className="text-blue-500 hover:text-blue-700 transition-colors"
          >
            Veja mais
          </Link>
        )}
      </div>

      <Carousel className="w-full pl-8" opts={{ axis: 'x', loop: true }}>
        <CarouselContent className="-ml-4">{children}</CarouselContent>
      </Carousel>
    </section>
  )
}

export default Section
