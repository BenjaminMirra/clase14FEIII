import * as React from "react";
import { Typography, Button, TextField, Box, Paper, Grid, Select, MenuItem, InputLabel, FormControl, FormLabel, FormControlLabel, RadioGroup, Radio, Checkbox, FormGroup, Modal } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import { useEffect } from "react";
import { clearPreviewData } from "next/dist/server/api-utils";

const Home = () => {
  const [open, setOpen] = useState(false);
  const [agregados, setAgregados] = useState([]);
  const [form, setFormData] = useState({})

  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }


  const handleAgregado = () => {
    agregados.push(form)
    console.log(agregados);
  }


  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'firstName',
      editable: true,
      headerName: 'First name',
      width: 150,
    },
    {
      field: 'email',
      headerName: 'Email',
      width: 160,
      valueGetter: (params) =>
        `${params.row.firstName + "@gmail.com"}`
    },
  ];

  const rows = agregados.map((row, index) => {
    return (
      {
        id: index + 1,
        firstName: row.firstName
      })
  })

  return (
    <>
      <br />
      <br />
      <br />
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{  display: 'flex', justifyContent: 'center', alignItems: 'center',height: 400, width: '50%' }}>
          <DataGrid
            sx={{ bgcolor: "blue", color: "yellow" }}
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 5,
                },
              },
            }}
            pageSizeOptions={[5]}
            checkboxSelection
            disableRowSelectionOnClick
          />
        </Box>
      </Modal>

      <Box sx={{ width: 500, border: '1px dashed grey', bgcolor: "blue" }}>
        <Paper
          elevation={1}
          sx={{ p: "32px", display: "flex", flexDirection: "column", gap: 3, bgcolor: "lightblue" }}
        >
          <Typography sx={{ fontWeight: 500, fontSize: 24 }}>
            Inscreva-se em nossa newsletter
          </Typography>

          <Grid item xs={12}>
            <TextField
              id="outlined-basic"
              label="Nome"
              variant="outlined"
              sx={{ width: 1 }}
              onChange={(e) => {
                setFormData({ firstName: e.currentTarget.value })
              }}
            />
          </Grid>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              Modalidad
            </InputLabel>
            <Select labelId="demo-simple-select-label"
              id="demo-simple-select" label="Modalidad">
              <MenuItem value={"FE"}>Front-end</MenuItem>
              <MenuItem value={"BE"}>Back-end</MenuItem>
              <MenuItem value={"FS"}>Full-stack</MenuItem>
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">¿Qué so?</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
            >
              <FormControlLabel value="female" control={<Radio />} label="Femenino" />
              <FormControlLabel value="male" control={<Radio />} label="Masculino" />
              <FormControlLabel value="other" control={<Radio />} label="Prefiero no responder" />
            </RadioGroup>
          </FormControl>

          <FormGroup>
            <FormControlLabel control={<Checkbox defaultChecked />} label="Carta de noticia" />
          </FormGroup>

          <Button variant="contained" sx={{ width: 1 }} onClick={() => { handleAgregado() }}>
            Inscreva-se
          </Button>
        </Paper>
      </Box>

    </>
  );
};

export default Home;
