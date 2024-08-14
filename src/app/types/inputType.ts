export interface InputProps {
    type: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>)=>void;
    placeholder: string;
    className?: string;
    id?: string;
}