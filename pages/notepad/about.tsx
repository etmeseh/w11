import Head from 'next/head';
import Icons from '../../components/modules/Icons/Icons';
import Notepad from '../../components/windows/Notepad/Notepad';
function About() {
	const getAge = () => {
		const dateString = '1994-04-21';
		var today = new Date();
		var birthDate = new Date(dateString);
		var age = today.getFullYear() - birthDate.getFullYear();
		var m = today.getMonth() - birthDate.getMonth();
		if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
			age--;
		}
		return age;
	};
	const textContent = () => {
		return `Hello, my name is Etka! 👋\n\nI am a ${getAge()}-year-old tech explorer from Berlin, Germany. I am interested on all kinds of tech related topics such as web development! Open the Links folder to follow me on social media! 🤠\n\nBtw this website is built with Next.js and React and is recreation of my windows desktop :D\n\nMessy source code available on GitHub: https://github.com/etmeseh/w11
		`;
	};

	return (
		<>
			<Head>
				<title>etka - About me</title>
				<link
					rel="canonical"
					href="https://www.etka.reative.de/notepad/about"
				/>

				{/* Description */}
				<meta
					name="description"
					content="Who am I? I guess you will find out after reading this."
				/>

				{/* OpenGraph */}
				<meta property="og:title" content="Etka - About me" />
				<meta
					property="og:url"
					content="https://www.etka.reative.de/notepad/about"
				/>
				<meta
					property="og:description"
					content="Who am I? I guess you will find out after reading this."
				/>
			</Head>
			<div style={{ height: '100%' }}>
				<Notepad initialText={textContent()} />
				<Icons />
			</div>
		</>
	);
}

export default About;
