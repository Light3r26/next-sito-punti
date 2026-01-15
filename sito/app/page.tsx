import { Button } from "@/components/ui/button";
import { ButtonGroup, ButtonGroupSeparator, ButtonGroupText } from "@/components/ui/button-group";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen gap-12">
      <Image src="/logo.png" alt="Logo" width={100} height={100} />
      <h2>ISIS J.M. Keynes</h2>
      <h1 className="text-5xl font-black">One piece</h1>
      <Button variant="outline">Accedi</Button>
      <Carousel>
        <CarouselContent>
          <CarouselItem>frase 1</CarouselItem>
          <CarouselItem>frase 2</CarouselItem>
          <CarouselItem>frase 3</CarouselItem>
        </CarouselContent>
      </Carousel>
      <Carousel>
        <CarouselContent>
          <CarouselItem>jollyroger 1</CarouselItem>
          <CarouselItem>jollyroger 2</CarouselItem>
          <CarouselItem>jollyroger 3</CarouselItem>
        </CarouselContent>
      </Carousel>
      <ButtonGroup>
        <ButtonGroupText>Button 1</ButtonGroupText>
        <ButtonGroupSeparator />
        <ButtonGroupText>Button 2</ButtonGroupText>
        <ButtonGroupSeparator />
        <ButtonGroupText>Button 3</ButtonGroupText>
      </ButtonGroup>
    </main>
  );
}
