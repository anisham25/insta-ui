import Image from 'next/image'

export default function Account() {
    return (
    <body className="w-full h-full bg-white">
        <div className="grid w-full grid-cols-4 gap-6">
            <section className="col-span-1">
                sidebar will be imported from home when perfected
            </section>
            <section className="col-span-3">
               <div className="flex">
                <Image 
                alt="anisha icon"
                src='/anisha-profile.png'
                width={175}
                height={175}
                />
                <div className='flex flex-col'>
                    <div className='flex gap-x-4'>
                        <p className='flex items-center'>anishamusti_</p>
                        <button>
                            Edit profile
                        </button>
                        <button>
                            View archive
                        </button>
                        <Image 
                        alt="settings icon"
                        src='/more.png'
                        width={50}
                        height={50}
                        />
                    </div>
                    <div>
                        this is where the followers will go
                    </div>
                    <p>this is where the name will go</p>
                    <p>this is bio</p>
                </div>
               </div>
               <section className='bg-white p-4 flex space-x-8'>
                <div className='flex flex-col justify-center items-center'>
                    <Image
                    className='rounded-full border-2 border-solid border-orange-500 overflow-clip'
                    width={96}
                    height={96}
                    alt='hey'
                    src='/Ellipse 1.png'
                    />
                    <p className='pt-1'>hh</p>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <Image
                    className='rounded-full border-2 border-solid border-orange-500 overflow-clip'
                    width={96}
                    height={96}
                    alt='hey'
                    src='/Ellipse 1.png'
                    />
                    <p className='pt-1'>hh</p>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <Image
                    className='rounded-full border-2 border-solid border-orange-500 overflow-clip'
                    width={96}
                    height={96}
                    alt='hey'
                    src='/Ellipse 1.png'
                    />
                    <p className='pt-1'>hh</p>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <Image
                    className='rounded-full border-2 border-solid border-orange-500 overflow-clip'
                    width={96}
                    height={96}
                    alt='hey'
                    src='/Ellipse 1.png'
                    />
                    <p className='pt-1'>hh</p>
                </div>
                </section>
               <div className='flex justify-center border-t-2 gap-x-6'>
                <div className='flex border-t-2 border-black'>
                    <Image
                    width={10}
                    height={10}
                    alt='hey'
                    src='/more.png'
                    />
                    <p>POSTS</p>
                </div>
                <div className='flex'>
                    <Image
                    width={10}
                    height={10}
                    alt='hey'
                    src='/more.png'
                    />
                    <p>POSTS</p>
                </div>
                <div className='flex'>
                    <Image
                    width={10}
                    height={10}
                    alt='hey'
                    src='/more.png'
                    />
                    <p>POSTS</p>
                </div>
               </div>
               <div className='grid w-full grid-cols-3 grid-rows-2'>
                <Image 
                    alt="settings icon"
                    src='/more.png'
                    width={308}
                    height={308}
                />
                <Image 
                    alt="settings icon"
                    src='/more.png'
                    width={308}
                    height={308}
                />
                <Image 
                    alt="settings icon"
                    src='/more.png'
                    width={308}
                    height={308}
                />
                <Image 
                    alt="settings icon"
                    src='/more.png'
                    width={308}
                    height={308}
                />
                <Image 
                    alt="settings icon"
                    src='/more.png'
                    width={308}
                    height={308}
                />
               </div>
            </section>
        </div>
    </body>
    )
}