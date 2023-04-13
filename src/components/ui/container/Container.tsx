export interface IContainer {
  children: React.ReactNode;
}

const Container: React.FC<IContainer> = ({ children }) => {
  return (
    <main className="pl-12 pr-12 mx-auto w-full max-w-screen-2xl">
      {children}
    </main>
  );
};

export default Container;
