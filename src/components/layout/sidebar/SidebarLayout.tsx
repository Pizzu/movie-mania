import { Container, Sidebar } from "~/components/ui";

export interface ISidebarLayout {
  children: React.ReactNode;
}

const SidebarLayout: React.FC<ISidebarLayout> = ({ children }) => {
  return (
    <>
      <Sidebar />
      <div className="flex justify-start">
        <div className="hidden h-0 shrink-0 grow-0 basis-80 md:block"></div>
        <div className="flex-1">
          {/* <Navbar title={pageTitle} /> */}
          <Container>{children}</Container>
        </div>
      </div>
    </>
  );
};

export default SidebarLayout;
