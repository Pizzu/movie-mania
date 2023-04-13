const Sidebar: React.FC = () => {
  return (
    <div className="fixed left-0 top-0 hidden h-screen w-80 bg-secondaryBg px-7 py-10 sm:hidden md:block">
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col gap-3 pt-3">Movie Mania</div>
        <div className="mt-11 flex flex-col justify-items-center gap-8">
          <p>Link 1</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
