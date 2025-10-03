'use client';

import { Result } from "../../models/result";

interface IModalProps {
    result?: Result
}

export default function ResultPanel(props: IModalProps) {
    return (
        <div className={props.result?.isSuccess ? "bg-green-50 border-green-500 text-green-700" : "bg-red-50 border-red-500 text-red-700"}>
            <p className="font-bold text-2xl">
                {props.result?.isSuccess ? props.result.data : props.result?.error}
            </p>
        </div>
    );
}