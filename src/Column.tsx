interface ColumnProps {
    text?: string
}

export const Column = ({
    text,
    children
}: React.PropsWithChildren<ColumnProps>) => {
    return (
        <div className="bg-[#ebecf0] w-80 min-h-[40px] mr-5 rounded py-4 px-8 grow-0">
            <div className="pt-1.5 pl-4 pb-3 font-bold">{text}</div>
            {children}
        </div>
    )
}