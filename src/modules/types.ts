export interface IType {
    type: string;
    pattern: string;
    title: string;
}

export function getTypes(type: string): IType {
    switch(type) {
        case 'inputText':
            return {
                type: 'text',
                pattern: '^([a-zA-Z]',
                title: 'Must contain only characters',
            };
        case 'inputEmail':
            return {
                type: 'email',
                pattern: '([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,})',
                title: 'Must contain @ symbol',
            };
        case 'inputPassword':
            return {
                type: 'password',
                pattern: '(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}',
                title: 'Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters',
            };
        default:
            return {
                type: 'text',
                pattern: '/^([a-z0-9]/',
                title: 'Must contain only characters',
            };
    };
}
