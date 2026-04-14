import { useState } from "react";
import type { ReactNode } from "react";

interface Column<T, K extends keyof T> {
    key: K;
    label: string;
    render?: (value: T[K]) => ReactNode;
}

interface DataTableProps<T> {
    data: T[];
    columns: Column<T, keyof T>[];
    onSave?: (index: number, updatedData: T) => void;
}

export function DataTable<T>({ data, columns, onSave }: DataTableProps<T>) {
    const [edited, setEdited] = useState<Partial<T>>({});
    const [rowBeingEdited, setRowBeingEdited] = useState<number | null>(null);

    return (
        <table>
            <thead>
                <tr>
                    {columns.map((column, i) => (
                        <th key={i}>{column.label}</th>
                    ))}
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item: T, i: number) => (
                    <tr key={i}>
                        {columns.map((column) => {
                            const value = item[column.key];
                            return (
                                <td key={String(column.key)}>
                                    {rowBeingEdited === i ? ( 
                                        <input
                                            type="text"
                                            value={String(edited[column.key] ?? value)}
                                            onChange={(e) => setEdited({
                                                ...edited,
                                                [column.key]: e.target.value as T[typeof column.key],
                                            })}
                                        />
                                    ) : (
                                        column.render ? column.render(value) : String(value)
                                    )}
                                </td>
                            );
                        })}
                        <td>
                            {rowBeingEdited === i ? (
                                <>
                                    <button onClick={() => {
                                        const updatedData = {
                                            ...item,
                                            ...edited,
                                        };
                                        onSave?.(i, updatedData);
                                        setEdited({});
                                        setRowBeingEdited(null);
                                    }}>Guardar</button>
                                    <button onClick={() => { setEdited({}); setRowBeingEdited(null)}}>Cancelar</button>
                                </>
                            ) : (
                                <button onClick={() => {
                                    setEdited(item);
                                    setRowBeingEdited(i);
                                }}>Editar</button>
                            )}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}