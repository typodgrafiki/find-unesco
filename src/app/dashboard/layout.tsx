export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <section className="dashboardLayout">
            {children}
        </section>
    )
}