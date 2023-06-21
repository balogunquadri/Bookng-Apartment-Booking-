'use client'


 import Container from '../Container'

const SearchMenu = () => {
    return (
        <Container>
            
                <div className="flex justify-between items-center rounded-[8px] gap-[10px] bg-white p-5 shadow-lg shadow-greyish-700">
                <div className='flex gap-2 items-center'>
                      
                  <input type="text" className='bg-transparent text-blue-500 focus:outline-none w-[100%]' placeholder='Type a location....' />
                     
                </div>
                <div className='flex gap-2 items-center'>
                      
                  <input type="text" className='bg-transparent text-blue-500 focus:outline-none w-[100%]' placeholder='Your Specification....' />
                     
                  </div>
                  <button className='bg-blue-500 h-full p-5 px-10 rounded-[10px] text-black cursor-pointer hover:bg-blue-100'>Advance Search</button>
                </div>
                
            </Container>
            
    )
}

export default SearchMenu