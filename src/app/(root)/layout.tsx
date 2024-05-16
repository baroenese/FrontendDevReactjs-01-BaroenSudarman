export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <main>
            <div className="container mx-auto">
                <div className="flex flex-col py-6">
                    <h1 className="text-3xl text-slate-800 leading-6 font-medium">Restaurants</h1>
                    <div className="w-full max-w-sm flex flex-col py-3">
                        <p className="text-sm text-slate-600 leading-5 font-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet nisl suscipit adipiscing bibendum est ultricies integer quis.</p>
                    </div>
                </div>
            </div>

            {children}
        </main>
    )
}