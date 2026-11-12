export function Footer() {
    return (
        <>
        <footer className="flex flex-row justify-between p-5 gap-10 bg-paper text-lg">
            <div className="">
                <p>© Terrence Wu 2026</p>
            </div>
            
            <div className="flex gap-4 mx-10">
                <a href="https://github.com/Twu1738" 
                className="text-blue-500 hover:text-blue-700">github</a>
                <a href="https://www.linkedin.com/in/terrence-wu-5657a0376/" 
                className="text-blue-500 hover:text-blue-700">linkedin</a>
            </div>
        </footer>
        </>
    )
}