
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface TeamProps {
  imageUrl: string
  name: string
  position: string
  description: string
}

const teamList: TeamProps[] = [
  {
    imageUrl: "/images/founders/moss.png",
    name: "B",
    position: "Boldness",
    description: "We take initiative, embrace challenges, and push boundaries to drive innovation",
  },
  {
    imageUrl: "/images/founders/moss.png",
    name: "E",
    position: "Excellence",
    description: "We strive for the highest standards in everything we do, delivering quality and impact",
  },
  {
    imageUrl: "/images/founders/moss.png",
    name: "D",
    position: "Dedication",
    description: "We are committed to our mission, our team, and our clients, going the extra mile to achieve success",
  },
  {
    imageUrl: "/images/founders/moss.png",
    name: "A",
    position: "Agility",
    description: "We adapt quickly, stay flexible, and embrace change to remain ahead in a dynamic world",
  },
]

export const About = () => {
  return (
    <section id="team" className="container py-24 sm:py-32">
      <h2 className="text-3xl font-bold md:text-4xl">
        <span className="bg-gradient-to-b from-primary/60 to-primary bg-clip-text text-transparent">Our Company </span>
        Value
      </h2>

      <p className="mb-16 mt-4 text-xl text-muted-foreground">Guiding principles that shape our culture, drive our decisions, and inspire our success.</p>

      <div className="grid gap-8 gap-y-10 md:grid-cols-2 lg:grid-cols-4">
        {teamList.map(({ imageUrl, name, position, description }: TeamProps) => (
          <Card key={name} className="relative mt-8 flex flex-col items-center justify-center bg-muted/50">
            <CardHeader className="mt-8 flex items-center justify-center pb-2">
              <img src={imageUrl} alt={`${name} ${position}`} className="absolute -top-20 aspect-square size-32 rounded object-cover" />
              <CardTitle className="text-center">{name}</CardTitle>
              <CardDescription className="text-primary">{position}</CardDescription>
            </CardHeader>

            <CardContent className="pb-2 text-center">
              <p>{description}.</p>
            </CardContent>

            <CardFooter></CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}
