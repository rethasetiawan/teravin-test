import React, {useState,useEffect} from 'react';
import {
    Background,
    FormBackground,
    Button,
  } from './MainStyle';
  import Table from '@mui/material/Table';
  import TableBody from '@mui/material/TableBody';
  import TableCell from '@mui/material/TableCell';
  import TableContainer from '@mui/material/TableContainer';
  import TableHead from '@mui/material/TableHead';
  import TableRow from '@mui/material/TableRow';
  import { useNavigate } from 'react-router-dom';


  const MainPage = ({props}) =>{
    let navigate = useNavigate();

    const localData = localStorage.getItem("session");

    useEffect(() => {
       console.log('tes',localData)
    });
    return(
      <Background> 
        <FormBackground>
          Teravin test React.js

          <Button onClick={()=> navigate("/form")} >+ Add data</Button>
          <TableContainer >
            <Table sx={{ minWidth: 700 }}>
              <TableHead>
                <TableRow>
                  <TableCell style={{background:'lightgray'}} align="center">ID No.</TableCell>
                  <TableCell style={{background:'lightgray'}} align="center">Nama</TableCell>
                  <TableCell style={{background:'lightgray'}} align="center">Alamat</TableCell>
                  <TableCell style={{background:'lightgray'}} align="center"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody >
                 <TableRow >
                    <TableCell component="th" scope="row">
                      No Id
                    </TableCell>
                    <TableCell>nama</TableCell>
                    <TableCell>alamat</TableCell>
                  </TableRow>
                  {/* belum dimapping */}
              </TableBody>
            </Table>
          </TableContainer>
        </FormBackground>
      </Background>
    )
  }
  export default (MainPage);

