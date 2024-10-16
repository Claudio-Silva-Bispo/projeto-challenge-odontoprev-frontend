/* eslint-disable @next/next/no-img-element */

import React, { useContext } from 'react';
import { LayoutContext } from '../context/layoutcontext';

const Rodape = () => {
    const { layoutConfig } = useContext(LayoutContext);

    return (
        <div className="layout-footer">
            <span className="font-medium ml-2">Projeto Challenge OdontoPrev & FIAP - © Copyright 2024. Todos os direitos reservados a Delfos Machine.</span>
        </div>
    );
};

export default Rodape;
