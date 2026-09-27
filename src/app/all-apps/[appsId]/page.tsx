
import InstallButton from '@/components/button/InstallButton';
import { getAllApps } from '@/lib/apps';
import { Iapp } from '@/type/apps.type';
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext } from 'react';

const AppsDetailsPage = async ({ params } : {params: Promise<{appsId:string}>}) => {
    const { appsId } = await params


    const allApps = await getAllApps()
    const app = allApps.find((app:Iapp) => app.id == Number(appsId))
    if(!app){
        return <div>App not found</div>
    }


 

    return (
        <div className='container mx-auto'>
            <div>
                <Link href='/all-apps'>
                    <button className="btn btn-active btn-accent">Back to apps</button>
                </Link>
            </div>

            <div className='border bg-gray-300 p-10 '>
                <div className='flex'>
                    <Image
                        src={app.image}
                        alt=''
                        height={200}
                        width={200} />


                    <div>
                        <h2 className='text-2xl font-bold'>{app.title}</h2>
                    </div>
                </div>

                <div className='py-5'>
                   <InstallButton app={app}/>

                </div>
            </div>

        </div>
    );
};

export default AppsDetailsPage;
