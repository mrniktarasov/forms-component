import React, { FunctionComponentElement, useState } from 'react';
import { IType, getTypes } from '../../modules/types';
import './index.css';

export interface IForm {
    id: string,
    type: string,
    label?: string,
    defaultValue?: string,
}

export interface IFormFunction extends IForm {
    handleChange: (key: string, value: string | null) => void;
}

export default function Form(props: IFormFunction): FunctionComponentElement<IFormFunction> {
    const { id, type, label, defaultValue, handleChange }: IFormFunction = props;
    let inputClass = 'input';
    const inputData: IType = getTypes(type);

    const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.value.length === 0) {
            handleChange(id, null);
        } else {
            handleChange(id, String(event.target.value));
        }
    };
    
    return (
        <label htmlFor={id} className="inp">
            <input
                id={id}
                size={30}
                defaultValue={defaultValue}
                required
                onChange={handleChangeInput}
                className={inputClass}
                placeholder={label}
                {...inputData}
            />
            <span className="focus-bg"></span>
        </label>
    );
}