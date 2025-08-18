const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-200 bg-white py-8">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} ike.taku. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;