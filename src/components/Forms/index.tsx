import React, { FunctionComponentElement } from 'react';
import Form, { IForm } from '../Form';
import styles from './index.module.css';

export interface IForms {
    forms: Array<IForm>;
    handleChange: (key: string, value: string | null) => void;
}

export default function Forms(props: IForms): FunctionComponentElement<IForms> | null {
    const { forms, handleChange } = props;
    
    if (!forms.length) {
        return null;
    }

    return (
        <div className={styles.forms}>
            {forms.map((form) => (
                <Form {...form} handleChange={handleChange} />
            ))}
        </div>
    );
}