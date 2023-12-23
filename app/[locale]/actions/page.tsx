'use client';

import ContainerPage from '@/components/ContainerPage/ContainerPage';
import ArticleAction from './components/articleAction/ArticleAction';
import { useEffect } from 'react';
import { PAGE_ACTIONS } from '@/public/database';

function Actions() {
  useEffect(() => {
    const elementoId = window.location.hash.slice(1);
    const targetElement = document.getElementById(elementoId);
    const headerHeight = 190;

    if (targetElement) {
      const targetPosition = targetElement.offsetTop - headerHeight;
      window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    }
  }, []);
  return (
    <>
      <ContainerPage>
        <ArticleAction
          nameId={PAGE_ACTIONS[0].path}
          title={PAGE_ACTIONS[0].title}
          boldDesc={PAGE_ACTIONS[0].boldDesc}
          description={PAGE_ACTIONS[0].description}
          helps={PAGE_ACTIONS[0].wayHelps}
        />
      </ContainerPage>
      <ContainerPage>
        <ArticleAction
          nameId={PAGE_ACTIONS[1].path}
          title={PAGE_ACTIONS[1].title}
          description={PAGE_ACTIONS[1].description}
          helps={PAGE_ACTIONS[1].wayHelps}
        />
      </ContainerPage>
      <ContainerPage>
        <ArticleAction
          nameId={PAGE_ACTIONS[2].path}
          title={PAGE_ACTIONS[2].title}
          description={PAGE_ACTIONS[2].description}
          helps={PAGE_ACTIONS[2].wayHelps}
        />
      </ContainerPage>
    </>
  );
}
export default Actions;
