'use client';
import AppCard from '@/components/shared/AppCard';
import AppProvider, { AppContext } from '@/context/AppProvider';
import React, { useContext } from 'react';

const InstallPage = () => {

    const { installedApps } = useContext(AppContext)

    return (
        <div className='text-center py-10'>
            <h2 className='text-4xl font-bold'>Installd Apps</h2>

            <div className='grid grid-cols-4 gap-5 container mx-auto'>
                {
                    installedApps.map((app )=> <AppCard key={app.id} app={app}></AppCard>)
                }
            </div>
        </div>
    );
};

export default InstallPage;