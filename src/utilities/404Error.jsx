import { IoSadOutline } from "react-icons/io5";

function Error404 () {
    return (
        <div className="text-red-500 flex flex-col justify-center items-center">
            <span className="text-9xl"><IoSadOutline /></span>
            <span className="text-5xl">404</span>
            <span className="text-3xl">Page not found</span>
            <span className="text-xl">Looks like we had a little trouble</span>
        </div>
    )
}

export default Error404;