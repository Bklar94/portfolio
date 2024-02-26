"use client"

import { Card, 
        CardContent,
        CardHeader 
    } from "../ui/card";
import { Header } from "./header";

interface CardWrapperProps {
    children: React.ReactNode;
    headerLabel: string;
    h1Label: string;
};

export const CardWrapper =({
    children,
    headerLabel,
    h1Label,
}: CardWrapperProps) => {
    return (
        <Card className="w-[400px] shadow-md">
            <CardHeader>
                <Header 
                label={headerLabel}
                authLabel={h1Label}
                />
            </CardHeader>
            <CardContent>
                {children}
            </CardContent>
        </Card>
    )
}