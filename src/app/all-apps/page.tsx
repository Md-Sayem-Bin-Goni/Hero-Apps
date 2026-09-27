import AppCard from '@/components/shared/AppCard';
import { getAllApps } from '@/lib/apps';
import { Iapp } from '@/type/apps.type';
import React from 'react';

const AllAppsPage = async () => {

    const apps = await getAllApps()

    return (
        <div className='container mx-auto py-10'>
            <div className='py-10'>
                <h2 className='text-4xl font-bold'>All Apps</h2>
                <p>Brows all apps</p>
            </div>
            <div className='grid grid-cols-4 gap-5'>
                {
                    apps.map((app:Iapp) => <AppCard key={app.id} app={app} />)
                }
            </div>
        </div>
    );
};

export default AllAppsPage;