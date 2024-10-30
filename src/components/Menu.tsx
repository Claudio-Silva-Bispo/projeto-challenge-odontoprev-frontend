'use client';

import Link from 'next/link';
import { classNames } from 'primereact/utils';
import React, { forwardRef, useContext, useImperativeHandle, useRef, useState, useEffect } from 'react';
import { AppTopbarRef } from '@/types';
import { LayoutContext } from '../context/layoutcontext';

const Menu = forwardRef<AppTopbarRef>((props, ref) => {
    const { layoutState, onMenuToggle, showProfileSidebar } = useContext(LayoutContext);
    const menubuttonRef = useRef(null);
    const topbarmenuRef = useRef(null);
    const topbarmenubuttonRef = useRef(null);
    const sidebarRef = useRef<HTMLDivElement | null>(null); // Ref com o tipo HTMLDivElement
    const [sidebarVisible, setSidebarVisible] = useState(false);

    useImperativeHandle(ref, () => ({
        menubutton: menubuttonRef.current,
        topbarmenu: topbarmenuRef.current,
        topbarmenubutton: topbarmenubuttonRef.current
    }));

    const handleMenuToggle = () => {
        setSidebarVisible(!sidebarVisible);
        onMenuToggle();
    };

    // Close the sidebar when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
                setSidebarVisible(false);
            }
        };

        if (sidebarVisible) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [sidebarVisible]);

    return (
        <div className="layout-topbar">
            <Link href="/Hero" className="layout-topbar-logo">
                <img src="/assets/Logo/napkin-selection-tres.svg" alt="logo" className='w-full h-auto' />
            </Link>

            <button
                ref={menubuttonRef}
                type="button"
                className="p-link layout-menu-button layout-topbar-button"
                onClick={handleMenuToggle}>
                <i className="pi pi-bars" />
            </button>

            <button
                ref={topbarmenubuttonRef}
                type="button"
                className="p-link layout-topbar-menu-button layout-topbar-button"
                onClick={showProfileSidebar}>
                <i className="pi pi-ellipsis-v" />
            </button>

            <div
                ref={topbarmenuRef}
                className={classNames('layout-topbar-menu', { 'layout-topbar-menu-mobile-active': layoutState.profileSidebarVisible })}>
                <a href='./Login' className="p-link layout-topbar-button">
                    <i className="pi pi-user"></i>
                    <span>Login</span>
                </a>
            </div>

            {/* Sidebar */}
            {sidebarVisible && (
                <div ref={sidebarRef} className="sidebar p-5 text-xl">
                    <ul>
                        <li >
                            <Link href="/" className='flex gap-2 items-center'>
                                <i className="pi pi-home"></i> 
                                Inicio
                            </Link>
                        </li>
                        <li>
                            <Link href="/CadastroClinica" className='flex gap-2 items-center'>
                                <i className="pi pi-plus"></i> 
                                Cadastro Clínica
                            </Link>
                        </li>
                        <li>
                            <Link href="/CadastroEspecialista" className='flex gap-2 items-center'>
                                <i className="pi pi-plus"></i> 
                                Especialista
                            </Link>
                        </li>
                        <li>
                            <Link href="/CadastroCliente" className='flex gap-2 items-center'>
                                <i className="pi pi-plus"></i> 
                                Cadastro Cliente
                            </Link>
                        </li>
                        <li>
                            <Link href="/Documentacao" className='flex gap-2 items-center'>
                                <i className="pi pi-book"></i> 
                                Documentação
                            </Link>
                        </li>
                        <li>
                            <Link href="/CadastroFeedback" className='flex gap-2 items-center'>
                                <i className="pi pi-heart"></i> 
                                Feedback
                            </Link>
                        </li>
                        <li onClick={handleMenuToggle}>
                            <i className="pi pi-times"></i> 
                            Fechar
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
});

Menu.displayName = 'Menu';

export default Menu;
