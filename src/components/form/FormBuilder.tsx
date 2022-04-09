import { useEffect, useState } from 'react';

import './FormBuilder.css';
import { FormBuilderConfig, FormValues } from './types';
import { mapInitialValues, mapInputType } from './utils';

type Props = {
  config: FormBuilderConfig;
  onChange: (values: FormValues) => void;
};

export function FormBuilder(props: Props) {
  const { config, onChange } = props;

  const configEntries = Object.entries(config);

  const [values, setValues] = useState<FormValues>(
    mapInitialValues(configEntries)
  );

  useEffect(() => {
    onChange(values);
  }, [values, onChange]);

  const controls = configEntries.map(([id, control]) => (
    <Control
      key={id}
      id={id}
      type={mapInputType(control.type)}
      label={control.label}
      value={values[id] ?? ''}
      onChange={(value) => {
        setValues((prevValues) => ({
          ...prevValues,
          [id]: value,
        }));
      }}
    />
  ));

  return <form className="controls-form">{controls}</form>;
}

function Control(props: {
  id: string;
  type: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
}) {
  const { id, type, label, value, onChange } = props;

  return (
    <div className="control-block">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="control-input"
      />
    </div>
  );
}
