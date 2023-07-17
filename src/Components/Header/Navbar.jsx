import { useEffect, useRef, useState } from "react";
import LogoCP from "../LogoCP/LogoCP";
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import { FaEnvelope } from "react-icons/fa";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const menuRef = useRef(null);

	const menuToggle = () => {
		setIsOpen(!isOpen);
	};

	useEffect(() => {
		const handleOutsideClick = (event) => {
			if (menuRef.current && !menuRef.current.contains(event.target)) {
				setIsOpen(false);
			}
		};

		window.addEventListener("click", handleOutsideClick);

		return () => {
			window.removeEventListener("click", handleOutsideClick);
		};
	}, []);

	const menuItems = (
		<>
			<a
				href="#home"
				className="mr-5 md:block md:w-full hover:text-gray-900 hover:bg-slate-100 transition py-1 px-2 duration-300"
			>
				<span className="transform hover:translate-x-2 transition block w-full h-full duration-300">
					Home
				</span>
			</a>
			<a
				href="#AboutMe"
				className="mr-5 md:block md:w-full hover:text-gray-900 hover:bg-slate-100 transition py-1 px-2 duration-300"
			>
				<span className="transform hover:translate-x-2 transition block w-full h-full duration-300">
					About Me
				</span>
			</a>
			<a
				href="#projects"
				className="mr-5 md:block md:w-full hover:text-gray-900 hover:bg-slate-100 transition py-1 px-2 duration-300"
			>
				<span className="transform hover:translate-x-2 transition block w-full h-full duration-300">
					Project
				</span>
			</a>
			<a
				href="#Contact"
				className="mr-5 block w-full hover:text-gray-900 hover:bg-slate-100 transition py-1 px-2"
			>
				<span className="transform hover:translate-x-2 transition block w-full h-full duration-300">
					Contact Me
				</span>
			</a>
		</>
	);

	return (
		<div>
			<header className="text-gray-600 body-font shadow-lg md:fixed md:top-0 md:block md:left-0 md:w-full md:z-50 bg-[#eeeff0]">
				<div className="mc flex flex-wrap justify-between p-5 md:flex-row items-center">
					<div className="justify-start">
						<LogoCP />
					</div>

					<div className="relative" ref={menuRef}>
						<button
							onClick={menuToggle}
							className="hover:focus:bg-slate-300 p-1 rounded transition duration-300"
						>
							<HiMiniBars3BottomLeft className="text-2xl" />
						</button>

						{/* {isOpen && ( */}
						<div
							className={`z-10 absolute right-0 top-[calc(100%+20px)] bg-slate-200 p-1 rounded shadow-lg transition duration-300 transform origin-top ${
								isOpen ? "opacity-1 scale-y-100 " : "opacity-0 scale-y-0"
							}`}
						>
							<nav className="flex flex-col items-start text-base justify-start min-w-[150px]">
								{menuItems}
							</nav>
						</div>
						{/* )} */}
					</div>
				</div>
			</header>
		</div>
	);
};

export default Navbar;
