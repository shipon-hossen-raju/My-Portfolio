import React from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import ShiponImg from "../../../assets/My-Image/Shipon-bgr.png";
import { LazyLoadImage } from "react-lazy-load-image-component";

const About = () => {
	return (
		<section id="AboutMe" className="section-bg">
			<div className="mc">
				<SectionTitle title="About of Shipon" />

				<div className="flex flex-wrap items-start p-6">
					<div className="md:w-1/2 md:border-r md:border-b-0 mb-10 md:mb-0 pb-10 border-b-2 border-gray-400">
						<figure className="flex justify-center items-center w-full transition-transform duration-300 transform hover:scale-105 cursor-pointer">
							<LazyLoadImage
								effect="blur"
								className="object-cover object-center w-[300px] h-auto transform scale-x-[-1]"
								src={ShiponImg}
								alt=""
							/>
						</figure>
					</div>
					<div className="flex flex-col md:w-1/2 md:pl-12">
						<h2 className="title-font text-2xl font-semibold text-gray-800 tracking-wider mb-3">
							Description
						</h2>
						<p>
							I am a MERN stack developer skilled in building web applications
							using MongoDB, Express.js, React, and Node.js. With expertise in
							both front-end and back-end development, I specialize in creating
							dynamic and interactive web solutions.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
