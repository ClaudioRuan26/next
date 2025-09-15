export function Header() {
    return (
        <header className="flex px-2 py-4 bg-zinc-900 text-white">
            <div className="flex items-center justify-between w-full mx-auto max-w-7xl">
                <div className="flex items-center gap-2">
                    NextJS
                </div>

                <nav>
                    <ul className="flex items-center justify-center gap-2">
                        <li>
                            Home
                        </li>
                        <li>
                            Contatos
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}