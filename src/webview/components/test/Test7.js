/* eslint-disable no-use-before-define */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';

const filter = createFilterOptions();

export default function Test7() {
  const [inputs, setInputs] = React.useState({
    c_area_name:""
  });

  return (
    <Autocomplete
      value={inputs}
      onChange={(event, newValue) => {
        if (newValue === '') {
         
          setInputs({
            c_area_name: newValue,
          });
        } else if (newValue && newValue.inputValue) {
         
          setInputs({
            c_area_name: newValue.inputValue,
          });
        } else {
          setInputs(
           newValue
          );
        }
      }}
      filterOptions={(options, params) => {
        const filtered = filter(options, params);

     
        if (params.inputValue !== '') {
          filtered.push({
            inputValue: params.inputValue,
            c_area_name: `Add "${params.inputValue}"`,
          });
        }

        return filtered;
      }}
      selectOnFocus
      clearOnBlur
      handleHomeEndKeys
      id="free-solo-with-text-demo"
      options={top100Films}
      getOptionLabel={(option) => {
        if (typeof option === 'string') {
          return option;
        }
        // Add "xxx" option created dynamically
        if (option.inputValue) {
          return option.inputValue;
        }
        // Regular option
        return option.c_area_name;
      }}
      renderOption={(option) => option.c_area_name}
      style={{ width: 300 }}
      freeSolo
      renderInput={(params) => (
        <TextField {...params} label="Search or Add Your Area" variant="outlined" />
      )}
    />
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { c_area_name: 'The Shawshank Redemption', year: 1994 },
  { c_area_name: 'The Godfather', year: 1972 },
  { c_area_name: 'The Godfather: Part II', year: 1974 },
  { c_area_name: 'The Dark Knight', year: 2008 },
  { c_area_name: '12 Angry Men', year: 1957 },
  { c_area_name: "Schindler's List", year: 1993 },
  { c_area_name: 'Pulp Fiction', year: 1994 },
  
];
