import { ReactNode } from 'react';

interface ButtonProps {
    children: ReactNode;
}

export default function Button({ children }: ButtonProps) {
return (
    <button className='border border-transparent transition-colors hover:border-black rounded-[50%] relative -top-5 -bottom-4 py-10 px-14 -mb-10 -ml-16'>
        {children}
    </button>
)
}