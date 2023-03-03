import Head from 'next/head';
import Layout, { siteTitle } from '../components/Layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import NavBar from '../components/NavBar'
import Seo from '../components/Seo';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  }
} 

export default function Home({ allPostsData }) {
  return (
    <div>
      <Seo title="Home" />
      <section className={utilStyles.headingMd}>
        <p>백엔드 개발자</p>
        <p>
          "꾸준함이 평범함을 특별하게 만든다" 고 생각해서 좋은 습관을 만들기위해 노력하고 있습니다.
        </p>
      </section>

      <section className={'${utilStyles.headingMd} ${utilStyles.padding1px}'}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map}
        </ul>
      </section>
    </div>
  );
}