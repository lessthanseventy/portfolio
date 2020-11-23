import React from 'react';
import {
  DataTable,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableExpandHeader,
  TableHeader,
  TableBody,
  TableExpandRow,
  TableCell,
  TableExpandedRow,
} from 'carbon-components-react';

const ProjectsTable = ({ rows, headers }) => {
  const getRowDescription = rowId => {
    const row = rows.find(({ id }) => id === rowId);
    return (
      <>
        <p>Owner: {row ? row.nameWithOwner.split('/')[0] : ''}</p>
        <p>
          Desc: {row ? (row.description ? row.description : 'None Listed') : ''}
        </p>
        <p className="description-mobile">
          Stars: {row.stars ? row.stars : '0'}
        </p>
        <p className="description-mobile">
          Issues: {row.issueCount ? row.issueCount : '0'}
        </p>
        <p className="description-mobile">
          Created: {row.createdAt ? row.createdAt : '0'}
        </p>
        <p className="links-mobile">
          Link(s): <span>{row.links ? row.links : ''}</span>
        </p>
      </>
    );
  };
  return (
    <DataTable
      rows={rows}
      headers={headers}
      render={({
        rows,
        headers,
        getHeaderProps,
        getRowProps,
        getTableProps,
      }) => (
        <TableContainer>
          <Table {...getTableProps()}>
            <TableHead>
              <TableRow>
                <TableExpandHeader />
                {headers.map(header => (
                  <TableHeader {...getHeaderProps({ header })}>
                    {header.header}
                  </TableHeader>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map(row => (
                <React.Fragment key={row.id}>
                  <TableExpandRow {...getRowProps({ row })}>
                    {row.cells.map(cell => (
                      <TableCell key={cell.id}>{cell.value}</TableCell>
                    ))}
                  </TableExpandRow>
                  <TableExpandedRow colSpan={headers.length + 1}>
                    <p>{getRowDescription(row.id)}</p>
                  </TableExpandedRow>
                </React.Fragment>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    />
  );
};
export default ProjectsTable;
