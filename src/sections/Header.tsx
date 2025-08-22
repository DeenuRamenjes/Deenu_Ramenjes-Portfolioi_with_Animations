export const Header = () => {
  return(
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav className="flex gap-1 p-0.5 border border-white/15 bg-white/10 rounded-full backdrop-blur ">
        <a href="#home" className="nav-item active:bg-white/30 ">Home</a>
        <a href="#projects" className="nav-item active:bg-white/30">Projects</a>
        <a href="#about" className="nav-item active:bg-white/30">About</a>
        <a href="#contact" className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900">Resume</a>
      </nav>
    </div>
  )
};
