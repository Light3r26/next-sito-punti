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
      <div className="max-w-100">
        <MarqueeAnimation
          direction="left"
          baseVelocity={-1}
          className="text-1xl bg--background/50 backdrop-blur-md"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate omnis mollitia repellendus illo. Quia doloribus modi eum necessitatibus blanditiis rem molestiae mollitia laudantium deleniti architecto, sit nulla repellendus consequatur eos!1
        </MarqueeAnimation>
      </div>
      <div className="max-w-150">
        <Carousel>
          <CarouselContent className="max-md:max-w-1/2 md:max-w-1/3">
            <CarouselItem>
              <div className="flex items-center justify-center p-6">
                <Image preload={true} src="/images/jolly_roger_1.png" alt="Jolly Roger 1" width={200} height={200} className="rounded-lg shadow-xl" />
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="flex items-center justify-center p-6">
                <Image preload={true} src="/images/jolly_roger_2.png" alt="Jolly Roger 2" width={200} height={200} className="rounded-lg shadow-xl" />
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="flex items-center justify-center p-6">
                <Image preload={true} src="/images/jolly_roger_3.png" alt="Jolly Roger 3" width={200} height={200} className="rounded-lg shadow-xl" />
              </div>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
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
