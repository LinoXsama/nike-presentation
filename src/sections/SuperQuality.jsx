import Button from "../components/Button";

import { shoe8 } from "../assets/images";

const SuperQuality = () => {
  return (
    <section
      id='about-us'
      className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'
    >

    <div className='flex flex-1 flex-col'>
      <h2 className='font-palanquin text-4xl capitalize font-bold lg:max-w-lg'>
        We provide you <span className='text-coral-red'>Super </span><span className='text-coral-red'>Quality </span>
        Shoes
      </h2>
      <p className='mt-4 lg:max-w-lg info-text'>
        Discover stylish Nike arrivals, quality comfort and
        innovation for your active life. Products are made with the highest 
        quality materials and are designed to last.
      </p>

      <p className='mt-6 lg:max-w-lg info-text'>
        Our dedication to details and quality is what makes us 
        the best company in the industry.
      </p>

      <div className='mt-11'>
        <Button label='View details' />
      </div>
    </div>

    <div className='flex-1 flex justify-center items-center'>
      <img 
        src={shoe8}
        alt='Shoe 8'
        width={570}
        height={522}
        className='object-contain'
      />
    </div>
    </section>
  );
}

export default SuperQuality;