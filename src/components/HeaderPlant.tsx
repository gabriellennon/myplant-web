import LogoImage from '@/assets/images/logo3.png'
import Image from 'next/image'
import Link from 'next/link'
export const HeaderPlant = () => {
  return (
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
          </nav>
      </div>
    </header>
  )
}