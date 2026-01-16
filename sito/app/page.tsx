import { Button } from "@/components/ui/button";
import { ButtonGroup, ButtonGroupSeparator, ButtonGroupText } from "@/components/ui/button-group";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { MarqueeAnimation } from "@/components/ui/marquee-effect";
import { Testimonial } from "@/components/ui/testimonial";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative flex flex-col items-center justify-center h-screen gap-12 overflow-hidden">
      <Image
        src="/background.jpg"
        alt="Background"
        fill
        priority
        className="object-cover object-[75%_center] md:object-center -z-10"
      />
      <Image src="/logo.png" alt="Logo" width={100} height={100} className="z-10" />
      <h2>ISIS J.M. Keynes</h2>
      <h1 className="text-5xl font-black">One piece</h1>
      <Button variant="outline">Accedi</Button>

      <div className="max-w-150 max-h-50">
        <Carousel className="max-h-50 w-full">
          <CarouselContent className="max-md:max-w-full md:max-w-full">
            <CarouselItem className="w-full">
              <Testimonial
                quote="Questo sistema a punti ha rivoluzionato il modo in cui gestiamo le attività scolastiche. È intuitivo e divertente!"
                authorName="Marco Rossi"
                authorImage="/testimonials/testimonial_1.png"
                authorPosition="Sviluppatore Software"
              />
            </CarouselItem>
            <CarouselItem className="w-full">
              <Testimonial
                quote="I miei studenti sono molto più motivati da quando abbiamo introdotto questa piattaforma. Un ottimo strumento educativo."
                authorName="Laura Bianchi"
                authorImage="/testimonials/testimonial_2.png"
                authorPosition="Docente"
              />
            </CarouselItem>
            <CarouselItem className="w-full">
              <Testimonial
                quote="È fantastico poter vedere i miei progressi e competere in modo sano con i miei compagni di classe."
                authorName="Sofia Esposito"
                authorImage="/testimonials/testimonial_3.png"
                authorPosition="Studentessa"
              />
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
      <div className="max-w-100 max-h-20">
        <MarqueeAnimation
          direction="left"
          baseVelocity={-3}
        >
          <div className="flex gap-30 max-w-100">
            <Image preload={true} src="/images/jolly_roger_0.png" alt="" width={50} height={50} className="rounded-lg" />

            <Image preload={true} src="/images/jolly_roger_1.png" alt="" width={50} height={50} className="rounded-lg" />

            <Image preload={true} src="/images/jolly_roger_2.png" alt="" width={50} height={50} className="rounded-lg" />

            <Image preload={true} src="/images/jolly_roger_3.png" alt="" width={50} height={50} className="rounded-lg" />

            <Image preload={true} src="/images/jolly_roger_2.png" alt="" width={50} height={50} className="rounded-lg" />

            <Image preload={true} src="/images/jolly_roger_3.png" alt="" width={50} height={50} className="rounded-lg" />

          </div>
        </MarqueeAnimation>
      </div>
      <ButtonGroup>
        <ButtonGroupText>pos</ButtonGroupText>
        <ButtonGroupSeparator />
        <ButtonGroupText>sito</ButtonGroupText>
        <ButtonGroupSeparator />
        <ButtonGroupText>info</ButtonGroupText>
      </ButtonGroup>
    </main>
  );
}
