import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import video from '../../../public/video.mp4';
import { AuthenticationContext } from '../../services/authenticationContext/AuthenticationContext';

const Body = () => {
  const { isAdmin, isProfe, user } = useContext(AuthenticationContext); //Si estamos loggeados no hay boton
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/Register");
  }

  return (
    <div className="relative">
      <video autoPlay loop muted className="w-full h-250">
        <source src={video} type="video/mp4" />
        Tu navegador no admite videos HTML5.
      </video>
      <div className="z-10 text-white text-center p-5 absolute bottom-0 left-0 right-0 mb-1">
        <h1 className="text-4xl md:text-5xl font-bold mb-3 hover:text-primary">
          BIENVENIDO A TRIDENTE GYM
        </h1>
        {!isAdmin && !isProfe && !user && (
          <button
            className="bg-green-600 hover:text-primary text-white py-2 px-4 mt-4 rounded-md"
            onClick={handleClick}
          >
            ÚNETE A NUESTRO EQUIPO
          </button>
        )}
      </div>
    </div>
  );
};

export default Body;
