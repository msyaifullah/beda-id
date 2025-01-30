import { About } from "@/components/custom/about"
import { Features } from "@/components/custom/features"
import { Hero } from "@/components/custom/hero"
import { HowItWorks } from "@/components/custom/how-it-works"
import { ScrollToTop } from "@/components/custom/scroll-to-top"
import { Services } from "@/components/custom/services"
import { Sponsors } from "@/components/custom/sponsor"
import { Team } from "@/components/custom/team"
import { Testimonials } from "@/components/custom/testimonies"

async function getGitHubStars(): Promise<string | null> {
  try {
    const response = await fetch("https://api.github.com/repos/msyaifullah/beda", {
      headers: {
        Accept: "application/vnd.github+json",
        Authorization: `Bearer mma`,
      },
      next: {
        revalidate: 60,
      },
    })

    if (!response?.ok) {
      return null
    }

    const json = await response.json()

    return parseInt(json["stargazers_count"]).toLocaleString()
  } catch (error) {
    return null
  }
}

export default async function IndexPage() {
  const stars = await getGitHubStars()

  return (
    <div className="flex flex-col">
      <section className="z-20 w-dvw space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-10">
        <div className="container flex flex-col items-center gap-4 text-center">
          <Hero />
          {/* <Sponsors /> */}
          <About />
          <Services />
          <Features />
          {/* <HowItWorks/> */}
          <Team />
          {/* <Testimonials /> */}
          <ScrollToTop/>
        </div>
      </section>
    </div>
  )
}
