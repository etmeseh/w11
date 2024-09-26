import Head from 'next/head';
import Icons from '../components/modules/Icons/Icons';

export default function Home() {
	return (
		<>
			<Head>
				<title>etka</title>
				<link rel="canonical" href="https://www.etka.reative.de" />

				{/* Description */}
				<meta
					name="description"
					content="Etka's personal website. A place to share my projects and learn about me. I do some coding sometimes."
				/>

				{/* OpenGraph */}
				<meta property="og:title" content="Etka" />
				<meta property="og:url" content="https://www.etka.reative.de" />
				<meta
					property="og:description"
					content="Etka's personal website. A place to share my projects and learn about me. I do some coding sometimes."
				/>
			</Head>
			<div style={{ height: '100%' }}>
				<Icons />
			</div>
		</>
	);
}
