'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { TbBeach, TbMountain, TbPool } from 'react-icons/tb';
import { 
  GiBarn, 
  GiBoatFishing, 
  GiCactus, 
  GiCastle, 
  GiCaveEntrance, 
  GiForestCamp, 
  GiIsland,
  GiWindmill
} from 'react-icons/gi';
import { FaSkiing } from 'react-icons/fa';
import { BsSnow } from 'react-icons/bs';
// import { IoDiamond } from 'react-icons/io5';
import { MdOutlineVilla } from 'react-icons/md';

import CategoryBox from "../CategoryBox";
import Container from '../Container';


export const categories = [
  {
    label: 'Plumbing',
    icon: TbBeach,
    description: 'Water Pipe, Borehole, Sink e.t.c',
  },
  {
    label: 'Electrician',
    icon: GiWindmill,
    description: 'Wiring, Socket, Bulb',
  },
  {
    label: 'Haulage',
    icon: MdOutlineVilla,
    description: 'Delivery, Move Good, Packing'
  },
  {
    label: 'Writer',
    icon: TbMountain,
    description: 'Copy Writer, Artice Writer, Proofreading e.t.c'
  },
  {
    label: 'I T and Software',
    icon: TbPool,
    description: 'Web Design, UI/UX, AI/ML'
  },
  {
    label: 'Graphics',
    icon: GiIsland,
    description: 'Pictures, Video Editing, Photo Shoot e.t.c'
  },
  {
    label: 'Party',
    icon: GiBoatFishing,
    description: 'M C, Event Planner, D J e.t.c'
  },
  {
    label: 'Car and Bikes',
    icon: FaSkiing,
    description: 'Wheel balancing, Servicing, Alignment e.t.c'
  },
  {
    label: 'Weldering',
    icon: GiCastle,
    description: 'Iron Bender, Fabrication, Steel e.t.c'
  },
  {
    label: 'Personal Assistance',
    icon: GiCaveEntrance,
    description: 'Virtual Assistance, Body Guard, Travel Buddy e.t.c'
  },
  {
    label: 'House Decoration',
    icon: GiForestCamp,
    description: 'Painter, P.O.P, Interior Design e.t.c!'
  },
  {
    label: 'Equipment Service',
    icon: BsSnow,
    description: 'Generator, Heavy Machine, Bugger e.t.c'
  },
  {
    label: 'Tutor',
    icon: GiCactus,
    description: 'Education, Lesson teacher and Consultancy e.t.c'
  },
  {
    label: 'Hook up',
    icon: GiBarn,
    description: 'FWB, Dating, Partner e.t.c'
  }
]

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get('category');
  const pathname = usePathname();
  const isMainPage = pathname === '/';

  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div
        className="
          pt-4
          grid 
          grid-cols-7
         
          gap-1 
          items-center 
          justify-between
          
        "
      >
        {categories.map((item) => (
          <CategoryBox 
            key={item.label}
            label={item.label}
            icon={item.icon}
            selected={category === item.label}
          />
        ))}
      </div>
    </Container>
  );
}
 
export default Categories;