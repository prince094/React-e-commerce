import { useEffect } from 'react';
import BreadCrumb from '../../../ui/BreadCrumb.js';
import Input from '../../../ui/Input.tsx';
import { useBreadCrumbContext } from '../../../context/BreadcrumbContext.tsx';
import PageTitle from '../../../ui/PageTitle.tsx';
import UsageForm from '../components/SignUp.tsx';
import PasswordRecovery from '../components/PasswordRecovery.tsx';

export default function RegistrationPage() {
  const { setBreadcrumb } = useBreadCrumbContext();

  useEffect(() => {
    fetch('../../src/data/news-data.json')
      .then((response) => response.json())
      .then((data) => {
        setBreadcrumb([
          { path: '/', name: 'Home' },
          { path: '/auth', name: 'Registration' },
        ]);
      });
  }, []);

  return (
    <>
      <BreadCrumb />
      <PageTitle title="Registration / Password recovery" />
      <UsageForm />
      {/* <PasswordRecovery /> */}
    </>
  );
}
