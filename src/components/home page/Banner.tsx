import React from 'react';
import BannerImg from '@/asset/Hero images.jpg'
import Image from 'next/image';
const BannerPage = () => {
    return (
        <div className='text-center py-10'>
            <div>
                <h2 className='font-bold text-4xl '>Welcome to Hero Apps</h2>
                <p className='text-2xl'>Lorem ipsum dolequem ipsa exercitationem maxime velit sunt!</p>
            </div>
            <div className='flex justify-center pt-10'>
                <Image
                src={BannerImg}
                alt={'Banner img'}
                height={500}
                width={500}/>
            </div>
        </div>
    );
};

export default BannerPage;