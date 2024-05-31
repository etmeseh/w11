import Footer from '../../modules/Footer/Footer';
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import styles from './Layout.module.css';

function Layout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<div className={`${styles.container} layout`}>{children}</div>
			<Footer />
			<Analytics/>
			<SpeedInsights/>
		</>
	);
}

export default Layout;
