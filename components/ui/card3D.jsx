"use client";
import React from 'react'
import { CardBody, CardContainer, CardItem } from "./3d-card";
import Image from 'next/image'
export const Card3dimension = ({title, content}) => {
  return (
    
<CardContainer className="">
        <CardBody className=" relative group/card  hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-black border-white/[0.2]  w-auto sm:w-[30rem] h-auto rounded-xl p-5 border  ">
          <CardItem
            translateZ="40"
            className="text-xl font-bold text-white"
          >
           {title}
          </CardItem>
          <CardItem
            as="p"
            translateZ="40"
            className=" text-sm max-w-sm mt-2 text-neutral-300"
          >
            {content}
          </CardItem>
          <CardItem
            translateZ="60"
            
            className="w-full mt-4"
          >
            <Image
            
              height="100"
              width="100"
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          <div className="flex items-center justify-center mt-20">
            
            <CardItem
              translateZ={40}
              
              as="button"
              className="px-4 py-2 rounded-xl bg-white text-black text-xs font-bold"
            >
              See More
            </CardItem>
          </div>
        </CardBody>
      </CardContainer> )
}

