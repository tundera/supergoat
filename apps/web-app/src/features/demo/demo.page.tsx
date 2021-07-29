import { NextSeo } from 'next-seo';
import { MainLayout } from '@/components/layout/main-layout';
import { Banner } from '@/components/banner';
import { useTranslation } from 'next-i18next';
import { demoConfig } from './demo.config';
import { sayHello } from '@monorepo/core';
import { InfoCard } from '@monorepo/components/component/info-card';
import { AsyncMessage, Message } from '@monorepo/components';
import Image from 'next/image';
import { DemoApiSection } from './sections/demo-api.section';

type Props = {
  children?: never;
};

export const DemoPage: React.FC<Props> = () => {
  const { t } = useTranslation(demoConfig.i18nNamespaces);

  return (
    <>
      <NextSeo
        title={t('demo:page.title')}
        description="Web-app nextjs monorepo example, https://github.com/belgattitude/nextjs-monorepo-example"
      />
      <MainLayout>
        <Banner />
        <h3>I'm the web-app</h3>
        <ul>
          <InfoCard originatingAppName={'web-app'} />
          <li>{`Foo says: ${sayHello('World')} from @monorepo/core`}</li>
          <li>
            <Message
              message={'Bar react component from @monorepo/components'}
            />
          </li>
          <li>
            <AsyncMessage apiUrl={'/api/hello'} />
          </li>
        </ul>
        <Image
          src={'/shared-assets/images/nextjs-logo.png'}
          alt={'logo'}
          width={400}
          height={240}
        />
        <DemoApiSection />
      </MainLayout>
    </>
  );
};
