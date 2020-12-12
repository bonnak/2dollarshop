import PageHeader from '../components/PageHeader';
import PageFooter from '../components/PageFooter';
import SubMenu from '../components/SubMenu';
import {Provider as AuthProvider} from '../contexts/AuthContext';

export default function AppLayout({ children }) {
  return (
    <AuthProvider>
      <div>
        <PageHeader />
        <SubMenu />
        {children}
        <PageFooter />
      </div>
    </AuthProvider>
  );
}
