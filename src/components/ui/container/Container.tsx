export interface IContainer {
  children: React.ReactNode;
}

const Container: React.FC<IContainer> = ({ children }) => {
  return (
    <main className="mx-auto w-full max-w-screen-2xl pb-12 pl-6 pr-6 lg:pl-12 lg:pr-12">
      {children}
    </main>
  );
};

export default Container;
