import { offer } from "../assets/images";
import { arrowRight } from "../assets/icons";

import Button from "../components/Button";


const SpecialOffer = () => {
  return (
    <section className='flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container'>
      <div className='flex-1'>
        <img 
          src={offer}
          width={773}
          height={687}
          className='object-contain'
        />
      </div>

      <div className='flex flex-1 flex-col'>
        <h2 className='font-palanquin text-4xl capitalize font-bold lg:max-w-lg'>
          <span className='text-coral-red'>Special </span>Offer
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>
          Discover stylish Nike arrivals, quality comfort and
          innovation for your active life. Products are made with the highest 
          quality materials and are designed to last quality materials and are designed to last.
        </p>

        <p className='mt-6 lg:max-w-lg info-text'>
          Our dedication to details and quality is what makes us 
          the best company in the industry the best company in the industry.
        </p>

        <div className='mt-11 flex  gap-4'>
          <Button 
            label="Shop now" 
            iconURL={arrowRight}
          />

          <Button 
            label="Learn more" 
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;