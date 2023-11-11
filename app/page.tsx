import { Github } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <nav className='absolute inset-x-0 top-0 mx-auto w-full max-w-5xl items-center justify-between font-mono text-sm max-lg:px-4 md:mt-4 md:flex'>
        <Link
          className='inset-x-0 top-0 flex cursor-pointer justify-center border-b border-neutral-800 bg-zinc-800/30 bg-gradient-to-b from-inherit py-6 backdrop-blur-2xl max-md:fixed max-md:w-full md:rounded-xl md:border md:p-4 md:dark:bg-zinc-800/30'
          href='https://github.com/thuyencode'
          target='_blank'
        >
          Get started by&nbsp;
          <code className='font-mono font-bold'>README</code>
        </Link>
        <Link
          className='inset-x-0 bottom-0 flex cursor-pointer items-center justify-center gap-2 p-8 hover:dark:drop-shadow-[0_0_0.3rem_#ffffff70] max-md:fixed max-md:w-full md:p-0'
          href='https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Visit my
          <Github height={25} width={25} />
        </Link>
      </nav>

      <main className='flex min-h-screen flex-col items-center justify-center gap-6'>
        <div className='flex items-center gap-6 max-md:flex-col'>
          <Image
            className='drop-shadow-[0_0_0.3rem_#ffffff70] invert'
            src='/next.svg'
            alt='Next.js Logo'
            width={180}
            height={37}
            priority
          />
          <div className='inline-flex items-center gap-5 md:gap-3'>
            <Link
              className='cursor-pointer'
              href='https://standardjs.com/rules'
              target='_blank'
            >
              <Image
                className='h-full w-auto hover:drop-shadow-[0_0_0.3rem_#ffffff70]'
                src='/standardjs.png'
                alt='StandardJS Logo'
                width={48}
                height={48}
                priority
              />
            </Link>
            <Link
              className='cursor-pointer'
              href='https://tailwindcss.com'
              target='_blank'
            >
              <Image
                className='h-full w-auto hover:drop-shadow-[0_0_0.3rem_#ffffff70]'
                src='/tailwind-css.png'
                alt='Tailwind CSS Logo'
                width={48}
                height={48}
                priority
              />
            </Link>
            <Link
              className='cursor-pointer'
              href='https://eslint.org'
              target='_blank'
            >
              <Image
                className='h-full w-auto hover:drop-shadow-[0_0_0.3rem_#ffffff70]'
                src='/eslint.png'
                alt='ESLint Logo'
                width={48}
                height={48}
                priority
              />
            </Link>
            <Link
              className='cursor-pointer'
              href='https://prettier.io'
              target='_blank'
            >
              <Image
                className='h-full w-auto hover:drop-shadow-[0_0_0.3rem_#ffffff70]'
                src='/prettier.png'
                alt='Prettier Logo'
                width={48}
                height={48}
                priority
              />
            </Link>
          </div>
        </div>
        <h1>Boilderplate</h1>
      </main>
    </>
  )
}
