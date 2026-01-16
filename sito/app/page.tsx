import { Button } from "@/components/ui/button";
import { ButtonGroup, ButtonGroupSeparator, ButtonGroupText } from "@/components/ui/button-group";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { MarqueeAnimation } from "@/components/ui/marquee-effect";
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

      <div className="max-w-150">
        <Carousel className="w-full">
          <CarouselContent className="max-md:max-w-full md:max-w-full">
            <CarouselItem className="w-full">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis cumque ipsa unde possimus quis sint eos laudantium maxime.
            </CarouselItem>
            <CarouselItem className="w-full">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus consequatur, sed nam distinctio eaque repellendus
            </CarouselItem>
            <CarouselItem className="w-full">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, quae.
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
      <div className="max-w-100">
        <MarqueeAnimation
          direction="left"
          baseVelocity={-3}
        >
          <div className="flex gap-30 max-w-100">
            <Image preload={true} src="/images/jolly_roger_0.png" alt="" width={100} height={100} className="rounded-lg" />

            <Image preload={true} src="/images/jolly_roger_1.png" alt="" width={100} height={100} className="rounded-lg" />

            <Image preload={true} src="/images/jolly_roger_2.png" alt="" width={100} height={100} className="rounded-lg" />

            <Image preload={true} src="/images/jolly_roger_3.png" alt="" width={100} height={100} className="rounded-lg" />

            <Image preload={true} src="/images/jolly_roger_2.png" alt="" width={100} height={100} className="rounded-lg" />

            <Image preload={true} src="/images/jolly_roger_3.png" alt="" width={100} height={100} className="rounded-lg" />

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
