import Image from 'next/image';

export default function Home() {
  return (
    <body className='w-full'>
      <div className='grid w-full grid-cols-4 gap-6'>
        <div className="flex w-full h-full bg-white col-span-1">
          <p className="fixed text-black text-3xl pl-11 pt-20 font-normal">Instagram</p>
          <div className='fixed flex flex-col mt-20 pl-10 gap-y-4'>
            <div className='pt-20 flex items-center'>
              <Image 
                alt="home-icon"
                src='/home-icon.png'
                width={45}
                height={45}
              />
              <p className='pl-4 pt-2 text-xl'>Home</p>
            </div>
            <div className='flex items-center'>
              <Image 
                alt="search icon"
                src='/search.png'
                width={50}
                height={50}
              />
              <p className='pl-4 pt-2 text-xl'>Search</p>
            </div>
            <div className='flex items-center'>
              <Image 
                alt="explore icon"
                src='/explore.png'
                width={50}
                height={50}
              />
              <p className='pl-4 pt-2 text-xl'>Explore</p>
            </div>
            <div className='flex items-center'>
              <Image 
                alt="reels icon"
                src='/reels.png'
                width={50}
                height={50}
              />
              <p className='pl-4 pt-2 text-xl'>Reels</p>
            </div>
            <div className='flex items-center'>
              <Image 
                alt="messages icon"
                src='/dm.png'
                width={50}
                height={50}
              />
              <p className='pl-4 pt-2 text-xl'>Messages</p>
            </div>
            <div className='flex items-center'>
              <Image 
                alt="notifications"
                src='/notifs.png'
                width={50}
                height={50}
              />
              <p className='pl-4 pt-2 text-xl'>Notifications</p>
            </div>
            <div className='flex items-center'>
              <Image 
                alt="create icon"
                src='/create.png'
                width={50}
                height={50}
              />
              <p className='pl-4 pt-2 text-xl'>Create</p>
            </div>
            <div className='flex items-center'>
              <Image 
                alt="profile icon"
                src='/anisha-profile.png'
                width={40}
                height={40}
              />
              <p className='pl-4 pt-2 text-xl'>Profile</p>
            </div>
            <div className='mt-64 flex items-center'>
              <Image 
                alt="threads icon"
                src='/threads.png'
                width={50}
                height={50}
              />
              <p className='pl-4 pt-2 text-xl'>Threads</p>
            </div>
            <div className='flex items-center'>
              <Image 
                alt="more icon"
                src='/more.png'
                width={50}
                height={50}
              />
              <p className='pl-4 pt-2 text-xl'>More</p>
            </div>
          </div>
        </div> 
        <div className='w-full max-w-screen-lg mx-auto mt-20 col-span-2'>
            <section className='bg-white p-4 flex space-x-4'>
              <div className='flex flex-col justify-center items-center'>
                <Image
                  className='rounded-full border-2 border-solid border-orange-500 overflow-clip'
                  width={72}
                  height={72}
                  alt='hey'
                  src='/Ellipse 1.png'
                />
                <p className='pt-1'>hh</p>
              </div>
              <div className='flex flex-col justify-center items-center'>
                <Image
                  className='rounded-full border-2 border-solid border-orange-500 overflow-clip'
                  width={72}
                  height={72}
                  alt='hey'
                  src='/Ellipse 1.png'
                />
                <p className='pt-1'>hh</p>
              </div>
              <div className='flex flex-col justify-center items-center'>
                <Image
                  className='rounded-full border-2 border-solid border-orange-500 overflow-clip'
                  width={72}
                  height={72}
                  alt='hey'
                  src='/Ellipse 1.png'
                />
                <p className='pt-1'>hh</p>
              </div>
              <div className='flex flex-col justify-center items-center'>
                <Image
                  className='rounded-full border-2 border-solid border-orange-500 overflow-clip'
                  width={72}
                  height={72}
                  alt='hey'
                  src='/Ellipse 1.png'
                />
                <p className='pt-1'>hh</p>
              </div>
              <div className='flex flex-col justify-center items-center'>
                <Image
                  className='rounded-full border-2 border-solid border-orange-500 overflow-clip'
                  width={72}
                  height={72}
                  alt='hey'
                  src='/Ellipse 1.png'
                />
                <p className='pt-1'>hh</p>
              </div>
              <div className='flex flex-col justify-center items-center'>
                <Image
                  className='rounded-full border-2 border-solid border-orange-500 overflow-clip'
                  width={72}
                  height={72}
                  alt='hey'
                  src='/Ellipse 1.png'
                />
                <p className='pt-1'>hh</p>
              </div>
              <div className='flex flex-col justify-center items-center'>
                <Image
                  className='rounded-full border-2 border-solid border-orange-500 overflow-clip'
                  width={72}
                  height={72}
                  alt='hey'
                  src='/Ellipse 1.png'
                />
                <p className='pt-1'>hh</p>
              </div>
              <div className='flex flex-col justify-center items-center'>
                <Image
                  className='rounded-full border-2 border-solid border-orange-500 overflow-clip'
                  width={72}
                  height={72}
                  alt='hey'
                  src='/Ellipse 1.png'
                />
                <p className='pt-1'>hh</p>
              </div>
              <div className='flex flex-col justify-center items-center'>
                <Image
                  className='rounded-full border-2 border-solid border-orange-500 overflow-clip'
                  width={72}
                  height={72}
                  alt='hey'
                  src='/Ellipse 1.png'
                />
                <p className='pt-1'>hh</p>
              </div>
              <div className='flex flex-col justify-center items-center'>
                <Image
                  className='rounded-full border-2 border-solid border-orange-500 overflow-clip'
                  width={72}
                  height={72}
                  alt='hey'
                  src='/Ellipse 1.png'
                />
                <p className='pt-1'>hh</p>
              </div>
            </section>
            <section>
              <div className='bg-white my-7'>
                <div className='p-4 flex items-center'>
                  <Image
                    className='rounded-full'
                    width={44}
                    height={44}
                    alt='hey'
                    src='/Ellipse 1.png'
                  />
                  <p className='flex-1 pl-3 font-semibold'>hh</p>
                  <Image
                    width={20}
                    height={20}
                    alt='hey'
                    src='/dots.png'
                  />
                </div>
                <Image
                  className='w-full h-full'
                  width={10}
                  height={10}
                  alt='hey'
                  src='/malta-post.png'
                />
                <div className='p-4 flex items-center gap-x-3'>
                  <Image
                    width={20}
                    height={20}
                    alt='like'
                    src='/dots.png'
                  />
                  <Image
                    width={20}
                    height={20}
                    alt='comment'
                    src='/dots.png'
                  />
                  <Image
                    width={20}
                    height={20}
                    alt='dm'
                    src='/dots.png'
                  />
                  <Image
                  className='ml-auto'
                    width={20}
                    height={20}
                    alt='bookmark'
                    src='/dots.png'
                  />
                </div>
                <p className='p-4'>
                  <p className="font-semibold">Liked by oliviareduto_ and others</p>
                  <p><span className='font-bold pr-2'>malta_travels</span>what a good</p>
                </p>
              </div>
            </section>
        </div>
        <div className='col-span-1 flex flex-col w-full fixed-right bg-red-500 mx-auto mt-top'>
          <div className='pt-28 pl-12 pb-4 pr-32 flex gap-x-4'>
            <Image
              className='rounded-full'
              width={48}
              height={48}
              alt='like'
              src='/dots.png'
            />
            <div className='flex flex-col'>
              <p className='font-semibold'>b</p>
              <p className='text-gray-600'>h</p>
            </div>
            <div className='h-full flex items-center ml-auto'>
              <p className='text-blue-500 font-bold'>Switch</p>
            </div>
          </div>
          <div className='pt-6 pl-12 pb-4 pr-32 flex'>
            <p className='font-semibold'>Suggested for you</p>
            <p className='ml-auto '>See all</p>
          </div>
          <div className='pt-2 pl-12 pb-4 pr-32 flex gap-x-4'>
            <Image
              className='rounded-full'
              width={36}
              height={36}
              alt='like'
              src='/dots.png'
            />
            <div className='flex flex-col'>
              <p className='font-semibold'>b</p>
              <p className='text-gray-600'>h</p>
            </div>
            <div className='h-full flex items-center ml-auto'>
              <p className='text-blue-500 font-bold'>Switch</p>
            </div>
          </div>
          <div className='pt-2 pl-12 pb-4 pr-32 flex gap-x-4'>
            <Image
              className='rounded-full'
              width={36}
              height={36}
              alt='like'
              src='/dots.png'
            />
            <div className='flex flex-col'>
              <p className='font-semibold'>b</p>
              <p className='text-gray-600'>h</p>
            </div>
            <div className='h-full flex items-center ml-auto'>
              <p className='text-blue-500 font-bold'>Switch</p>
            </div>
          </div>
          <div className='pt-2 pl-12 pb-4 pr-32 flex gap-x-4'>
            <Image
              className='rounded-full'
              width={36}
              height={36}
              alt='like'
              src='/dots.png'
            />
            <div className='flex flex-col'>
              <p className='font-semibold'>b</p>
              <p className='text-gray-600'>h</p>
            </div>
            <div className='h-full flex items-center ml-auto'>
              <p className='text-blue-500 font-bold'>Switch</p>
            </div>
          </div>
          <div className='pt-2 pl-12 pb-4 pr-32 flex gap-x-4'>
            <Image
              className='rounded-full'
              width={36}
              height={36}
              alt='like'
              src='/dots.png'
            />
            <div className='flex flex-col'>
              <p className='font-semibold'>b</p>
              <p className='text-gray-600'>h</p>
            </div>
            <div className='h-full flex items-center ml-auto'>
              <p className='text-blue-500 font-bold'>Switch</p>
            </div>
          </div>
        </div>
       </div>
    </body>
  );
}