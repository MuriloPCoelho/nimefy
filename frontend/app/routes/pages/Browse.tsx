import Card from '~/components/Card'
import Hero from '~/components/Hero'
import Section from '~/components/Section'
import { CarouselItem } from '~/components/ui/carousel'

const DATA = [
  {
    id: '1',
    title: 'The Witcher',
    image: 'https://example.com/the-witcher.jpg',
  },
  {
    id: '2',
    title: 'Stranger Things',
    image: 'https://example.com/stranger-things.jpg',
  },
  {
    id: '3',
    title: 'Breaking Bad',
    image: 'https://example.com/breaking-bad.jpg',
  },
  {
    id: '1',
    title: 'The Witcher',
    image: 'https://example.com/the-witcher.jpg',
  },
  {
    id: '2',
    title: 'Stranger Things',
    image: 'https://example.com/stranger-things.jpg',
  },
  {
    id: '3',
    title: 'Breaking Bad',
    image: 'https://example.com/breaking-bad.jpg',
  },
  {
    id: '1',
    title: 'The Witcher',
    image: 'https://example.com/the-witcher.jpg',
  },
  {
    id: '2',
    title: 'Stranger Things',
    image: 'https://example.com/stranger-things.jpg',
  },
  {
    id: '3',
    title: 'Breaking Bad',
    image: 'https://example.com/breaking-bad.jpg',
  },
]

const Browse = () => {
  return (
    <>
      <Hero />
      <div>
        <Section title="Continuar assistindo">
          {DATA.map((item, index) => (
            <CarouselItem className="pl-4 basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6">
              <Card
                key={index}
                image={item.image}
                title={item.title}
                categories={['Ação', 'Aventura', 'Fantasia']}
                ageRating="16"
                year={2023}
              />
            </CarouselItem>
          ))}
        </Section>
      </div>
    </>
  )
}

export default Browse
