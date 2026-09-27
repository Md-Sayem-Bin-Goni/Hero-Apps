'use client'
import { AppContext } from '@/context/AppProvider';
import { Iapp } from '@/type/apps.type';
import React, { useContext } from 'react';

const InstallButton = ({ app }:{app:Iapp}) => {
    const { installedApps, setInstalledApps } = useContext(AppContext)

    const handleInstall = () => {
        setInstalledApps  ([...installedApps, app])
    }
    return (
        <button
            onClick={() => handleInstall()}
            className="btn btn-active bg-blue-400">Install
        </button>
    );
};

export default InstallButton;