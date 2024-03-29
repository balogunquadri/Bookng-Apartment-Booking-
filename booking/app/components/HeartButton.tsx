'use client';

import { FaRegBookmark,FaBookmark} from "react-icons/fa";

import useFavorite from "@/app/hooks/useFavorite";

import { SafeUser } from "@/app/types";

import ClientOnly from "./ClientOnly";

interface HeartButtonProps {
  listingId: string
  currentUser?: SafeUser | null
}

const HeartButton: React.FC<HeartButtonProps> = ({ 
  listingId,
  currentUser
}) => {
  const { hasFavorited, toggleFavorite } = useFavorite({
    listingId,
    currentUser

  //  const hasFavorited = false;
  // const toggleFavorite = () => {}
  });

  return (
    <div 
      onClick={toggleFavorite}
      className="
        relative
        hover:opacity-80
        transition
        cursor-pointer
      "
    >
      <FaRegBookmark
        size={28}
        className="
          fill-black
          absolute
          -top-[4px]
          -right-[2px]
        "
      />
      <FaBookmark
        size={24}
        className={
          hasFavorited ? 'fill-rose-500' : 'fill-neutral-500/70'
        }
      />
    </div>
   );
}
 
export default HeartButton;