import { useState } from 'react';

import './Form.css';
import { FORM_CONFIG } from './config';
import { FormBuilder } from './FormBuilder';
import { FormValues } from './types';

export function Form() {
  const [form, setForm] = useState<FormValues>();

  const formValid = form ? Object.values(form).every(Boolean) : false;

  const alertForm = () => {
    alert('Form\n' + JSON.stringify(form));
  };

  return (
    <div className="form">
      <h1>👻</h1>
      <FormBuilder
        config={FORM_CONFIG}
        onChange={(values) => setForm(values)}
      />
      <button
        onClick={alertForm}
        disabled={!formValid}
        className="submit-btn"
        title={formValid ? '' : 'Not all fields are filled'}
      >
        Submit
      </button>
    </div>
  );
}
