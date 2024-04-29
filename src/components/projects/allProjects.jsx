import React from "react";

import Project from "./project";
import { Grid } from '@mui/material'

import INFO from "../../data/user";

import "./styles/allProjects.css";

const AllProjects = () => {
	return (
		<Grid container>
			{INFO.projects.map((project, index) => (
				<Grid item xs={12} s={6} md={4} className="all-projects-project" key={index}>
					<Project
						logo={project.logo}
						title={project.title}
						description={project.description}
						linkText={project.linkText}
						link={project.link}
					/>
				</Grid>
			))}
		</Grid>
	);
};

export default AllProjects;
