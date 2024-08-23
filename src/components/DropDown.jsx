// "use client"

// import React, { useState, useEffect } from 'react';
// import { useRouter } from 'next/navigation';
// import {
//     DropdownMenu,
//     DropdownMenuContent,
//     DropdownMenuItem,
//     DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import { FaUser, FaChevronDown, FaBox, FaCube } from 'react-icons/fa';

// export const DropDown = () => {
//     const router = useRouter();
//     const [selectedIcon, setSelectedIcon] = useState(<FaUser />);

//     useEffect(() => {
//         console.log(router)
//         console.log("router", router.pathname);
//         if (router.pathname === '/') {
//             setSelectedIcon(<FaUser />);
//         } else if (router.pathname === '/bento-box') {
//             setSelectedIcon(<FaBox />);
//         } else if (router.pathname === '/3d') {
//             setSelectedIcon(<FaCube />);
//         }
//     }, [router.pathname]);

//     const handleSelect = (path, icon) => {
//         setSelectedIcon(icon);
//         router.push(path);
//     };

//     return (
//         <div className="border-none outline-none focus:outline-none focus:border-none bg-og-white text-og-ter pt-1 pl-2 pr-2 rounded-sm ">
//             <DropdownMenu>
//                 <DropdownMenuTrigger>
//                     <div className="flex items-center">
//                         {selectedIcon}
//                         <FaChevronDown className="ml-2" />
//                     </div>
//                 </DropdownMenuTrigger>
//                 <DropdownMenuContent>
//                     <DropdownMenuItem onClick={() => handleSelect('/', <FaUser />)}>
//                         <FaUser className="mr-2" />
//                         Professional
//                     </DropdownMenuItem>
//                     <DropdownMenuItem onClick={() => handleSelect('/bento-box', <FaBox />)}>
//                         <FaBox className="mr-2" />
//                         Bentobox
//                     </DropdownMenuItem>
//                     <DropdownMenuItem onClick={() => handleSelect('/3d', <FaCube />)}>
//                         <FaCube className="mr-2" />
//                         3D
//                     </DropdownMenuItem>
//                 </DropdownMenuContent>
//             </DropdownMenu>
//         </div>
//     );
// };

"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import { FaUser, FaChevronDown, FaBox, FaCube } from 'react-icons/fa';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function DropDown() {
    const [position, setPosition] = React.useState("professional")

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="secondary">Creativity</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
                    <DropdownMenuRadioItem value="professional">
                        <FaUser className="mr-2" />
                        Professional
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="bentobox">
                        <FaBox className="mr-2" />
                        Bentobox
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="threed">
                        <FaCube className="mr-2" />
                        3D
                    </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

