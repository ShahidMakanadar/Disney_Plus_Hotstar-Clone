import {useState} from 'react'
import disneyLogo from "../assets/images/DisnepLogo.png";
import ProfileLogo from "../assets/images/profile.jpg";
import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
} from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import HeaderItem from "./HeaderItem";

function Header() {
  const menu = [
    {
      Id: 1,
      name: "HOME",
      icon: HiHome,
    },
    {
      Id: 2,
      name: "SEARCH",
      icon: HiMagnifyingGlass,
    },
    {
      Id: 3,
      name: "WATCH LIST",
      icon: HiPlus,
    },
    {
      Id: 4,
      name: "ORIGINALS",
      icon: HiStar,
    },
    {
      Id: 5,
      name: "MOVIES",
      icon: HiPlayCircle,
    },
    {
      Id: 6,
      name: "SERIES",
      icon: HiTv,
    },
  ];

  const [toggle , setToggle] = useState(false)

  return (
    <div>
      <div className="flex items-center p-3 justify-between">
        <div className="flex gap-8 items-center">
          <img
            className="w-[80px] object-cover mb-4 md:w-[100px] "
            src={disneyLogo}
            alt="refresh"
          />
          <div className="hidden md:flex gap-8">
            {menu.map((items) => (
              <HeaderItem key={items.Id} name={items.name} Icon={items.icon} />
            ))}
          </div>
          <div className="flex gap-8 md:hidden">
            {menu.map((items,index) => index < 2 &&(
              <HeaderItem key={items.Id} name="" Icon={items.icon} />
            ))}
          </div>
          <div className="md:hidden" onClick={()=>{setToggle(!toggle)}}> 
            <HeaderItem Icon={HiDotsVertical} />
            {
              toggle ?
              <div className=" absolute mt-1 left-44 bg-[#08071e] border-[1px] border-gray-700 p-3 px-7 py-3 ">
              {menu.map((items,index)=> index > 1 && (
                <HeaderItem key={items.Id} name={items.name} Icon={items.icon} />
              ))}
            </div>
              :
              null
            }
           
          </div>
        </div>
        <div>
          <img
            className=" w-[28px] rounded-full mb-3  md:w-[30px] object-cover"
            src={ProfileLogo}
            alt="refresh"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
