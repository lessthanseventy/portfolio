import React, { useState } from 'react';
import ProjectsTable from './ProjectsTable';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import { Link, DataTableSkeleton, Pagination } from 'carbon-components-react';

const REPO_QUERY = gql`
  query REPO_QUERY {
    nodes(
      ids: [
        "MDEyOk9yZ2FuaXphdGlvbjM5MTUwMzE="
        "MDEyOk9yZ2FuaXphdGlvbjEyODUyMjQx"
        "MDEyOk9yZ2FuaXphdGlvbjQ0MzExNTg="
        "MDEyOk9yZ2FuaXphdGlvbjE4NTM1NDY5"
        "MDEyOk9yZ2FuaXphdGlvbjk4NjU0MjU="
        "MDEyOk9yZ2FuaXphdGlvbjQzMDQ5Mzk="
        "MDEyOk9yZ2FuaXphdGlvbjE0MzQ4NDE1"
        "MDEyOk9yZ2FuaXphdGlvbjEwMjM0MzUz"
        "MDEyOk9yZ2FuaXphdGlvbjY3Mzk4NTc="
        "MDEyOk9yZ2FuaXphdGlvbjEzMTcyMDgy"
        "MDEyOk9yZ2FuaXphdGlvbjIwMjcyMzk3"
        "MDEyOk9yZ2FuaXphdGlvbjUwNzU4NjI="
        "MDEyOk9yZ2FuaXphdGlvbjE0NzA4Nzg="
        "MDEyOk9yZ2FuaXphdGlvbjUzNDg2NTQ="
        "MDEyOk9yZ2FuaXphdGlvbjgxMzU1MzE="
        "MDEyOk9yZ2FuaXphdGlvbjI5NjM1MTAy"
        "MDEyOk9yZ2FuaXphdGlvbjE0Mjk0NzU0"
        "MDEyOk9yZ2FuaXphdGlvbjIyMzYwNjE="
        "MDEyOk9yZ2FuaXphdGlvbjQzNzk3MjQ="
        "MDEyOk9yZ2FuaXphdGlvbjQxMTY2MzQ="
        "MDEyOk9yZ2FuaXphdGlvbjQ2NDU3MDkz"
        "MDEyOk9yZ2FuaXphdGlvbjU0MjE1NjM="
        "MDEyOk9yZ2FuaXphdGlvbjg0ODEwMg=="
        "MDEyOk9yZ2FuaXphdGlvbjEzMjIxNTE1"
        "MDEyOk9yZ2FuaXphdGlvbjYwODkxMzA="
        "MDEyOk9yZ2FuaXphdGlvbjc5NjYxMTk="
        "MDEyOk9yZ2FuaXphdGlvbjE0MDIzNjU0"
        "MDEyOk9yZ2FuaXphdGlvbjEyODk3MzA3"
        "MDEyOk9yZ2FuaXphdGlvbjQwNTE3OTk="
        "MDEyOk9yZ2FuaXphdGlvbjY0MzA3MA=="
        "MDEyOk9yZ2FuaXphdGlvbjYyMzM5OTQ="
        "MDEyOk9yZ2FuaXphdGlvbjIzNjYzNTAz"
        "MDEyOk9yZ2FuaXphdGlvbjEzNjQ4MzMz"
        "MDEyOk9yZ2FuaXphdGlvbjE0Mjk2NDEz"
        "MDEyOk9yZ2FuaXphdGlvbjEwNzE1NjM="
      ]
    ) {
      id
      ... on Organization {
        name
        repositories(
          first: 15
          orderBy: { field: UPDATED_AT, direction: DESC }
        ) {
          totalCount
          nodes {
            url
            homepageUrl
            issues(filterBy: { states: OPEN }) {
              totalCount
            }
            stargazers {
              totalCount
            }
            releases(first: 1) {
              totalCount
              nodes {
                name
              }
            }
            name
            updatedAt
            createdAt
            description
            id
          }
        }
      }
    }
  }
`;

const headers = [
  {
    key: 'name',
    header: 'Name',
  },
  {
    key: 'createdAt',
    header: 'Created',
  },
  {
    key: 'updatedAt',
    header: 'Updated',
  },
  {
    key: 'issueCount',
    header: 'Open Issues',
  },
  {
    key: 'stars',
    header: 'Stars',
  },
  {
    key: 'links',
    header: 'Links',
  },
];
const LinkList = ({ url, homepageUrl }) => (
  <ul style={{ display: 'flex' }}>
    <li>
      <Link href={url}>GitHub</Link>
    </li>
    {homepageUrl && (
      <li>
        <span>&nbsp;|&nbsp;</span>
        <Link href={homepageUrl}>Homepage</Link>
      </li>
    )}
  </ul>
);

const getRowItems = rows =>
  rows.map(row => ({
    ...row,
    key: row.id,
    stars: row.stargazers.totalCount,
    issueCount: row.issues.totalCount,
    createdAt: new Date(row.createdAt).toLocaleDateString('af-ZA'),
    updatedAt: new Date(row.updatedAt).toLocaleDateString('af-ZA'),
    links: <LinkList url={row.url} homepageUrl={row.homepageUrl} />,
  }));

const ProjectsPage = () => {
  const [totalItems, setTotalItems] = useState(0);
  const [firstRowIndex, setFirstRowIndex] = useState(0);
  const [currentPageSize, setCurrentPageSize] = useState(10);
  return (
    <Query query={REPO_QUERY}>
      {({ loading, error, data }) => {
        // Wait for the request to complete
        if (loading)
          return (
            <DataTableSkeleton
              columnCount={headers.length + 1}
              rowCount={10}
              headers={headers}
            />
          );
        // Something went wrong with the data fetching
        if (error) return `Error! ${error.message}`;
        // If we're here, we've got our data!
        let repositories = [];
        for (let i = 0; i < data.nodes.length; i++) {
          repositories.push(...data.nodes[i].repositories.nodes);
        }
        let sortedRepos = repositories;
        sortedRepos.sort((a, b) => (a.updatedAt < b.updatedAt ? 1 : -1));
        setTotalItems(sortedRepos.length);
        const rows = getRowItems(sortedRepos);
        return (
          <>
            <ProjectsTable
              headers={headers}
              rows={rows.slice(firstRowIndex, firstRowIndex + currentPageSize)}
            />
            <Pagination
              totalItems={totalItems}
              backwardText="Previous page"
              forwardText="Next page"
              pageSize={currentPageSize}
              pageSizes={[5, 10, 15, 25]}
              itemsPerPageText="Items per page"
              onChange={({ page, pageSize }) => {
                if (pageSize !== currentPageSize) {
                  setCurrentPageSize(pageSize);
                }
                setFirstRowIndex(pageSize * (page - 1));
              }}
            />
          </>
        );
      }}
    </Query>
  );
};
export default ProjectsPage;
