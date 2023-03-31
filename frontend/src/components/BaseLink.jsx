import { Link } from "react-router-dom";

const BaseLink = ({ children, ...props }) => {
    return (
        <>
            <div className="text-sm">
                <Link
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                    {...props}
                >
                    {children}
                </Link>
            </div>
        </>
    )
}

export default BaseLink;