import PageHeader from '../components/PageHeader';
import PageFooter from '../components/PageFooter';
import SubMenu from '../components/SubMenu';

export default function AppLayout({ children }) {
  return (
    <div>
      <PageHeader />
      <SubMenu />
      {children}
      <PageFooter />
    </div>
  );
}
