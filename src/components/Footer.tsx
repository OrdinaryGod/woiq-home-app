export default function Footer() {
    return (
        <footer className="w-full  p-4 bg-light-2">
            <div className="flex flex-col items-center justify-center text-gray-3 text-xs tracking-wide gap-2">
                <div>Contact Us | About Us | Guidelines | Support</div>
                <div>© 2023 Woiq, Studio. All rights reserved.</div>
                <div className="hover:text-black"><a href="https://beian.miit.gov.cn/">赣ICP备2023004978号-1</a></div>
            </div>
        </footer>
    )
}