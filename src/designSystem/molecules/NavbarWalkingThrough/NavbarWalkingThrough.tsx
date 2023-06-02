import React, { useState } from 'react';
interface INavbarWalkingThrough {
	categories: string | null;
	subcategories: string | null;
	level: string | null;
}

export const NavbarWalkingThrough = () => {
	const [navbar, setNavbar] = useState<INavbarWalkingThrough>({
		categories: null,
		subcategories: null,
		level: null,
	});

	const handleCategorySelect = (category: string) => {
		setNavbar((prevState) => ({
			...prevState,
			categories: category,
			subcategories: null, // Reset subcategory when a new category is selected
		}));
	};

	const handleSubcategorySelect = (subcategory: string) => {
		setNavbar((prevState) => ({
			...prevState,
			subcategories: subcategory,
		}));
	};
};
