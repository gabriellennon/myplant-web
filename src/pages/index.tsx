import { Jost } from 'next/font/google'
import Image from 'next/image'
import BannerPlant from '@/assets/images/plantBanner.png'
import LoginPrint from '@/assets/printApp/login.png'
import HomePrint from '@/assets/printApp/home.png'
import SelectPlantPrint from '@/assets/printApp/plantselect.png'
import MyPrint from '@/assets/printApp/minhas.png'
import Head from 'next/head'
import { Button } from '@/components/ui/button'
import { HeaderPlant } from '@/components/HeaderPlant'
import { FooterPlant } from '@/components/FooterPlant'
import { SectionDescription } from '@/components/SectionDescription'
import { AppleButton } from '@/components/AppleButton'
import { GoogleButton } from '@/components/GoogleButton'

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
        <HeaderPlant />
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
            <h2  className='font-semibold text-[#266c42] text-5xl text-center mb-4'>
              Como funciona o myPlant?
            </h2>
            <p className='text-[#5C6660] text-base text-center'>
              Entenda como o myPlant vai te ajudar no dia a dia para te auxiliar na gestão das suas plantinhas
            </p>
            <div className='mt-12 flex flex-col gap-4'>
              <SectionDescription 
                title='Cadastre a sua nova plantinha'
                description='Entre no myPlant, selecione qual a planta que deseja cadastrar e em qual ambiente ela vai ficar'
                image={LoginPrint}
              />
              <SectionDescription 
                title='Selecione qual a espécie da sua plantinha'
                description='Na tela inicial escolha qual a sua plantinha de acordo com a espécie dela e tenha as informações dela'
                image={HomePrint}
                reverseImage
              />
              <SectionDescription 
                title='Selecione o melhor horário para lembrar de regar'
                description='Após ter informações sobre sua nova plantinha, dê um nome a ela e selecione o melhor horário de ser lembrado de regar ela'
                image={SelectPlantPrint}
              />
              <SectionDescription 
                title='Gerencie suas plantas cadastradas'
                description='Visualize suas plantinhas, qual a próxima a ser regada e a quantidade de água de cada uma. Você receberá uma notificação no horário de regar'
                image={MyPrint}
                reverseImage
              />
            </div>
          </div>
          <div className='p-16'>
            <h1
              className='font-semibold text-[#266c42] text-4xl text-center mb-2'
            >
              Baixe agora e deixe que te ajudamos a lembrar
            </h1>
            <p className='text-[#5C6660] text-base text-center'>
              Baixe gratuitamente o MyPlant e veja como é fácil ter várias plantas, e deixe conosco a tarefa de te lembrar quando regar suas plantinhas
            </p>
            <div className="flex items-center justify-center gap-6 mt-4">
              <AppleButton />
              <GoogleButton />
            </div>
          </div>
        </section>
        <FooterPlant />
      </main>
    </>
  )
}
