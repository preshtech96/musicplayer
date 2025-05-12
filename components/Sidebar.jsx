import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import home from '../src/assets/home.png';
import compass from '../src/assets/compass.png';
import album from '../src/assets/album.png';
import artist from '../src/assets/artist.png';
import clock from '../src/assets/clock.png';
import clock1 from '../src/assets/clock1.png';
import gallery from '../src/assets/gallery.png';
import playlist from '../src/assets/playlist.png';
import heart1 from '../src/assets/heart1.png';
import settings from '../src/assets/settings.png';
import logout from '../src/assets/logout.png';
import preshtech from '../src/assets/preshtech.png';

const Sidebar = () => {
  const location = useLocation();
  
  return (
    <div className="w-60 h-screen text-white p-6 flex flex-col ">
      <h1 className="text-3xl font-bold text-pink-500 mb-8 flex flex-row gap-4">Melodies <span><img className='w-8 h-8' src={preshtech} alt="PreshTech" /></span></h1>
      
      <p className="text-lg text-pink-500 mb-4">Menu</p>
      
      <nav className="flex flex-col gap-2 h-[100%]">
        <SidebarButton to="/" icon={home} label="Home" active={location.pathname === '/'} />
        <SidebarButton to="/Discover" icon={compass} label="Discover" active={location.pathname === '/Discover'} />
        <SidebarButton to="/Album" icon={album} label="Album" active={location.pathname === '/Album'} />
        <SidebarButton to="/Artist" icon={artist} label="Artist" active={location.pathname === '/Artist'} />
        
        <p className="text-lg text-pink-500 mt-4 mb-2">Library</p>
        <SidebarButton to="/Recently" icon={clock} label="Recently" active={location.pathname === '/Recently'} />
        <SidebarButton to="/MostPlayed" icon={clock1} label="Most Played" active={location.pathname === '/MostPlayed'} />
        
        <p className="text-lg text-pink-500 mt-4 mb-2">Playlist and Favorite</p> 
        <SidebarButton to="/Favorites" icon={heart1} label="Your favorites" active={location.pathname === '/Favorites'} />
        <SidebarButton to="/Playlist" icon={playlist} label="Your playlist" active={location.pathname === '/Playlist'} />
        <SidebarButton to="/AddPlaylist" icon={gallery} label="Add playlist" active={location.pathname === '/AddPlaylist'} />
        
        <p className="text-lg text-pink-500 mt-4 mb-2">General</p> 
        <SidebarButton to="/Settings" icon={settings} label="Settings" active={location.pathname === '/Settings'} />
        <SidebarButton to="/" icon={logout} label="Logout" active={location.pathname === ''} />
      </nav>
    </div>
  );
};

const SidebarButton = ({ to, icon, label, active }) => {
  return (
    <Link
      to={to}
      className={`flex items-center gap-3 text-lg px-4 py-2 rounded-md cursor-pointer transition-colors 
      ${active ? 'bg-pink-500 text-white' : 'text-gray-300 hover:text-pink-500 hover:bg-gray-800'}
      ${active ? 'md:h-full md:border-l-4 md:border-pink-500' : 'md:border-l-0'}
      ${active ? 'h-auto border-l-4 border-pink-500 md:border-none' : ''}`}
    >
      <img src={icon} alt={label} className="w-6 h-6" />
      {label}
    </Link>
  );
};



export default Sidebar;
