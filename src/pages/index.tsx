import { Jost } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import LogoImage from '@/assets/images/logo3.png'
import LogoVerImage from '@/assets/images/logo.png'
import BannerPlant from '@/assets/images/plantBanner.png'
import Head from 'next/head'
import { Button } from '@/components/ui/button'

const jost = Jost({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | myPlant</title>
      </Head>
      <main
        className={`min-h-screen ${jost.className}`}
      >
        <header className='px-16 border-b'>
            <div className='flex h-16 items-center justify-between'>
                <Image
                  src={LogoImage}
                  width={80}
                  height={80}
                  alt="myPlant"
                />
                <nav className="ml-auto flex items-center gap-3 font-normal text-[#52665A] transition ease-in-out delay-100">
                    <Link 
                      className='hover:scale-110 hover:duration-300'
                      href="/"
                    >
                      Início
                    </Link>
                    <Link href="/">Sobre</Link>
                </nav>
            </div>
        </header>
        <section className='h-full'>
          <div
            className='flex w-full p-16 items-center justify-between'
          >
            <div
              className='flex flex-col gap-4 max-w-[45%]'
            >
              <h1
                className='font-semibold text-[#266c42] text-6xl leading-[4.8rem]'
              >
                Gerencie suas plantas de forma fácil
              </h1>
              <p className='text-[#5C6660] text-base'>
                Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você sempre que precisar.
              </p>
              <Button
                className='max-w-fit'
              >
                Baixar Aplicativo
              </Button>
            </div>
            <div>
              <Image
                src={BannerPlant}
                width={420}
                height={420}
                alt="Uma planta sendo regada"
              />
            </div>
          </div>
          <div
            className='p-16'
            style={{
              background: 'linear-gradient(113deg, #F5FAF7 0%, #F0F0F0 100%);'
            }}
          >
            <h2>
              Como funciona o myPlant?
            </h2>
            <p>
              Entenda como o myPlant vai te ajudar no dia a dia para te auxiliar na gestão das suas plantinhas
            </p>
            <div>
              {/* Transformar em componente */}
              <div>
                <div>
                  {/* Descricao */}
                  <strong>
                    Cadastre a sua nova plantinha
                  </strong>
                  <p>
                    Entre no myPlant, selecione qual a planta que deseja cadastrar e em qual ambiente ela vai ficar
                  </p>
                </div>
                {/* Imagem */}
                <div>
                  {/* Tirar Print das telas do app */}
                  <Image
                    src={LogoImage}
                    width={80}
                    height={80}
                    alt="myPlant"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer 
          className='px-16 py-5 bg-[#DAF2E4] flex items-center justify-between'
        >
          <div>
            <Image
              src={LogoVerImage}
              width={60}
              height={60}
              alt="myPlant"
            />
          </div>
          <div className='flex flex-col gap-2'>
            <Link 
              href="/"
              className='text-[#52665A] font-semibold text-sm'
            >
              Políticas de privacidade
            </Link>
            <Link 
              href="/"
              className='text-[#52665A] font-semibold text-sm'
            >
              Termos de uso
            </Link>
          </div>
        </footer>
      </main>
    </>
  )
}
