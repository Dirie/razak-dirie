import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, User, GraduationCap, Briefcase, Wrench, Image, BookOpen, X,AlignRight } from 'lucide-react';

const Navigation = () => {
  const location = useLocation();
  const [isHovered, setIsHovered] = useState<string | null>(null);
  const [togle, setTogle] = useState(false);

  const showToggle =()=>{
    setTogle(!togle);
  }

  const menuItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/education', label: 'Education', icon: GraduationCap },
    { path: '/experience', label: 'Experience', icon: Briefcase },
    { path: '/skills', label: 'Skills', icon: Wrench },
    { path: '/gallery', label: 'Gallery', icon: Image },
    { path: '/blogs', label: 'Blog', icon: BookOpen },
  ];

  return (
    <>
    
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav sm:px-5 xs:px-3">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center h-16 space-x-8 sm:hidden xs:hidden ">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            const Icon = item.icon;
            
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`hover-link flex items-center space-x-1 transition-colors duration-200 ${
                  isActive ? 'text-primary' : 'text-muted-foreground'
                }`}
                onMouseEnter={() => setIsHovered(item.path)}
                onMouseLeave={() => setIsHovered(null)}
              >
                <Icon
                  className={`w-4 h-4 transition-transform duration-300 ${
                    isHovered === item.path ? 'scale-110' : ''
                  }`}
                />
                <span className="text-sm font-medium">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
      <div className='flex items-end w-full mb-2 cursor-pointer flex-col md:flex-row xl:flex-row justify-start xl:hidden md:hidden'  onClick={showToggle}>
          {togle ? <X className='h-8 w-8'/> : <AlignRight className='h-8 w-8'/>}
          
        </div>
    </nav>

    <div className={`fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-end items-start z-30 ease-in duration-300 ${togle ? "" : "hidden"}`} onClick={showToggle}>

<div className='bg-[#EDF4F4] xs:w-full  w-[300px] max:w-[500px]  overflow-auto pt-16 fixed '>
  <div className='flex flex-col justify-center '>
    {/* {menuItems.map( m => (
  
      <div key={m.path} className='grid grid-cols-4 h-[4rem] items-center justify-center cursor-pointer border border-l-0 border-r-0'>
      <Link to={`/${m.path}`} className='col-span-4 hover:bg-[#f8803a] h-full flex items-center justify-between text-black hover:text-white px-5 font-normal text-[18px] ml-6' onClick={showToggle}>
       {m.label}
      </Link>
    </div>
    ))} */}

          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            const Icon = item.icon;
            
            return (
              <div key={item.path} className='flex flex-col h-[4rem]  cursor-pointer px-4 '>
              <Link
                key={item.path}
                to={item.path}
                className={`hover-link flex items-center space-x-1 transition-colors duration-200 px-4 ${
                  isActive ? 'text-primary' : 'text-muted-foreground'
                }`} onClick={showToggle}
                onMouseEnter={() => setIsHovered(item.path)}
                onMouseLeave={() => setIsHovered(null)}
              >
                <Icon
                  className={`w-4 h-4 transition-transform duration-300 ${
                    isHovered === item.path ? 'scale-110' : ''
                  }`}
                />
                <span className="text-sm font-medium">{item.label}</span>
              </Link>
              </div>
            );
          })}
  </div> 
  </div>
  </div>
    </>
  );
};

export default Navigation;