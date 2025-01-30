import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

import { LightBulbIcon } from "./icons"

export const HeroCards = () => {
  return (
    <div className="relative hidden h-[500px] w-[400px] flex-row flex-wrap gap-8 lg:flex">
      {/* Team */}
      <Card className="absolute right-[20px] top-4 flex w-80 flex-col items-center justify-center shadow-black/10 drop-shadow-xl dark:shadow-white/10">
        <CardHeader className="mt-8 flex items-center justify-center pb-2">
          <img src="https://i.pravatar.cc/150?img=58" alt="user avatar" className="absolute -top-12 aspect-square size-24 rounded-full object-cover grayscale-0" />
          <CardTitle className="text-center">Khan</CardTitle>
          <CardDescription className="font-normal text-primary">Senior Developer</CardDescription>
        </CardHeader>

        <CardContent className="pb-2 text-center">
          <p>I really enjoy transforming ideas into functional software that exceeds expectations</p>
        </CardContent>

        <CardFooter />
      </Card>

      {/* Service */}
      <Card className="absolute -right-[10px] bottom-[70px] w-[350px]  shadow-black/10 drop-shadow-xl dark:shadow-white/10">
        <CardHeader className="flex items-start justify-start gap-4 space-y-1 md:flex-row">
          <div className="mt-1 rounded-2xl bg-primary/20 p-1">
            <LightBulbIcon />
          </div>
          <div>
            <CardTitle>Collaborative Ideas</CardTitle>
            <CardDescription className="text-md mt-2">Ensuring that teamwork and innovation flow continuously to solve challenges and drive success.</CardDescription>
          </div>
        </CardHeader>
      </Card>
    </div>
  )
}
