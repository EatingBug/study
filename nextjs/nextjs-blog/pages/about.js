import Link from 'next/link';
import Head from 'next/head';
import Script from 'next/script';
import Layout from '../components/Layout'
import Seo from '../components/Seo';

export default function FirstPost() {
    return (
        <div>
            <Seo title="About" />
            <Script
                src="https://connect.facebook.net/en_US/sdk.js"
                strategy="lazyOnload"
                onLoad={() =>
                    console.log('script loaded correctly, window. FB has been populated')
                }
            />
            <h1>First Post</h1>
            <h2>
                <Link href="/">Back to home</Link>
            </h2>
        </div>
    )
}