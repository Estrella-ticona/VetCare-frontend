export function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen bg-[#C3D2E7]-500 flex flex-col items-center justify-center">
            {children}
        </div>
    );
}