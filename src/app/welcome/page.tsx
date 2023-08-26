
import Masthead from '@/components/Masthead'
import Library from '@/components/Library'
import { redirect } from 'next/navigation';

export default function Page(
    {
        searchParams
    }: {
        searchParams: { [key: string]: string | undefined };
    }
) {
    if (!searchParams.adcode) redirect("/");
    // console.log('searchParams---', searchParams.adcode);
    
    return (
        <section className='w-full'>
            <Masthead adcode={searchParams.adcode}/>
            <Library adcode={searchParams.adcode}/>
        </section>
    )
}