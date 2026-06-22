import React from "react";

export interface CardProps {
    title:string,
    icon:React.ReactNode,
    description:string,
    link:string
}
export interface Message {
    role: "user" | "assistant",
    content:string
}

export interface ButtonProps{
    className?:string,
    onClick?:()=>void,
    children:React.ReactNode,
    disabled?:boolean
}
export interface NewsArticle{
    title:string,
    description:string,
    publishedAt:string,
    urlToImage:string,
    url:string
}
export interface NewsCardProps{
    article:NewsArticle
}