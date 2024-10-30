import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';

// Instalar npm install @fortawesome/react-fontawesome @fortawesome/free-solid-svg-icons @fortawesome/fontawesome-svg-core
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHome, faBuilding, faPhone, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

export default function Navbar() {
  const [isHeroVisible, setIsHeroVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const menuItems = [
    { item: 'Home', path: '/', icon: faHome },
    { item: 'Projeto', path: '/Projeto', icon: faBuilding },
    { item: 'Time', path: '/Time', icon: faPhone },
    { item: 'Sobre', path: '/Login', icon: faCalendarAlt }
  ];

  // Rotas 

  const handleHashLinkClick = (hash: string) => {
    if (hash.startsWith('#')) {
      if (router.pathname === '/') {
        // Se estiver na home, rolar para a seção
        document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' });
      } else {
        // Caso contrário, navega para a home e rola para a seção
        router.push(`/`).then(() => {
          document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' });
        });
      }
    } else {
      router.push(hash);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const heroElement = document.querySelector('#habilitar-menu') as HTMLElement | null;

      if (heroElement) {
        const heroHeight = heroElement.offsetHeight;
        const scrollPosition = window.scrollY;

        if (scrollPosition > heroHeight - 100) {
          setIsHeroVisible(false);
        } else {
          setIsHeroVisible(true);
        }
      }

      if (router.pathname === '/Projeto' || router.pathname === '/Time') {
          setIsHeroVisible(false);
          return;
      }

    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [router.pathname]);

  return (
    <header className={`p-4 fixed top-0 w-full z-50 ${isHeroVisible ? 'bg-transparent text-white hover:text-gray-700' : 'bg-white'}`} >
        <header className="p-4 bg-gray-100 text-gray-800">
            <div className="container flex justify-between h-16 mx-auto">
                <a rel="noopener noreferrer" href="#" aria-label="Back to homepage" className="flex items-center p-2">
                    <img src="/assets/Logo/napkin-selection-tres.svg" alt="" />
                </a>
                <ul className="items-stretch hidden space-x-3 lg:flex text-gray-800">
                    <li className="flex">
                        <a rel="noopener noreferrer" href="/" className="flex items-center px-4 -mb-1 border-b-2 border- text-gray-700 font-jakarta text-xl">Home</a>
                    </li>
                    <li className="flex">
                        <a rel="noopener noreferrer" href="/Projeto" className="flex items-center px-4 -mb-1 border-b-2 border- text-gray-700 font-jakarta text-xl">Projeto</a>
                    </li>
                    <li className="flex">
                        <a rel="noopener noreferrer" href="/Time" className="flex items-center px-4 -mb-1 border-b-2 border- text-gray-700 font-jakarta text-xl">Time</a>
                    </li>
                </ul>
                <div className="items-center flex-shrink-0 hidden lg:flex">
                    <button className="self-center px-8 py-3 rounded"><a href="/Login" className='text-gray-800 font-jakarta text-xl'>Login</a></button>
                    <button className="self-center px-8 py-3 font-semibold rounded bg-blue-500 text-gray-50"><a href="/Hero" className='text-white font-jakarta text-xl'>Cadastro</a></button>
                </div>
                <button className="p-4 lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-gray-800">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
        </header>

      {/* Menu mobile */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-gray-800 z-40 flex flex-col lg:hidden">
          <button onClick={toggleMobileMenu} className="self-end text-gray-800 pt-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" className='text-white'/>
            </svg>
          </button>

          <ul className="flex flex-col items-start space-y-2 px-3">
            {menuItems.map((menuItem) => (
              <li key={menuItem.item} className="w-full border-b border-white last:border-none">
                <Link href={menuItem.path} className="text-md text-white flex items-center space-x-3 py-3" onClick={() => {handleHashLinkClick(menuItem.path); setIsMobileMenuOpen(false)
                }}>
                  <FontAwesomeIcon icon={menuItem.icon} />
                  <span>{menuItem.item}</span>
                </Link>
              </li>
            ))}
          </ul>

        </div>
      )}
    </header>
  );
}
