import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import logo from '@/asset/logo.png'

const Navber = () => {
    return (
        <div className='bg-gray-300 py-4'>
            <nav className='flex justify-between items-center container mx-auto'>
                <div>
                    <Link href='/'>
                        <Image
                            src={logo}
                            alt='Nav logo'
                            height={50}
                            width={50}
                        />
                    </Link>
                </div>

                <div>
                    <ul className='flex gap-10'>
                        <Link href='/'>Home</Link>
                        <Link href='/all-apps'>All Apps</Link>
                        <Link href='/Installed'>Install</Link>
                    </ul>
                </div>

                <div>
                    <button>Contribute</button>
                </div>
            </nav>
        </div>
    );
};

export default Navber;