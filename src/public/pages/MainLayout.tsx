export function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen bg-gray-500 flex flex-col items-center justify-center">
            {children}
        </div>
    );
}