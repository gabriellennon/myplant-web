import Image from "next/image"
import Link from "next/link"
import LogoVerImage from '@/assets/images/logo.png'

export const FooterPlant = () => {
  return (
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
          href="/privacy"
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
  )
}