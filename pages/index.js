import * as React from "react";
import { Typography, Button, TextField, Box, Paper, Grid, Select, MenuItem, InputLabel, FormControl, FormLabel, FormControlLabel, RadioGroup, Radio, Checkbox, FormGroup } from "@mui/material";

const Home = () => {
  return (
    <Box sx={{ width: 500,  border: '1px dashed grey', bgcolor: "blue" }}>
      <Paper
        elevation={1}
        sx={{ p: "32px", display: "flex", flexDirection: "column", gap: 3, bgcolor:"lightblue" }}
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
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            sx={{ width: 1 }}
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

        <Button variant="contained" sx={{ width: 1 }}>
          Inscreva-se
        </Button>
      </Paper>
    </Box>
  );
};

export default Home;
