import { FormEvent, useState } from "react";

export interface IProps {
    inputStyle?: string;
    inputType?: string;
    placeholder?: string;
    buttonText?: string;
}

export default function Form({
    inputStyle = 'normal',
    placeholder = '',
    buttonText = 'Submit',
    inputType = 'text',
}: IProps) {
    const [email, setEmail] = useState('');

    const onRegister = (e: FormEvent) => {
        e.preventDefault();
    };

    return (
        <form onSubmit={onRegister}>
            <div className={`mx-auto px-5 text-center mt-4 md:w-1/2${inputStyle === 'flex' ? ' flex justify-center items-center' : ''}`}>
                <input type={inputType}
                    className="shadow-sm focus:ring-indigo-500 focus:ring-1 focus:border-indigo-500 focus:outline-none block w-full py-1 px-3 border border-gray-300 rounded-md"
                    placeholder={placeholder}
                    value={email}
                    onChange={(e) => setEmail(e.currentTarget.value)}
                />
                <button type="submit" className={`bg-indigo-500 hover:bg-indigo-700 py-1 px-2 rounded shadow text-white hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${inputStyle === 'flex' ? 'ml-2' : 'mt-2'}`}>{buttonText}</button>
            </div>
        </form>
    );
}
