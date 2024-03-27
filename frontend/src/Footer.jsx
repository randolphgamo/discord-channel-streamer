function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="text-gray-500 py-4 flex justify-center items-center">
      <p>Copyright ⓒ {currentYear} | By <a href="https://github.com/randolphgamo" target="_blank" class="text-blue-500 underline">Gamo Nana</a></p>
    </footer>
  );
}

export default Footer;
