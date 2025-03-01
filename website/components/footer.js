// import { Footer } from 'flowbite-react'

const Logo = ({ image, name }) => {
	return (
		<div className="mb-12">
			<a href="/" className="flex items-center">
				<img src={image} className="mr-3 h-20" alt={name} />
				<span className="self-center text-4xl font-semibold whitespace-nowrap text-white">{name}</span>
			</a>
		</div>
	)
}

const Link = ({ link = "#", name = "" }) => {
	return (
		<a className="text-white block" href={link}>{name}</a>
	)
}

export default function Footer({ config }) {
	return (

		<footer className="relative p-4 sm:p-6 dark:bg-gray-800">
			<div className="absolute inset-0 overflow-hidden">
				<img className="absolute left-1/2 transform translate-x-24 top-0 z-0" src="./footer-cubes.svg" />
			</div>
			<div className="relative z-10 container max-w-6xl mx-auto">
				<div className="w-full">
					<Logo image={config.devent.logo} name={config.devent.name} />
				</div>
				<div className="w-full">
					<div className="grid grid-cols-3 gap-8 max-w-2xl ">
						<div>
							<h3 className="text-white text-base mb-4">IPFS Camp</h3>
							<nav>
								<Link name="Tracks" link="#" />
								<Link name="IPFS CAMP" link="" />
								<Link name="Tracks" link="" />
								<Link name="Tickets" link="" />
								<Link name="Schedule" link="" />
								<Link name="Speakers" link="" />
								<Link name="FAQAbout IPFS" link="" />
								<Link name="Privacy Policy" link="" />
							</nav>
						</div>
						<div>
							<h3 className="text-white text-base mb-4">Related Projects</h3>
							<nav>
								<Link name="IPFS" link="#" />
								<Link name="IPFS CLUSTER" link="#" />
								<Link name="LIBP2P" link="#" />
								<Link name="IPLD" link="#" />
								<Link name="MULTIFORMATS" link="#" />
							</nav>
						</div>
						<div>
							<h3 className="text-white text-base mb-4">Stay Updated</h3>
							<nav>
								<Link name="Mailing List" link="#" />
								<Link name="@IPFSBOT" link="#" />
								<Link name="IPFS Blog" link="#" />
								<Link name="Join IRC channel" link="#" />
							</nav>
						</div>
					</div>
					{/* 
					<div>
						<h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Links</h2>
						<ul className="text-gray-600 dark:text-gray-400">
							{Object.keys(config.footer.links).map((k, i) => (
								<li className="mb-4" key={i}>
									<a href={config.footer.links[k]} className="hover:underline">{k}</a>
								</li>
							))}
						</ul>
					</div>
					<div>
						<h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
						<ul className="text-gray-600 dark:text-gray-400">
							{Object.keys(config.footer.legal).map((k, i) => (
								<li className="mb-4" key={i}>
									<a href={config.footer.links[k]} className="hover:underline">{k}</a>
								</li>
							))}
						</ul>
					</div> */}
				</div>
				<hr className="mt-2 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8 opacity-10" />
				<div className="sm:flex sm:items-center sm:justify-between container max-w-8xl mx-auto">
					<span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
						Organized with 💙 by <a href={config.devent.orglink} className="hover:underline">{config.devent.org}</a>.
					</span>
					<div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
						{/* <a href={`https://twitter.com/${config.footer.social.twitter}`} className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
							<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
						</a>
						<a href={`https://github.com/${config.footer.social.github}`} className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
							<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
						</a> */}
					</div>
				</div>
			</div>
		</footer>
	)
}
