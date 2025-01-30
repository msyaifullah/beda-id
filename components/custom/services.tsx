import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

import { ChartIcon, MagnifierIcon, WalletIcon } from "./icons"

interface ServiceProps {
  title: string
  description: string
  icon: JSX.Element
}

const serviceList: ServiceProps[] = [
  {
    title: "Code Collaboration",
    description: "Foster innovation and efficiency with our collaborative coding environment. By bringing together diverse expertise and cutting-edge tools, we ensure seamless teamwork, faster development cycles, and high-quality software solutions.",
    icon: <ChartIcon />,
  },
  {
    title: "Project Management",
    description: "Our project management approach ensures seamless delivery of software solutions, on time and within budget. By combining agile methodologies, clear communication, and a focus on your goals, we turn complex challenges into successful outcomes.",
    icon: <WalletIcon />,
  },
  {
    title: "Task Automation",
    description: "Harness the power of automation to eliminate repetitive tasks, reduce errors, and boost productivity. Our tailored automation solutions empower your team to focus on what matters most—innovation and strategic growth.",
    icon: <MagnifierIcon />,
  },
]

export const Services = () => {
  return (
    <section className="container py-24 sm:py-32">
      <div className="grid place-items-center gap-8 lg:grid-cols-[1fr,1fr]">
        <div>
          <h2 className="text-3xl font-bold md:text-4xl">
            <span className="bg-gradient-to-b from-primary/60 to-primary bg-clip-text text-transparent">Client-Centric </span>
            Services
          </h2>

          <p className="mb-8 mt-4 text-xl text-muted-foreground ">Driving Digital Transformation with Cutting-Edge Software Solutions.</p>

          <div className="flex flex-col gap-8">
            {serviceList.map(({ icon, title, description }: ServiceProps) => (
              <Card key={title}>
                <CardHeader className="flex items-start justify-start gap-4 space-y-1 md:flex-row">
                  <div className="mt-1 rounded-2xl bg-primary/20 p-1">{icon}</div>
                  <div>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription className="text-md mt-2 text-left">{description}</CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        <img src={"/images/features/client-centris.png"} className="w-[300px] object-contain md:w-[500px] lg:w-[600px]" alt="About services" />
      </div>
    </section>
  )
}
