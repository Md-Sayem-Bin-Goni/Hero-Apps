'use client'
import React, { useState } from 'react';
import { createContext } from 'react';
import { Iapp } from "@/type/apps.type";

interface IAppContext {
    installedApps: Iapp[],
    setInstalledApps: React.Dispatch<React.SetStateAction<Iapp[]>>
}

export const AppContext = createContext<IAppContext>({
    installedApps: [],
    setInstalledApps: () => { }
})



const AppProvider = ({ children } : {children: React.ReactNode}) => {


    const [installedApps, setInstalledApps] = useState<Iapp[]>([])

    const shareData = {
        installedApps, setInstalledApps
    }

    return (
        <AppContext.Provider value={shareData}>
            {children}
        </AppContext.Provider>
    );
};

export default AppProvider;