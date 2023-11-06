'use client'

import Image from "next/image";
 import Container from '../Container'

const SearchMenu = () => {
    return (
        <Container>
            
            <div 
          className="
            pt-2
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            md:grid-cols-2
            lg:grid-cols-4
            xl:grid-cols-4
            2xl:grid-cols-4
            gap-8
          ">
            
        <div 
          className="
          aspect-square 
          w-full
          h-25
          relative 
        
          rounded-xl
          "
        >
          <Image
            fill
            className="
              object-cover 
            
             relative
            "
            src="/images/ads.png"
            sizes="(max-width: 768px) 20vw, (max-width: 1200px) 20vw, 33vw"
            alt="Listing"
          />
          </div>
          
    
          <div 
          className="
            aspect-square 
            w-full 
            relative 
            overflow-hidden 
            rounded-xl
          "
        >
          <Image
            fill
            className="
              object-cover 
              h-50
              w-full 
              group-hover:scale-110 
              transition
            "
            src="/images/ads.png"
            sizes="(max-width: 768px) 20vw, (max-width: 1200px) 20vw, 33vw"
            
            alt="Listing"
          />
          </div>
          <div 
          className="
            aspect-square 
            w-full 
            relative 
            overflow-hidden 
            rounded-xl
          "
        >
          <Image
            fill
            className="
              object-cover 
              h-50
              w-full 
              group-hover:scale-110 
              transition
            "
            src="/images/ads.png"
            sizes="(max-width: 768px) 20vw, (max-width: 1200px) 20vw, 33vw"
            
            alt="Listing"
          />
          </div>
          <div 
          className="
            aspect-square 
            w-full 
            relative 
            overflow-hidden 
            rounded-xl
          "
        >
          <Image
            fill
            className="
              object-cover 

              h-5
              w-full 
              group-hover:scale-110 
              -z-20
            "
            src="/images/ads.png"
            sizes="(max-width: 768px) 21vw, (max-width: 1200px) 10vw, 20vw"
            
            alt="Listing"
          />
          </div>
        </div>
        
              
                
            </Container>
            
    )
}

export default SearchMenu