import React, {useState, FC} from 'react'
import { Link } from 'wouter';

export const Navbar: FC = ({ children }) => {

  const [showMenu, setShowMenu] = useState<boolean>(false);  // ✅ Correct


  return (
    <div className='min-h-full backdrop-blur-xl'>
      <nav className='sticky top-0 z-1 bg-red-500'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between h-16'>
            <div className='flex items-center'>
              <div className='flex-shrink-0'>
                <Link className='text-white' to='/'>
                  Marvel
                </Link>
              </div>
                 <div className="hidden md:block">
                  <div className="ml-3 flex item-baseline space-x-2">
                    <Link  to='/' className='text-white hover:bg-red-800 px-3 py-2 rounded-md text-md font-medium'>
                      Home
                    </
                    Link>
                    <Link to='/heroes' className='text-white hover:bg-red-800 px-3 py-2 rounded-md text-md font-medium'>
                      Heroes
                    </Link>
                  </div>
                 </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
    )
}

