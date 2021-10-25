import React from 'react';
import Button from '../components/Button';
import RadioButton from '../components/Radio';
import TextField from '../components/TextFields';
import Seperator from '../components/Seperator';
import { useHistory } from 'react-router';

const brands = ['Nike', 'Clavin Klein', 'Reebok', 'Madewell', 'Adidas', 'Levi\'s']

const Survey = (props) => {
  const history = useHistory();

  return (
    <div className="full width height content-center-h">
      <h1>Tell Us About Yourself</h1>
      <div>
        <TextField label="Who shops for your household?" icon="caret-down" />
        <Seperator vertical space={10} />
        <p>Do you buy products in-store or online?</p>
        <RadioButton name="q21" label="Online" />
        <RadioButton name="q21" label="Store" />
        <Seperator vertical space={10} />

        <p>What brands do you purchase?</p>
        {brands.map((brand) => <RadioButton name="q22" label={brand} type="checkbox" />)}
        <Seperator vertical />
        <Button label="Submit" onClick={() => { history.push('/dashboard/page/content/offers') }} />
      </div>
    </div>
  )
}

export default Survey;