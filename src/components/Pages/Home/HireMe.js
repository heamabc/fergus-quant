import React, { Component } from 'react';
import '../css/AllPages.scss';
import PassageTitle, {MinorTitle} from '../../CommonComponents/PassageTitle/PassageTitle'
import Entry from '../../CommonComponents/Entry/Entry';
import Title from '../../CommonComponents/Title/Title'
import Page from '../../CommonComponents/PageTemplate/PageTemplate'
import TextField from '@material-ui/core/TextField';

class HomePage extends Component {
  render() {
    return (
      <Page>
        <PassageTitle label="Name"/>
        <form noValidate autoComplete="off">
        <TextField id="outlined-full-width" fullWidth variant="outlined"/>
        </form>
        <PassageTitle label="Email"/>
        <form noValidate autoComplete="off">
        <TextField id="outlined-full-width" fullWidth variant="outlined"/>
        </form>
        <PassageTitle label="Company Name"/>
        <form noValidate autoComplete="off">
        <TextField id="outlined-full-width" fullWidth variant="outlined"/>
        </form>
        <PassageTitle label="Message"/>
        <form noValidate autoComplete="off">
        <TextField id="outlined-full-width" fullWidth multiline rows={4} variant="outlined"/>
        </form>
      </Page>
    )}}
export default HomePage;