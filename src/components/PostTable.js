import  React,{useEffect} from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { fetchPosts } from '../actions/postActions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));
 function PostTable(props) {
     const {posts}=props
    useEffect(() => {
        props.fetchPosts();
    }, [])
  return (
      
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 700 }} aria-label="customized table">
      <TableHead>
        <TableRow>
          <StyledTableCell>ID</StyledTableCell>
          <StyledTableCell align="right">User ID</StyledTableCell>
          <StyledTableCell align="right">Title</StyledTableCell>
          <StyledTableCell align="right">Completed</StyledTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {posts.map((post) => (
          <StyledTableRow key={post.id}>
              <Link to={`/postdetail/${post.id}`}>
            <StyledTableCell component="th" scope="row">{post.id}</StyledTableCell>
            </Link>
            <StyledTableCell align="right">{post.userId}</StyledTableCell>
            <StyledTableCell align="right">{post.title}</StyledTableCell>
            <StyledTableCell align="right">{post.completed ?"true":"false"}</StyledTableCell>
          </StyledTableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  );
}
const mapStateToProps = state => ({
    posts: state.posts.items,
  });
export default connect(mapStateToProps, { fetchPosts })(PostTable);