import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const SocialIcons = () => {
  return (
    <div className="flex space-x-4 mt-4">
      <a href="#" className="text-black hover:text-blue-500">
        <FaTwitter />
      </a>
      <a href="#" className="text-black hover:text-blue-500">
        <FaFacebook />
      </a>
      <a href="#" className="text-black hover:text-blue-500">
        <FaInstagram />
      </a>
      <a href="#" className="text-black hover:text-blue-500">
        <FaLinkedin />
      </a>
    </div>
  );
};

export default SocialIcons;
