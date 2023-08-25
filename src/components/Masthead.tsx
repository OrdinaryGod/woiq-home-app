import Weatherbar from "./Weatherbar";

export default function Masthead() {
    return (
        <section className="flex-1 w-full flex justify-center bg-primary-img bg-cover bg-no-repeat max-md:bg-primaryImg">
            <div className='masthead'>
                <Weatherbar />
            </div>
        </section>
    )
}