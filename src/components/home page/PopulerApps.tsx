import { getAllApps } from '@/lib/apps';
import { discoverValidationDepths } from 'next/dist/server/app-render/instant-validation/instant-validation';
import React from 'react';
import AppCard from '../shared/AppCard';
import { Iapp } from '@/type/apps.type';

const PopulerApps = async () => {

    const apps = await getAllApps()

    return (
        <div className='container mx-auto py-10'>
            <div className='py-10'>
                <h2 className='text-4xl font-bold'>Populer Apps</h2>
                <p>Brows all Populer apps</p>
            </div>
            <div className='grid grid-cols-4 gap-5'>
            {
                apps.slice(0-8).map((app : Iapp)=> <AppCard key={app.id} app={app}/>)
            }
            </div>
        </div>
    );
};

export default PopulerApps;