import { Iapp } from '@/type/apps.type';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const AppCard = ({ app }: {app:Iapp}) => {
    return (
        <div >
           <Link href={`/all-apps/${app.id}`}>
            <div className='border rounded-2xl p-10 h-80 w-80 '>
                <div className='flex justify-evenly'>
                    <div>
                        <Image
                            src={app.image}
                            alt=''
                            height={50}
                            width={50} />
                    </div>
                    <h2>{app.title}</h2>

                </div>
                <Link href={`/all-apps/${app.id}`}>
                    <div className='pt-35 flex justify-center'>
                        <button className="btn btn-active btn-primary">View details</button>
                    </div>
                </Link>
            </div>
           </Link>
        </div>
    );
};

export default AppCard;