import React from 'react';
import { Sdata } from './Sdata';
import { Srender } from './Srender';

export default function DisplayData() {
    return (
        <>
            {
                Sdata.map((val, index) => {
                    return (
                        <Srender
                            key={index}
                            simg={val.simg}
                            sheding={val.sheding}
                            stitle={val.stitle}
                        />
                    )
                })
            }
        </>
    )
}
