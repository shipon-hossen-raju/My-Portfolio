import useAos from "../../Hooks/useAos";

const SectionTitle = ({ title, description }) => {
	useAos();

	return (
		<div
			data-aos="zoom-out-down"
			className="max-w-xl w-10/12 mx-auto text-center mb-8"
		>
			{title && (
				<h1 className="text-3xl font-bold text-center py-6">{title}</h1>
			)}

			{description && <div className="">{description}</div>}
		</div>
	);
};

export default SectionTitle;
