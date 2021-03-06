const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="text-center text-sm bg-gradient-to-r from-gray-400 via-gray-800 to-gray-600 my-auto text-center p-5 text-sm text-white mt-20">
      <p>EZ-LEAGUE Copyright © {year}</p>
    </footer>
  );
};

export default Footer;
