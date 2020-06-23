import React, { useEffect } from "react";
import { useParams, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import {
  Projectsh2,
  LineBreak,
  Section,
  ProjectsTable,
  StyledTableHead,
  StyledTableRow,
  StyledTableData,
  ProjectLink,
  ProjectLinkName,
  FlexEnd,
  FlexEnd2,
} from "../../Styles/Client";

import { dispatchers, actions } from "../../../shared/actions/dashboardActions";

const { fetchProjects } = dispatchers;
const { SET_CURRENT_CLIENT, SET_CURRENT_PROJECTS } = actions;

const fetchProjectsSideEffect = async (dispatch, id,) => {
  await dispatch(fetchProjects(id,));
};

const setCurrentClientAndProjectsSideEffect = async (
  dispatch,
  client,
  projects
) => {
  await dispatch({ type: SET_CURRENT_CLIENT, payload: client });
  await dispatch({ type: SET_CURRENT_PROJECTS, payload: projects });
};

const Projects = (props) => {
  const params = useParams();
  const dispatch = useDispatch();

  const clients = useSelector((state) => state.dashboard.clients);
  const projects = useSelector((state) => state.dashboard.currentProjects);
  const client = clients.find((client) => client.id === Number(params.id));

  useEffect(() => {
    fetchProjectsSideEffect(dispatch, params.id);
    setCurrentClientAndProjectsSideEffect(dispatch, client, projects);
  }, []);

  var projectArray;
  if (props.search.length > 0) {
    projectArray = props.project;
  } else {
    projectArray = projects;
  }
  return client ? (
    <Section>
      <Projectsh2 data-cy="projects-title-bar">Projects</Projectsh2>
      <LineBreak />
      <ProjectsTable>
        <thead>
          <StyledTableRow>
            <StyledTableHead scope="col" data-cy="name-header">
              Name
            </StyledTableHead>
            <StyledTableHead scope="col" data-cy="description-header">
              Description
            </StyledTableHead>
            <StyledTableHead scope="col" data-cy="technician-header">
              Technician/s
            </StyledTableHead>
            <StyledTableHead scope="col" data-cy="jobsheet-header">
              Jobsheets
            </StyledTableHead>
            <StyledTableHead scope="col" data-cy="status-header">
              Status
            </StyledTableHead>
          </StyledTableRow>
        </thead>
        <tbody>
          {projectArray.map((project) => (
            <StyledTableRow data-cy={`projects-${project.id}`} key={project.id}>
              {console.log(
                "project data in projects.map in Projects.js: ",
                project
              )}
              <StyledTableData data-label="Project">
                <ProjectLinkName to={`/project/${project.id}`}>
                  {project.name}
                </ProjectLinkName>
              </StyledTableData>
              <StyledTableData data-label="Project">
                <ProjectLink to={`/project/${project.id}`}>
                  {project.description}
                </ProjectLink>
              </StyledTableData>
              <StyledTableData data-label="Project">
                <ProjectLink data-cy="technician-email" to={`/project/${project.id}`}>
                  {project.technicians}
                </ProjectLink>
              </StyledTableData>
              <StyledTableData data-label="Project">
                <ProjectLink to={`/project/${project.id}`}>
                  {project.tally}
                </ProjectLink>
              </StyledTableData>
              <StyledTableData data-label="Project">
                <ProjectLink to={`/project/${project.id}`}>
                  <StyledTableData>
                    {project.completed !== true ? (
                      <FlexEnd>Incomplete</FlexEnd>
                    ) : (
                      <FlexEnd2>Complete</FlexEnd2>
                    )}
                  </StyledTableData>
                </ProjectLink>
              </StyledTableData>
            </StyledTableRow>
          ))}
        </tbody>
      </ProjectsTable>
    </Section>
  ) : (
    <Redirect to="/dashboard" />
  );
};

export default Projects;
