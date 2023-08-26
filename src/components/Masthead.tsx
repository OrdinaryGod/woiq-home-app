import Weatherbar from "./Weatherbar";

export default function Masthead({ adcode }: { adcode: string }) {
    return (
        <section className="flex-1 w-full flex max-md:justify-center bg-primary-img bg-cover bg-no-repeat max-md:bg-primaryImg">
            <div className='masthead'>
                <Weatherbar adcode={adcode}/>
            </div>
        </section>
    )
}