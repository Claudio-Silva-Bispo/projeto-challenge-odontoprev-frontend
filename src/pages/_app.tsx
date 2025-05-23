import type { AppProps } from 'next/app';
import { PrimeReactProvider } from 'primereact/api';
import { LayoutProvider, LayoutContext } from '../context/layoutcontext';
import { AuthProvider } from '@/context/authContext';
import '../globals.css';
import Head from 'next/head';
import React, { useContext, useEffect } from 'react';
import { classNames } from 'primereact/utils';
import Menu from '@/components/Menu';
import Rodape from '@/components/Rodape';
import MenuConfiguracao from '@/components/MenuConfiguracao';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import '../styles/layout/layout.scss';
import { useRouter } from 'next/router';
import { useAuth } from '@/context/authContext';
import MenuProjeto from '@/components/MenuProjeto';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isLoginPage = router.pathname === '/Login';

  return (
    <PrimeReactProvider>
      <AuthProvider>
        <LayoutProvider>
                <Head>
                    <link
                    id="theme-css"
                    href={`/themes/lara-light-indigo/theme.css`}
                    rel="stylesheet"
                    />
                </Head>
          <MainComponent isLoginPage={isLoginPage}  Component={Component} pageProps={pageProps} />
        </LayoutProvider>
      </AuthProvider>
    </PrimeReactProvider>
  );
}

const MainComponent = ({ isLoginPage, Component, pageProps }: { isLoginPage: boolean; Component: React.ComponentType; pageProps: any }) => {
  const { layoutState } = useContext(LayoutContext);
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  // Redireciona para a página de login se não estiver autenticado, exceto para a rota /swagger ou Cadastro(Hero)
  useEffect(() => {
    const publicRoutes = ['/swagger', '/Hero', '/CadastroCliente',' /CadastroClinica', '/CadastroEspecialista', '/Projeto' ];
    if (!isAuthenticated && !isLoginPage && !publicRoutes.includes(router.pathname)) {
      router.push('/Login');
    }
  }, [isAuthenticated, isLoginPage, router]);

  const containerClass = classNames('layout-wrapper', {
    'layout-overlay': layoutState?.menuMode === 'overlay',
    'layout-static': layoutState?.menuMode === 'static',
    'layout-overlay-active': layoutState?.overlayMenuActive,
    'layout-mobile-active': layoutState?.staticMenuMobileActive,
  });

  // Verifica se a rota atual é '/Projeto' para exibir o MenuProjeto
  const isProjetoPage = router.pathname === '/Projeto';

  return (
    <div className={containerClass}>
      {/* Mostra MenuProjeto se estiver na rota '/Projeto', senão exibe o Menu normal */}
      {!isLoginPage && (isProjetoPage ? <MenuProjeto /> : <Menu />)}
      <div className="layout-main-container">
        <div className="layout-main">
          <Component {...pageProps} />
        </div>
        {!isLoginPage && <Rodape />}
      </div>
      {!isLoginPage && <MenuConfiguracao />}
      <div className="layout-mask"></div>
    </div>
  );
};

export default MyApp;
