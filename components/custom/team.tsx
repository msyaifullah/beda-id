import { Facebook, Instagram, Linkedin } from "lucide-react"

import { buttonVariants } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface TeamProps {
  imageUrl: string
  name: string
  position: string
  socialNetworks: SociaNetworkslProps[]
}

interface SociaNetworkslProps {
  name: string
  url: string
}

const teamList: TeamProps[] = [
  {
    imageUrl: "/images/founders/moss.png",
    name: "Moss",
    position: "Founder",
    socialNetworks: [
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/leopoldo-miranda/",
      },
      {
        name: "Facebook",
        url: "https://www.facebook.com/",
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/",
      },
    ],
  },
  {
    imageUrl: "/images/founders/moss.png",
    name: "T.Raj",
    position: "Advisor",
    socialNetworks: [
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/leopoldo-miranda/",
      },
      {
        name: "Facebook",
        url: "https://www.facebook.com/",
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/",
      },
    ],
  },
  {
    imageUrl: "/images/founders/moss.png",
    name: "Rosad",
    position: "Developer",
    socialNetworks: [
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/leopoldo-miranda/",
      },

      {
        name: "Instagram",
        url: "https://www.instagram.com/",
      },
    ],
  },
  {
    imageUrl: "/images/founders/moss.png",
    name: "Muh Iqbal",
    position: "Dev Ops Engineer",
    socialNetworks: [
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/leopoldo-miranda/",
      },
      {
        name: "Facebook",
        url: "https://www.facebook.com/",
      },
    ],
  },
]

export const Team = () => {
  const socialIcon = (iconName: string) => {
    switch (iconName) {
      case "Linkedin":
        return <Linkedin size="20" />

      case "Facebook":
        return <Facebook size="20" />

      case "Instagram":
        return <Instagram size="20" />
    }
  }

  return (
    <section id="team" className="container py-24 sm:py-32">
      <h2 className="text-3xl font-bold md:text-4xl">
        <span className="bg-gradient-to-b from-primary/60 to-primary bg-clip-text text-transparent">Our Dedicated </span>
        Team
      </h2>

      <p className="mb-16 mt-4 text-xl text-muted-foreground">A passionate group of experts committed to collaboration, innovation, and excellence.</p>

      <div className="grid gap-8 gap-y-10 md:grid-cols-2 lg:grid-cols-4">
        {teamList.map(({ imageUrl, name, position, socialNetworks }: TeamProps) => (
          <Card key={name} className="relative mt-8 flex flex-col items-center justify-center bg-muted/50">
            <CardHeader className="mt-8 flex items-center justify-center pb-2">
              <img src={imageUrl} alt={`${name} ${position}`} className="absolute -top-20 aspect-square size-32 rounded object-cover" />
              <CardTitle className="text-center">{name}</CardTitle>
              <CardDescription className="text-primary">{position}</CardDescription>
            </CardHeader>

            <CardContent className="pb-2 text-center">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </CardContent>

            <CardFooter>
              {socialNetworks.map(({ name, url }: SociaNetworkslProps) => (
                <div key={name}>
                  <a
                    rel="noreferrer noopener"
                    href={url}
                    target="_blank"
                    className={buttonVariants({
                      variant: "ghost",
                      size: "sm",
                    })}
                  >
                    <span className="sr-only">{name} icon</span>
                    {socialIcon(name)}
                  </a>
                </div>
              ))}
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}
