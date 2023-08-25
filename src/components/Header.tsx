import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
    return (
        <header className='absolute w-full z-50'>
            <nav className="flex justify-between px-8 py-5">
                <div className='flex items-center gap-3 cursor-default'>
                    <Image src={'/assets/windy-logo.svg'} alt='' height={32} width={32} />
                    <p className='text-2xl font-bold tracking-wider text-primary'>Windy</p>
                </div>

                <div className='px-4 py-2 hover:bg-gray-2 hover:rounded-lg cursor-pointer max-md:hidden'>
                    <Link href={'/'} className='text-light-1'>
                        <button className='text-sm font-medium tracking-wider'>MORE</button>
                    </Link>
                </div>

                <div className='px-4 py-2 bg-gray-2 rounded-lg cursor-pointer md:hidden'>
                    <Link href={'/'}>
                        <button className='flex flex-col justify-center'>
                            <Image src={'/assets/menu.svg'} alt='' height={18} width={18} />
                        </button>
                    </Link>
                </div>
            </nav>
        </header>
    )
}