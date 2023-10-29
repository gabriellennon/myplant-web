import Head from "next/head";
import { Jost } from 'next/font/google'
import { HeaderPlant } from "@/components/HeaderPlant";
import { FooterPlant } from "@/components/FooterPlant";

const jost = Jost({ subsets: ['latin'] })

export default function deleteMyProfile(){
  return (
    <>
    <Head>
      <title>Excluir Minha Conta | myPlant</title>
    </Head>
    <main
      className={`min-h-screen ${jost.className}`}
    >
      <HeaderPlant />
      <section className='h-full'>
        <div className='p-4 md:p-16 text-center'>
          <h1
            className='font-semibold text-[#266c42] text-5xl leading-[4.8rem]'
          >
            Como excluir minha conta no MyPlant?
          </h1>
          <p className='text-[#5C6660] text-base mt-2'>
            Para excluir sua conta no MyPlant e não ter mais os seus dados de (e-mail, nome e foto de perfil) compartilhados com o MyPlant, você pode ser esses passos:
          </p>
          <p className='text-[#5C6660] text-base mt-2'>
            1)Ir na tela de meu Perfil no aplicativo (Clicando na sua foto no campo superior direito) <br/>
            2)Rolar até o final de tela e clicar em excluir minha conta
          </p>

          <p className='text-[#5C6660] text-base mt-2'>
            ou você pode mandar um email para: gabriellennon7@gmail.com solicitando a exclusão da sua conta.
          </p>
        </div>
      </section>
      <FooterPlant />
    </main>
  </>
  )
}