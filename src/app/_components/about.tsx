import Image from "next/image";
import about1Img from "./../../../public/about-1.png";
import about2Img from "./../../../public/about-2.png";
import { Check, MapPin } from "lucide-react";
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";

export default function About() {
  return (
    <section className="bg-[#FDF6EC] py-16">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative" data-aos="fade-right">
            <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
              <Image
                src={about1Img}
                alt="foto de um cachorro"
                fill
                quality={100}
                priority
                className="object-cover hover:scale-110 duration-300"
              />
            </div>

            <div className="absolute size-40 right-4 -bottom-8 rounded-lg border-4 overflow-hidden border-white">
              <Image
                src={about2Img}
                alt="foto de um cachorro"
                fill
                quality={100}
                priority
              />
            </div>
          </div>

          <div className="space-y-6 mt-6" data-aos="fade-up-left">
            <h2 className="text-4xl font-bold">SOBRE</h2>

            <p>
              Until one has loved an animal, a part of one&apos;s souls remains
              unawakened. We believe in it and we believe in easy access to
              things that are good for our mind, body and spirit. With a clever
              offering, superb support and a secure checkout you&apos;re in good
              hands.
            </p>

            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <Check className="text-red-500" /> Aberto desde 2006.
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-red-500" />
                Equipe com mais de 10 veterinários.
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-red-500" />
                Qualidade é nossa prioridade.
              </li>

              <div className="flex gap-2">
                <a
                  href=""
                  className="bg-[#E84C3D] text-white flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md"
                >
                  <WhatsappLogo className="size-5 text-white" />
                  Contato via WhatsApp
                </a>

                <a
                  href=""
                  className="flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md"
                >
                  <MapPin className="size-5 text-black bg-white" />
                  Endereço da loja
                </a>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
