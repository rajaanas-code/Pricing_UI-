import Image from "next/image";

export default function Home() {
  return (
    <section className='w-full relative flex flex-col items-center'>

      <div className='bg-[#6B46C1] h-[394px] text-gray-50 pt-[80px] lg:text-center pl-10 w-full'>

        <h3 className='text-3xl lg:text-5xl leading-8 font-extrabold mb-3'>
          Simple pricing for your business</h3>
        <p className='text-xl font-normal mt-5'>Plans that are carefully crafted to suit your business.</p>

      </div>
      {/*middle section*/}
      <div className='absolute top-[254px] mx-6 lg:mx-auto lg:max-w-5xl'>
        {/*first section*/}
        <div className='flex flex-col lg:flex-row lg:justify-center mx-auto'>
        <div className='pt-9 px-12 bg-[#F0EAFB] min-w-[382px] text-center rounded-t-lg lg:rounded-l-lg
        lg:rounded-tr-none'>
          <p className='text-gray-900 font-bold text-xl'>Premium PRO</p>
          <span className='block mt-4 mb-3 text-5xl text-gray-900 font-bold'>$329</span>
          <p className='mb-8 text-gray-900 text-lg font-medium'>billed just once</p>
          <button className='bg-[#805AD5] font-sans text-gray-50 px-[75px] py-3 rounded-lg mb-7'>Get Started</button>
        </div>

        {/*second section*/}
        <div className='pl-4 bg-white shadow lg:rounded-r-lg text-gray-700 font-medium'>
        <p className='mb-4 mt-4 pr-2'>Access these features when you get this pricing package for 
        your business.</p>
        <div className='flex justify-start gap-x-3 mt-2'>
        <Image src={'/Group 172.jpg'} width={20} height={20} alt='price-image'/>
        <span className='text-sm text-gray-700 font-medium gap-2'>International calling and messaging API</span>
      </div>

      <div className='flex justify-start gap-x-3 mt-2'>
        <Image src={'/Group 172.jpg'} width={20} height={20} alt='price-image'/>
        <span className='text-sm text-gray-700 font-medium'>Additional phone numbers</span>
      </div>

      <div className='flex justify-start gap-x-3 mt-2'>
        <Image src={'/Group 172.jpg'} width={20} height={20} alt='price-image'/>
        <span className='text-sm text-gray-700 font-medium'>Automated messages via Zapier</span>
      </div>

      <div className='flex justify-start gap-x-3 mt-2'>
        <Image src={'/Group 172.jpg'} width={20} height={20} alt='price-image'/>
        <span className='text-sm text-gray-700 font-medium'>24/7 support and consulting</span>
      </div>
      </div>
     </div>

     {/* bottom section */}
     
     <div className='pl-2 lg:flex lg:justify-center lg:gap-x-6'>
    
     <div className='mt-8 flex justify-start gap-x-2 gap-y-10 font-medium'>
      <Image src={'/Group.jpg'} width={22} height={22} alt='price-image'/>
      <p>30 days money back Guarantee</p>
     </div>

     <div className='mt-8 flex justify-start gap-x-2 gap-y-10 font-medium'>
      <Image src={'/Group (1).jpg'} width={22} height={22} alt='price-image'/>
      <p>No setup fees 100% hassle-free</p>
     </div>

     <div className='mt-8 flex justify-start gap-x-2 gap-y-10 font-medium'>
      <Image src={'/Group (2).jpg'} width={22} height={22} alt='price-image'/>
      <p>No monthly subscription Pay once and for all</p>
      
     </div>
      </div>
      </div>

      
    </section>
  );
};
 