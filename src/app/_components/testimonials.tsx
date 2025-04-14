"use client";

import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import tutor1 from "./../../../public/tutor1.png";
import tutor2 from "./../../../public/tutor2.png";
import Image from "next/image";

const testimonials = [
  {
    content:
      "Desde que comecei a levar a Luna para banho e tosa aqui, ela nunca esteve tão feliz! O atendimento é impecável, os profissionais são super cuidadosos e sempre deixam minha peluda linda e cheirosa. Recomendo de olhos fechados!",
    author: "Mariana Souza",
    role: "Tutora da Luna (Golden Retriever)",
    image: tutor2,
  },
  {
    content:
      "O serviço de hotel para pets foi uma experiência incrível! Precisei viajar e fiquei tranquilo sabendo que o Thor estava sendo bem cuidado. Recebi fotos e atualizações diárias, e ele voltou para casa super feliz! Sem dúvida, o melhor petshop da região.",
    author: "Rafael",
    role: "Tutor do Thor (Bulldog Francês)",
    image: tutor1,
  },
  {
    content:
      "Meus gatos nunca gostaram de sair de casa, mas o atendimento nesse petshop fez toda a diferença. A equipe é muito paciente e cuidadosa, e o serviço de banho especializado para felinos foi maravilhoso! Agora sei onde confiar o cuidado deles.",
    author: "Camila fernandes",
    role: "Tutora da Mel e do Max",
    image: tutor2,
  },
];

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    slidesToScroll: 1,
  });

  const scrollPrev = () => {
    emblaApi?.scrollPrev();
  };

  const scrollNext = () => {
    emblaApi?.scrollNext();
  };

  return (
    <section className="bg-[#ffd449] py-16">
      <div className="container mx-auto px-4">
        <div>
          <h2 className="text-4xl font-bold mb-12 text-center">
            Depoimentos dos nossos clientes
          </h2>

          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {testimonials.map((item, index) => (
                  <div key={index} className="flex-[0_0_100%] min-w-0 px-3 ">
                    <article className="bg-[#1e293b] text-white rounded-2xl p-6 space-y-4 h-full flex flex-col">
                      <div className="flex-1 items-start justify-between">
                        <div className="px-10 flex gap-8 justify-center items-center flex-col ">
                          <Image
                            className="size-24 rounded-full object-cover"
                            src={item.image}
                            alt="foto do tutor"
                          />

                          <p className="text-center select-none text-lg text-gray-200">
                            {item.content}
                          </p>

                          <div className="flex flex-col gap-1 items-center">
                            <p className="font-bold text-xl">{item.author}</p>
                            <p className="text-sm text-gray-400">{item.role}</p>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                ))}
              </div>
            </div>

            <button
              className=" bg-white flex items-center justify-center rounded-full shadow-lg size-10 absolute left-3 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10 cursor-pointer"
              onClick={scrollPrev}
            >
              <ChevronLeft className="size-6 text-gray-600" />
            </button>

            <button
              className=" bg-white flex items-center justify-center rounded-full shadow-lg size-10 absolute -right-1 -translate-y-1/2 top-1/2 z-10 cursor-pointer"
              onClick={scrollNext}
            >
              <ChevronRight className="size-6 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
