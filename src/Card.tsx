interface CardProps {
    text: string
}
export const Card = ({ text }: CardProps) => {
    return <div className="bg-white cursor-pointer mb-2 py-2 pl-4 max-w-xs rounded shadow-sm">{text}</div>
}