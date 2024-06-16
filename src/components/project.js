// Projects.js
import logo from '../image/Logo.svg'
export default function Projects() {
	return (
		<section id="projects"
				className="my-20 w-full flex flex-col gap-5 align-center max-w-5xl mx-auto">
			<h2 className="text-5xl text-black font-bold text-center">
				My Projects
			</h2>
			<div className="p-10 bg-slate-200 flex flex-col justify-center items-center
							gap-5 lg:flex-row max-w-5xl mx-auto shadow transition 
							hover:shadow-xl hover:scale-[102%] w-full">
				<div className="w-80 rounded">
					<a href="/"
						className="w-full h-full">
						<img src={logo}
							alt="Project 1"
							className="w-full h-full 
										bg-cover rounded"/>
					</a>
				</div>
				<div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
					<h2 className="font-bold text-3xl text-center">
						<a href="/"className="hover:underline">
							Portofolio
						</a>
					</h2>
					<p>
						This is a project built on react while i lerned about react.
					</p>
				</div>
			</div>
			
		</section>
	);
}
