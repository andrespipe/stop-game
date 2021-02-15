import React from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/Card';
import CardContent from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Switch from '@material-ui/core/Switch';
import Box from '@material-ui/core/Box';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function NewGameForm() {

  const formik = useFormik({
    initialValues: {
      language: 'ES',
      nickname: '',
      isPrivate: false,
    },
    validationSchema: Yup.object({
      language: Yup.string().required('Required'),
      nickname: Yup.string().required('Required'),
      isPrivate: Yup.boolean().required('Required'),
    }),
    onSubmit: values => {
      console.log(values);
    }
  });

  return (
    <>
      <Typography variant="h2">New Game</Typography>
      <form onSubmit={formik.handleSubmit}>
        <Card>
          <CardContent>
            <Box p={3}>
              <FormControl fullWidth={true} margin="normal" >
                <FormLabel component="legend">Language</FormLabel>
                <RadioGroup 
                  aria-label="gender"
                  name="language"
                  value={formik.values.language}
                  onChange={formik.handleChange}>
                  <FormControlLabel value="EN" control={<Radio color="primary" />} label="English" />
                  <FormControlLabel value="ES" control={<Radio color="primary" />} label="Spanish" />
                </RadioGroup>
              </FormControl>

              <FormControl fullWidth={true} margin="normal" >
                <TextField
                  name="nickname"
                  label="Nickname"
                  onChange={formik.handleChange}
                  value={formik.values.nickname}
                  />
              </FormControl>

              <FormControl fullWidth={true} margin="normal" >
                <FormControlLabel
                  control={
                    <Switch
                      checked={formik.values.isPrivate}
                      onChange={formik.handleChange}
                      name="isPrivate"
                      color="primary"
                    />
                  }
                  label="Is private"
                />
              </FormControl>
            </Box>

          </CardContent>
          <CardActions>
            <Box p={2}>
              <Button type="submit" size="small" variant="contained" color="primary">Create game</Button>
            </Box>
          </CardActions>
        </Card>
      </form>
    </>
  );
}
