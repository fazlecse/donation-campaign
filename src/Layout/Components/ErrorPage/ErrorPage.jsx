import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="flex justify-center items-center h-screen flex-col gap-5">
            <h2 className="text-3xl font-medium">No Data Found</h2>
            <Link to={"/"}>
                <button className="btn">Go Back</button>
            </Link>
        </div>
    );
};

export default ErrorPage;