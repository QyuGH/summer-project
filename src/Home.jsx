import fb from './assets/contact/fb.svg'
import github from './assets/tools/github.svg'
import profile from './assets/img/anton.png';

function Home(){
    return (
        <>
            <section className='flex flex-col justify-center items-center gap-4'>
                <div className="w-30 h-30">
                    <img src={profile} alt="Profile" className="w-full h-full object-cover" />
                </div>
                <div>
                    <p className="flex items-center">
                        <a href="#">
                            <img src={fb} alt="Facebook" className='w-6 h-6'/>
                        </a>
                        Mark Anton
                    </p>
                    <p className="flex">
                        <a href="#">
                            <img src={github} alt="Github" className='w-6 h-6'/>
                        </a>
                        QyuGH
                    </p>
                    <p className="flex">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                        </svg>
                        Iloilo City, Philippines
                    </p>
                </div>
            </section>
        </>
    )
}

export default Home