import React, { useEffect, useState } from "react";
import { IoReload } from "react-icons/io5";

const SolutionFilters = ({
	filters,
	setFilters,
	handleFilterChange,
	handleResetFilters,
	activeFilters,
	solutionsMetadata,
	solutionTypes,
}) => {
	const [solution_types, setSolution_types] = useState([]);

	useEffect(() => {
		let filtersData = [];

		solutionsMetadata.map((solution) => {
			let tags = solution.tags;
			filtersData.push(...tags);
		});

		setFilters([...new Set(filtersData)]);
	}, [solutionsMetadata]);

	useEffect(() => {
		let allTypes = [];

		for (let solution of solutionsMetadata) {
			if (!allTypes.some((item) => Object.keys(item)[0] === solution.type)) {
				allTypes.push({
					[solution.type]: solution.tags,
				});
			}
		}

		setSolution_types(allTypes);
	}, [solutionTypes]);

	return (
		<>
			<div className="flex items-center justify-between pb-2 border-b">
				<p className="text-base font-medium text-primary-600">Filters</p>
				<button
					className="flex items-center space-x-1 px-2 py-1 text-xs text-secondary-700 bg-secondary-100 border rounded shadow-sm"
					onClick={handleResetFilters}
				>
					<IoReload size={14} className="text-secondary-700" />
					<span>Reset filters</span>
				</button>
			</div>
			<div className="flex flex-row md:flex-col space-x-4 md:space-x-0 md:space-y-4">
				{/* {solutionsMetadata &&
					solutionsMetadata.length > 0 &&
					solutionsMetadata.map((solution, index) => (
						<div key={index} className="flex-1 space-y-1">
							<p className="text-base capitalize text-secondary-700 font-medium px-2 py-1 bg-secondary-100 border border-secondary-200 rounded">
								{solution.type}
							</p>
							<div className="px-2 py-1 space-y-2">
								{solution.tags &&
									solution.tags.length > 0 &&
									solution.tags.map((tag, ind) => (
										<div key={ind}>
											<label className="flex items-center space-x-1">
												<input
													type="checkbox"
													className="accent-primary-600"
													checked={activeFilters.includes(tag)}
													onChange={() => handleFilterChange(tag)}
												/>
												<span className="text-sm text-secondary-600">
													{tag}
												</span>
											</label>
										</div>
									))}
							</div>
						</div>
					))} */}
				{solution_types &&
					solution_types.length > 0 &&
					solution_types.map((solution, index) => (
						<div key={index} className="flex-1 space-y-1">
							{Object.keys(solution).map((key, index) => (
								<p
									key={index}
									className="text-base capitalize text-secondary-700 font-medium px-2 py-1 bg-secondary-100 border-b border-b-secondary-200 rounded"
								>
									{key}
								</p>
							))}
							<div className="px-2 py-1 space-y-2">
								{Object.values(solution).map((tags, ind) => (
									<div key={ind}>
										{tags.map((tag, index) => (
											<label
												key={index}
												className="flex items-center space-x-1"
											>
												<input
													type="checkbox"
													className="accent-primary-600"
													checked={activeFilters.includes(tag)}
													onChange={() => handleFilterChange(tag)}
												/>
												<span className="text-sm text-secondary-600">
													{tag}
												</span>
											</label>
										))}
									</div>
								))}
							</div>
						</div>
					))}
			</div>
		</>
	);
};

export default SolutionFilters;
