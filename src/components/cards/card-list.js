import React from 'react';
import {Card} from "./card";

export const CardList = ({list})=>{
    return(<div>
        {list.map(({id,...cert})=>(<Card key={id} props={cert} />))}
    </div>)
}