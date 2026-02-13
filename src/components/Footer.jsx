import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";


function Footer() {
  return (
    <footer className="p-20 flex items-center justify-around flex-wrap gap-4">
      <div className="font-bold text-2xl">Binhoff</div>
      <ul className="menu">
        <li>Product</li>
        <li>Install</li>
        <li>Quicstart</li>
      </ul>
      <ul className="menu">
        <li>Blog</li>
        <li>Careers</li>
        <li>About</li>
      </ul>
      <div className="flex items-center justify-center flex-wrap gap-4">
        <div className="icon">
            <FaTwitter/>
        </div>
        <div className="icon">
            <FaFacebook/>
        </div>
        <div className="icon">
            <AiFillInstagram/>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
