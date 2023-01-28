import {
    TableContainer,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Paper
  } from '@mui/material'
  import React from 'react'
  import AgendaHeader from './POHeader/AgendaHeader'
  import Box from '@mui/material/Box';
import CardLayout from '../../Cards/CardLayout'
  
  export default  function AgendaTable ()  {
    return (
      <Box sx={{width:'600px'}}>
       
      <TableContainer  sx={{ background:'#EEF2F5',height:'700px',maxHeight: '1000px', Width:'500px',width:'100%', flexGrow: -5}} component={Paper}  >
        <Table stickyHeader aria-label='simple table'>
          <TableHead>
            <TableRow align='center'>
              <TableCell align='center' sx={{ backgroundColor: '#051C2C' , borderradius: '0px' ,color: '#FFFFFF'}}><AgendaHeader countOfItems={tableData.length}/></TableCell>
            </TableRow>
          </TableHead>
          <TableBody >
              <TableRow>
              <CardLayout colour='#FEA946' chckBox={true}/>
              </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      </Box>
    )
  }
  
  const tableData = [
    {
      id: 1,
      first_name: 'Beret',
      last_name: 'Lennard',
      email: 'blennard0@pcworld.com',
      gender: 'Female',
      ip_address: '213.196.192.52'
    },
    {
      id: 2,
      first_name: 'Tera',
      last_name: 'Choke',
      email: 'tchoke1@theatlantic.com',
      gender: 'Male',
      ip_address: '101.152.241.70'
    },
    {
      id: 3,
      first_name: 'Lyn',
      last_name: 'Bowart',
      email: 'lbowart2@odnoklassniki.ru',
      gender: 'Male',
      ip_address: '188.127.126.94'
    },
    {
      id: 4,
      first_name: 'Bert',
      last_name: 'Huckett',
      email: 'bhuckett3@tinypic.com',
      gender: 'Female',
      ip_address: '247.156.243.148'
    },
    {
      id: 5,
      first_name: 'Drew',
      last_name: 'Jenicke',
      email: 'djenicke4@businessinsider.com',
      gender: 'Male',
      ip_address: '0.185.35.172'
    },
    {
      id: 6,
      first_name: 'Deloria',
      last_name: 'Pepperill',
      email: 'dpepperill5@meetup.com',
      gender: 'Non-binary',
      ip_address: '101.44.39.120'
    },
    {
      id: 7,
      first_name: 'Spense',
      last_name: 'Ivashnyov',
      email: 'sivashnyov6@hexun.com',
      gender: 'Female',
      ip_address: '253.192.252.49'
    },
    {
      id: 8,
      first_name: 'Elden',
      last_name: 'Chaucer',
      email: 'echaucer7@mozilla.com',
      gender: 'Agender',
      ip_address: '60.70.120.186'
    },
    {
      id: 9,
      first_name: 'Sholom',
      last_name: 'Deetch',
      email: 'sdeetch8@so-net.ne.jp',
      gender: 'Female',
      ip_address: '218.36.95.147'
    },
    {
      id: 10,
      first_name: 'Genovera',
      last_name: 'Colby',
      email: 'gcolby9@dagondesign.com',
      gender: 'Non-binary',
      ip_address: '199.140.221.248'
    },
    {
      id: 1,
      first_name: 'Beret',
      last_name: 'Lennard',
      email: 'blennard0@pcworld.com',
      gender: 'Female',
      ip_address: '213.196.192.52'
    },
    {
      id: 2,
      first_name: 'Tera',
      last_name: 'Choke',
      email: 'tchoke1@theatlantic.com',
      gender: 'Male',
      ip_address: '101.152.241.70'
    },
    {
      id: 3,
      first_name: 'Lyn',
      last_name: 'Bowart',
      email: 'lbowart2@odnoklassniki.ru',
      gender: 'Male',
      ip_address: '188.127.126.94'
    },
    {
      id: 4,
      first_name: 'Bert',
      last_name: 'Huckett',
      email: 'bhuckett3@tinypic.com',
      gender: 'Female',
      ip_address: '247.156.243.148'
    },
    {
      id: 5,
      first_name: 'Drew',
      last_name: 'Jenicke',
      email: 'djenicke4@businessinsider.com',
      gender: 'Male',
      ip_address: '0.185.35.172'
    },
    {
      id: 6,
      first_name: 'Deloria',
      last_name: 'Pepperill',
      email: 'dpepperill5@meetup.com',
      gender: 'Non-binary',
      ip_address: '101.44.39.120'
    },
    {
      id: 7,
      first_name: 'Spense',
      last_name: 'Ivashnyov',
      email: 'sivashnyov6@hexun.com',
      gender: 'Female',
      ip_address: '253.192.252.49'
    },
    {
      id: 8,
      first_name: 'Elden',
      last_name: 'Chaucer',
      email: 'echaucer7@mozilla.com',
      gender: 'Agender',
      ip_address: '60.70.120.186'
    },
    {
      id: 9,
      first_name: 'Sholom',
      last_name: 'Deetch',
      email: 'sdeetch8@so-net.ne.jp',
      gender: 'Female',
      ip_address: '218.36.95.147'
    },
    {
      id: 10,
      first_name: 'Genovera',
      last_name: 'Colby',
      email: 'gcolby9@dagondesign.com',
      gender: 'Non-binary',
      ip_address: '199.140.221.248'
    }
  ]