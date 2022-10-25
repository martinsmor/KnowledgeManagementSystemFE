import * as React from "react";
import PropTypes from "prop-types";
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import DeleteIcon from "@mui/icons-material/Delete";
import FilterListIcon from "@mui/icons-material/FilterList";
import { visuallyHidden } from "@mui/utils";
import { Button, Modal } from "@mui/material";
import { useEffect } from "react";

const data = [
  {
    _id: {
      $oid: "6350e9fc27d37f1d10ba2cb8",
    },
    username: "admin",
    nama: "Shirley Brennan",
    email: "shirleybrennan@mail.ugm.ac.id",
    password: "$2a$08$4yj1zreNTNw08lJSg1rBouQWaiUtG8gsI5emDUviPjkkiebuZc3P.",
    role: "admin",
    __v: 0,
  },
  {
    _id: {
      $oid: "6350ea7e27d37f1d10ba2cb9",
    },
    username: "barbaratucker",
    nama: "Barbara Tucker",
    email: "barbaratucker@gmail.com",
    password: "$2a$08$aanrFCZzc8pxGXqZ6QJy6uZVYiyhARDUvVM6FhQbhp8mNiTniwhre",
    role: "admin",
    __v: 0,
  },
  {
    _id: {
      $oid: "6350eac327d37f1d10ba2cba",
    },
    username: "member",
    nama: "Patricia Mann",
    email: "patriciamann@ui.ac.id",
    password: "$2a$08$/Y2Ijnf.7KN2MLK4V6u0GuumuSbrV2UKHLY2lYMlSCYIvZ9jdlij.",
    role: "member",
    __v: 0,
  },
  {
    _id: {
      $oid: "6350eadf27d37f1d10ba2cbb",
    },
    username: "maryperkins",
    nama: "Mary Perkins",
    email: "maryperkins@itb.ac.id",
    password: "$2a$08$/djxO2nbSiKSkaFnjhgcnuGvzUN6R7PHNiRpXP8jFwV4j7B7J0CiS",
    role: "member",
    __v: 0,
  },
  {
    _id: {
      $oid: "6350eafb27d37f1d10ba2cbc",
    },
    username: "carolterrell",
    nama: "Carol Terrell",
    email: "carolterrell@mail.com",
    password: "$2a$08$1fESWNsFojjCqNjdvingkeeA9GNWEUga/mh5UVG2OFDI0OsmyrT1i",
    role: "member",
    __v: 0,
  },
  {
    _id: {
      $oid: "6350eb1827d37f1d10ba2cbd",
    },
    username: "jody",
    nama: "Judith Houston",
    email: "jody@mail.ugm.ac.id",
    password: "$2a$08$52QZMH2TTwR.IdPBAjX39.ZLU9fxIY7yN/o5ulna3Xn6VeMQCyorS",
    role: "member",
    __v: 0,
  },
  {
    _id: {
      $oid: "63514f059d5f863060e74047",
    },
    username: "coba",
    nama: "coba",
    email: "coba@gmail.com",
    password: "$2a$08$bKgW/sdiIvsJrUB/FVwbhOe5skYE0iTn0xZ2wOhp6wd104siEYNG.",
    role: "member",
    __v: 0,
  },
];

// console.log(data);

function createData(name) {
  return {
    name,
  };
}

const rows = [
  createData("Halima Prastuti"),
  createData("Irsad Hidayat"),
  createData("Jane Riyanti"),
  createData("Nabila Nurdiyanti"),
  createData("Kezia Halimah"),
  createData("Suci Mayasari"),
  createData("Vicky Nasyidah"),
  createData("Zelaya Safitri"),
  createData("Intan Oktaviani"),
  createData("Anita Yuliarti"),
  createData("Hendra Megantara"),
  createData("Alambana Tamba"),
  createData("Almira Nasyidah"),
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: "name",
    numeric: false,
    disablePadding: true,
    label: "Nama",
  },
];

function EnhancedTableHead(props) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            sx={{ px: 5 }}
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
        <TableCell>Action</TableCell>
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

export default function EnhancedTable() {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    data.map((item) => {
      rows.push(createData(item.nama));
    });
  }, []);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.name);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };
  const handleClickButton = (event, name) => {
    console.log(name);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
    <div
      id="maincontent"
      className="absolute  px-20 py-16 content flex flex-row gap-y-2 gap-x-6 left-[280px] top-[64px] p-4   "
    >
      <h1 className="text-2xl mb-4 font-semibold">Pengaturan Role Pengguna</h1>
      <Box sx={{ width: "100%" }}>
        <Paper sx={{ width: "100%", mb: 2 }}>
          <TableContainer>
            <Table
              sx={{ minWidth: 500 }}
              aria-labelledby="tableTitle"
              size={dense ? "small" : "medium"}
            >
              <EnhancedTableHead
                numSelected={selected.length}
                order={order}
                orderBy={orderBy}
                onSelectAllClick={handleSelectAllClick}
                onRequestSort={handleRequestSort}
                rowCount={rows.length}
              />
              <TableBody>
                {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                 rows.slice().sort(getComparator(order, orderBy)) */}
                {stableSort(rows, getComparator(order, orderBy))
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => {
                    const isItemSelected = isSelected(row.name);
                    const labelId = `enhanced-table-checkbox-${index}`;

                    return (
                      <TableRow
                        hover
                        onClick={(event) => handleClick(event, row.name)}
                        role="checkbox"
                        aria-checked={isItemSelected}
                        tabIndex={-1}
                        key={row.name}
                        selected={isItemSelected}
                      >
                        <TableCell
                          sx={{ minWidth: 200, px: 5 }}
                          component="th"
                          id={labelId}
                          scope="row"
                          padding="normalarge"
                        >
                          {row.name}
                        </TableCell>
                        <TableCell sx={{ maxWidth: 50 }}>
                          <Button onClick={handleOpen} variant="contained">
                            Ubah Role
                          </Button>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                {emptyRows > 0 && (
                  <TableRow
                    style={{
                      height: (dense ? 33 : 53) * emptyRows,
                    }}
                  >
                    <TableCell colSpan={2} />
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </Box>

      <div>
        <Button onClick={handleOpen}>Open modal</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Box>
        </Modal>
      </div>
    </div>
  );
}
