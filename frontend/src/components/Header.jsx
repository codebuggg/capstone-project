import { FaBell, FaSearch } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import BasicMenu from './BasicMenu';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`header ${isScrolled && 'bg-[#141414]'}`}>
      <div className="flex items-center space-x-2 md:space-x-10">
        <img
          src="https://rb.gy/ulxxee"
          alt="netflix"
          width={120}
          height={120}
          className="cursor-pointer object-contain"
        />

        <BasicMenu />

        <ul className="hidden md:space-x-4 md:flex">
          <li className="headerLink">Home</li>
          <li className="headerLink">TV Shows</li>
          <li className="headerLink">Movies</li>
          <li className="headerLink">My List</li>
        </ul>
      </div>

      <div className="font-light flex items-center space-x-4 text-sm">
        <FaSearch className="hidden sm:inline sm:w-6 sm:h-6 cursor-not-allowed" />
        <p className="hidden lg:inline cursor-not-allowed">Kids</p>
        <FaBell className="h-6 w-6 cursor-not-allowed" />
        <Link to="#">
          <img
            src="https://rb.gy/g1pwyx"
            alt=""
            className="cursor-pointer rounded"
          />
        </Link>
      </div>
    </header>
  );
}