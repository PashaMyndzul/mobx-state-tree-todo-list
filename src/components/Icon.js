import React from 'react';
import { icons } from './icons'; 
export const Icon = ( { name, ...props } ) => {
    const IconC = icons[name];
    return <IconC { ...props }/>
};
