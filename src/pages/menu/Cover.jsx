 import React from 'react';
 import { Parallax } from 'react-parallax';
 const Cover = ({img,title,text}) => {
    return (
<Parallax
        blur={{ min: -30, max: 30 }}
        bgImage={img}
        bgImageAlt="the dog"
        strength={-200}
    >
       <div
        className="hero h-[500px]"  >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl uppercase font-bold">{ title}</h1>
            <p className="mb-5">
             {text}
            </p>
      
          </div>
        </div>
      </div>
    </Parallax>

      
    );
 };
 
 export default Cover;
 