import PageHeader from '../components/PageHeader';
import PageFooter from '../components/PageFooter';

export default function AppLayout({ children }) {
  return (<div>
    <PageHeader />
    {children}
    <PageFooter />
  </div>);
}
