import Link from "next/link"
import { twMerge } from "tailwind-merge"

interface Props{
       children:React.ReactNode,
       className?:string,
       href?:any
}

const Button = ({children, className, href} : Props) => {
  return (
    <>
      {href ? (
        <Link
          href={href}
          className={twMerge(
            "bg-themeColor h-11 text-center py-2 w-28 text-white",
            className
          )}
        >
          {children}
        </Link>
      ) : (
        <button className={twMerge("bg-red-500 h-11 w-24 text-white", className)}>
          {children}
        </button>
      )}
    </>
  );
}

export default Button